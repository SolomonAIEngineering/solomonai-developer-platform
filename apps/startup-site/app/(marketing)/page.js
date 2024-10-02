"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;
const client_section_1 = __importDefault(require("@/components/landing/client-section"));
const cta_section_1 = __importDefault(require("@/components/landing/cta-section"));
const hero_section_1 = __importDefault(require("@/components/landing/hero-section"));
const pricing_section_1 = __importDefault(require("@/components/landing/pricing-section"));
const particles_1 = __importDefault(require("@/components/magicui/particles"));
const sphere_mask_1 = require("@/components/magicui/sphere-mask");
async function Page() {
    return (<>
      <hero_section_1.default />
      <client_section_1.default />
      <sphere_mask_1.SphereMask />
      <pricing_section_1.default />
      <cta_section_1.default />
      <particles_1.default className="absolute inset-0 -z-10" quantity={50} ease={70} size={0.05} staticity={40} color={"#ffffff"}/>
    </>);
}
