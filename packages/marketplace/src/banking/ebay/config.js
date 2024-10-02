"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const ebayConfig = {
    name: 'eBay',
    id: 'ebay',
    category: types_1.IntegrationCategory.Banking,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Streamline your eBay sales and financial management.',
    description: 'Optimize your eBay business with seamless integration. Automate order processing, track sales, and simplify financial reporting. Reduce manual work, minimize errors, and gain real-time insights into your eBay performance. Ideal for sellers looking to scale their eBay operations and improve financial efficiency.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'client_id',
            label: 'Client ID',
            description: 'Enter your eBay API Client ID',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'client_secret',
            label: 'Client Secret',
            description: 'Enter your eBay API Client Secret',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'refresh_token',
            label: 'Refresh Token',
            description: 'Enter your eBay API Refresh Token',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'auto_sync',
            label: 'Automatic Sync',
            description: 'Enable automatic synchronization of eBay data',
            type: 'switch',
            required: false,
            value: false,
        },
    ],
    config: {},
};
exports.default = ebayConfig;
