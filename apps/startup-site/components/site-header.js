"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteHeader = SiteHeader;
const button_1 = require("@/components/ui/button");
const utils_1 = require("@/lib/utils");
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const link_1 = __importDefault(require("next/link"));
const react_1 = require("react");
const menuItem = [
    {
        id: 1,
        label: "Features",
        href: "/features",
    },
    {
        id: 2,
        label: "Pricing",
        href: "#",
    },
    {
        id: 3,
        label: "Careers",
        href: "#",
    },
    {
        id: 4,
        label: "Contact Us",
        href: "#",
    },
];
function SiteHeader() {
    const mobilenavbarVariant = {
        initial: {
            opacity: 0,
            scale: 1,
        },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.2,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2,
                delay: 0.2,
                ease: "easeOut",
            },
        },
    };
    const mobileLinkVar = {
        initial: {
            y: "-20px",
            opacity: 0,
        },
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };
    const containerVariants = {
        open: {
            transition: {
                staggerChildren: 0.06,
            },
        },
    };
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const html = document.querySelector("html");
        if (html)
            html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
    }, [hamburgerMenuIsOpen]);
    (0, react_1.useEffect)(() => {
        const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);
        window.addEventListener("orientationchange", closeHamburgerNavigation);
        window.addEventListener("resize", closeHamburgerNavigation);
        return () => {
            window.removeEventListener("orientationchange", closeHamburgerNavigation);
            window.removeEventListener("resize", closeHamburgerNavigation);
        };
    }, [setHamburgerMenuIsOpen]);
    return (<>
      <header className="fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-b opacity-0 backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="container flex h-[3.5rem] items-center justify-between">
          <link_1.default className="text-md flex items-center" href="/">
            Magic UI
          </link_1.default>

          <div className="ml-auto flex h-full items-center">
            <link_1.default className="mr-6 text-sm" href="/signin">
              Log in
            </link_1.default>
            <link_1.default className={(0, utils_1.cn)((0, button_1.buttonVariants)({ variant: "secondary" }), "mr-6 text-sm")} href="/signup">
              Sign up
            </link_1.default>
          </div>
          <button className="ml-6 md:hidden" onClick={() => setHamburgerMenuIsOpen((open) => !open)}>
            <span className="sr-only">Toggle menu</span>
            {hamburgerMenuIsOpen ? <lucide_react_1.XIcon /> : <lucide_react_1.AlignJustify />}
          </button>
        </div>
      </header>
      <framer_motion_1.AnimatePresence>
        <framer_motion_1.motion.nav initial="initial" exit="exit" variants={mobilenavbarVariant} animate={hamburgerMenuIsOpen ? "animate" : "exit"} className={(0, utils_1.cn)(`fixed left-0 top-0 z-50 h-screen w-full overflow-auto bg-background/70 backdrop-blur-[12px] `, {
            "pointer-events-none": !hamburgerMenuIsOpen,
        })}>
          <div className="container flex h-[3.5rem] items-center justify-between">
            <link_1.default className="text-md flex items-center" href="/">
              Magic UI
            </link_1.default>

            <button className="ml-6 md:hidden" onClick={() => setHamburgerMenuIsOpen((open) => !open)}>
              <span className="sr-only">Toggle menu</span>
              {hamburgerMenuIsOpen ? <lucide_react_1.XIcon /> : <lucide_react_1.AlignJustify />}
            </button>
          </div>
          <framer_motion_1.motion.ul className={`flex flex-col md:flex-row md:items-center uppercase md:normal-case ease-in`} variants={containerVariants} initial="initial" animate={hamburgerMenuIsOpen ? "open" : "exit"}>
            {menuItem.map((item) => (<framer_motion_1.motion.li variants={mobileLinkVar} key={item.id} className="border-grey-dark pl-6 py-0.5 border-b md:border-none">
                <link_1.default className={`hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${hamburgerMenuIsOpen ? "[&_a]:translate-y-0" : ""}`} href={item.href}>
                  {item.label}
                </link_1.default>
              </framer_motion_1.motion.li>))}
          </framer_motion_1.motion.ul>
        </framer_motion_1.motion.nav>
      </framer_motion_1.AnimatePresence>
    </>);
}
