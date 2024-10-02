"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const activeCampaignApp = {
    name: 'ActiveCampaign',
    id: 'active-campaign',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Customer experience automation platform',
    description: 'ActiveCampaign is a cloud-based platform that combines email marketing, marketing automation, sales automation, and CRM features.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = activeCampaignApp;
