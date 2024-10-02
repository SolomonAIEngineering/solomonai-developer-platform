"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const acceloApp = {
    name: 'Accelo',
    id: 'accelo',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Professional services automation platform',
    description: 'Accelo is a cloud-based platform that helps professional service businesses manage their operations, including client work, sales, and financials.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = acceloApp;
