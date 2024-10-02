"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
const features_vertical_1 = __importDefault(require("@/components/features-vertical"));
const section_1 = __importDefault(require("@/components/section"));
const lucide_react_1 = require("lucide-react");
const data = [
    {
        id: 1,
        title: "1. Upload Your Data",
        content: "Simply upload your data to our secure platform. We support various file formats and data types to ensure a seamless integration with your existing systems.",
        image: "/dashboard.png",
        icon: <lucide_react_1.Upload className="w-6 h-6 text-primary"/>,
    },
    {
        id: 2,
        title: "2. Click Start",
        content: "Our advanced AI algorithms automatically process and analyze your data, extracting valuable insights and patterns that would be difficult to identify manually.",
        image: "/dashboard.png",
        icon: <lucide_react_1.Zap className="w-6 h-6 text-primary"/>,
    },
    {
        id: 3,
        title: "3. Get Actionable Insights",
        content: "Receive clear, actionable insights and recommendations based on the AI analysis. Use these insights to make data-driven decisions and improve your business strategies.",
        image: "/dashboard.png",
        icon: <lucide_react_1.Sparkles className="w-6 h-6 text-primary"/>,
    },
];
function Component() {
    return (<section_1.default title="How it works" subtitle="Just 3 steps to get started">
      <features_vertical_1.default data={data}/>
    </section_1.default>);
}
