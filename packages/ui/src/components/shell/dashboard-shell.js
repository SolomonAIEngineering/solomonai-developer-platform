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
exports.DashboardShell = DashboardShell;
exports.DashboardHeader = DashboardHeader;
const React = __importStar(require("react"));
const cn_1 = require("../../utils/cn");
function DashboardShell({ children, className, ...props }) {
    return (<div className={(0, cn_1.cn)("grid items-start gap-8", className)} {...props}>
      {children}
    </div>);
}
function DashboardHeader({ heading, text, children, }) {
    return (<>
      <div className="flex items-center justify-between px-2 pt-[5%]">
        <div className="grid gap-1">
          <h1 className="font-heading text-2xl md:text-4xl">{heading}</h1>
          {text && <p className="text-lg text-muted-foreground">{text}</p>}
        </div>

        {children}
      </div>
    </>);
}
