"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const keapApp = {
    name: 'Keap',
    id: 'keap',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'CRM and marketing automation for small businesses',
    description: 'Keap (formerly Infusionsoft) is a CRM and marketing automation platform designed for small businesses.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = keapApp;
