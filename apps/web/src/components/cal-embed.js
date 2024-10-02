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
exports.CalEmbed = CalEmbed;
const embed_react_1 = __importStar(require("@calcom/embed-react"));
const react_1 = require("react");
function CalEmbed({ calLink }) {
    if (!calLink) {
        return null;
    }
    (0, react_1.useEffect)(() => {
        async function initializeCalendar() {
            const cal = await (0, embed_react_1.getCalApi)();
            cal("ui", {
                styles: { branding: { brandColor: "#000000" } },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        }
        initializeCalendar();
    }, []);
    return (<embed_react_1.default calLink={calLink} style={{ width: "100%", height: "100%", overflow: "scroll" }} config={{ layout: "month_view", theme: "dark" }}/>);
}
