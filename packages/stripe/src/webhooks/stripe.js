"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const logger_1 = require("@v1/logger");
const server_1 = require("@v1/supabase/server");
const server_2 = require("next/server");
const stripe_1 = __importDefault(require("stripe"));
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
});
async function POST(request) {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");
    let event;
    try {
        event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
    }
    catch (err) {
        logger_1.logger.error("Error verifying webhook signature", err);
        return server_2.NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }
    const supabase = (0, server_1.createClient)();
    switch (event.type) {
        case "customer.subscription.updated":
        case "customer.subscription.deleted":
            const subscription = event.data.object;
            await supabase
                .from("subscriptions")
                .update({
                status: subscription.status,
                current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
                current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            })
                .eq("stripe_subscription_id", subscription.id);
            break;
        case "payment_intent.succeeded":
        case "payment_intent.payment_failed":
            const paymentIntent = event.data.object;
            await supabase
                .from("payments")
                .update({ status: paymentIntent.status })
                .eq("stripe_payment_intent_id", paymentIntent.id);
            break;
        default:
            logger_1.logger.info(`Unhandled event type ${event.type}`);
    }
    return server_2.NextResponse.json({ received: true });
}
