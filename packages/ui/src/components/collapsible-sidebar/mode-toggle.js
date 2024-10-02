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
exports.ModeToggle = ModeToggle;
const React = __importStar(require("react"));
const react_icons_1 = require("@radix-ui/react-icons");
const next_themes_1 = require("next-themes");
const button_1 = require("../button");
const tooltip_1 = require("../tooltip");
function ModeToggle() {
    const { setTheme, theme } = (0, next_themes_1.useTheme)();
    return (<tooltip_1.TooltipProvider disableHoverableContent>
      <tooltip_1.Tooltip delayDuration={100}>
        <tooltip_1.TooltipTrigger asChild>
          <button_1.Button className="h-8 w-8 rounded-full bg-background" variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <react_icons_1.SunIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-500 ease-in-out dark:rotate-0 dark:scale-100"/>
            <react_icons_1.MoonIcon className="scale-1000 absolute h-[1.2rem] w-[1.2rem] rotate-0 transition-transform duration-500 ease-in-out dark:-rotate-90 dark:scale-0"/>
            <span className="sr-only">Switch Theme</span>
          </button_1.Button>
        </tooltip_1.TooltipTrigger>
        <tooltip_1.TooltipContent side="bottom">Switch Theme</tooltip_1.TooltipContent>
      </tooltip_1.Tooltip>
    </tooltip_1.TooltipProvider>);
}
