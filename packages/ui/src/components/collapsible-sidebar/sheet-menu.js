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
exports.SheetMenu = void 0;
const React = __importStar(require("react"));
const link_1 = __importDefault(require("next/link"));
const lucide_react_1 = require("lucide-react");
const button_1 = require("../button");
const sheet_1 = require("../sheet");
const menu_1 = require("./menu");
const SheetMenu = ({ menu }) => {
    return (<sheet_1.Sheet>
      <sheet_1.SheetTrigger className="lg:hidden" asChild>
        <button_1.Button className="h-8" variant="outline" size="icon">
          <lucide_react_1.MenuIcon size={20}/>
        </button_1.Button>
      </sheet_1.SheetTrigger>
      <sheet_1.SheetContent className="flex h-full flex-col px-3 sm:w-72" side="left">
        <sheet_1.SheetHeader>
          <button_1.Button className="flex items-center justify-center pb-2 pt-1" variant="link" asChild>
            <link_1.default href="/dashboard" className="flex items-center gap-2">
              <lucide_react_1.PanelsTopLeft className="mr-1 h-6 w-6"/>
              <h1 className="text-lg font-bold">Brand</h1>
            </link_1.default>
          </button_1.Button>
        </sheet_1.SheetHeader>
        <menu_1.Menu isOpen menu={menu}/>
      </sheet_1.SheetContent>
    </sheet_1.Sheet>);
};
exports.SheetMenu = SheetMenu;
