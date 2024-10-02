"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const moneyBirdConfig = {
    name: 'MoneyBird',
    id: 'money-bird',
    category: types_1.IntegrationCategory.Accounting,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Simplified bookkeeping with MoneyBird integration.',
    description: 'MoneyBird integration offers easy-to-use online bookkeeping software for freelancers and small businesses. It simplifies invoicing, expense tracking, and financial reporting to help you stay on top of your finances.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your MoneyBird API key',
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
exports.default = moneyBirdConfig;
