"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const zohoPeopleConfig = {
    name: 'Zoho People',
    id: 'zoho-people',
    category: types_1.IntegrationCategory.Payroll,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Streamline HR processes with Zoho People integration.',
    description: 'Zoho People integration enables efficient management of employee data, time tracking, leave management, and performance evaluations. It helps streamline HR processes and improve overall workforce management.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'client_id',
            label: 'Client ID',
            description: 'Enter your Zoho People Client ID',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'client_secret',
            label: 'Client Secret',
            description: 'Enter your Zoho People Client Secret',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'organization_id',
            label: 'Organization ID',
            description: 'Enter your Zoho People Organization ID',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'data_center',
            label: 'Data Center',
            description: 'Select your Zoho People Data Center',
            type: 'select',
            options: ['United States', 'Europe', 'India', 'Australia'],
            required: true,
            value: 'com',
        },
    ],
    config: {},
};
exports.default = zohoPeopleConfig;
