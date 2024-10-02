"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const squareConfig = {
    name: 'Square',
    id: 'square',
    category: types_1.IntegrationCategory.Banking,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Streamline payments and gain financial insights with Square integration.',
    description: 'Optimize your business finances with Square integration. Automate payments, access real-time insights, and simplify reconciliation. Reduce manual work, minimize errors, and get a clear view of your revenue. Ideal for businesses seeking to enhance financial efficiency and make informed decisions.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your Square API key',
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
exports.default = squareConfig;
