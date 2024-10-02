"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditAccountCardAccountBalanceHistory = exports.CreditAccountCardDefault = void 0;
const react_1 = __importDefault(require("react"));
const financial_data_generator_1 = require("../../../lib/random/financial-data-generator");
const linked_account_card_1 = require("./linked-account-card");
const meta = {
    component: linked_account_card_1.LinkedAccountCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        link: {
            control: {
                type: "object",
            },
            defaultValue: financial_data_generator_1.FinancialDataGenerator.generateRandomLink(),
        },
    },
    decorators: [(Story) => <Story />],
};
exports.default = meta;
exports.CreditAccountCardDefault = {
    args: {
        link: financial_data_generator_1.FinancialDataGenerator.generateRandomLink(),
    },
};
exports.CreditAccountCardAccountBalanceHistory = {
    args: {
        link: financial_data_generator_1.FinancialDataGenerator.generateRandomLink(),
    },
};
