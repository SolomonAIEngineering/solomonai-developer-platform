"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const waveConfig = {
    name: 'Wave',
    id: 'wave',
    category: types_1.IntegrationCategory.Accounting,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Free and user-friendly accounting software for small businesses.',
    description: 'Wave integration offers free, easy-to-use accounting software designed for entrepreneurs, freelancers, and small businesses. It provides essential features like invoicing, accounting, and receipt scanning to help you manage your finances effortlessly.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your Wave API key',
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
exports.default = waveConfig;
