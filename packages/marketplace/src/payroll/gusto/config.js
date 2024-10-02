"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const gustoConfig = {
    name: 'Gusto',
    id: 'gusto',
    category: types_1.IntegrationCategory.Payroll,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Simplify payroll and HR management with Gusto integration.',
    description: 'Gusto integration offers comprehensive payroll, benefits, and HR management solutions for small to medium-sized businesses. It streamlines payroll processing, tax filings, employee onboarding, and benefits administration, ensuring compliance and efficiency.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_token',
            label: 'API Token',
            description: 'Enter your Gusto API Token',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'company_id',
            label: 'Company ID',
            description: 'Enter your Gusto Company ID',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'sync_interval',
            label: 'Sync Interval (hours)',
            description: 'Set the interval for automatic data synchronization (in hours)',
            type: 'number',
            required: false,
            value: 24,
        },
    ],
    config: {},
};
exports.default = gustoConfig;
