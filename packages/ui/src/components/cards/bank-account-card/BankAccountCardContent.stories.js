"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountCardContentWithClassName = exports.Default = void 0;
const financial_data_generator_1 = require("../../../lib/random/financial-data-generator");
const BankAccountCard_1 = require("./BankAccountCard");
const BankAccountCardContent_1 = require("./BankAccountCardContent");
// BankAccountCardHeader.stories.tsx
// Mock data for the bank account
const mockBankAccount = financial_data_generator_1.FinancialDataGenerator.generateRandomBankAccount();
const meta = {
    component: BankAccountCardContent_1.BankAccountCardContent,
    argTypes: {
        className: {
            control: {
                type: "text",
            },
            defaultValue: "",
        },
    },
    decorators: [
        (Story) => (<BankAccountCard_1.BankAccountContext.Provider value={mockBankAccount}>
        <Story />
      </BankAccountCard_1.BankAccountContext.Provider>),
    ],
};
exports.default = meta;
exports.Default = {
    args: {},
};
exports.BankAccountCardContentWithClassName = {
    args: {
        className: "border rounded-md",
    },
};
