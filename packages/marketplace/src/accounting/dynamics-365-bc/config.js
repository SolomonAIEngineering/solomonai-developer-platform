"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const dynamics365BCConfig = {
    name: 'Dynamics 365 Business Central',
    id: 'dynamics-365-bc',
    category: types_1.IntegrationCategory.Accounting,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Comprehensive business management with Dynamics 365 Business Central.',
    description: 'Dynamics 365 Business Central integration offers a complete solution for managing finances, operations, sales, and service. It connects your business processes to streamline workflows and improve productivity.',
    images: [],
    onInitialize: () => { },
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your Dynamics 365 Business Central API key',
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
exports.default = dynamics365BCConfig;
