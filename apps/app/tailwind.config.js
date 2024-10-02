"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tailwind_config_ts_1 = __importDefault(require("@v1/ui/tailwind.config.ts"));
exports.default = {
    content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
    presets: [tailwind_config_ts_1.default],
};
