"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyProfileButton = void 0;
const react_1 = __importDefault(require("react"));
const outline_1 = require("@heroicons/react/24/outline");
const cn_1 = require("../../utils/cn");
const _1 = require(".");
/**
 * MyProfileButton Props defines the props for the MyProfileButton component.
 *
 * @property {boolean} active - Indicates whether the button is active or not.
 * @property {string} className - Additional CSS classes for styling the button.
 * @property {boolean} asChild - Optional flag to treat the button as a child
 *   component.
 * @property {string} href - The URL to link to.
 * @property {string} label - The label to display.
 * @interface MyProfileButtonProps
 */
const MyProfileButton = ({ className, href, label, }) => {
    return (<a href={href}>
      <_1.Button variant={"outline"} className={(0, cn_1.cn)("ml-3 items-center justify-center border font-bold text-foreground transition-colors duration-300 ease-in-out dark:border-white dark:bg-transparent dark:text-foreground", "hover:bg-gray-200 hover:text-background dark:hover:bg-gray-800 dark:hover:text-foreground", className)}>
        <outline_1.UserIcon className="mr-2 h-5 w-5"/>
        {label ? <p>{label}</p> : <p>My Profile</p>}
      </_1.Button>
    </a>);
};
exports.MyProfileButton = MyProfileButton;
