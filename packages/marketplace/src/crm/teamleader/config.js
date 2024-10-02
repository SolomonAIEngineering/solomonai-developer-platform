"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const teamleaderApp = {
    name: 'Teamleader',
    id: 'teamleader',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'All-in-one work management software',
    description: 'Teamleader is an all-in-one work management software that combines CRM, project management, and invoicing.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = teamleaderApp;
