"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PricingSection;
const section_1 = __importDefault(require("@/components/section"));
const button_1 = require("@/components/ui/button");
const label_1 = require("@/components/ui/label");
const switch_1 = require("@/components/ui/switch");
const config_1 = require("@/lib/config");
const use_window_size_1 = __importDefault(require("@/lib/hooks/use-window-size"));
const utils_1 = require("@/lib/utils");
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const link_1 = __importDefault(require("next/link"));
const react_1 = require("react");
const fa_1 = require("react-icons/fa");
function PricingSection() {
    const [isMonthly, setIsMonthly] = (0, react_1.useState)(true);
    const { isDesktop } = (0, use_window_size_1.default)();
    const handleToggle = () => {
        setIsMonthly(!isMonthly);
    };
    return (<section_1.default title="Pricing" subtitle="Choose the plan that's right for you">
      <div className="flex justify-center mb-10">
        <span className="mr-2 font-semibold">Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <label_1.Label>
            <switch_1.Switch checked={!isMonthly} onCheckedChange={handleToggle}/>
          </label_1.Label>
        </label>
        <span className="ml-2 font-semibold">Yearly</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:2 gap-4">
        {config_1.siteConfig.pricing.map((plan, index) => (<framer_motion_1.motion.div key={index} initial={{ y: 50, opacity: 1 }} whileInView={isDesktop
                ? {
                    y: 0,
                    opacity: 1,
                    x: index === config_1.siteConfig.pricing.length - 1
                        ? -30
                        : index === 0
                            ? 30
                            : 0,
                    scale: index === 0 || index === config_1.siteConfig.pricing.length - 1
                        ? 0.94
                        : 1.0,
                }
                : {}} viewport={{ once: true }} transition={{
                duration: 1.6,
                type: "spring",
                stiffness: 100,
                damping: 30,
                delay: 0.4,
                opacity: { duration: 0.5 },
            }} className={(0, utils_1.cn)(`rounded-2xl border-[1px] p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative`, plan.isPopular ? "border-primary border-[2px]" : "border-border", index === 0 || index === config_1.siteConfig.pricing.length - 1
                ? "z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg]"
                : "z-10", index === 0 && "origin-right", index === config_1.siteConfig.pricing.length - 1 && "origin-left")}>
            {plan.isPopular && (<div className="absolute top-0 right-0 bg-primary py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
                <fa_1.FaStar className="text-white"/>
                <span className="text-white ml-1 font-sans font-semibold">
                  Popular
                </span>
              </div>)}
            <div>
              <p className="text-base font-semibold text-muted-foreground">
                {plan.name}
              </p>
              <p className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                  {isMonthly ? plan.price : plan.yearlyPrice}
                </span>
                {plan.period !== "Next 3 months" && (<span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                    / {plan.period}
                  </span>)}
              </p>

              <p className="text-xs leading-5 text-muted-foreground">
                {isMonthly ? "billed monthly" : "billed annually"}
              </p>

              <ul className="mt-5 gap-2 flex flex-col">
                {plan.features.map((feature, idx) => (<li key={idx} className="flex items-center">
                    <lucide_react_1.Check className="mr-2 h-4 w-4 text-primary"/>
                    <span>{feature}</span>
                  </li>))}
              </ul>

              <hr className="w-full my-4"/>

              <link_1.default href={plan.href} className={(0, utils_1.cn)((0, button_1.buttonVariants)({
                variant: "outline",
            }), "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter", "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-1 hover:bg-primary hover:text-white", plan.isPopular
                ? "bg-primary text-white"
                : "bg-white text-black")}>
                {plan.buttonText}
              </link_1.default>
              <p className="mt-6 text-xs leading-5 text-muted-foreground">
                {plan.description}
              </p>
            </div>
          </framer_motion_1.motion.div>))}
      </div>
    </section_1.default>);
}
