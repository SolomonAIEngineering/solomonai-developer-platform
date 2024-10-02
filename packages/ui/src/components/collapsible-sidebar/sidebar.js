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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = void 0;
const React = __importStar(require("react"));
const link_1 = __importDefault(require("next/link"));
const lucide_react_1 = require("lucide-react");
const use_sidebar_toggle_1 = require("../../hooks/use-sidebar-toggle");
const use_store_1 = require("../../hooks/use-store");
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
const menu_1 = require("./menu");
const sidebar_toggle_1 = require("./sidebar-toggle");
const Sidebar = ({ menu }) => {
    const sidebar = (0, use_store_1.useStore)(use_sidebar_toggle_1.useSidebarToggle, (state) => state);
    if (!sidebar)
        return null;
    return (<aside className={(0, cn_1.cn)("fixed left-0 top-0 z-20 h-screen -translate-x-full transition-[width] duration-300 ease-in-out lg:translate-x-0", sidebar?.isOpen === false ? "w-[90px]" : "w-72")}>
      <sidebar_toggle_1.SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen}/>
      <div className="relative flex h-full flex-col overflow-y-auto px-3 py-4 shadow-md dark:shadow-zinc-800">
        <button_1.Button className={(0, cn_1.cn)("mb-1 transition-transform duration-300 ease-in-out", sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0")} variant="link" asChild>
          <link_1.default href="/dashboard" className="flex items-center gap-2">
            <lucide_react_1.PanelsTopLeft className="mr-1 h-6 w-6"/>
            <h1 className={(0, cn_1.cn)("whitespace-nowrap text-lg font-bold transition-[transform,opacity,display] duration-300 ease-in-out", sidebar?.isOpen === false
            ? "hidden -translate-x-96 opacity-0"
            : "translate-x-0 opacity-100")}>
              Brand
            </h1>
          </link_1.default>
        </button_1.Button>
        <menu_1.Menu isOpen={sidebar?.isOpen} menu={menu}/>
      </div>
    </aside>);
};
exports.Sidebar = Sidebar;
