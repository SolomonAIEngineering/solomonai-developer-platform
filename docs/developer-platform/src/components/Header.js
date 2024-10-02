"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const clsx_1 = __importDefault(require("clsx"));
const framer_motion_1 = require("framer-motion");
const link_1 = __importDefault(require("next/link"));
const react_1 = require("react");
const Button_1 = require("@/components/Button");
const Logo_1 = require("@/components/Logo");
const MobileNavigation_1 = require("@/components/MobileNavigation");
const Search_1 = require("@/components/Search");
const ThemeToggle_1 = require("@/components/ThemeToggle");
function TopLevelNavItem({ href, children, }) {
    return (<li>
      <link_1.default href={href} className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
        {children}
      </link_1.default>
    </li>);
}
exports.Header = (0, react_1.forwardRef)(function Header({ className }, ref) {
    let { isOpen: mobileNavIsOpen } = (0, MobileNavigation_1.useMobileNavigationStore)();
    let isInsideMobileNavigation = (0, MobileNavigation_1.useIsInsideMobileNavigation)();
    let { scrollY } = (0, framer_motion_1.useScroll)();
    let bgOpacityLight = (0, framer_motion_1.useTransform)(scrollY, [0, 72], [0.5, 0.9]);
    let bgOpacityDark = (0, framer_motion_1.useTransform)(scrollY, [0, 72], [0.2, 0.8]);
    return (<framer_motion_1.motion.div ref={ref} className={(0, clsx_1.default)(className, "fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80", !isInsideMobileNavigation &&
            "backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80", isInsideMobileNavigation
            ? "bg-white dark:bg-zinc-900"
            : "bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]")} style={{
            "--bg-opacity-light": bgOpacityLight,
            "--bg-opacity-dark": bgOpacityDark,
        }}>
      <div className={(0, clsx_1.default)("absolute inset-x-0 top-full h-px transition", (isInsideMobileNavigation || !mobileNavIsOpen) &&
            "bg-zinc-900/7.5 dark:bg-white/7.5")}/>
      <Search_1.Search />
      <div className="flex items-center gap-5 lg:hidden">
        <MobileNavigation_1.MobileNavigation />
        <link_1.default href="/" aria-label="Home">
          <Logo_1.Logo className="h-6"/>
        </link_1.default>
      </div>
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <ul role="list" className="flex items-center gap-8">
            <TopLevelNavItem href="/">API</TopLevelNavItem>
            <TopLevelNavItem href="#">Documentation</TopLevelNavItem>
            <TopLevelNavItem href="#">Support</TopLevelNavItem>
          </ul>
        </nav>
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"/>
        <div className="flex gap-4">
          <Search_1.MobileSearch />
          <ThemeToggle_1.ThemeToggle />
        </div>
        <div className="hidden min-[416px]:contents">
          <Button_1.Button href="https://app-business.solomon-ai.app" variant="primary">
            Sign in
          </Button_1.Button>
        </div>
      </div>
    </framer_motion_1.motion.div>);
});
