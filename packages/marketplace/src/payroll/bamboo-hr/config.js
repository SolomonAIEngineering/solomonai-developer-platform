"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const bambooHRConfig = {
    name: 'BambooHR',
    id: 'bamboohr',
    category: types_1.IntegrationCategory.Payroll,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Simplify HR management with BambooHR integration.',
    description: 'BambooHR integration offers comprehensive HR management solutions, including payroll processing, employee data management, time tracking, and performance management. It streamlines HR workflows and provides valuable insights for better decision-making.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your BambooHR API Key',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'subdomain',
            label: 'Subdomain',
            description: "Enter your BambooHR subdomain (e.g., 'companyname' if your URL is 'companyname.bamboohr.com')",
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
exports.default = bambooHRConfig;
