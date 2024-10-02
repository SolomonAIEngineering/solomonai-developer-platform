"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const ssr_1 = require("@supabase/ssr");
const headers_1 = require("next/headers");
const createClient = (cookieStoreParam) => {
    let cookieStore;
    try {
        cookieStore = cookieStoreParam ?? (0, headers_1.cookies)();
    }
    catch (error) {
        console.warn("Unable to access cookies, falling back to empty cookie store");
    }
    return (0, ssr_1.createServerClient)(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
        cookies: {
            getAll() {
                return cookieStore?.getAll() ?? [];
            },
            setAll(cookiesToSet) {
                for (const { name, value, options } of cookiesToSet) {
                    cookieStore?.set(name, value, options);
                }
            },
        },
    });
};
exports.createClient = createClient;
