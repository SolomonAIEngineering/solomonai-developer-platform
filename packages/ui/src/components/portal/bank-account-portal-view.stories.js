"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoLinkedAccounts = exports.WithMultipleLinkedAccounts = exports.Default = void 0;
const financial_data_generator_1 = require("../../lib/random/financial-data-generator");
const bank_account_portal_view_1 = require("./bank-account-portal-view");
const meta = {
    component: bank_account_portal_view_1.BankAccountsOverviewSummary,
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
        transactions: {
            control: {
                type: "object",
            },
            defaultValue: financial_data_generator_1.FinancialDataGenerator.generateRandomTransactions(20),
        },
    },
    decorators: [(Story) => <Story />],
};
exports.default = meta;
exports.Default = {
    args: {
        financialProfile: financial_data_generator_1.FinancialDataGenerator.generateFinancialProfile(),
        financialContext: financial_data_generator_1.FinancialDataGenerator.generateFinancialContext(),
        transactions: financial_data_generator_1.FinancialDataGenerator.generateRandomTransactions(20),
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
        transactions: financial_data_generator_1.FinancialDataGenerator.generateRandomTransactions(20),
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
