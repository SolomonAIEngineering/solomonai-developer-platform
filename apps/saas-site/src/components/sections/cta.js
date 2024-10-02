"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CtaSection;
const icons_1 = require("@/components/icons");
const section_1 = __importDefault(require("@/components/section"));
const button_1 = require("@/components/ui/button");
const utils_1 = require("@/lib/utils");
const link_1 = __importDefault(require("next/link"));
function CtaSection() {
    return (<section_1.default id="cta" title="Ready to get started?" subtitle="Start your free trial today." className="bg-primary/10 rounded-xl py-16">
      <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        <link_1.default href="/signup" className={(0, utils_1.cn)((0, button_1.buttonVariants)({ variant: "default" }), "w-full sm:w-auto text-background flex gap-2")}>
          <icons_1.Icons.logo className="h-6 w-6"/>
          Get started for free
        </link_1.default>
      </div>
    </section_1.default>);
}
