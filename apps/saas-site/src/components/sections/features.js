"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
const features_horizontal_1 = __importDefault(require("@/components/features-horizontal"));
const section_1 = __importDefault(require("@/components/section"));
const lucide_react_1 = require("lucide-react");
const data = [
    {
        id: 1,
        title: "AI-Powered Dashboard",
        content: "Visualize trends and gain insights at a glance.",
        image: "/dashboard.png",
        icon: <lucide_react_1.BarChart3 className="h-6 w-6 text-primary"/>,
    },
    {
        id: 2,
        title: "Natural Language Processing",
        content: "Analyze text and extract sentiment effortlessly.",
        image: "/dashboard.png",
        icon: <lucide_react_1.Brain className="h-6 w-6 text-primary"/>,
    },
    {
        id: 3,
        title: "Predictive Analytics",
        content: "Forecast trends and make data-driven decisions.",
        image: "/dashboard.png",
        icon: <lucide_react_1.LineChart className="h-6 w-6 text-primary"/>,
    },
    {
        id: 4,
        title: "Automated Reporting",
        content: "Generate comprehensive reports with one click.",
        image: "/dashboard.png",
        icon: <lucide_react_1.FileText className="h-6 w-6 text-primary"/>,
    },
];
function Component() {
    return (<section_1.default title="Features" subtitle="User Flows and Navigational Structures">
      <features_horizontal_1.default collapseDelay={5000} linePosition="bottom" data={data}/>
    </section_1.default>);
}
