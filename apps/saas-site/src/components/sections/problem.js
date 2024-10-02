"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
const blur_fade_1 = __importDefault(require("@/components/magicui/blur-fade"));
const section_1 = __importDefault(require("@/components/section"));
const card_1 = require("@/components/ui/card");
const lucide_react_1 = require("lucide-react");
const problems = [
    {
        title: "Data Overload",
        description: "Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation.",
        icon: lucide_react_1.Brain,
    },
    {
        title: "Slow Decision-Making",
        description: "Traditional data processing methods are too slow, causing businesses to lag behind market changes and miss crucial opportunities.",
        icon: lucide_react_1.Zap,
    },
    {
        title: "Data Security Concerns",
        description: "With increasing cyber threats, businesses worry about the safety of their sensitive information when adopting new technologies.",
        icon: lucide_react_1.Shield,
    },
];
function Component() {
    return (<section_1.default title="Problem" subtitle="Manually entering your data is a hassle.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (<blur_fade_1.default key={index} delay={0.2 + index * 0.2} inView>
            <card_1.Card className="bg-background border-none shadow-none">
              <card_1.CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </card_1.CardContent>
            </card_1.Card>
          </blur_fade_1.default>))}
      </div>
    </section_1.default>);
}