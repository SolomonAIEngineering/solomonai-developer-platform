"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const microsoftTeamsConfig = {
    name: 'Microsoft Teams',
    id: 'microsoft-teams',
    category: types_1.IntegrationCategory.Assistant,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Enhance collaboration with Microsoft Teams integration.',
    description: 'Microsoft Teams integration allows seamless communication and file sharing within your organization. It enables real-time chat, video meetings, and integration with other Microsoft 365 tools for improved productivity.',
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'tenant_id',
            label: 'Tenant ID',
            description: 'Enter your Microsoft Teams Tenant ID',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'client_id',
            label: 'Client ID',
            description: 'Enter your Microsoft Teams Client ID',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'client_secret',
            label: 'Client Secret',
            description: 'Enter your Microsoft Teams Client Secret',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'notification_sync',
            label: 'Sync Notifications',
            description: 'Enable synchronization of notifications with other platforms',
            type: 'switch',
            required: false,
            value: false,
        },
    ],
    config: {},
};
exports.default = microsoftTeamsConfig;
