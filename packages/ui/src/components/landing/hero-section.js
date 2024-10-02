"use client";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroImage = void 0;
exports.default = HeroSection;
const react_1 = __importStar(require("react"));
const react_icons_1 = require("@radix-ui/react-icons");
const framer_motion_1 = require("framer-motion");
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
const border_beam_1 = require("../magicui/border-beam");
const text_shimmer_1 = __importDefault(require("../magicui/text-shimmer"));
/**
 * HeroSection component for displaying a featured section on a landing page.
 * @param {HeroSectionProps} props - The props for the HeroSection component
 * @returns {JSX.Element} The rendered HeroSection component
 *
 * @examples
 * import { HeroSection } from "@/components/landing/hero-section";
 *
 * <HeroSection
    title="Magic UI is the new way to build landing pages."
    subtitle="Beautifully designed, animated components and templates built with Tailwind CSS, React, and Framer Motion."
    ctaText="Get Started for free"
    darkImageSrc="/hero-dark.png"
    lightImageSrc="/hero-light.png"
    />
 */
function HeroSection({ title, subtitle, ctaText, darkImageSrc, lightImageSrc, children, announcement, className, }) {
    const ref = (0, react_1.useRef)(null);
    const inView = (0, framer_motion_1.useInView)(ref, { once: true, margin: "-100px" });
    return (<section id="hero" className={(0, cn_1.cn)("relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8", className)}>
      {announcement && <AnnouncementBanner text={announcement}/>}
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <div className="grid grid-cols-1 gap-1">
        <CTAButton>{ctaText}</CTAButton>
        {children}
      </div>

      {darkImageSrc && lightImageSrc ? (<exports.HeroImage ref={ref} inView={inView} darkImageSrc={darkImageSrc} lightImageSrc={lightImageSrc}/>) : (<div className="animate-fade-up relative mt-[8rem] [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"></div>)}
    </section>);
}
/**
 * AnnouncementBanner component for displaying a highlighted announcement.
 * @returns {JSX.Element} The rendered AnnouncementBanner component
 */
const AnnouncementBanner = ({ text }) => (<div className="backdrop-filter-[12px] animate-fade-in group inline-flex h-7 translate-y-[-1rem] items-center justify-between gap-1 rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 dark:text-white">
    <text_shimmer_1.default className="inline-flex items-center justify-center">
      <span>✨ {text}</span>{" "}
      <react_icons_1.ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"/>
    </text_shimmer_1.default>
  </div>);
/**
 * Title component for displaying the main heading.
 * @param {Object} props - The props for the Title component
 * @param {React.ReactNode} props.children - The content to be displayed as the title
 * @returns {JSX.Element} The rendered Title component
 */
const Title = ({ children }) => (<h1 className="animate-fade-in translate-y-[-1rem] text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl">
    {children}
  </h1>);
/**
 * Subtitle component for displaying secondary text.
 * @param {Object} props - The props for the Subtitle component
 * @param {React.ReactNode} props.children - The content to be displayed as the subtitle
 * @returns {JSX.Element} The rendered Subtitle component
 */
const Subtitle = ({ children }) => (<p className="animate-fade-in mb-12 translate-y-[-1rem] text-balance text-lg tracking-tight text-gray-400 [--animation-delay:400ms] md:text-xl">
    {children}
  </p>);
/**
 * CTAButton component for displaying a call-to-action button.
 * @param {Object} props - The props for the CTAButton component
 * @param {React.ReactNode} props.children - The content to be displayed on the button
 * @returns {JSX.Element} The rendered CTAButton component
 */
const CTAButton = ({ children }) => (<div className="flex items-center justify-center">
    <button_1.Button className="animate-fade-in translate-y-[-1rem] items-center justify-center gap-1 rounded-lg text-white ease-in-out [--animation-delay:600ms] dark:text-white" variant={"ghost"}>
      <span>{children}</span>
      <react_icons_1.ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"/>
    </button_1.Button>
  </div>);
/**
 * HeroImage component for displaying the main hero image.
 * @param {HeroImageProps} props - The props for the HeroImage component
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be attached to the component
 * @returns {JSX.Element} The rendered HeroImage component
 */
exports.HeroImage = react_1.default.forwardRef(({ inView, darkImageSrc, lightImageSrc }, ref) => (<div ref={ref} className="animate-fade-up relative mt-[8rem] [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">
      <div className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] ${inView ? "before:animate-image-glow" : ""}`}>
        <border_beam_1.BorderBeam size={200} duration={12} delay={11} colorFrom="var(--color-one)" colorTo="var(--color-two)"/>
        <img src={darkImageSrc} alt="Hero Image" className="relative hidden h-full w-full rounded-[inherit] border object-contain dark:block"/>
        <img src={lightImageSrc} alt="Hero Image" className="relative block h-full w-full rounded-[inherit] border object-contain dark:hidden"/>
      </div>
    </div>));
exports.HeroImage.displayName = "HeroImage";
