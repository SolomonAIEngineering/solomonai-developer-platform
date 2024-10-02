"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const queries_1 = require("@v1/supabase/queries");
const server_1 = require("next/server");
const index_1 = require("../index");
async function POST(request) {
    const user = await (0, queries_1.getUser)();
    if (!user) {
        return server_1.NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const data = await request.json();
    const { amount, currency } = data;
    if (!amount || !currency) {
        return server_1.NextResponse.json({ error: "Invalid request data" }, { status: 400 });
    }
    try {
        if (!user.id) {
            return server_1.NextResponse.json({ error: "User ID not found" }, { status: 400 });
        }
        const paymentIntent = await (0, index_1.createPaymentIntent)(user.id, amount, currency);
        return server_1.NextResponse.json(paymentIntent);
    }
    catch (error) {
        console.error("Error creating payment intent:", error);
        return server_1.NextResponse.json({ error: "Failed to create payment intent" }, { status: 500 });
    }
}
