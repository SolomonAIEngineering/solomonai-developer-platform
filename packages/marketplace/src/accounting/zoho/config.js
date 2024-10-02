"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const zohoConfig = {
    name: 'Zoho',
    id: 'zoho',
    category: types_1.IntegrationCategory.Accounting,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Comprehensive suite of business software including accounting.',
    description: 'Zoho integration offers a wide range of business applications, including accounting software. It provides features for invoicing, expense tracking, inventory management, and financial reporting, helping businesses streamline their financial processes and gain insights into their performance.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your Zoho API key',
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
exports.default = zohoConfig;
