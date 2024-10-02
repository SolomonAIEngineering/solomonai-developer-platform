"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeroSection;
const border_beam_1 = require("@/components/magicui/border-beam");
const text_shimmer_1 = __importDefault(require("@/components/magicui/text-shimmer"));
const button_1 = require("@/components/ui/button");
const react_icons_1 = require("@radix-ui/react-icons");
const framer_motion_1 = require("framer-motion");
const react_1 = require("react");
function HeroSection() {
    const ref = (0, react_1.useRef)(null);
    const inView = (0, framer_motion_1.useInView)(ref, { once: true, margin: "-100px" });
    return (<section id="hero" className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
      <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
        <text_shimmer_1.default className="inline-flex items-center justify-center">
          <span>✨ Introducing Magic UI Template</span>{" "}
          <react_icons_1.ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"/>
        </text_shimmer_1.default>
      </div>
      <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Magic UI is the new way
        <br className="hidden md:block"/> to build landing pages.
      </h1>
      <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Beautifully designed, animated components and templates built with
        <br className="hidden md:block"/> Tailwind CSS, React, and Framer
        Motion.
      </p>
      <button_1.Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms]">
        <span>Get Started for free </span>
        <react_icons_1.ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"/>
      </button_1.Button>
      <div ref={ref} className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">
        <div className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${inView ? "before:animate-image-glow" : ""}`}>
          <border_beam_1.BorderBeam size={200} duration={12} delay={11} colorFrom="var(--color-one)" colorTo="var(--color-two)"/>

          <img src="/hero-dark.png" alt="Hero Image" className="hidden relative w-full h-full rounded-[inherit] border object-contain dark:block"/>
          <img src="/hero-light.png" alt="Hero Image" className="block relative w-full h-full  rounded-[inherit] border object-contain dark:hidden"/>
        </div>
      </div>
    </section>);
}
