"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const pipedriveApp = {
    name: 'Pipedrive',
    id: 'pipedrive',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Sales CRM for small teams',
    description: 'Pipedrive is a sales management tool designed to help small teams manage intricate or lengthy sales processes.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = pipedriveApp;
