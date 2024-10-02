"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.VolatileData = exports.SingleDataPoint = exports.JapaneseLocale = exports.LargeDataSet = exports.EmptyData = exports.CustomHeight = exports.EuroChart = exports.DisabledAssistantMode = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@ai-sdk/react");
const react_3 = require("@assistant-ui/react");
const react_ai_sdk_1 = require("@assistant-ui/react-ai-sdk");
const generator_1 = require("../../../lib/random/generator");
const bar_chart_1 = require("./bar-chart");
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
    component: bar_chart_1.BarChart,
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
        (Story) => (<AssistantProviderWrapper>
        <Story />
      </AssistantProviderWrapper>),
    ],
};
const payloads = (0, generator_1.generatePayloadArray)({
    count: 5,
    minValue: 100,
    maxValue: 500,
});
const Template = (args) => (<div className="w-[900px]">
    <bar_chart_1.BarChart {...args}/>
  </div>);
exports.Default = Template.bind({});
exports.Default.args = {
    currency: "USD",
    data: payloads,
    height: 290,
    locale: "en-US",
    enableAssistantMode: true,
};
exports.DisabledAssistantMode = Template.bind({});
exports.DisabledAssistantMode.args = {
    ...exports.Default.args,
    enableAssistantMode: false,
};
exports.EuroChart = Template.bind({});
exports.EuroChart.args = {
    ...exports.Default.args,
    currency: "EUR",
    locale: "de-DE",
};
exports.CustomHeight = Template.bind({});
exports.CustomHeight.args = {
    ...exports.Default.args,
    height: 400,
};
exports.EmptyData = Template.bind({});
exports.EmptyData.args = {
    ...exports.Default.args,
    data: [],
};
exports.LargeDataSet = Template.bind({});
exports.LargeDataSet.args = {
    ...exports.Default.args,
    data: (0, generator_1.generatePayloadArray)({ count: 100, minValue: 50, maxValue: 1000 }),
};
exports.JapaneseLocale = Template.bind({});
exports.JapaneseLocale.args = {
    ...exports.Default.args,
    currency: "JPY",
    locale: "ja-JP",
};
exports.SingleDataPoint = Template.bind({});
exports.SingleDataPoint.args = {
    ...exports.Default.args,
    data: payloads[0] ? [payloads[0]] : [],
};
exports.VolatileData = Template.bind({});
exports.VolatileData.args = {
    ...exports.Default.args,
    data: (0, generator_1.generatePayloadArray)({ count: 10, minValue: 10, maxValue: 1000 }),
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    ...exports.Default.args,
    disabled: true,
};
// Add more stories as needed for different combinations of props
