"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoLinkedAccounts = exports.WithMultipleLinkedAccounts = exports.Default = void 0;
const financial_data_generator_1 = require("../../lib/random/financial-data-generator");
const financial_portal_view_1 = require("./financial-portal-view");
const meta = {
    component: financial_portal_view_1.FinancialPortalOverview,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        financialProfile: {
            control: {
                type: "object",
            },
            defaultValue: financial_data_generator_1.FinancialDataGenerator.generateFinancialProfile(),
        },
        financialContext: {
            control: {
                type: "object",
            },
            defaultValue: financial_data_generator_1.FinancialDataGenerator.generateFinancialContext(),
        },
    },
    decorators: [(Story) => <Story />],
};
exports.default = meta;
exports.Default = {
    args: {
        financialProfile: financial_data_generator_1.FinancialDataGenerator.generateFinancialProfile(),
        financialContext: financial_data_generator_1.FinancialDataGenerator.generateFinancialContext(),
    },
};
exports.WithMultipleLinkedAccounts = {
    args: {
        financialProfile: {
            ...financial_data_generator_1.FinancialDataGenerator.generateFinancialProfile(),
            link: Array(3)
                .fill(null)
                .map(() => financial_data_generator_1.FinancialDataGenerator.generateRandomLink()),
        },
        financialContext: financial_data_generator_1.FinancialDataGenerator.generateFinancialContext(),
    },
};
exports.NoLinkedAccounts = {
    args: {
        financialProfile: {
            ...financial_data_generator_1.FinancialDataGenerator.generateFinancialProfile(),
            link: [],
        },
        financialContext: financial_data_generator_1.FinancialDataGenerator.generateFinancialContext(),
    },
};
