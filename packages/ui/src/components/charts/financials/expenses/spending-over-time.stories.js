"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomStyling = exports.DisabledChart = exports.Default = void 0;
const financial_data_generator_1 = require("../../../../lib/random/financial-data-generator");
const assistant_provider_wrapper_1 = __importDefault(require("../../../../wrapper/assistant-provider-wrapper"));
const spending_over_time_1 = require("./spending-over-time");
const ExpenseMetricsData = financial_data_generator_1.FinancialDataGenerator.generateExpenseMetricsAcrossManyYears(2022, 2024);
const transactions = financial_data_generator_1.FinancialDataGenerator.generateRandomTransactions(100);
exports.default = {
    component: spending_over_time_1.SpendingOverTime,
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
    <spending_over_time_1.SpendingOverTime {...args}/>
  </div>);
exports.Default = Template.bind({});
exports.Default.args = {
    title: "Monthly spending",
    viewMoreHref: "/net-Expense",
    price: 1000,
    priceChange: 10,
    expenseMetrics: ExpenseMetricsData,
    transactions: transactions,
};
exports.DisabledChart = Template.bind({});
exports.DisabledChart.args = {
    ...exports.Default.args,
    disabled: true,
};
exports.CustomStyling = Template.bind({});
exports.CustomStyling.args = {
    ...exports.Default.args,
    className: "bg-gray-100 shadow-lg rounded-xl",
};
