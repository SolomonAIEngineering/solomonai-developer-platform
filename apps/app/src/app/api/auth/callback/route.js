"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const auth_1 = require("@v1/auth");
const stripe_1 = require("@v1/stripe");
const server_1 = require("next/server");
exports.GET = stripe_1.routes.withCookies(async (request, response, cookieStore) => {
    try {
        // Call the handleAuthCallback function with the request object
        const result = await (0, auth_1.handleAuthCallback)(request);
        // The result should already be a NextResponse object
        return result;
    }
    catch (error) {
        console.error("Error in auth callback route:", error);
        return server_1.NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
});
