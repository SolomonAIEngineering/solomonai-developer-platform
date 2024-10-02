"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const closeApp = {
    name: 'Close',
    id: 'close',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Sales engagement CRM',
    description: 'Close is a sales engagement CRM designed to help sales teams turn more leads into revenue.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = closeApp;
