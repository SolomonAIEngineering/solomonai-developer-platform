"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Logos;
const marquee_1 = __importDefault(require("@/components/magicui/marquee"));
const image_1 = __importDefault(require("next/image"));
const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Netflix",
    "YouTube",
    "Instagram",
    "Uber",
    "Spotify",
];
function Logos() {
    return (<section id="logos">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h3 className="text-center text-sm font-semibold text-gray-500">
          TRUSTED BY LEADING TEAMS
        </h3>
        <div className="relative mt-6">
          <marquee_1.default className="max-w-full [--duration:40s]">
            {companies.map((logo, idx) => (<image_1.default key={idx} width={112} height={40} src={`https://cdn.magicui.design/companies/${logo}.svg`} className="h-10 w-28 dark:brightness-0 dark:invert grayscale opacity-30" alt={logo}/>))}
          </marquee_1.default>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>);
}
