"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditAccountCardAccountBalanceHistory = exports.CreditAccountCardDefault = void 0;
const react_1 = __importDefault(require("react"));
const financial_data_generator_1 = require("../../../lib/random/financial-data-generator");
const CreditAccountCard_1 = require("./CreditAccountCard");
const meta = {
    component: CreditAccountCard_1.CreditAccountCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        creditAccount: {
            control: {
                type: "object",
            },
            defaultValue: financial_data_generator_1.FinancialDataGenerator.generateRandomCreditAccount(),
        },
        financialProfile: {
            control: {
                type: "object",
            },
            defaultValue: {},
        },
        className: {
            control: {
                type: "text",
            },
            defaultValue: "",
        },
        contextQuestions: {
            control: {
                type: "object",
            },
            defaultValue: [
                "How much money do I have in my account?",
                "Am l spending too much in my account?",
                "What fees are associated with my account?",
                "How can l optimize my spending on this account?",
            ],
        },
        enableDemoMode: {
            control: {
                type: "boolean",
            },
            defaultValue: false,
        },
        historicalAccountBalance: {
            control: {
                type: "object",
            },
            defaultValue: financial_data_generator_1.FinancialDataGenerator.generateRandomAccountBalanceHistories(50),
        },
    },
    decorators: [(Story) => <Story />],
};
exports.default = meta;
exports.CreditAccountCardDefault = {
    args: {
        // Adjust the default properties for each variant of your component
        // primary: true,
        // label: 'CreditAccountCard',
        creditAccount: financial_data_generator_1.FinancialDataGenerator.generateRandomCreditAccount(),
        enableDemoMode: false,
        institutionName: "Chase",
    },
};
exports.CreditAccountCardAccountBalanceHistory = {
    args: {
        // Adjust the default properties for each variant of your component
        // primary: true,
        // label: 'CreditAccountCard',
        creditAccount: financial_data_generator_1.FinancialDataGenerator.generateRandomCreditAccount(),
        enableDemoMode: false,
        institutionName: "Chase",
        historicalAccountBalance: financial_data_generator_1.FinancialDataGenerator.generateRandomAccountBalanceHistories(100).sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()),
    },
};
