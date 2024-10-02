"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const freeAgentConfig = {
    name: 'FreeAgent',
    id: 'free-agent',
    category: types_1.IntegrationCategory.Accounting,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Simplify your accounting with FreeAgent integration.',
    description: 'FreeAgent integration streamlines your financial processes, offering easy invoicing, expense tracking, and comprehensive reporting. It helps small businesses and freelancers manage their finances efficiently.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your FreeAgent API key',
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
exports.default = freeAgentConfig;
