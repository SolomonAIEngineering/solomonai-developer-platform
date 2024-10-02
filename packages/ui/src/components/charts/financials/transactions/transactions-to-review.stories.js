"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const financial_data_generator_1 = require("../../../../lib/random/financial-data-generator");
const assistant_provider_wrapper_1 = __importDefault(require("../../../../wrapper/assistant-provider-wrapper"));
const transactions_to_review_1 = require("./transactions-to-review");
const transactions = financial_data_generator_1.FinancialDataGenerator.generateRandomTransactions(100);
exports.default = {
    component: transactions_to_review_1.TransactionsToReview,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        currency: {
            control: "select",
            options: ["USD", "EUR", "GBP", "JPY"],
        },
        height: {
            control: { type: "range", min: 200, max: 600, step: 10 },
        },
        enableAssistantMode: {
            control: "boolean",
        },
        locale: {
            control: "select",
            options: ["en-US", "de-DE", "fr-FR", "ja-JP"],
        },
    },
    decorators: [
        (Story) => (<assistant_provider_wrapper_1.default>
        <Story />
      </assistant_provider_wrapper_1.default>),
    ],
};
const Template = (args) => (<div className="w-[900px]">
    <transactions_to_review_1.TransactionsToReview {...args}/>
  </div>);
exports.Default = Template.bind({});
exports.Default.args = {
    transactions: transactions,
};
