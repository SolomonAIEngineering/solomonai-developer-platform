"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = drawerDemo;
const icons_1 = require("@/components/icons");
const button_1 = require("@/components/ui/button");
const drawer_1 = require("@/components/ui/drawer");
const config_1 = require("@/lib/config");
const utils_1 = require("@/lib/utils");
const link_1 = __importDefault(require("next/link"));
const io5_1 = require("react-icons/io5");
function drawerDemo() {
    return (<drawer_1.Drawer>
      <drawer_1.DrawerTrigger>
        <io5_1.IoMenuSharp className="text-2xl"/>
      </drawer_1.DrawerTrigger>
      <drawer_1.DrawerContent>
        <drawer_1.DrawerHeader className="px-6">
          <div className="">
            <link_1.default href="/" title="brand-logo" className="relative mr-6 flex items-center space-x-2">
              <icons_1.Icons.logo className="w-auto h-[40px]"/>
              <span className="font-bold text-xl">{config_1.siteConfig.name}</span>
            </link_1.default>
          </div>
          <nav>
            <ul className="mt-7 text-left">
              {config_1.siteConfig.header.map((item, index) => (<li key={index} className="my-3">
                  {item.trigger ? (<span className="font-semibold">{item.trigger}</span>) : (<link_1.default href={item.href || ""} className="font-semibold">
                      {item.label}
                    </link_1.default>)}
                </li>))}
            </ul>
          </nav>
        </drawer_1.DrawerHeader>
        <drawer_1.DrawerFooter>
          <link_1.default href="/login" className={(0, button_1.buttonVariants)({ variant: "outline" })}>
            Login
          </link_1.default>
          <link_1.default href="/signup" className={(0, utils_1.cn)((0, button_1.buttonVariants)({ variant: "default" }), "w-full sm:w-auto text-background flex gap-2")}>
            <icons_1.Icons.logo className="h-6 w-6"/>
            Get Started for Free
          </link_1.default>
        </drawer_1.DrawerFooter>
      </drawer_1.DrawerContent>
    </drawer_1.Drawer>);
}
