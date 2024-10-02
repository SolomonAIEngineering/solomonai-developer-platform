"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const settings = [
    {
        id: 'api_key',
        label: 'API Key',
        description: 'Enter your Venmo API key',
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
];
const venmoConfig = {
    name: 'Venmo',
    id: 'venmo',
    category: types_1.IntegrationCategory.Banking,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Supercharge your financial operations with seamless Venmo integration.',
    description: 'Elevate your business with Venmo integration. Automate payment processing, gain real-time financial insights, and streamline reconciliation. This powerful tool reduces manual data entry, minimizes errors, and provides a comprehensive view of your revenue streams. Perfect for businesses of all sizes looking to optimize their financial workflows and make data-driven decisions.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings,
    config: {},
};
exports.default = venmoConfig;
