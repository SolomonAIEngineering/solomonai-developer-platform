"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyToClipboard = void 0;
const react_1 = __importStar(require("react"));
const outline_1 = require("@heroicons/react/24/outline");
/**
 * A React component that renders a button which, when clicked, copies the
 * provided text to the clipboard.
 *
 * @param props - The props for the component.
 * @returns The `CopyToClipboard` component.
 */
const CopyToClipboard = ({ text }) => {
    const [isCopied, setIsCopied] = (0, react_1.useState)(false);
    const handleCopyClick = async () => {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        // Reset the copied state after a short delay
        setTimeout(() => setIsCopied(false), 2000);
    };
    return (<button onClick={handleCopyClick} className="flex flex-col items-center justify-center gap-1 p-[5%]">
      {!isCopied ? (<outline_1.ClipboardDocumentCheckIcon className="inline-block h-6 w-6"/>) : null}
      <p className="text-xs" style={{
            fontSize: "0.5rem",
        }}>
        {isCopied ? "Copied!" : "Copy To Clipboard"}
      </p>
    </button>);
};
exports.CopyToClipboard = CopyToClipboard;
