"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const affinityApp = {
    name: 'Affinity',
    id: 'affinity',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Relationship intelligence platform',
    description: 'Affinity is a relationship intelligence platform that helps teams manage and leverage their network to close deals faster.',
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = affinityApp;
