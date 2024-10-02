"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const cn_1 = require("../../utils/cn");
/**
 * Enhanced layout for the Analytic AI card.
 *
 * @param children - The child component to render within this component.
 * @param className - Additional CSS classes to apply to the component.
 * @param context - The context for the AI to operate in.
 * @param sampleQuestions - Array of sample questions to display.
 * @param title - Optional title for the layout.
 * @param showAskSolomon - Whether to show the AskSolomon component.
 */
const AskAILayout = ({ children, className, context, sampleQuestions, title, showAskSolomon = true, }) => {
    return (<div className={(0, cn_1.cn)("bg-white shadow-lg border-4 border-gray-50 md:p-[1%] rounded-2xl", className)}>
      {title && (<h2 className="text-xl font-semibold mb-4 px-4 pt-4">{title}</h2>)}
      <div className="flex justify-between items-center pb-4 px-4">
        {sampleQuestions.length > 0 && (<div className="flex-grow">
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              Sample Questions:
            </h3>
            <ul className="text-sm text-gray-700">
              {sampleQuestions.slice(0, 3).map((question, index) => (<li key={index} className="mb-1">
                  {question}
                </li>))}
            </ul>
          </div>)}
        {showAskSolomon && (<div className="flex-shrink-0">
            {/* <AskSolomon context={context} sampleQuestions={sampleQuestions} /> */}
          </div>)}
      </div>
      <div className="px-4 pb-4">{children}</div>
    </div>);
};
exports.default = AskAILayout;
