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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileDropdown = void 0;
const react_1 = __importStar(require("react"));
const react_2 = require("@headlessui/react");
const outline_1 = require("@heroicons/react/24/outline");
const cn_1 = require("../../../utils/cn");
/**
 * Renders a profile dropdown component.
 *
 * @param {ProfileDropdownProps} props - The props for the component.
 * @param {UserAccount} props.user - The user account object.
 * @param {UserNavigationItem[]} props.navigationItems - The navigation items
 *   for the dropdown.
 * @returns {JSX.Element} The rendered profile dropdown component.
 */
const ProfileDropdown = ({ user, navigationItems, }) => {
    return (<react_2.Menu as="div" className="relative inline-block text-left">
      <react_2.Menu.Button className="-m-1.5 flex items-center p-1.5">
        <span className="sr-only">Open user menu</span>
        <img className="h-8 w-8 rounded-full bg-gray-50" src={user.profileImageUrl} alt=""/>
        <span className="hidden lg:flex lg:items-center">
          <span className="ml-4 text-sm font-semibold leading-6 text-secondary" aria-hidden="true">
            {user.username}
          </span>
          <outline_1.ChevronDownIcon className="ml-2 h-5 w-5 text-secondary" aria-hidden="true"/>
        </span>
      </react_2.Menu.Button>
      <react_2.Transition as={react_1.Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
        <react_2.Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-secondary py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
          {navigationItems.map((item) => (<react_2.Menu.Item key={item.name}>
              {({ active }) => (<a href={item.href} className={(0, cn_1.cn)(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-secondary")}>
                  {item.name}
                </a>)}
            </react_2.Menu.Item>))}
        </react_2.Menu.Items>
      </react_2.Transition>
    </react_2.Menu>);
};
exports.ProfileDropdown = ProfileDropdown;
