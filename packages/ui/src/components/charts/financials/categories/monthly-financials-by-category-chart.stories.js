"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseChartWithEnabledDrilldown = exports.ExpenseChart = exports.IncomeChart = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@ai-sdk/react");
const react_3 = require("@assistant-ui/react");
const react_ai_sdk_1 = require("@assistant-ui/react-ai-sdk");
const financial_data_generator_1 = require("../../../../lib/random/financial-data-generator");
const monthly_financials_by_category_chart_1 = require("./monthly-financials-by-category-chart");
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
    component: monthly_financials_by_category_chart_1.MonthlyFinancialByCategoryChart,
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
const categoryMonthlyIncome = financial_data_generator_1.FinancialDataGenerator.generateUserCategoryMonthlyData(1000, 2022, "income");
const categoryMonthlyExpense = financial_data_generator_1.FinancialDataGenerator.generateUserCategoryMonthlyData(1000, 2022, "expense");
const Template = (args) => (<div className="w-[900px]">
    <monthly_financials_by_category_chart_1.MonthlyFinancialByCategoryChart {...args}/>
  </div>);
exports.Default = Template.bind({});
exports.Default.args = {
    currency: "USD",
    data: categoryMonthlyIncome,
    type: "income",
    height: 290,
    locale: "en-US",
    enableAssistantMode: true,
};
exports.IncomeChart = Template.bind({});
exports.IncomeChart.args = {
    ...exports.Default.args,
    data: categoryMonthlyIncome,
    type: "income",
    currency: "USD",
    enableAssistantMode: true,
};
exports.ExpenseChart = Template.bind({});
exports.ExpenseChart.args = {
    ...exports.Default.args,
    data: categoryMonthlyExpense,
    type: "expense",
    currency: "USD",
    enableAssistantMode: true,
};
exports.ExpenseChartWithEnabledDrilldown = Template.bind({});
exports.ExpenseChartWithEnabledDrilldown.args = {
    ...exports.Default.args,
    data: categoryMonthlyExpense,
    type: "expense",
    currency: "USD",
    enableAssistantMode: true,
    enableDrillDown: true,
};
