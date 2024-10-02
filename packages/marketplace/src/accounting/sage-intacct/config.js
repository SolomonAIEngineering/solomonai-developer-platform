"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const sageIntacctConfig = {
    name: 'Sage Intacct',
    id: 'sage-intacct',
    category: types_1.IntegrationCategory.Accounting,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Advanced cloud financial management with Sage Intacct.',
    description: 'Sage Intacct integration provides sophisticated cloud-based financial management solutions. It offers advanced functionality for accounting, reporting, and analytics, helping businesses streamline operations and gain real-time insights into their financial performance.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your Sage Intacct API key',
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
exports.default = sageIntacctConfig;
