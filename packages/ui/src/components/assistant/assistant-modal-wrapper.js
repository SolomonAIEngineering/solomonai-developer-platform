"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const assistant_modal_1 = require("../assistant-modal");
/**
 * Assistant component that renders a button to open an assistant modal.
 *
 * @component
 * @example
 * ```tsx
 * <Assistant className="my-custom-class" initialOpen={true} />
 * ```
 *
 * @param {AssistantProps} props - The component props.
 * @returns {React.ReactElement} The rendered Assistant component.
 */
const AssistantModalWrapper = ({ className = "", children, }) => {
    return (<div className={`flex h-full w-full items-center justify-center p-4 ${className}`.trim()}>
      {children}
      <assistant_modal_1.AssistantModal />
    </div>);
};
exports.default = AssistantModalWrapper;
