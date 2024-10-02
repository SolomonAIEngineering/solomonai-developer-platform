"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoLinkedAccounts = exports.WithMultipleLinkedAccounts = exports.Default = void 0;
const financial_data_generator_1 = require("../../lib/random/financial-data-generator");
const connected_account_view_1 = require("./connected-account-view");
const meta = {
    component: connected_account_view_1.ConnectedAccountSummary,
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
