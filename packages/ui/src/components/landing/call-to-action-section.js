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
exports.CallToActionSection = void 0;
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../../utils");
const marquee_1 = __importDefault(require("../magicui/marquee"));
/**
 * Array of tiles with icons and background gradients
 */
const tiles = [
    {
        icon: <lucide_react_1.HeartHandshake className="size-full"/>,
        bg: (<div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px] filter"></div>),
    },
    {
        icon: <lucide_react_1.Globe className="size-full"/>,
        bg: (<div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-70 blur-[20px] filter"></div>),
    },
    {
        icon: <lucide_react_1.File className="size-full"/>,
        bg: (<div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600 opacity-70 blur-[20px] filter"></div>),
    },
    {
        icon: <lucide_react_1.Shield className="size-full"/>,
        bg: (<div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 opacity-70 blur-[20px] filter"></div>),
    },
    {
        icon: <lucide_react_1.Rss className="size-full"/>,
        bg: (<div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px] filter"></div>),
    },
    {
        icon: <lucide_react_1.BarChart className="size-full"/>,
        bg: (<div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 opacity-70 blur-[20px] filter"></div>),
    },
];
/**
 * Shuffles an array randomly
 * @param {T[]} array - Array to be shuffled
 * @returns {T[]} Shuffled array
 */
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}
/**
 * Card component
 * @param {CardProps} props - The props for the Card component
 * @returns {JSX.Element} Rendered Card component
 */
const Card = ({ icon, bg }) => {
    const id = (0, react_1.useId)();
    const controls = (0, framer_motion_1.useAnimation)();
    const ref = (0, react_1.useRef)(null);
    const inView = (0, framer_motion_1.useInView)(ref, { once: true });
    (0, react_1.useEffect)(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
            });
        }
    }, [controls, inView]);
    return (<framer_motion_1.motion.div key={id} ref={ref} initial={{ opacity: 0 }} animate={controls} className={(0, utils_1.cn)("relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4", "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]", "transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]")}>
      {icon}
      {bg}
    </framer_motion_1.motion.div>);
};
/**
 * CallToActionSection component
 * @returns {JSX.Element} Rendered CallToActionSection component
 */
const CallToActionSection = ({ title, description, children }) => {
    const [randomTiles1, setRandomTiles1] = (0, react_1.useState)([]);
    const [randomTiles2, setRandomTiles2] = (0, react_1.useState)([]);
    const [randomTiles3, setRandomTiles3] = (0, react_1.useState)([]);
    const [randomTiles4, setRandomTiles4] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        if (typeof window !== "undefined") {
            setRandomTiles1(shuffleArray([...tiles]));
            setRandomTiles2(shuffleArray([...tiles]));
            setRandomTiles3(shuffleArray([...tiles]));
            setRandomTiles4(shuffleArray([...tiles]));
        }
    }, []);
    return (<section id="cta">
      <div className="py-14">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <MarqueeRows tiles1={randomTiles1} tiles2={randomTiles2} tiles3={randomTiles3} tiles4={randomTiles4}/>
            <CTAContent title={title} description={description}>
              {children}
            </CTAContent>
            <BottomGradient />
          </div>
        </div>
      </div>
    </section>);
};
exports.CallToActionSection = CallToActionSection;
/**
 * MarqueeRows component
 * @param {MarqueeRowsProps} props - The props for the MarqueeRows component
 * @returns {JSX.Element} Rendered MarqueeRows component
 */
const MarqueeRows = ({ tiles1, tiles2, tiles3, tiles4, }) => (<>
    <marquee_1.default reverse className="-delay-[200ms] [--duration:10s]" repeat={5}>
      {tiles1.map((tile, idx) => (<Card key={idx} {...tile}/>))}
    </marquee_1.default>
    <marquee_1.default reverse className="[--duration:25s]" repeat={5}>
      {tiles2.map((tile, idx) => (<Card key={idx} {...tile}/>))}
    </marquee_1.default>
    <marquee_1.default reverse className="-delay-[200ms] [--duration:20s]" repeat={5}>
      {tiles1.map((tile, idx) => (<Card key={idx} {...tile}/>))}
    </marquee_1.default>
    <marquee_1.default reverse className="[--duration:30s]" repeat={5}>
      {tiles2.map((tile, idx) => (<Card key={idx} {...tile}/>))}
    </marquee_1.default>
    <marquee_1.default reverse className="-delay-[200ms] [--duration:20s]" repeat={5}>
      {tiles3.map((tile, idx) => (<Card key={idx} {...tile}/>))}
    </marquee_1.default>
    <marquee_1.default reverse className="[--duration:30s]" repeat={5}>
      {tiles4.map((tile, idx) => (<Card key={idx} {...tile}/>))}
    </marquee_1.default>
  </>);
/**
 * CTAContent component
 * @returns {JSX.Element} Rendered CTAContent component
 */
const CTAContent = ({ title, description, children }) => (<div className="absolute z-10">
    <div className="mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
      <lucide_react_1.Lightbulb className="mx-auto size-14 text-black dark:text-white lg:size-24"/>
    </div>
    <div className="z-10 mt-4 flex flex-col items-center text-center text-primary">
      <h1 className="text-3xl font-bold lg:text-4xl">{title}</h1>
      <p className="mt-2">{description}</p>
      {children}
    </div>
    <div className="bg-backtround absolute inset-0 -z-10 rounded-full opacity-40 blur-xl dark:bg-background"/>
  </div>);
/**
 * BottomGradient component
 * @returns {JSX.Element} Rendered BottomGradient component
 */
const BottomGradient = () => (<div className="to-backtround absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-70% dark:to-background"/>);
