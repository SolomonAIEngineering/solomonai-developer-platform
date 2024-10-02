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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseMenuButton = CollapseMenuButton;
const React = __importStar(require("react"));
const react_1 = require("react");
const link_1 = __importDefault(require("next/link"));
const react_dropdown_menu_1 = require("@radix-ui/react-dropdown-menu");
const lucide_react_1 = require("lucide-react");
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
const collapsible_1 = require("../collapsible");
const dropdown_menu_1 = require("../dropdown-menu");
const tooltip_1 = require("../tooltip");
function CollapseMenuButton({ icon: Icon, label, active, submenus, isOpen, }) {
    const isSubmenuActive = submenus.some((submenu) => submenu.active);
    const [isCollapsed, setIsCollapsed] = (0, react_1.useState)(isSubmenuActive);
    return isOpen ? (<collapsible_1.Collapsible open={isCollapsed} onOpenChange={setIsCollapsed} className="w-full">
      <collapsible_1.CollapsibleTrigger className="mb-1 [&[data-state=open]>div>div>svg]:rotate-180" asChild>
        <button_1.Button variant={active ? "secondary" : "ghost"} className="h-10 w-full justify-start">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
              <span className="mr-4">
                <Icon size={18}/>
              </span>
              <p className={(0, cn_1.cn)("max-w-[150px] truncate", isOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-96 opacity-0")}>
                {label}
              </p>
            </div>
            <div className={(0, cn_1.cn)("whitespace-nowrap", isOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-96 opacity-0")}>
              <lucide_react_1.ChevronDown size={18} className="transition-transform duration-200"/>
            </div>
          </div>
        </button_1.Button>
      </collapsible_1.CollapsibleTrigger>
      <collapsible_1.CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden">
        {submenus.map(({ href, label, active }, index) => (<button_1.Button key={index} variant={active ? "secondary" : "ghost"} className="mb-1 h-10 w-full justify-start" asChild>
            <link_1.default href={href}>
              <span className="ml-2 mr-4">
                <lucide_react_1.Dot size={18}/>
              </span>
              <p className={(0, cn_1.cn)("max-w-[170px] truncate", isOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-96 opacity-0")}>
                {label}
              </p>
            </link_1.default>
          </button_1.Button>))}
      </collapsible_1.CollapsibleContent>
    </collapsible_1.Collapsible>) : (<dropdown_menu_1.DropdownMenu>
      <tooltip_1.TooltipProvider disableHoverableContent>
        <tooltip_1.Tooltip delayDuration={100}>
          <tooltip_1.TooltipTrigger asChild>
            <dropdown_menu_1.DropdownMenuTrigger asChild>
              <button_1.Button variant={active ? "secondary" : "ghost"} className="mb-1 h-10 w-full justify-start">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <span className={(0, cn_1.cn)(isOpen === false ? "" : "mr-4")}>
                      <Icon size={18}/>
                    </span>
                    <p className={(0, cn_1.cn)("max-w-[200px] truncate", isOpen === false ? "opacity-0" : "opacity-100")}>
                      {label}
                    </p>
                  </div>
                </div>
              </button_1.Button>
            </dropdown_menu_1.DropdownMenuTrigger>
          </tooltip_1.TooltipTrigger>
          <tooltip_1.TooltipContent side="right" align="start" alignOffset={2}>
            {label}
          </tooltip_1.TooltipContent>
        </tooltip_1.Tooltip>
      </tooltip_1.TooltipProvider>
      <dropdown_menu_1.DropdownMenuContent side="right" sideOffset={25} align="start">
        <dropdown_menu_1.DropdownMenuLabel className="max-w-[190px] truncate">
          {label}
        </dropdown_menu_1.DropdownMenuLabel>
        <dropdown_menu_1.DropdownMenuSeparator />
        {submenus.map(({ href, label }, index) => (<dropdown_menu_1.DropdownMenuItem key={index} asChild>
            <link_1.default className="cursor-pointer" href={href}>
              <p className="max-w-[180px] truncate">{label}</p>
            </link_1.default>
          </dropdown_menu_1.DropdownMenuItem>))}
        <react_dropdown_menu_1.DropdownMenuArrow className="fill-border"/>
      </dropdown_menu_1.DropdownMenuContent>
    </dropdown_menu_1.DropdownMenu>);
}
