"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargeDataSet = exports.DifferentDateRange = exports.EmptyData = exports.CustomHeight = exports.DisabledAssistantMode = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@ai-sdk/react");
const react_3 = require("@assistant-ui/react");
const react_ai_sdk_1 = require("@assistant-ui/react-ai-sdk");
const generator_1 = require("../../../lib/random/generator");
const chart_container_1 = require("./chart-container");
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
    component: chart_container_1.ChartContainer,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        height: {
            control: { type: "range", min: 200, max: 600, step: 10 },
        },
        enableAssistantMode: {
            control: "boolean",
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
    <chart_container_1.ChartContainer {...args}>
      <div className="h-[290px] rounded-2xl bg-zinc-200"></div>
    </chart_container_1.ChartContainer>
  </div>);
exports.Default = Template.bind({});
exports.Default.args = {
    data: payloads,
    dataSet: payloads,
    setDataSet: () => { },
    height: 290,
    earliestDate: new Date("2023-01-01"),
    latestDate: new Date("2023-12-31"),
    filterDataByDateRange: () => { },
    enableAssistantMode: true,
};
exports.DisabledAssistantMode = Template.bind({});
exports.DisabledAssistantMode.args = {
    ...exports.Default.args,
    enableAssistantMode: false,
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
    dataSet: [],
};
exports.DifferentDateRange = Template.bind({});
exports.DifferentDateRange.args = {
    ...exports.Default.args,
    earliestDate: new Date("2022-06-01"),
    latestDate: new Date("2023-05-31"),
};
exports.LargeDataSet = Template.bind({});
exports.LargeDataSet.args = {
    ...exports.Default.args,
    data: (0, generator_1.generatePayloadArray)({ count: 100, minValue: 50, maxValue: 1000 }),
    dataSet: (0, generator_1.generatePayloadArray)({ count: 100, minValue: 50, maxValue: 1000 }),
};
// Add more stories as needed for different combinations of props
