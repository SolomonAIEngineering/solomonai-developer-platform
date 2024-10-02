"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = exports.getInstallUrl = exports.createSlackWebClient = exports.createSlackApp = exports.slackInstaller = void 0;
const bolt_1 = require("@slack/bolt");
const oauth_1 = require("@slack/oauth");
const web_api_1 = require("@slack/web-api");
const SLACK_CLIENT_ID = process.env.NEXT_PUBLIC_SLACK_CLIENT_ID;
const SLACK_CLIENT_SECRET = process.env.SLACK_CLIENT_SECRET;
const SLACK_OAUTH_REDIRECT_URL = process.env.NEXT_PUBLIC_SLACK_OAUTH_REDIRECT_URL;
const SLACK_STATE_SECRET = process.env.NEXT_PUBLIC_SLACK_STATE_SECRET;
const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET;
if (!SLACK_CLIENT_ID) {
    throw new Error('SLACK_CLIENT_ID is not defined');
}
if (!SLACK_CLIENT_SECRET) {
    throw new Error('SLACK_CLIENT_SECRET is not defined');
}
if (!SLACK_OAUTH_REDIRECT_URL) {
    throw new Error('SLACK_OAUTH_REDIRECT_URL is not defined');
}
if (!SLACK_STATE_SECRET) {
    throw new Error('SLACK_STATE_SECRET is not defined');
}
if (!SLACK_SIGNING_SECRET) {
    throw new Error('SLACK_SIGNING_SECRET is not defined');
}
exports.slackInstaller = new oauth_1.InstallProvider({
    clientId: SLACK_CLIENT_ID,
    clientSecret: SLACK_CLIENT_SECRET,
    stateSecret: SLACK_STATE_SECRET,
    logLevel: process.env.NODE_ENV === 'development' ? bolt_1.LogLevel.DEBUG : undefined,
});
const createSlackApp = ({ token, botId, }) => {
    return new bolt_1.App({
        signingSecret: SLACK_SIGNING_SECRET,
        token,
        botId,
    });
};
exports.createSlackApp = createSlackApp;
const createSlackWebClient = ({ token }) => {
    return new web_api_1.WebClient(token);
};
exports.createSlackWebClient = createSlackWebClient;
const getInstallUrl = ({ teamId, userId, }) => {
    return exports.slackInstaller.generateInstallUrl({
        scopes: [
            'incoming-webhook',
            'chat:write',
            'chat:write.public',
            'team:read',
            'assistant:write',
            'im:history',
            'commands',
            'files:read',
        ],
        redirectUri: SLACK_OAUTH_REDIRECT_URL,
        metadata: JSON.stringify({ teamId, userId }),
    });
};
exports.getInstallUrl = getInstallUrl;
const downloadFile = async ({ privateDownloadUrl, token, }) => {
    const response = await fetch(privateDownloadUrl, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.arrayBuffer();
};
exports.downloadFile = downloadFile;
