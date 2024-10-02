"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSession = void 0;
const ssr_1 = require("@supabase/ssr");
const updateSession = async (request, response) => {
    const supabase = (0, ssr_1.createServerClient)(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
        cookies: {
            getAll() {
                return request.cookies.getAll();
            },
            setAll(cookiesToSet) {
                for (const { name, value } of cookiesToSet) {
                    request.cookies.set(name, value);
                }
                for (const { name, value, options } of cookiesToSet) {
                    response.cookies.set(name, value, options);
                }
            },
        },
    });
    // This is to ensure the session is updated
    const { data: { user }, } = await supabase.auth.getUser();
    return { response, user };
};
exports.updateSession = updateSession;
