"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarChart = exports.LineChart = exports.EuroChart = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@ai-sdk/react");
const react_3 = require("@assistant-ui/react");
const react_ai_sdk_1 = require("@assistant-ui/react-ai-sdk");
const generator_1 = require("../../../lib/random/generator");
const zoomable_chart_1 = require("./zoomable-chart");
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
    component: zoomable_chart_1.ZoomableChart,
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
const payloads = (0, generator_1.generatePayloadArray)({
    count: 5,
    minValue: 100,
    maxValue: 500,
});
const Template = (args) => (<div className="w-[900px]">
    <zoomable_chart_1.ZoomableChart {...args}/>
  </div>);
exports.Default = Template.bind({});
exports.Default.args = {
    data: (0, zoomable_chart_1.simulateData)(),
    title: "Events",
    dataNameKey: "events",
    description: "Events over time",
};
exports.EuroChart = Template.bind({});
exports.EuroChart.args = {
    ...exports.Default.args,
    title: "Events",
    dataNameKey: "events",
    description: "Events over time",
    footerDescription: "This is a footer description",
};
exports.LineChart = Template.bind({});
exports.LineChart.args = {
    ...exports.Default.args,
    title: "Events",
    dataNameKey: "events",
    description: "Events over time",
    footerDescription: "This is a footer description",
    chartType: "line",
};
exports.BarChart = Template.bind({});
exports.BarChart.args = {
    ...exports.Default.args,
    title: "Events",
    dataNameKey: "events",
    description: "Events over time",
    footerDescription: "This is a footer description",
    chartType: "bar",
};
