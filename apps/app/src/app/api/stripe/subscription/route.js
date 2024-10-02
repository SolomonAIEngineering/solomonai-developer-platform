"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PATCH = exports.POST = void 0;
const server_1 = require("next/server");
const stripe_1 = require("@v1/stripe");
exports.POST = stripe_1.routes.withCookies(async (request, response, cookieStore) => {
    try {
        // Call the checkout function with the request object
        const result = await stripe_1.routes.subscription(request, response);
        // The result should already be a NextResponse object
        return result;
    }
    catch (error) {
        console.error("Error in checkout route:", error);
        return server_1.NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
});
exports.PATCH = stripe_1.routes.withCookies(async (request, response, cookieStore) => {
    try {
        // Call the checkout function with the request object
        const result = await stripe_1.routes.manageSubscription(request, response);
        // The result should already be a NextResponse object
        return result;
    }
    catch (error) {
        console.error("Error in checkout route:", error);
        return server_1.NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
});
