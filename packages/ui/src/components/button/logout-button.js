"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutButton = void 0;
const react_1 = __importDefault(require("react"));
const solid_1 = require("@heroicons/react/20/solid");
const cn_1 = require("../../utils/cn");
const _1 = require(".");
/**
 * A unified LogoutButton component that can render either as a button or a
 * navigation element.
 *
 * @param props - The props passed to control the component behavior and
 *   styling.
 * @returns {React.ReactElement}
 */
const LogoutButton = ({ variant = "button", className, callback, ...props }) => {
    if (variant === "navigation") {
        return (<div className={(0, cn_1.cn)("group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 text-foreground hover:bg-gray-50 hover:text-zinc-950", className)} onClick={callback}>
        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
          <solid_1.ExclamationTriangleIcon className="h-6 w-6 hover:border hover:border-red-600 group-hover:text-red-600" aria-hidden="true"/>
        </div>
        <div className="flex-auto">
          <div className="block font-semibold">Sign out</div>
          <p className="mt-1">Sign out of your account of interest</p>
        </div>
      </div>);
    }
    return (<_1.Button variant="ghost" onClick={callback} className={(0, cn_1.cn)("border-1 flex flex-1 items-center justify-center gap-1 font-bold", className)} {...props}>
      <solid_1.ExclamationTriangleIcon className="mr-2 h-5 w-5"/>
      <p>Sign out</p>
    </_1.Button>);
};
exports.LogoutButton = LogoutButton;
