"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const clearBooksConfig = {
    name: 'ClearBooks',
    id: 'clear-books',
    category: types_1.IntegrationCategory.Accounting,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Streamline your accounting processes with ClearBooks integration.',
    description: 'ClearBooks integration automates your financial data synchronization, reducing manual entry and improving accuracy. It helps in efficient account reconciliation and provides a clear overview of your financial status.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your ClearBooks API key',
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
exports.default = clearBooksConfig;
