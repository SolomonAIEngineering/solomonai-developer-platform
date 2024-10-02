"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const deelConfig = {
    name: 'Deel',
    id: 'deel',
    category: types_1.IntegrationCategory.Payroll,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Streamline global payroll and compliance with Deel integration.',
    description: 'Deel integration offers comprehensive global payroll solutions, including contractor payments, employee onboarding, and compliance management across multiple countries. It simplifies international hiring and payment processes while ensuring legal compliance.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your Deel API Key',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'client_id',
            label: 'Client ID',
            description: 'Enter your Deel Client ID',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'client_secret',
            label: 'Client Secret',
            description: 'Enter your Deel Client Secret',
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
exports.default = deelConfig;
