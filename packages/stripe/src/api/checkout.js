"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
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
    const result = types_1.createCheckoutSessionSchema.safeParse(body);
    if (!result.success) {
        return server_1.NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    try {
        const session = await (0, index_1.createCheckoutSession)(user.id, result.data.price, result.data.quantity, result.data.metadata);
        return server_1.NextResponse.json(session);
    }
    catch (error) {
        return server_1.NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
    }
}
