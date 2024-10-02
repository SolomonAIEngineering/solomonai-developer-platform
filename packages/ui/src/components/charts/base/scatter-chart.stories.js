"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.EmptyDataset = exports.SingleDataPoint = exports.VolatileData = exports.LargeHeight = exports.SmallHeight = exports.LargeDataset = exports.EuroChart = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@ai-sdk/react");
const react_3 = require("@assistant-ui/react");
const react_ai_sdk_1 = require("@assistant-ui/react-ai-sdk");
const scatter_chart_1 = require("./scatter-chart");
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
    component: scatter_chart_1.ScatterChart,
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
const payloads = [
    { x: 30, y: 20 },
    { x: 50, y: 180 },
    { x: 75, y: 240 },
    { x: 100, y: 100 },
    { x: 120, y: 190 },
];
const Template = (args) => (<div className="w-[900px]">
    <scatter_chart_1.ScatterChart {...args}/>
  </div>);
exports.Default = Template.bind({});
exports.Default.args = {
    currency: "USD",
    data: payloads.map((point) => ({ x: point.x.toString(), y: point.y })),
    height: 290,
    locale: "en-US",
    enableAssistantMode: true,
    yUnit: "USD",
};
exports.EuroChart = Template.bind({});
exports.EuroChart.args = {
    ...exports.Default.args,
    currency: "EUR",
    enableAssistantMode: true,
};
exports.LargeDataset = Template.bind({});
exports.LargeDataset.args = {
    ...exports.Default.args,
    data: payloads.map((point) => ({ x: point.x.toString(), y: point.y })),
};
exports.SmallHeight = Template.bind({});
exports.SmallHeight.args = {
    ...exports.Default.args,
    height: 200,
};
exports.LargeHeight = Template.bind({});
exports.LargeHeight.args = {
    ...exports.Default.args,
    height: 500,
};
exports.VolatileData = Template.bind({});
exports.VolatileData.args = {
    ...exports.Default.args,
    data: payloads.map((point) => ({ x: point.x.toString(), y: point.y })),
};
exports.SingleDataPoint = Template.bind({});
exports.SingleDataPoint.args = {
    ...exports.Default.args,
    data: payloads.map((point) => ({ x: point.x.toString(), y: point.y })),
};
exports.EmptyDataset = Template.bind({});
exports.EmptyDataset.args = {
    ...exports.Default.args,
    data: [],
};
exports.Disabled = Template.bind({});
exports.Disabled.args = {
    ...exports.Default.args,
    disabled: true,
};
