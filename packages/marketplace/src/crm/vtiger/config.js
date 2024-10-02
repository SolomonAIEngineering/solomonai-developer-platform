"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const vtigerApp = {
    name: 'Vtiger',
    id: 'vtiger',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'All-in-one CRM',
    description: 'Vtiger is an all-in-one CRM that helps businesses automate sales, marketing, and customer support processes.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = vtigerApp;
