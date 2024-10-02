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
exports.SignUpButton = void 0;
const React = __importStar(require("react"));
const outline_1 = require("@heroicons/react/24/outline");
const cn_1 = require("../../utils/cn");
const _1 = require(".");
/**
 * SignUpButton is a component that renders a sign up button.
 *
 * @param {SignUpButtonProps} props - Props for the SignUpButton component.
 * @returns {JSX.Element} - The rendered SignUpButton component.
 */
const SignUpButton = ({ className, callBack }) => {
    return (<_1.Button className={(0, cn_1.cn)("rounded-2xl border-zinc-950 bg-zinc-950 font-bold text-foreground", className)} variant="outline" onClick={callBack}>
      <outline_1.LockClosedIcon className="mr-2 h-5 w-5 text-foreground"/>
      Sign Up
    </_1.Button>);
};
exports.SignUpButton = SignUpButton;
