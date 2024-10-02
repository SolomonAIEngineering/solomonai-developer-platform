"use strict";
// BankAccountCardHeader.stories.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const financial_data_generator_1 = require("../../../lib/random/financial-data-generator");
const BankAccountCard_1 = require("./BankAccountCard");
const BankAccountCardHeader_1 = require("./BankAccountCardHeader");
// Mock data for the bank account
const mockBankAccount = financial_data_generator_1.FinancialDataGenerator.generateRandomBankAccount();
const meta = {
    component: BankAccountCardHeader_1.BankAccountCardHeader,
    argTypes: {
        serverUrl: { control: "text" },
    },
    decorators: [
        (Story) => (<BankAccountCard_1.BankAccountContext.Provider value={mockBankAccount}>
        <Story />
      </BankAccountCard_1.BankAccountContext.Provider>),
    ],
};
exports.default = meta;
exports.Default = {};
