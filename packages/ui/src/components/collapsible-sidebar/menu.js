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
exports.Menu = Menu;
const React = __importStar(require("react"));
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const lucide_react_1 = require("lucide-react");
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
const scroll_area_1 = require("../scroll-area");
const tooltip_1 = require("../tooltip");
const collapse_menu_button_1 = require("./collapse-menu-button");
function Menu({ isOpen, menu }) {
    const pathname = (0, navigation_1.usePathname)();
    return (<scroll_area_1.ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex min-h-[calc(100vh-48px-36px-16px-32px)] flex-col items-start space-y-1 px-2 lg:min-h-[calc(100vh-32px-40px-32px)]">
          {menu.map(({ groupLabel, menus }, index) => (<li className={(0, cn_1.cn)("w-full", groupLabel ? "pt-5" : "")} key={index}>
              {(isOpen && groupLabel) || isOpen === undefined ? (<p className="max-w-[248px] truncate px-4 pb-2 text-sm font-medium text-muted-foreground">
                  {groupLabel}
                </p>) : !isOpen && isOpen !== undefined && groupLabel ? (<tooltip_1.TooltipProvider>
                  <tooltip_1.Tooltip delayDuration={100}>
                    <tooltip_1.TooltipTrigger className="w-full">
                      <div className="flex w-full items-center justify-center">
                        <lucide_react_1.Ellipsis className="h-5 w-5"/>
                      </div>
                    </tooltip_1.TooltipTrigger>
                    <tooltip_1.TooltipContent side="right">
                      <p>{groupLabel}</p>
                    </tooltip_1.TooltipContent>
                  </tooltip_1.Tooltip>
                </tooltip_1.TooltipProvider>) : (<p className="pb-2"></p>)}
              {menus.map(({ href, label, icon: Icon, active, submenus }, index) => submenus.length === 0 ? (<div className="w-full" key={index}>
                      <tooltip_1.TooltipProvider disableHoverableContent>
                        <tooltip_1.Tooltip delayDuration={100}>
                          <tooltip_1.TooltipTrigger asChild>
                            <button_1.Button variant={active ? "secondary" : "ghost"} className="mb-1 h-10 w-full justify-start" asChild>
                              <link_1.default href={href}>
                                <span className={(0, cn_1.cn)(isOpen === false ? "" : "mr-4")}>
                                  <Icon size={18}/>
                                </span>
                                <p className={(0, cn_1.cn)("max-w-[200px] truncate", isOpen === false
                    ? "-translate-x-96 opacity-0"
                    : "translate-x-0 opacity-100")}>
                                  {label}
                                </p>
                              </link_1.default>
                            </button_1.Button>
                          </tooltip_1.TooltipTrigger>
                          {isOpen === false && (<tooltip_1.TooltipContent side="right">
                              {label}
                            </tooltip_1.TooltipContent>)}
                        </tooltip_1.Tooltip>
                      </tooltip_1.TooltipProvider>
                    </div>) : (<div className="w-full" key={index}>
                      <collapse_menu_button_1.CollapseMenuButton icon={Icon} label={label} active={active} submenus={submenus} isOpen={isOpen}/>
                    </div>))}
            </li>))}
          <li className="flex w-full grow items-end">
            <tooltip_1.TooltipProvider disableHoverableContent>
              <tooltip_1.Tooltip delayDuration={100}>
                <tooltip_1.TooltipTrigger asChild>
                  <button_1.Button onClick={() => { }} variant="outline" className="mt-5 h-10 w-full justify-center">
                    <span className={(0, cn_1.cn)(isOpen === false ? "" : "mr-4")}>
                      <lucide_react_1.LogOut size={18}/>
                    </span>
                    <p className={(0, cn_1.cn)("whitespace-nowrap", isOpen === false ? "hidden opacity-0" : "opacity-100")}>
                      Sign out
                    </p>
                  </button_1.Button>
                </tooltip_1.TooltipTrigger>
                {isOpen === false && (<tooltip_1.TooltipContent side="right">Sign out</tooltip_1.TooltipContent>)}
              </tooltip_1.Tooltip>
            </tooltip_1.TooltipProvider>
          </li>
        </ul>
      </nav>
    </scroll_area_1.ScrollArea>);
}
