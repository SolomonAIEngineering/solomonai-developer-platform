"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSession = updateSession;
const ssr_1 = require("@supabase/ssr");
async function updateSession(request, response) {
    const supabase = (0, ssr_1.createServerClient)(process.env['NEXT_PUBLIC_SUPABASE_URL'], process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'], {
        cookies: {
            get(name) {
                return request.cookies.get(name)?.value;
            },
            set(name, value, options) {
                request.cookies.set({ name, value, ...options });
                response.cookies.set({ name, value, ...options });
            },
            remove(name, options) {
                request.cookies.set({ name, value: '', ...options });
                response.cookies.set({ name, value: '', ...options });
            },
        },
    });
    await supabase.auth.getUser();
    return response;
}
