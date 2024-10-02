"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assistantThreadMessage = assistantThreadMessage;
const openai_1 = require("@ai-sdk/openai");
const ai_1 = require("ai");
const date_fns_1 = require("date-fns");
const server_1 = require("@v1/supabase/server");
const tools_1 = require("../../tools");
const get_profit_1 = require("../../tools/get-profit");
const get_revenue_1 = require("../../tools/get-revenue");
const defaultValues = {
    from: (0, date_fns_1.subMonths)((0, date_fns_1.startOfMonth)(new Date()), 12).toISOString(),
    to: new Date().toISOString(),
};
async function assistantThreadMessage(event, client, { teamId }) {
    const supabase = (0, server_1.createClient)({ admin: true });
    // Update the status of the thread
    await client.assistant.threads.setStatus({
        channel_id: event.channel,
        thread_ts: event.thread_ts,
        status: 'Is thinking...',
    });
    const threadHistory = await client.conversations.replies({
        channel: event.channel,
        ts: event.thread_ts,
        limit: 5,
        inclusive: true,
    });
    const lastTwoMessages = threadHistory.messages
        ?.map((msg) => ({
        role: msg.bot_id ? 'assistant' : 'user',
        content: msg.text || '',
    }))
        .reverse();
    if (!lastTwoMessages || lastTwoMessages.length === 0) {
        console.warn('No messages found in the thread');
    }
    const { text } = await (0, ai_1.generateText)({
        model: (0, openai_1.openai)('gpt-4o-mini'),
        maxToolRoundtrips: 5,
        system: tools_1.systemPrompt,
        messages: [
            ...(lastTwoMessages ?? []),
            {
                role: 'user',
                content: event.text,
            },
        ],
        tools: {
            getRunway: (0, tools_1.getRunwayTool)({
                defaultValues,
                supabase,
                teamId,
            }),
            getBurnRate: (0, tools_1.getBurnRateTool)({
                defaultValues,
                supabase,
                teamId,
            }),
            getSpending: (0, tools_1.getSpendingTool)({
                defaultValues,
                supabase,
                teamId,
            }),
            getProfit: (0, get_profit_1.getProfitTool)({
                defaultValues,
                supabase,
                teamId,
            }),
            getRevenue: (0, get_revenue_1.getRevenueTool)({
                defaultValues,
                supabase,
                teamId,
            }),
        },
    });
    if (text) {
        // Send the message to the thread
        await client.chat.postMessage({
            channel: event.channel,
            thread_ts: event.thread_ts,
            blocks: [
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: text,
                    },
                },
            ],
        });
    }
    else {
        // If no previous message found, post the new message
        await client.chat.postMessage({
            channel: event.channel,
            thread_ts: event.thread_ts,
            text: "Sorry I couldn't find an answer to that question",
        });
        await client.assistant.threads.setStatus({
            channel_id: event.channel,
            thread_ts: event.thread_ts,
            status: '',
        });
    }
}
