"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const insightlyApp = {
    name: 'Insightly',
    id: 'insightly',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'CRM for project and business management',
    description: 'Insightly is a CRM that combines project management and business management features to help organizations grow.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = insightlyApp;
