"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const quickBooksConfig = {
    name: 'QuickBooks',
    id: 'quick-books',
    category: types_1.IntegrationCategory.Accounting,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Powerful accounting software for small and medium-sized businesses.',
    description: 'QuickBooks integration provides comprehensive accounting tools, including invoicing, expense tracking, financial reporting, and tax preparation. It helps businesses manage their finances efficiently and make informed decisions.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your QuickBooks API key',
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
exports.default = quickBooksConfig;
