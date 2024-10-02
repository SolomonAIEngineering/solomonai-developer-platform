"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const salesforceApp = {
    name: 'Salesforce',
    id: 'salesforce',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: "World's #1 CRM platform",
    description: 'Salesforce is a cloud-based CRM designed to help businesses find more prospects, close more deals, and provide better customer service.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = salesforceApp;
