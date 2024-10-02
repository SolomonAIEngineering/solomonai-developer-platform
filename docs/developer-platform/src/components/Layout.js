"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = Layout;
const framer_motion_1 = require("framer-motion");
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const Footer_1 = require("@/components/Footer");
const Header_1 = require("@/components/Header");
const Logo_1 = require("@/components/Logo");
const Navigation_1 = require("@/components/Navigation");
const SectionProvider_1 = require("@/components/SectionProvider");
function Layout({ children, allSections, }) {
    let pathname = (0, navigation_1.usePathname)();
    return (<SectionProvider_1.SectionProvider sections={allSections[pathname] ?? []}>
      <div className="h-full lg:ml-72 xl:ml-80">
        <framer_motion_1.motion.header layoutScroll className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 xl:w-80">
            <div className="hidden lg:flex">
              <link_1.default href="/" aria-label="Home" className="flex flex-1 gap-1">
                <Logo_1.Logo className="text-bold h-8 text-foreground"/>
                <p className="text-xl font-bold text-foreground">Solomon AI</p>
              </link_1.default>
            </div>
            <Header_1.Header />
            <Navigation_1.Navigation className="hidden lg:mt-10 lg:block"/>
          </div>
        </framer_motion_1.motion.header>
        <div className="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
          <main className="flex-auto">{children}</main>
          <Footer_1.Footer />
        </div>
      </div>
    </SectionProvider_1.SectionProvider>);
}
