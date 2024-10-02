"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegularBankAccountCardWithClassName = exports.RegularBankAccountCardWithDemoModeEnabled = exports.RegularBankAccountCardWithHistoricalBankAccountBalance = exports.RegularBankAccountCardWithDemoModeDisabled = void 0;
const financial_data_generator_1 = require("../../../lib/random/financial-data-generator");
const BankAccountCard_1 = require("./BankAccountCard");
const meta = {
    component: BankAccountCard_1.BankAccountCard,
    tags: ["autodocs"],
    argTypes: {
        bankAccount: {
            control: {
                type: "object",
            },
            defaultValue: financial_data_generator_1.FinancialDataGenerator.generateRandomBankAccount(),
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
exports.RegularBankAccountCardWithDemoModeDisabled = {
    args: {
        bankAccount: financial_data_generator_1.FinancialDataGenerator.generateRandomBankAccount(),
        enableDemoMode: false,
        // historicalAccountBalance: Array.from({ length: 20 }, () =>
        //   AccountBalanceHistory.randomInstance(),
        // ).sort((a, b) => a.time!.getTime() - b.time!.getTime()),
    },
};
exports.RegularBankAccountCardWithHistoricalBankAccountBalance = {
    args: {
        bankAccount: financial_data_generator_1.FinancialDataGenerator.generateRandomBankAccount(),
        historicalAccountBalance: financial_data_generator_1.FinancialDataGenerator.generateRandomAccountBalanceHistories(150).sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()),
    },
};
exports.RegularBankAccountCardWithDemoModeEnabled = {
    args: {
        bankAccount: financial_data_generator_1.FinancialDataGenerator.generateRandomBankAccount(),
        enableDemoMode: true,
    },
};
exports.RegularBankAccountCardWithClassName = {
    args: {
        bankAccount: financial_data_generator_1.FinancialDataGenerator.generateRandomBankAccount(),
        className: "border rounded-md",
    },
};
