"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const settings = [
    {
        id: 'aws_access_key_id',
        label: 'AWS Access Key ID',
        description: 'Enter your AWS Access Key ID',
        type: 'text',
        required: true,
        value: '',
    },
    {
        id: 'aws_secret_access_key',
        label: 'AWS Secret Access Key',
        description: 'Enter your AWS Secret Access Key',
        type: 'text',
        required: true,
        value: '',
    },
    {
        id: 'region',
        label: 'AWS Region',
        description: 'Select your AWS region',
        type: 'select',
        options: ['us-east-1', 'us-west-2', 'eu-west-1', 'ap-southeast-1'],
        required: true,
        value: 'us-east-1',
    },
    {
        id: 'auto_sync',
        label: 'Automatic Sync',
        description: 'Enable automatic synchronization of data',
        type: 'switch',
        required: false,
        value: false,
    },
];
const amazonConfig = {
    name: 'Amazon',
    id: 'amazon',
    category: types_1.IntegrationCategory.Banking,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Streamline your Amazon business finances with seamless integration.',
    description: 'Optimize your Amazon business operations with our powerful integration. Automate financial processes, gain real-time insights into your sales and expenses, and simplify reconciliation. Reduce manual work, minimize errors, and get a clear view of your Amazon revenue streams. Ideal for businesses selling on Amazon looking to enhance financial efficiency and make data-driven decisions.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings,
    config: {
        apiVersion: '2023-06-01',
        sandboxMode: false,
        services: ['MWS', 'Selling Partner API'],
    },
};
exports.default = amazonConfig;
