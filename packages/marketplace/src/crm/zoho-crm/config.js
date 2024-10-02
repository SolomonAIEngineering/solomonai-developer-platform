"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const zohoCrmApp = {
    name: 'Zoho CRM',
    id: 'zoho-crm',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'CRM to convert more leads',
    description: 'Zoho CRM is a cloud-based customer relationship management platform that caters to businesses of all sizes.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = zohoCrmApp;
