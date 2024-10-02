"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const paychexConfig = {
    name: 'Paychex',
    id: 'paychex',
    category: types_1.IntegrationCategory.Payroll,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Streamline payroll processing with Paychex integration.',
    description: 'Paychex integration allows seamless payroll management, tax filing, and HR services. It enables automated payroll processing, time tracking, and compliance with labor laws for improved efficiency.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your Paychex API Key',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'company_id',
            label: 'Company ID',
            description: 'Enter your Paychex Company ID',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'environment',
            label: 'Environment',
            description: 'Select the Paychex environment (Production or Sandbox)',
            type: 'select',
            options: ['Production', 'Sandbox'],
            required: true,
            value: 'sandbox',
        },
        {
            id: 'auto_sync',
            label: 'Automatic Sync',
            description: 'Enable automatic synchronization of payroll data',
            type: 'switch',
            required: false,
            value: false,
        },
    ],
    config: {},
};
exports.default = paychexConfig;
