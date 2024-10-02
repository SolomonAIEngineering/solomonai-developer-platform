"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const workdayConfig = {
    name: 'Workday',
    id: 'workday',
    category: types_1.IntegrationCategory.Payroll,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Streamline HR and payroll processes with Workday integration.',
    description: 'Workday integration enables efficient management of human resources, payroll, and financial operations. It provides a comprehensive suite of tools for workforce planning, talent management, and analytics.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'tenant_url',
            label: 'Tenant URL',
            description: 'Enter your Workday tenant URL',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'client_id',
            label: 'Client ID',
            description: 'Enter your Workday API Client ID',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'client_secret',
            label: 'Client Secret',
            description: 'Enter your Workday API Client Secret',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'refresh_token',
            label: 'Refresh Token',
            description: 'Enter your Workday API Refresh Token',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'data_sync_interval',
            label: 'Data Sync Interval (hours)',
            description: 'Set the interval for syncing data from Workday',
            type: 'number',
            required: false,
            value: 24,
        },
    ],
    config: {},
};
exports.default = workdayConfig;
