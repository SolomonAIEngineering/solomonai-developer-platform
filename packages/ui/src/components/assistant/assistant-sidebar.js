"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const assistant_sidebar_1 = require("../assistant-sidebar");
/**
 * AssistantSidebarWrapper component that renders a button to open an AssistantModal modal.
 *
 * @component
 * @example
 * ```tsx
 * <AssistantSidebarWrapper className="my-custom-class" initialOpen={true} />
 * ```
 *
 * @param {AssistantSidebarWrapperProps} props - The component props.
 * @returns {React.ReactElement} The rendered AssistantModal component.
 */
const AssistantSidebarWrapper = ({ className = "", children, }) => {
    return (<div className={`h-full ${className}`.trim()}>
      {children ? (<assistant_sidebar_1.AssistantSidebar>{children}</assistant_sidebar_1.AssistantSidebar>) : (<assistant_sidebar_1.AssistantSidebar />)}
    </div>);
};
exports.default = AssistantSidebarWrapper;
