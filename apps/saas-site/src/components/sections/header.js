"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
const drawer_1 = __importDefault(require("@/components/drawer"));
const icons_1 = require("@/components/icons");
const menu_1 = __importDefault(require("@/components/menu"));
const button_1 = require("@/components/ui/button");
const config_1 = require("@/lib/config");
const utils_1 = require("@/lib/utils");
const link_1 = __importDefault(require("next/link"));
const react_1 = require("react");
function Header() {
    const [addBorder, setAddBorder] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setAddBorder(true);
            }
            else {
                setAddBorder(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (<header className={"relative sticky top-0 z-50 py-2 bg-background/60 backdrop-blur"}>
      <div className="flex justify-between items-center container">
        <link_1.default href="/" title="brand-logo" className="relative mr-6 flex items-center space-x-2">
          <icons_1.Icons.logo className="w-auto h-[30px]"/>
          <span className="font-bold text-xl">{config_1.siteConfig.name}</span>
        </link_1.default>

        <div className="hidden lg:block">
          <div className="flex items-center ">
            <nav className="mr-10">
              <menu_1.default />
            </nav>

            <div className="gap-2 flex">
              <link_1.default href="/login" className={(0, button_1.buttonVariants)({ variant: "outline" })}>
                Login
              </link_1.default>
              <link_1.default href="/signup" className={(0, utils_1.cn)((0, button_1.buttonVariants)({ variant: "default" }), "w-full sm:w-auto text-background flex gap-2")}>
                <icons_1.Icons.logo className="h-6 w-6"/>
                Get Started for Free
              </link_1.default>
            </div>
          </div>
        </div>
        <div className="mt-2 cursor-pointer block lg:hidden">
          <drawer_1.default />
        </div>
      </div>
      <hr className={(0, utils_1.cn)("absolute w-full bottom-0 transition-opacity duration-300 ease-in-out", addBorder ? "opacity-100" : "opacity-0")}/>
    </header>);
}
