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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const srcDir = path.join(__dirname, "src");
const packageJsonPath = path.join(__dirname, "package.json");
function generateExports(dir, baseDir = "") {
    const exports = {};
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            const subExports = generateExports(filePath, path.join(baseDir, file));
            Object.assign(exports, subExports);
        }
        else if ((file.endsWith(".tsx") || file.endsWith(".ts")) &&
            !file.endsWith(".stories.tsx") &&
            !file.endsWith(".test.tsx") &&
            !file.endsWith(".spec.ts")) {
            const relativePath = path.join(baseDir, file);
            let exportKey = relativePath
                .replace(/\.(tsx?|js)$/, "")
                .replace(/\/index$/, "");
            exportKey = exportKey.replace(/^(components|utils|hooks|types|assets|config|context)\//, "");
            const exportValue = `./src/${relativePath}`;
            exports[`./${exportKey}`] = exportValue;
        }
    }
    return exports;
}
function updatePackageJson(newExports) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    const currentExports = packageJson.exports || {};
    // Merge current exports with new exports, giving priority to current exports
    const mergedExports = { ...newExports, ...currentExports };
    // Add PostCSS config export
    mergedExports["./postcss.config"] = "./postcss.config.js";
    // Remove leading "./" from export keys
    const cleanedExports = Object.fromEntries(Object.entries(mergedExports).map(([key, value]) => [key, value]));
    // Sort exports alphabetically
    const sortedExports = Object.fromEntries(Object.entries(cleanedExports).sort(([a], [b]) => a.localeCompare(b)));
    // Add main export
    sortedExports["."] = "./src/index.ts";
    packageJson.exports = sortedExports;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}
const newExports = generateExports(srcDir);
updatePackageJson(newExports);
console.log("Exports updated successfully!");
