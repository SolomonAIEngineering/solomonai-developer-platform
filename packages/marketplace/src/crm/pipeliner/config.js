"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const pipelinerApp = {
    name: 'Pipeliner',
    id: 'pipeliner',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Visual CRM for sales teams',
    description: 'Pipeliner CRM is a visual and intuitive customer relationship management software for sales teams.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = pipelinerApp;
