"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterSection = void 0;
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const react_icons_1 = require("@radix-ui/react-icons");
const icons_1 = require("../icons");
/**
 * Array of footer navigation sections
 */
const footerNavs = [
    {
        label: "Product",
        items: [
            { href: "https://app-business.solomon-ai.app", name: "Business" },
            { href: "mailto:yoanyomba@solomon-ai.co", name: "Email" },
        ],
    },
    {
        label: "Legal",
        items: [
            { href: "https://solomon-ai.app/terms", name: "Terms" },
            { href: "https://solomon-ai.app/policy", name: "Privacy" },
        ],
    },
];
/**
 * Array of footer social links
 */
const footerSocials = [
    {
        href: "",
        name: "Discord",
        icon: <react_icons_1.DiscordLogoIcon className="h-4 w-4"/>,
    },
    {
        href: "",
        name: "Twitter",
        icon: <react_icons_1.TwitterLogoIcon className="h-4 w-4"/>,
    },
];
/**
 * SiteFooter component
 * @returns {JSX.Element} Rendered SiteFooter component
 */
const FooterSection = ({ title, description }) => {
    return (<footer>
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
          <FooterLogo title={title} description={description}/>
          <FooterNavigation />
        </div>
        <FooterBottom title={title}/>
      </div>
    </footer>);
};
exports.FooterSection = FooterSection;
/**
 * FooterLogo component
 * @returns {JSX.Element} Rendered FooterLogo component
 */
const FooterLogo = ({ title, description }) => (<div className="mb-12 flex flex-col gap-4">
    <link_1.default href="/" className="flex items-center gap-2">
      <icons_1.Icons.Logo />
      <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
        {title}
      </span>
    </link_1.default>
    <p className="max-w-md">{description}</p>
  </div>);
/**
 * FooterNavigation component
 * @returns {JSX.Element} Rendered FooterNavigation component
 */
const FooterNavigation = () => (<div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
    {footerNavs.map((nav) => (<FooterNavSection key={nav.label} section={nav}/>))}
  </div>);
/**
 * FooterNavSection component
 * @param {FooterNavSectionProps} props - The props for the FooterNavSection component
 * @returns {JSX.Element} Rendered FooterNavSection component
 */
const FooterNavSection = ({ section }) => (<div>
    <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">
      {section.label}
    </h2>
    <ul className="grid gap-2">
      {section.items.map((item) => (<li key={item.name}>
          <link_1.default href={item.href} className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200">
            {item.name}
          </link_1.default>
        </li>))}
    </ul>
  </div>);
/**
 * FooterBottom component
 * @returns {JSX.Element} Rendered FooterBottom component
 */
const FooterBottom = ({ title }) => (<div className="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
    {/* <FooterSocialLinks /> */}
    <FooterCopyright title={title}/>
  </div>);
/**
 * FooterSocialLinks component
 * @returns {JSX.Element} Rendered FooterSocialLinks component
 */
const FooterSocialLinks = () => (<div className="flex space-x-5 sm:mt-0 sm:justify-center">
    {footerSocials.map((social) => (<link_1.default key={social.name} href={social.href} className="fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600">
        {social.icon}
        <span className="sr-only">{social.name}</span>
      </link_1.default>))}
  </div>);
/**
 * FooterCopyright component
 * @returns {JSX.Element} Rendered FooterCopyright component
 */
const FooterCopyright = ({ title }) => (<span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
    Copyright © {new Date().getFullYear()}{" "}
    <link_1.default href="/" className="cursor-pointer">
      {title}
    </link_1.default>
    . All Rights Reserved.
  </span>);
