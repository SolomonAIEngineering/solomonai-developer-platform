"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = __importDefault(require("./assets/logo"));
const copperApp = {
    name: 'Copper',
    id: 'copper',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.default,
    short_description: 'CRM for G Suite',
    description: 'Copper is a CRM that integrates seamlessly with G Suite, designed for businesses that use Google for work.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
    auth: {
    // Add authentication details specific to Copper
    },
    endpoints: {
        baseUrl: 'https://api.copper.com/developer_api/v1',
        // Add Copper API endpoints
    },
};
exports.default = copperApp;
