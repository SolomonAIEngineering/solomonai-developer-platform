"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Footer;
const icons_1 = require("@/components/icons");
const config_1 = require("@/lib/config");
const lucide_react_1 = require("lucide-react");
const link_1 = __importDefault(require("next/link"));
function Footer() {
    return (<footer>
      <div className="max-w-6xl mx-auto py-16 sm:px-10 px-5 pb-0">
        <a href="/" title={config_1.siteConfig.name} className="relative mr-6 flex items-center space-x-2">
          <icons_1.Icons.logo className="w-auto h-[40px]"/>
          <span className="font-bold text-xl">{config_1.siteConfig.name}</span>
        </a>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 mt-8">
          {config_1.siteConfig.footer.map((section, index) => (<div key={index} className="mb-5">
              <h2 className="font-semibold">{section.title}</h2>
              <ul>
                {section.links.map((link, linkIndex) => (<li key={linkIndex} className="my-2">
                    <link_1.default href={link.href} className="group inline-flex cursor-pointer items-center justify-start gap-1 text-muted-foreground duration-200 hover:text-foreground hover:opacity-90">
                      {link.icon && link.icon}
                      {link.text}
                      <lucide_react_1.ChevronRight className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"/>
                    </link_1.default>
                  </li>))}
              </ul>
            </div>))}
        </div>
        <div className="max-w-6xl mx-auto border-t py-2 grid md:grid-cols-2 h-full justify-between w-full grid-cols-1 gap-1">
          <span className="text-sm tracking-tight text-foreground">
            Copyright © {new Date().getFullYear()}{" "}
            <link_1.default href="/" className="cursor-pointer">
              {config_1.siteConfig.name}
            </link_1.default>{" "}
            - {config_1.siteConfig.description}
          </span>
          <ul className="flex justify-start md:justify-end text-sm tracking-tight text-foreground">
            <li className="mr-3 md:mx-4">
              <link_1.default href="#" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </link_1.default>
            </li>
            <li className="mr-3 md:mx-4">
              <link_1.default href="#" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </link_1.default>
            </li>
          </ul>
        </div>
      </div>
    </footer>);
}