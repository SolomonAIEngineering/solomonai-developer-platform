"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const capsuleApp = {
    name: 'Capsule',
    id: 'capsule',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Simple, powerful CRM',
    description: 'Capsule is a simple, powerful CRM that helps businesses stay organized and build strong customer relationships.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = capsuleApp;
