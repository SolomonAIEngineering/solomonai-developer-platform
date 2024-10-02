"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const hubspotApp = {
    name: 'HubSpot',
    id: 'hubspot',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Inbound marketing and sales platform',
    description: 'HubSpot is a comprehensive inbound marketing, sales, and customer service platform that helps businesses grow.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = hubspotApp;
