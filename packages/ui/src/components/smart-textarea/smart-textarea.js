"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartTextarea = void 0;
const react_1 = __importDefault(require("react"));
const cn_1 = require("../../utils/cn");
/**
 * SmartTextarea component that combines a textarea with AI-powered features.
 *
 * @param props - The component props
 * @param ref - Forwarded ref for the textarea element
 * @returns A React functional component
 */
const SmartTextarea = react_1.default.forwardRef(({ context, sampleQuestions, globalFinancialContext, userAccount, className, userId, userName, financialContext, instrumentationCallback, apiToken, model, temperature, top_p, frequency_penalty, presence_penalty, max_tokens, enableGlobalContext = false, ...props }, ref) => {
    // TODO: Implement AI-powered features using the provided props
    return (<div className={(0, cn_1.cn)("flex flex-row rounded-md border-4 border-gray-50 bg-white shadow-md", className)}>
        <textarea className={(0, cn_1.cn)("flex w-full rounded-md border-0 bg-transparent p-[1%] text-sm shadow-none", className)} ref={ref} {...props}/>
      </div>);
});
exports.SmartTextarea = SmartTextarea;
SmartTextarea.displayName = "SmartTextarea";
