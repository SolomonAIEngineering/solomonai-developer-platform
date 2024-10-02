"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const sugarCrmApp = {
    name: 'Sugar CRM',
    id: 'sugar-crm',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'CRM for customer experience management',
    description: 'Sugar CRM is a comprehensive customer experience management platform that helps organizations create customers for life.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = sugarCrmApp;
