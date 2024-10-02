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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingSection = void 0;
const react_1 = __importStar(require("react"));
const react_icons_1 = require("@radix-ui/react-icons");
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../../utils");
const button_1 = require("../button");
const switch_1 = require("../switch");
/**
 * Converts price in cents to human-readable format
 * @param {number} price - Price in cents
 * @param {number} decimals - Number of decimal places
 * @returns {string} Formatted price
 */
const toHumanPrice = (price, decimals = 2) => {
    return Number(price / 100).toFixed(decimals);
};
/**
 * Demo pricing plans
 */
const demoPrices = [
    {
        id: "price_1",
        name: "Basic",
        description: "A basic plan for startups and individual users",
        features: [
            "AI-powered analytics",
            "Basic support",
            "5 projects limit",
            "Access to basic AI tools",
        ],
        monthlyPrice: 1000,
        yearlyPrice: 10000,
        isMostPopular: false,
    },
    {
        id: "price_2",
        name: "Premium",
        description: "A premium plan for growing businesses",
        features: [
            "Advanced AI insights",
            "Priority support",
            "Unlimited projects",
            "Access to all AI tools",
            "Custom integrations",
        ],
        monthlyPrice: 2000,
        yearlyPrice: 20000,
        isMostPopular: true,
    },
    {
        id: "price_5",
        name: "Enterprise",
        description: "An enterprise plan with advanced features for large organizations",
        features: [
            "Custom AI solutions",
            "24/7 dedicated support",
            "Unlimited projects",
            "Access to all AI tools",
            "Custom integrations",
            "Data security and compliance",
        ],
        monthlyPrice: 5000,
        yearlyPrice: 50000,
        isMostPopular: false,
    },
    {
        id: "price_6",
        name: "Ultimate",
        description: "The ultimate plan with all features for industry leaders",
        features: [
            "Bespoke AI development",
            "White-glove support",
            "Unlimited projects",
            "Priority access to new AI tools",
            "Custom integrations",
            "Highest data security and compliance",
        ],
        monthlyPrice: 8000,
        yearlyPrice: 80000,
        isMostPopular: false,
    },
];
/**
 * PricingSection component
 * @returns {JSX.Element} Rendered PricingSection component
 */
const PricingSection = () => {
    const [interval, setInterval] = (0, react_1.useState)("month");
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const [id, setId] = (0, react_1.useState)(null);
    /**
     * Handles subscription button click
     * @param {string} priceId - ID of the selected pricing plan
     */
    const onSubscribeClick = async (priceId) => {
        setIsLoading(true);
        setId(priceId);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
        setIsLoading(false);
    };
    return (<section id="pricing">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <PricingSectionHeader />
        <IntervalToggle interval={interval} setInterval={setInterval}/>
        <PricingPlans interval={interval} isLoading={isLoading} id={id} onSubscribeClick={onSubscribeClick}/>
      </div>
    </section>);
};
exports.PricingSection = PricingSection;
/**
 * PricingSectionHeader component
 * @returns {JSX.Element} Rendered PricingSectionHeader component
 */
function PricingSectionHeader() {
    return (<div className="mx-auto max-w-5xl text-center">
      <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
        Pricing
      </h4>
      <h2 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
        Simple pricing for everyone.
      </h2>
      <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
        Choose an <strong>affordable plan</strong> that&apos;s packed with the
        best features for engaging your audience, creating customer loyalty, and
        driving sales.
      </p>
    </div>);
}
/**
 * IntervalToggle component
 * @param {IntervalToggleProps} props - Component props
 * @returns {JSX.Element} Rendered IntervalToggle component
 */
function IntervalToggle({ interval, setInterval, }) {
    return (<div className="flex w-full items-center justify-center space-x-2">
      <switch_1.Switch id="interval" onCheckedChange={(checked) => {
            setInterval(checked ? "year" : "month");
        }}/>
      <span>Annual</span>
      <span className="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black">
        2 MONTHS FREE ✨
      </span>
    </div>);
}
/**
 * PricingPlans component
 * @param {PricingPlansProps} props - Component props
 * @returns {JSX.Element} Rendered PricingPlans component
 */
function PricingPlans({ interval, isLoading, id, onSubscribeClick, }) {
    return (<div className="mx-auto grid w-full flex-col justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {demoPrices.map((price, idx) => (<PricingPlanCard key={price.id} price={price} interval={interval} isLoading={isLoading} id={id} onSubscribeClick={onSubscribeClick} idx={idx}/>))}
    </div>);
}
/**
 * PricingPlanCard component
 * @param {PricingPlanCardProps} props - Component props
 * @returns {JSX.Element} Rendered PricingPlanCard component
 */
function PricingPlanCard({ price, interval, isLoading, id, onSubscribeClick, idx, }) {
    return (<div className={(0, utils_1.cn)("relative flex max-w-[400px] flex-col gap-8 overflow-hidden rounded-2xl border p-4 text-black dark:text-white", {
            "border-2 border-[var(--color-one)] dark:border-[var(--color-one)]": price.isMostPopular,
        })}>
      <PricingPlanHeader price={price}/>
      <PricingPlanPrice price={price} interval={interval} idx={idx}/>
      <SubscribeButton price={price} isLoading={isLoading} id={id} onSubscribeClick={onSubscribeClick}/>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0"/>
      <PricingPlanFeatures features={price.features}/>
    </div>);
}
/**
 * PricingPlanHeader component
 * @param {PricingPlanHeaderProps} props - Component props
 * @returns {JSX.Element} Rendered PricingPlanHeader component
 */
function PricingPlanHeader({ price }) {
    return (<div className="flex items-center">
      <div className="ml-4">
        <h2 className="text-base font-semibold leading-7">{price.name}</h2>
        <p className="h-12 text-sm leading-5 text-black/70 dark:text-white">
          {price.description}
        </p>
      </div>
    </div>);
}
/**
 * PricingPlanPrice component
 * @param {PricingPlanPriceProps} props - Component props
 * @returns {JSX.Element} Rendered PricingPlanPrice component
 */
function PricingPlanPrice({ price, interval, idx, }) {
    return (<framer_motion_1.motion.div key={`${price.id}-${interval}`} initial="initial" animate="animate" variants={{
            initial: {
                opacity: 0,
                y: 12,
            },
            animate: {
                opacity: 1,
                y: 0,
            },
        }} transition={{
            duration: 0.4,
            delay: 0.1 + idx * 0.05,
            ease: [0.21, 0.47, 0.32, 0.98],
        }} className="flex flex-row gap-1">
      <span className="text-4xl font-bold text-black dark:text-white">
        $
        {interval === "year"
            ? toHumanPrice(price.yearlyPrice, 0)
            : toHumanPrice(price.monthlyPrice, 0)}
        <span className="text-xs"> / {interval}</span>
      </span>
    </framer_motion_1.motion.div>);
}
/**
 * SubscribeButton component
 * @param {SubscribeButtonProps} props - Component props
 * @returns {JSX.Element} Rendered SubscribeButton component
 */
function SubscribeButton({ price, isLoading, id, onSubscribeClick, }) {
    return (<button_1.Button className={(0, utils_1.cn)("group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter", "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2")} disabled={isLoading} onClick={() => void onSubscribeClick(price.id)}>
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black"/>
      {(!isLoading || (isLoading && id !== price.id)) && <p>Subscribe</p>}
      {isLoading && id === price.id && <p>Subscribing</p>}
      {isLoading && id === price.id && (<lucide_react_1.Loader className="mr-2 h-4 w-4 animate-spin"/>)}
    </button_1.Button>);
}
/**
 * PricingPlanFeatures component
 * @param {PricingPlanFeaturesProps} props - Component props
 * @returns {JSX.Element} Rendered PricingPlanFeatures component
 */
function PricingPlanFeatures({ features, }) {
    return (<ul className="flex flex-col gap-2 font-normal">
      {features.map((feature, idx) => (<li key={idx} className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
          <react_icons_1.CheckIcon className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white"/>
          <span className="flex">{feature}</span>
        </li>))}
    </ul>);
}
