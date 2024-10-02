"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const teamworkCrmApp = {
    name: 'Teamwork CRM',
    id: 'teamwork-crm',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'CRM for client-focused businesses',
    description: 'Teamwork CRM is a full-featured CRM system designed for client-focused businesses to manage leads, deals, and customers.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = teamworkCrmApp;
