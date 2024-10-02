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
exports.SidebarToggle = SidebarToggle;
const React = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const cn_1 = require("@/utils/cn");
const button_1 = require("../button");
function SidebarToggle({ isOpen, setIsOpen }) {
    return (<div className="invisible absolute -right-[16px] top-[12px] z-20 lg:visible">
      <button_1.Button onClick={() => setIsOpen?.()} className="h-8 w-8 rounded-md" variant="outline" size="icon">
        <lucide_react_1.ChevronLeft className={(0, cn_1.cn)("h-4 w-4 transition-transform duration-700 ease-in-out", isOpen === false ? "rotate-180" : "rotate-0")}/>
      </button_1.Button>
    </div>);
}
