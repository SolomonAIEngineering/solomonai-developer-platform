"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSlackEvent = handleSlackEvent;
const functions_1 = require("@vercel/functions");
const __1 = require("../..");
const file_1 = require("./file");
const thread_1 = require("./thread");
async function handleSlackEvent(event, options) {
    const client = (0, __1.createSlackWebClient)({
        token: options.token,
    });
    if (event.type === 'assistant_thread_started') {
        (0, functions_1.waitUntil)((0, thread_1.assistantThreadStarted)(event, client));
        return;
    }
    // In Assisant Threads
    if (event.subtype === 'file_share') {
        (0, functions_1.waitUntil)((0, file_1.fileShare)(event, options));
        return;
    }
    if (event.text &&
        event.type === 'message' &&
        event.channel_type === 'im' &&
        !event.bot_id && // Ignore bot messages
        event.subtype !== 'assistant_app_thread') {
        (0, functions_1.waitUntil)((0, thread_1.assistantThreadMessage)(event, client, options));
        return;
    }
}
