"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const zendeskApp = {
    name: 'Zendesk Sell',
    id: 'zendesk-sell',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Sales CRM for customer-centric teams',
    description: 'Zendesk Sell (formerly Base CRM) is a sales CRM that helps you close more deals with less effort.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = zendeskApp;
