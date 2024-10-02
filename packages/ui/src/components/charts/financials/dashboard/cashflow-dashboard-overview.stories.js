"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const financial_data_generator_1 = require("../../../../lib/random/financial-data-generator");
const assistant_provider_wrapper_1 = __importDefault(require("../../../../wrapper/assistant-provider-wrapper"));
const cashflow_dashboard_overview_1 = require("./cashflow-dashboard-overview");
exports.default = {
    component: cashflow_dashboard_overview_1.CashflowDashboardOverview,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        className: {
            control: "text",
        },
        title: {
            control: "text",
        },
        disabled: {
            control: "boolean",
        },
        incomeMetrics: {
            control: "object",
        },
    },
    decorators: [
        (Story) => (<assistant_provider_wrapper_1.default>
        <Story />
      </assistant_provider_wrapper_1.default>),
    ],
};
const Template = (args) => (<div className="w-[900px]">
    <cashflow_dashboard_overview_1.CashflowDashboardOverview {...args}/>
  </div>);
const data = financial_data_generator_1.FinancialDataGenerator.generateIncomeMetricsAcrossManyYears(2022, 2024);
const expenseData = financial_data_generator_1.FinancialDataGenerator.generateExpenseMetricsAcrossManyYears(2022, 2024);
exports.Default = Template.bind({});
exports.Default.args = {
    className: "w-[900px]",
    title: "Cashflow Dashboard Overview",
    disabled: false,
    incomeMetrics: data,
    expenseMetrics: expenseData,
};
