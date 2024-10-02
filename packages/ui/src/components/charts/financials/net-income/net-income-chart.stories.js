"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomStyling = exports.WithComparison = exports.WithoutAssistantMode = exports.DisabledChart = exports.LargeDataset = exports.NegativeChange = exports.JapaneseVersion = exports.EuroVersion = exports.Default = void 0;
const financial_data_generator_1 = require("../../../../lib/random/financial-data-generator");
const assistant_provider_wrapper_1 = __importDefault(require("../../../../wrapper/assistant-provider-wrapper"));
const net_income_chart_1 = require("./net-income-chart");
const incomeMetricsData = financial_data_generator_1.FinancialDataGenerator.generateIncomeMetricsAcrossManyYears(2022, 2024);
exports.default = {
    component: net_income_chart_1.NetIncomeChart,
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
    <net_income_chart_1.NetIncomeChart {...args}/>
  </div>);
exports.Default = Template.bind({});
exports.Default.args = {
    currency: "USD",
    height: 290,
    locale: "en-US",
    enableAssistantMode: true,
    title: "Net income",
    viewMoreHref: "/net-income",
    price: 1000,
    priceChange: 10,
    incomeMetrics: incomeMetricsData,
};
exports.EuroVersion = Template.bind({});
exports.EuroVersion.args = {
    ...exports.Default.args,
    currency: "EUR",
    locale: "de-DE",
    title: "Nettoeinkommen",
    price: 850,
    priceChange: 5,
};
exports.JapaneseVersion = Template.bind({});
exports.JapaneseVersion.args = {
    ...exports.Default.args,
    currency: "JPY",
    locale: "ja-JP",
    title: "純利益",
    price: 110000,
    priceChange: 3,
};
exports.NegativeChange = Template.bind({});
exports.NegativeChange.args = {
    ...exports.Default.args,
    price: 900,
    priceChange: -5,
};
exports.LargeDataset = Template.bind({});
exports.LargeDataset.args = {
    ...exports.Default.args,
    height: 400,
};
exports.DisabledChart = Template.bind({});
exports.DisabledChart.args = {
    ...exports.Default.args,
    disabled: true,
};
exports.WithoutAssistantMode = Template.bind({});
exports.WithoutAssistantMode.args = {
    ...exports.Default.args,
    enableAssistantMode: false,
};
exports.WithComparison = Template.bind({});
exports.WithComparison.args = {
    ...exports.Default.args,
    enableComparison: true,
};
exports.CustomStyling = Template.bind({});
exports.CustomStyling.args = {
    ...exports.Default.args,
    className: "bg-gray-100 shadow-lg rounded-xl",
};
