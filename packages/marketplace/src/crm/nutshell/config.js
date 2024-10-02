"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const nutshellApp = {
    name: 'Nutshell',
    id: 'nutshell',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Simple, smart CRM for small businesses',
    description: 'Nutshell is a user-friendly CRM and sales automation tool designed to help small businesses close more deals.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = nutshellApp;
