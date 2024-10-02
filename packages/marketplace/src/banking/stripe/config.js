"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const stripeConfig = {
    name: 'Stripe',
    id: 'stripe',
    category: types_1.IntegrationCategory.Banking,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Supercharge your financial operations with seamless Stripe integration.',
    description: 'Elevate your business with Stripe integration. Automate payment processing, gain real-time financial insights, and streamline reconciliation. This powerful tool reduces manual data entry, minimizes errors, and provides a comprehensive view of your revenue streams. Perfect for businesses of all sizes looking to optimize their financial workflows and make data-driven decisions.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your Stripe API key',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'auto_sync',
            label: 'Automatic Sync',
            description: 'Enable automatic synchronization of data',
            type: 'switch',
            required: false,
            value: false,
        },
    ],
    config: {},
};
exports.default = stripeConfig;
