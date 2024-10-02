"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@ai-sdk/react");
const react_3 = require("@assistant-ui/react");
const react_ai_sdk_1 = require("@assistant-ui/react-ai-sdk");
const assistant_sidebar_1 = __importDefault(require("./assistant-sidebar"));
/**
 * A wrapper component that provides the necessary context for the AssistantSidebarWrapper.
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
/**
 * Storybook meta configuration for AssistantSidebarWrapper.
 *
 * @type {Meta<typeof AssistantSidebarWrapper>}
 */
const meta = {
    component: assistant_sidebar_1.default,
    decorators: [
        (Story) => (<AssistantProviderWrapper>
        <Story />
      </AssistantProviderWrapper>),
    ],
};
exports.default = meta;
/**
 * Default story for AssistantSidebarWrapper.
 *
 * @type {Story}
 */
exports.Default = {
    render: () => <assistant_sidebar_1.default className="w-full"/>,
};