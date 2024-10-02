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
exports.HeaderSection = HeaderSection;
const react_1 = __importStar(require("react"));
const link_1 = __importDefault(require("next/link"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../../utils");
const button_1 = require("../button");
/**
 * Array of menu items
 */
const menuItems = [
    { id: 1, label: "Features", href: "/features" },
    { id: 2, label: "Pricing", href: "#" },
    { id: 3, label: "Careers", href: "#" },
    { id: 4, label: "Contact Us", href: "#" },
];
/**
 * Animation variants for mobile navbar
 */
const mobileNavbarVariant = {
    initial: { opacity: 0, scale: 1 },
    animate: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2, delay: 0.2, ease: "easeOut" },
    },
};
/**
 * Animation variants for mobile links
 */
const mobileLinkVar = {
    initial: { y: "-20px", opacity: 0 },
    open: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};
/**
 * Animation variants for container
 */
const containerVariants = {
    open: { transition: { staggerChildren: 0.06 } },
};
/**
 * HeaderSection component
 * @returns {JSX.Element} Rendered HeaderSection component
 */
function HeaderSection() {
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
    }, []);
    return (<>
      <Header hamburgerMenuIsOpen={hamburgerMenuIsOpen} setHamburgerMenuIsOpen={setHamburgerMenuIsOpen}/>
      <MobileNavbar hamburgerMenuIsOpen={hamburgerMenuIsOpen} setHamburgerMenuIsOpen={setHamburgerMenuIsOpen}/>
    </>);
}
/**
 * Header component
 * @param {HeaderProps} props - The props for the Header component
 * @returns {JSX.Element} Rendered Header component
 */
const Header = ({ hamburgerMenuIsOpen, setHamburgerMenuIsOpen, }) => (<header className="animate-fade-in fixed left-0 top-0 z-50 w-full translate-y-[-1rem] border-b opacity-0 backdrop-blur-[12px] [--animation-delay:600ms]">
    <div className="container flex h-[3.5rem] items-center justify-between">
      <link_1.default className="text-md flex items-center" href="/">
        Magic UI
      </link_1.default>
      <HeaderLinks />
      <HamburgerButton hamburgerMenuIsOpen={hamburgerMenuIsOpen} setHamburgerMenuIsOpen={setHamburgerMenuIsOpen}/>
    </div>
  </header>);
/**
 * HeaderLinks component
 * @returns {JSX.Element} Rendered HeaderLinks component
 */
const HeaderLinks = () => (<div className="ml-auto flex h-full items-center">
    <link_1.default className="mr-6 text-sm" href="/signin">
      Log in
    </link_1.default>
    <link_1.default className={(0, utils_1.cn)((0, button_1.buttonVariants)({ variant: "secondary" }), "mr-6 text-sm")} href="/signup">
      Sign up
    </link_1.default>
  </div>);
/**
 * HamburgerButton component
 * @param {HamburgerButtonProps} props - The props for the HamburgerButton component
 * @returns {JSX.Element} Rendered HamburgerButton component
 */
const HamburgerButton = ({ hamburgerMenuIsOpen, setHamburgerMenuIsOpen, }) => (<button className="ml-6 md:hidden" onClick={() => setHamburgerMenuIsOpen((open) => !open)}>
    <span className="sr-only">Toggle menu</span>
    {hamburgerMenuIsOpen ? <lucide_react_1.XIcon /> : <lucide_react_1.AlignJustify />}
  </button>);
/**
 * MobileNavbar component
 * @param {MobileNavbarProps} props - The props for the MobileNavbar component
 * @returns {JSX.Element} Rendered MobileNavbar component
 */
const MobileNavbar = ({ hamburgerMenuIsOpen, setHamburgerMenuIsOpen, }) => (<framer_motion_1.AnimatePresence>
    <framer_motion_1.motion.nav initial="initial" exit="exit" variants={mobileNavbarVariant} animate={hamburgerMenuIsOpen ? "animate" : "exit"} className={(0, utils_1.cn)(`fixed left-0 top-0 z-50 h-screen w-full overflow-auto bg-background/70 backdrop-blur-[12px]`, { "pointer-events-none": !hamburgerMenuIsOpen })}>
      <div className="container flex h-[3.5rem] items-center justify-between">
        <link_1.default className="text-md flex items-center" href="/">
          Magic UI
        </link_1.default>
        <HamburgerButton hamburgerMenuIsOpen={hamburgerMenuIsOpen} setHamburgerMenuIsOpen={setHamburgerMenuIsOpen}/>
      </div>
      <MobileNavbarLinks hamburgerMenuIsOpen={hamburgerMenuIsOpen}/>
    </framer_motion_1.motion.nav>
  </framer_motion_1.AnimatePresence>);
/**
 * MobileNavbarLinks component
 * @param {MobileNavbarLinksProps} props - The props for the MobileNavbarLinks component
 * @returns {JSX.Element} Rendered MobileNavbarLinks component
 */
const MobileNavbarLinks = ({ hamburgerMenuIsOpen, }) => (<framer_motion_1.motion.ul className={`flex flex-col uppercase ease-in md:flex-row md:items-center md:normal-case`} variants={containerVariants} initial="initial" animate={hamburgerMenuIsOpen ? "open" : "exit"}>
    {menuItems.map((item) => (<framer_motion_1.motion.li variants={mobileLinkVar} key={item.id} className="border-grey-dark border-b py-0.5 pl-6 md:border-none">
        <link_1.default className={`hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${hamburgerMenuIsOpen ? "[&_a]:translate-y-0" : ""}`} href={item.href}>
          {item.label}
        </link_1.default>
      </framer_motion_1.motion.li>))}
  </framer_motion_1.motion.ul>);
