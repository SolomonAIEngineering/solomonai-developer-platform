"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
exports.PATCH = PATCH;
const index_1 = require("../index");
const queries_1 = require("@v1/supabase/queries");
const server_1 = require("next/server");
const types_1 = require("../types");
async function POST(request) {
    const user = await (0, queries_1.getUser)();
    if (!user) {
        return server_1.NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await request.json();
    const result = types_1.createSubscriptionSchema.safeParse(body);
    if (!result.success) {
        return server_1.NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    try {
        const subscription = await (0, index_1.createSubscription)(user.id, result.data.priceId);
        return server_1.NextResponse.json(subscription);
    }
    catch (error) {
        return server_1.NextResponse.json({ error: "Failed to create subscription" }, { status: 500 });
    }
}
async function PATCH(request) {
    const user = await (0, queries_1.getUser)();
    if (!user) {
        return server_1.NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await request.json();
    const result = types_1.manageSubscriptionSchema.safeParse(body);
    if (!result.success) {
        return server_1.NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    try {
        const updatedSubscription = await (0, index_1.manageSubscription)(result.data.subscriptionId, result.data.action);
        return server_1.NextResponse.json(updatedSubscription);
    }
    catch (error) {
        return server_1.NextResponse.json({ error: "Failed to manage subscription" }, { status: 500 });
    }
}
