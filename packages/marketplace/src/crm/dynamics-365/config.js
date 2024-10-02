"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const dynamics365App = {
    name: 'Dynamics 365 Sales',
    id: 'dynamics-365-sales',
    category: types_1.IntegrationCategory.CRM,
    active: false,
    logo: logo_1.Logo,
    short_description: "Microsoft's enterprise CRM solution",
    description: "Dynamics 365 Sales is Microsoft's enterprise CRM solution that helps organizations build strong customer relationships.",
    images: [],
    onInitialize: () => {
        // Initialization logic
    },
    settings: [],
    config: {},
};
exports.default = dynamics365App;
