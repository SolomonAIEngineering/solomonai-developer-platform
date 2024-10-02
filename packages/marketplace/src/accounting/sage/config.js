"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const sageConfig = {
    name: 'Sage',
    id: 'sage',
    category: types_1.IntegrationCategory.Accounting,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Comprehensive accounting solutions with Sage integration.',
    description: 'Sage integration offers a range of accounting and business management solutions for businesses of all sizes. From basic bookkeeping to advanced financial management, Sage helps you stay in control of your finances and make informed decisions.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your Sage API key',
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
exports.default = sageConfig;
