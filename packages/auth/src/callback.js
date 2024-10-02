"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAuthCallback = handleAuthCallback;
const server_1 = require("@v1/supabase/server");
const server_2 = require("next/server");
async function handleAuthCallback(request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");
    const next = searchParams.get("next") ?? "/";
    if (code) {
        const supabase = (0, server_1.createClient)();
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (!error) {
            const forwardedHost = request.headers.get("x-forwarded-host");
            const isLocalEnv = process.env.NODE_ENV === "development";
            if (isLocalEnv) {
                return server_2.NextResponse.redirect(`${origin}${next}`);
            }
            if (forwardedHost) {
                return server_2.NextResponse.redirect(`https://${forwardedHost}${next}`);
            }
            return server_2.NextResponse.redirect(`${origin}${next}`);
        }
    }
    return server_2.NextResponse.redirect(`${origin}?error=auth-code-error`);
}
