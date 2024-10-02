"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const blog_1 = __importDefault(require("@/components/sections/blog"));
const cta_1 = __importDefault(require("@/components/sections/cta"));
const faq_1 = __importDefault(require("@/components/sections/faq"));
const features_1 = __importDefault(require("@/components/sections/features"));
const footer_1 = __importDefault(require("@/components/sections/footer"));
const header_1 = __importDefault(require("@/components/sections/header"));
const hero_1 = __importDefault(require("@/components/sections/hero"));
const how_it_works_1 = __importDefault(require("@/components/sections/how-it-works"));
const logos_1 = __importDefault(require("@/components/sections/logos"));
const pricing_1 = __importDefault(require("@/components/sections/pricing"));
const problem_1 = __importDefault(require("@/components/sections/problem"));
const solution_1 = __importDefault(require("@/components/sections/solution"));
const testimonials_1 = __importDefault(require("@/components/sections/testimonials"));
const testimonials_carousel_1 = __importDefault(require("@/components/sections/testimonials-carousel"));
function Home() {
    return (<main>
      <header_1.default />
      <hero_1.default />
      <logos_1.default />
      <problem_1.default />
      <solution_1.default />
      <how_it_works_1.default />
      <testimonials_carousel_1.default />
      <features_1.default />
      <testimonials_1.default />
      <pricing_1.default />
      <faq_1.default />
      <blog_1.default />
      <cta_1.default />
      <footer_1.default />
    </main>);
}
