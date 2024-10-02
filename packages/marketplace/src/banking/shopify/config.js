"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const logo_1 = require("./assets/logo");
const initialize_1 = require("./initialize");
const settings = [
    {
        id: 'shop_name',
        label: 'Shopify Store Name',
        description: 'Enter your Shopify store name (e.g., mystore.myshopify.com)',
        type: 'text',
        required: true,
        value: '',
    },
    {
        id: 'api_key',
        label: 'API Key',
        description: 'Enter your Shopify API Key',
        type: 'text',
        required: true,
        value: '',
    },
    {
        id: 'api_secret_key',
        label: 'API Secret Key',
        description: 'Enter your Shopify API Secret Key',
        type: 'text',
        required: true,
        value: '',
    },
    {
        id: 'access_token',
        label: 'Access Token',
        description: 'Enter your Shopify Access Token',
        type: 'text',
        required: true,
        value: '',
    },
    {
        id: 'auto_sync',
        label: 'Automatic Sync',
        description: 'Enable automatic synchronization of data',
        type: 'switch',
        required: false,
        value: false,
    },
];
const shopifyConfig = {
    name: 'Shopify',
    id: 'shopify',
    category: types_1.IntegrationCategory.Banking,
    active: false,
    logo: logo_1.Logo,
    short_description: 'Integrate your Shopify store for seamless financial management.',
    description: "Enhance your e-commerce operations with our Shopify integration. Automatically sync your sales, refunds, and payout data. Get real-time insights into your store's performance, simplify accounting processes, and make informed financial decisions. Perfect for Shopify merchants looking to streamline their financial workflows and gain a comprehensive view of their online business.",
    images: [],
    onInitialize: initialize_1.initialize,
    settings,
    config: {
        apiVersion: '2023-07',
        sandboxMode: false,
        scopes: [
            'read_orders',
            'read_products',
            'read_customers',
            'read_financial',
        ],
    },
};
exports.default = shopifyConfig;
