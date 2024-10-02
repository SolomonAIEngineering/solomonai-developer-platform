"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const thread_1 = require("../thread");
/**
 * AssistantThreadWrapper component that renders a button to open an AssistantModal modal.
 *
 * @component
 * @example
 * ```tsx
 * <AssistantThreadWrapper className="my-custom-class" initialOpen={true} />
 * ```
 *
 * @param {AssistantThreadWrapperProps} props - The component props.
 * @returns {React.ReactElement} The rendered AssistantModal component.
 */
const AssistantThreadWrapper = ({ className = "", children, }) => {
    return (<div className={`h-full ${className}`.trim()}>
      <thread_1.Thread />
    </div>);
};
exports.default = AssistantThreadWrapper;
