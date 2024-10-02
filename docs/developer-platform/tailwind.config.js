"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tw_1 = require("uploadthing/tw");
const tailwind_1 = require("@v1/tailwind");
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "../../packages/ui/dist/**/*.js"],
  darkMode: "class",
  presets: [tailwind_1.orbitKitTailwindPreset],
};
exports.default = (0, tw_1.withUt)(config);
