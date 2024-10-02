"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hero2;
const framer_motion_1 = require("framer-motion");
const icons_1 = require("@/components/icons");
const hero_video_1 = __importDefault(require("@/components/magicui/hero-video"));
const button_1 = require("@/components/ui/button");
const utils_1 = require("@/lib/utils");
const link_1 = __importDefault(require("next/link"));
const ease = [0.16, 1, 0.3, 1];
function HeroPill() {
    return (<framer_motion_1.motion.a href="/blog/introducing-acme-ai" className="flex w-auto items-center space-x-2 rounded-full bg-primary/20 px-2 py-1 ring-1 ring-accent whitespace-pre" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
      <div className="w-fit rounded-full bg-accent px-2 py-0.5 text-center text-xs font-medium text-primary sm:text-sm">
        📣 Announcement
      </div>
      <p className="text-xs font-medium text-primary sm:text-sm">
        Introducing Acme.ai
      </p>
      <svg width="12" height="12" className="ml-1" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z" fill="hsl(var(--primary))"/>
      </svg>
    </framer_motion_1.motion.a>);
}
function HeroTitles() {
    return (<div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8">
      <framer_motion_1.motion.h1 className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl" initial={{ filter: "blur(10px)", opacity: 0, y: 50 }} animate={{ filter: "blur(0px)", opacity: 1, y: 0 }} transition={{
            duration: 1,
            ease,
            staggerChildren: 0.2,
        }}>
        {["Automate", "your", "workflow", "with AI"].map((text, index) => (<framer_motion_1.motion.span key={index} className="inline-block px-1 md:px-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease,
            }}>
            {text}
          </framer_motion_1.motion.span>))}
      </framer_motion_1.motion.h1>
      <framer_motion_1.motion.p className="mx-auto max-w-xl text-center text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{
            delay: 0.6,
            duration: 0.8,
            ease,
        }}>
        No matter what problem you have, our AI can help you solve it.
      </framer_motion_1.motion.p>
    </div>);
}
function HeroCTA() {
    return (<>
      <framer_motion_1.motion.div className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:mt-10 sm:flex-row sm:space-x-4 sm:space-y-0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8, ease }}>
        <link_1.default href="/signup" className={(0, utils_1.cn)((0, button_1.buttonVariants)({ variant: "default" }), "w-full sm:w-auto text-background flex gap-2")}>
          <icons_1.Icons.logo className="h-6 w-6"/>
          Get started for free
        </link_1.default>
      </framer_motion_1.motion.div>
      <framer_motion_1.motion.p className="mt-5 text-sm text-muted-foreground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.8 }}>
        7 day free trial. No credit card required.
      </framer_motion_1.motion.p>
    </>);
}
function HeroImage() {
    return (<framer_motion_1.motion.div className="relative mx-auto flex w-full items-center justify-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1, ease }}>
      <hero_video_1.default animationStyle="from-center" videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb" thumbnailSrc="/dashboard.png" thumbnailAlt="Hero Video" className="border rounded-lg shadow-lg max-w-screen-lg mt-16"/>
    </framer_motion_1.motion.div>);
}
function Hero2() {
    return (<section id="hero">
      <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
        <HeroPill />
        <HeroTitles />
        <HeroCTA />
        <HeroImage />
        <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4"></div>
      </div>
    </section>);
}
