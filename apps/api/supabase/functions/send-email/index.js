"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const welcome_1 = require("@v1/emails/welcome");
const react_1 = __importDefault(require("react"));
const components_1 = require("react-email/components");
const resend_1 = require("resend");
const standardwebhooks_1 = require("standardwebhooks");
const resend = new resend_1.Resend(Deno.env.get("RESEND_API_KEY"));
const hookSecret = Deno.env.get("SEND_EMAIL_HOOK_SECRET");
Deno.serve(async (req) => {
    if (req.method !== "POST") {
        return new Response("not allowed", { status: 400 });
    }
    const payload = await req.text();
    const headers = Object.fromEntries(req.headers);
    const wh = new standardwebhooks_1.Webhook(hookSecret);
    const { user, email_data: { token, token_hash, redirect_to, email_action_type }, } = wh.verify(payload, headers);
    switch (email_action_type) {
        case "signup": {
            const html = await (0, components_1.render)(react_1.default.createElement(welcome_1.WelcomeEmail));
            await resend.emails.send({
                from: "Create v1 <onboarding@resend.dev>",
                to: [user.email],
                subject: "Welcome to v1",
                html,
            });
            break;
        }
        // Add other email actions here
        // case 'reset_password':
        // case 'magic_link':
        default:
            throw new Error("Invalid email action type");
    }
    const responseHeaders = new Headers();
    responseHeaders.set("Content-Type", "application/json");
    return new Response(JSON.stringify({}), {
        status: 200,
        headers: responseHeaders,
    });
});
