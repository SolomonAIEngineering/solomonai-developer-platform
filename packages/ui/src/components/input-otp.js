"use client";
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
exports.InputOTPSeparator = exports.InputOTPSlot = exports.InputOTPGroup = exports.InputOTP = void 0;
const React = __importStar(require("react"));
const react_icons_1 = require("@radix-ui/react-icons");
const input_otp_1 = require("input-otp");
const utils_1 = require("../utils");
const InputOTP = React.forwardRef(({ className, ...props }, ref) => (<input_otp_1.OTPInput ref={ref} containerClassName={(0, utils_1.cn)("flex items-center gap-2", className)} {...props}/>));
exports.InputOTP = InputOTP;
InputOTP.displayName = "InputOTP";
const InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => (<div ref={ref} className={(0, utils_1.cn)("flex items-center", className)} {...props}/>));
exports.InputOTPGroup = InputOTPGroup;
InputOTPGroup.displayName = "InputOTPGroup";
const InputOTPSlot = React.forwardRef(({ char, hasFakeCaret, isActive, className, ...props }, ref) => {
    return (<div ref={ref} className={(0, utils_1.cn)("relative flex h-16 w-16 items-center justify-center border-y border-r border-input text-2xl transition-all first:rounded-l-md first:border-l last:rounded-r-md", isActive && "z-10 ring-1 ring-ring", className)} {...props}>
      {char}
      {hasFakeCaret && (<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000"/>
        </div>)}
    </div>);
});
exports.InputOTPSlot = InputOTPSlot;
InputOTPSlot.displayName = "InputOTPSlot";
const InputOTPSeparator = React.forwardRef(({ ...props }, ref) => (<div ref={ref} {...props}>
    <react_icons_1.DashIcon />
  </div>));
exports.InputOTPSeparator = InputOTPSeparator;
InputOTPSeparator.displayName = "InputOTPSeparator";
