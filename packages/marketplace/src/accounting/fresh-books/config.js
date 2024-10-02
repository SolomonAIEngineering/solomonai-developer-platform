"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const freshBooksConfig = {
    name: 'FreshBooks',
    id: 'fresh-books',
    category: types_1.IntegrationCategory.Accounting,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Effortless invoicing and accounting with FreshBooks integration.',
    description: "FreshBooks integration simplifies your financial management with easy-to-use invoicing, expense tracking, and time tracking features. It's designed to help small businesses and freelancers streamline their accounting processes.",
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your FreshBooks API key',
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
exports.default = freshBooksConfig;
