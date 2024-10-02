"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const etsyConfig = {
    name: 'Etsy',
    id: 'etsy',
    category: types_1.IntegrationCategory.Banking,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Integrate your Etsy shop for seamless financial management.',
    description: "Enhance your Etsy business with our integration. Automatically sync orders, track revenue, and simplify accounting. Get real-time insights into your shop's performance, manage inventory efficiently, and streamline your financial processes. Perfect for Etsy sellers looking to scale their business and improve financial accuracy.",
    images: [],
    onInitialize: initialize_1.initialize,
    settings: [
        {
            id: 'api_key',
            label: 'API Key',
            description: 'Enter your Etsy API key',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'shop_id',
            label: 'Shop ID',
            description: 'Enter your Etsy Shop ID',
            type: 'text',
            required: true,
            value: '',
        },
        {
            id: 'auto_sync',
            label: 'Automatic Sync',
            description: 'Enable automatic synchronization of shop data',
            type: 'switch',
            required: false,
            value: false,
        },
    ],
    config: {},
};
exports.default = etsyConfig;
