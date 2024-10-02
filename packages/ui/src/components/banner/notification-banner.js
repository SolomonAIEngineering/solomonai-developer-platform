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
exports.default = NotificationBanner;
const React = __importStar(require("react"));
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
const card_1 = require("../card");
/**
 * A simple notification banner component that displays a customizable message
 * with accept and reject options.
 *
 * @param props - Props for configuring the NotificationBanner component.
 * @returns A React element representing the NotificationBanner component.
 */
function NotificationBanner({ position = "bottom", centered = false, fullScreen = false, marginLeft = false, message = "", onSave, onReject, }) {
    const baseStyles = "pointer-events-none fixed inset-x-0 px-6 p-6 ring-1 ring-gray-900/10";
    const bannerClasses = (0, cn_1.cn)(baseStyles, {
        "bottom-0": position === "bottom",
        "top-0": position === "top",
        "flex flex-col justify-between gap-x-8 gap-y-4 md:flex-row md:items-center": fullScreen,
        "mx-auto": centered,
        "ml-auto": marginLeft,
    });
    const handleSave = () => {
        if (onSave)
            onSave();
    };
    const handleReject = () => {
        if (onReject)
            onReject();
    };
    return (<div className={bannerClasses}>
      <card_1.Card className="pointer-events-auto max-w-xl rounded-2xl border-4 p-6 shadow-lg">
        <p className="text-sm leading-6 text-gray-900">{message}</p>
        <div className="mt-4 flex items-center gap-x-5">
          <button_1.Button className="rounded-md bg-background px-3 py-2 text-sm font-semibold text-foreground shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900" onClick={handleSave}>
            Accept
          </button_1.Button>
          <button_1.Button variant="ghost" className="text-sm font-semibold leading-6 text-gray-900" onClick={handleReject}>
            Reject
          </button_1.Button>
        </div>
      </card_1.Card>
    </div>);
}
