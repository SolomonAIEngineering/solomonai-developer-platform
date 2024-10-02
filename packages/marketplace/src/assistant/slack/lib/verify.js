"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySlackWebhook = verifySlackWebhook;
const node_crypto_1 = require("node:crypto");
async function verifySlackWebhook(req) {
    const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET;
    if (!SLACK_SIGNING_SECRET) {
        throw new Error('SLACK_SIGNING_SECRET is not set');
    }
    const fiveMinutesInSeconds = 5 * 60;
    const slackSignatureVersion = 'v0';
    const body = await req.text();
    const timestamp = req.headers.get('x-slack-request-timestamp');
    const slackSignature = req.headers.get('x-slack-signature');
    if (!timestamp || !slackSignature) {
        throw new Error('Missing required Slack headers');
    }
    const currentTime = Math.floor(Date.now() / 1000);
    if (Math.abs(currentTime - Number.parseInt(timestamp)) > fiveMinutesInSeconds) {
        throw new Error('Request is too old');
    }
    const sigBasestring = `${slackSignatureVersion}:${timestamp}:${body}`;
    const mySignature = (0, node_crypto_1.createHmac)('sha256', SLACK_SIGNING_SECRET)
        .update(sigBasestring)
        .digest('hex');
    if (`${slackSignatureVersion}=${mySignature}` !== slackSignature) {
        throw new Error('Invalid Slack signature');
    }
    return JSON.parse(body);
}