"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const copperApp = {
    name: 'Copper',
    id: 'copper',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'CRM for G Suite',
    description: 'Copper is a CRM that integrates seamlessly with G Suite, designed for businesses that use Google for work.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = copperApp;
