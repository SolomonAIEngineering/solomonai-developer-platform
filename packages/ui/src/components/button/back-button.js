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
exports.BackButton = void 0;
const React = __importStar(require("react"));
const outline_1 = require("@heroicons/react/24/outline");
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
/**
 * BackButton is a component that renders a back button.
 *
 * @param {BackButtonProps} props - Props for the BackButton component.
 * @returns {JSX.Element} - The rendered BackButton component.
 */
const BackButton = ({ className, callback }) => {
    return (<button_1.Button className={(0, cn_1.cn)("my-3 flex flex-row gap-1 rounded-2xl bg-foreground text-foreground", className)} onClick={callback} variant="outline">
      <outline_1.ArrowLeftCircleIcon className="mr-1 inline-block h-5 w-5 text-foreground"/>
      <span className="cursor-pointer font-bold text-foreground hover:underline">
        Back
      </span>
    </button_1.Button>);
};
exports.BackButton = BackButton;
