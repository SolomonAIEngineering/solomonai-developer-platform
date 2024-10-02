"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const oracleNetSuiteConfig = {
    name: 'Oracle NetSuite',
    id: 'oracle-netsuite',
    category: types_1.IntegrationCategory.Accounting,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Comprehensive cloud-based business management with NetSuite.',
    description: 'Oracle NetSuite integration provides a unified cloud-based solution for ERP, financials, CRM, and e-commerce. It offers real-time visibility and control over your business operations, helping you make informed decisions and drive growth.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your Oracle NetSuite API key',
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
exports.default = oracleNetSuiteConfig;
