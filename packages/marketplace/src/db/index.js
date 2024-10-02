"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const server_1 = require("@v1/supabase/server");
async function createApp(params) {
    const client = (0, server_1.createClient)({ admin: true });
    const { data, error } = await client
        .from('apps')
        .upsert(params)
        .select()
        .single();
    if (error) {
        throw new Error(error.message);
    }
    return data;
}
