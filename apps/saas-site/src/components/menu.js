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
exports.default = NavigationMenuDemo;
const link_1 = __importDefault(require("next/link"));
const React = __importStar(require("react"));
const navigation_menu_1 = require("@/components/ui/navigation-menu");
const config_1 = require("@/lib/config");
const utils_1 = require("@/lib/utils");
function NavigationMenuDemo() {
    return (<navigation_menu_1.NavigationMenu>
      <navigation_menu_1.NavigationMenuList>
        {config_1.siteConfig.header.map((item, index) => (<navigation_menu_1.NavigationMenuItem key={index}>
            {item.trigger ? (<>
                <navigation_menu_1.NavigationMenuTrigger>{item.trigger}</navigation_menu_1.NavigationMenuTrigger>
                <navigation_menu_1.NavigationMenuContent>
                  <ul className={`grid gap-3 p-6 ${item.content.main
                    ? "md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
                    : "w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]"}`}>
                    {item.content.main && (<li className="row-span-3">
                        <navigation_menu_1.NavigationMenuLink asChild>
                          <link_1.default className="flex h-full w-full select-none flex-col justify-end rounded-md bg-primary/10 from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href={item.content.main.href}>
                            {item.content.main.icon}
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {item.content.main.title}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {item.content.main.description}
                            </p>
                          </link_1.default>
                        </navigation_menu_1.NavigationMenuLink>
                      </li>)}
                    {item.content.items.map((subItem, subIndex) => (<ListItem key={subIndex} href={subItem.href} title={subItem.title} className="hover:bg-primary/10">
                        {subItem.description}
                      </ListItem>))}
                  </ul>
                </navigation_menu_1.NavigationMenuContent>
              </>) : (<link_1.default href={item.href || ""} target="_arya" legacyBehavior passHref>
                <navigation_menu_1.NavigationMenuLink className={(0, navigation_menu_1.navigationMenuTriggerStyle)()}>
                  {item.label}
                </navigation_menu_1.NavigationMenuLink>
              </link_1.default>)}
          </navigation_menu_1.NavigationMenuItem>))}
      </navigation_menu_1.NavigationMenuList>
    </navigation_menu_1.NavigationMenu>);
}
const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (<li>
      <navigation_menu_1.NavigationMenuLink asChild>
        <a ref={ref} className={(0, utils_1.cn)("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)} {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </navigation_menu_1.NavigationMenuLink>
    </li>);
});
ListItem.displayName = "ListItem";
