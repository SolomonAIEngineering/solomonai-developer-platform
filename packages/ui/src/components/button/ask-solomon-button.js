"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AskSolomonAiButton = void 0;
const react_1 = __importDefault(require("react"));
const outline_1 = require("@heroicons/react/24/outline");
const cn_1 = require("../../utils/cn");
const _1 = require(".");
/**
 * AskSolomonAiButtonProps defines the props for the AskSolomonAiButton
 * component.
 *
 * @property {boolean} active - Indicates whether the button is active or not.
 * @property {string} className - Additional CSS classes for styling the button.
 * @property {boolean} asChild - Optional flag to treat the button as a child
 *   component.
 * @interface AskSolomonAiButtonProps
 */
const AskSolomonAiButton = ({ className, href, label, ...props }) => {
    return (<a href={href}>
      <_1.Button variant={"outline"} className={(0, cn_1.cn)("border-1 ml-3 items-center justify-center rounded-2xl font-bold text-foreground", className)} {...props}>
        <outline_1.HandRaisedIcon className="mr-2 h-5 w-5"/>
        <p>{label ?? "Ask Solomon AI"}</p>
      </_1.Button>
    </a>);
};
exports.AskSolomonAiButton = AskSolomonAiButton;
