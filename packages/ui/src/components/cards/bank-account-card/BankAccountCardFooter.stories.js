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
const BankAccountCardFooter_1 = require("./BankAccountCardFooter");
// Mock data for the bank account
const mockBankAccount = financial_data_generator_1.FinancialDataGenerator.generateRandomBankAccount();
const historicalAccountBalance = financial_data_generator_1.FinancialDataGenerator.generateRandomAccountBalanceHistories(100);
const meta = {
    component: BankAccountCardFooter_1.BankAccountCardFooter,
    argTypes: {
        serverUrl: { control: "text" },
    },
    decorators: [
        (Story) => (<BankAccountCard_1.BankAccountContext.Provider value={mockBankAccount}>
        <BankAccountCard_1.AccountBalanceHistoryContext.Provider value={historicalAccountBalance}>
          <Story />
        </BankAccountCard_1.AccountBalanceHistoryContext.Provider>
      </BankAccountCard_1.BankAccountContext.Provider>),
    ],
};
exports.default = meta;
exports.Default = {};
