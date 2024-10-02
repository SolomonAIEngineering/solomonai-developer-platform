"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const headers_1 = require("next/headers");
const ssr_1 = require("@supabase/ssr");
const conWarn = console.warn;
const conLog = console.log;
const IGNORE_WARNINGS = [
    'Using the user object as returned from supabase.auth.getSession()',
];
console.warn = (...args) => {
    const match = args.find((arg) => typeof arg === 'string'
        ? IGNORE_WARNINGS.find((warning) => arg.includes(warning))
        : false);
    if (!match) {
        conWarn(...args);
    }
};
console.log = (...args) => {
    const match = args.find((arg) => typeof arg === 'string'
        ? IGNORE_WARNINGS.find((warning) => arg.includes(warning))
        : false);
    if (!match) {
        conLog(...args);
    }
};
const createClient = (options) => {
    const { admin = false, ...rest } = options ?? {};
    const cookieStore = (0, headers_1.cookies)();
    const key = admin
        ? process.env['SUPABASE_SERVICE_KEY']
        : process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'];
    const auth = admin
        ? {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false,
        }
        : {};
    return (0, ssr_1.createServerClient)(process.env['EXT_PUBLIC_SUPABASE_URL'], key, {
        ...rest,
        cookies: {
            get(name) {
                return cookieStore.get(name)?.value;
            },
            set(name, value, options) {
                try {
                    cookieStore.set({ name, value, ...options });
                }
                catch (error) { }
            },
            remove(name, options) {
                try {
                    cookieStore.set({ name, value: '', ...options });
                }
                catch (error) { }
            },
        },
        auth,
        global: {
            headers: {
                // Pass user agent from browser
                'user-agent': (0, headers_1.headers)().get('user-agent'),
            },
        },
    });
};
exports.createClient = createClient;
