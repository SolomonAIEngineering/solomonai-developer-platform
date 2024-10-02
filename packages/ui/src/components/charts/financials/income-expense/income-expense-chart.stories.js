"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseChartWithDrilldown = exports.ExpenseChart = exports.IncomeChart = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@ai-sdk/react");
const react_3 = require("@assistant-ui/react");
const react_ai_sdk_1 = require("@assistant-ui/react-ai-sdk");
const financial_data_generator_1 = require("../../../../lib/random/financial-data-generator");
const income_expense_chart_1 = require("./income-expense-chart");
/**
 * A wrapper component that provides the necessary context for the AssistantModalWrapper.
 *
 * @component
 */
const AssistantProviderWrapper = ({ children, }) => {
    const assistant = (0, react_2.useAssistant)({
        api: "/api/assistant", // Adjust this if your API endpoint is different
    });
    const runtime = (0, react_ai_sdk_1.useVercelUseAssistantRuntime)(assistant);
    return (<react_3.AssistantRuntimeProvider runtime={runtime}>
      {children}
    </react_3.AssistantRuntimeProvider>);
};
exports.default = {
    component: income_expense_chart_1.IncomeExpenseChart,
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
    },
    decorators: [
        (Story) => (<AssistantProviderWrapper>
        <Story />
      </AssistantProviderWrapper>),
    ],
};
const incomeMetricsData = financial_data_generator_1.FinancialDataGenerator.generateIncomeMetrics(30, 2022);
const expenseMetricsData = financial_data_generator_1.FinancialDataGenerator.generateRandomExpenseMetrics(30, 2022);
const Template = (args) => (<div className="w-[900px]">
    <income_expense_chart_1.IncomeExpenseChart {...args}/>
  </div>);
exports.Default = Template.bind({});
exports.Default.args = {
    currency: "USD",
    data: incomeMetricsData,
    type: "income",
    height: 290,
    locale: "en-US",
    enableAssistantMode: true,
};
exports.IncomeChart = Template.bind({});
exports.IncomeChart.args = {
    ...exports.Default.args,
    data: incomeMetricsData,
    type: "income",
    currency: "USD",
};
exports.ExpenseChart = Template.bind({});
exports.ExpenseChart.args = {
    ...exports.Default.args,
    data: expenseMetricsData,
    type: "expense",
    currency: "USD",
};
exports.ExpenseChartWithDrilldown = Template.bind({});
exports.ExpenseChartWithDrilldown.args = {
    ...exports.Default.args,
    data: expenseMetricsData,
    type: "expense",
    currency: "USD",
    enableDrillDown: true,
};
