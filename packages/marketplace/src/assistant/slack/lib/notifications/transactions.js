"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSlackTransactionsNotification = sendSlackTransactionsNotification;
const zod_1 = require("zod");
const server_1 = require("@v1/db/server");
const config_1 = __importDefault(require("../../config"));
const client_1 = require("../client");
const transactionSchema = zod_1.z.object({
    date: zod_1.z.coerce.date(),
    amount: zod_1.z.string(),
    name: zod_1.z.string(),
});
async function sendSlackTransactionsNotification({ teamId, transactions, }) {
    const supabase = (0, server_1.createClient)({ admin: true });
    const { data } = await supabase
        .from('apps')
        .select('settings, config')
        .eq('team_id', teamId)
        .eq('app_id', config_1.default.id)
        .single();
    const enabled = data?.settings?.find((setting) => setting.id === 'transactions')?.value;
    if (!enabled || !data?.config?.access_token) {
        return;
    }
    const client = (0, client_1.createSlackWebClient)({
        token: data.config.access_token,
    });
    try {
        await client.chat.postMessage({
            channel: data.config.channel_id,
            blocks: [
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: "You got some new transactions! We'll do our best to match these with receipts in your Inbox or you can simply upload them in your <slack://app?id=A07PN48FW3A|Midday Assistant>.",
                    },
                },
                {
                    type: 'divider',
                },
                ...transactions.map((transaction) => ({
                    type: 'section',
                    fields: [
                        {
                            type: 'mrkdwn',
                            text: transaction.name,
                        },
                        {
                            type: 'mrkdwn',
                            text: transaction.amount,
                        },
                    ],
                })),
                {
                    type: 'divider',
                },
                {
                    type: 'actions',
                    elements: [
                        {
                            type: 'button',
                            text: {
                                type: 'plain_text',
                                text: 'View transactions',
                            },
                            url: 'https://app-business.solomon-ai.app/transactions',
                            action_id: 'button_click',
                        },
                    ],
                },
            ],
        });
    }
    catch (error) {
        console.error(error);
    }
}
