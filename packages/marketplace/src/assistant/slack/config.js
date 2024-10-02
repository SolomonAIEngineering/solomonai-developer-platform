"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const image_png_1 = __importDefault(require("./assets/image.png"));
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const slackIntegration = {
    name: 'Slack',
    id: 'slack',
    category: types_1.IntegrationCategory.Assistant,
    active: true,
    logo: logo_1.Logo,
    short_description: 'Integrate Solomon AI into your workspace for intelligent financial insights, automated notifications, and seamless transaction management.',
    description: "Solomon AI integration brings advanced financial intelligence directly into your workflow. This powerful tool provides real-time financial insights, automated notifications, and streamlined transaction management.\n\nWith Solomon AI, you'll receive instant alerts about new transactions, ensuring you're always informed about your financial activities. The integration also allows for effortless attachment uploads, enabling you to link receipts, invoices, and other documents directly to transactions.\n\nBy leveraging AI-driven analysis, Solomon AI offers predictive financial modeling, spending pattern recognition, and personalized financial advice. This not only enhances your financial decision-making but also optimizes your overall financial management process, saving time and improving accuracy in your bookkeeping and financial planning.",
    images: [image_png_1.default],
    onInitialize: initialize_1.onInitialize,
    settings: [
        {
            id: 'transaction_notifications',
            label: 'Transaction Notifications',
            description: 'Receive AI-powered notifications for new transactions, including smart categorization and potential anomaly detection.',
            type: 'switch',
            required: false,
            value: true,
        },
        {
            id: 'ai_insights',
            label: 'AI Insights',
            description: 'Enable AI-driven financial insights and recommendations based on your transaction history and spending patterns.',
            type: 'switch',
            required: false,
            value: true,
        },
    ],
    config: {},
};
exports.default = slackIntegration;
