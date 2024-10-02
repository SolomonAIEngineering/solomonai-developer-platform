"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
exports.default = async (c, next) => {
    const ANON_CLIENT = (0, supabase_js_1.createClient)(c.env.SUPABASE_URL, c.env.SUPABASE_ANON, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    });
    const SERVICE_CLIENT = (0, supabase_js_1.createClient)(c.env.SUPABASE_URL, c.env.SUPABASE_SERVICE, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    });
    c.set("ANON_CLIENT", ANON_CLIENT);
    c.set("SERVICE_CLIENT", SERVICE_CLIENT);
    return next();
};
