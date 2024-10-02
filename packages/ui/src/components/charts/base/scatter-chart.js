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
exports.ScatterChart = void 0;
const react_1 = __importStar(require("react"));
const recharts_1 = require("recharts");
const chart_utils_1 = require("../../../lib/chart-utils");
const generator_1 = require("../../../lib/random/generator");
const chart_wrapper_1 = require("./chart-wrapper");
/**
 * ScatterChart component that displays financial data over time.
 *
 * @param props - The component props
 * @returns A React component
 */
const ScatterChart = ({ currency, data: propData, height = 290, locale, enableAssistantMode, xUNit, yUnit, disabled = false, }) => {
    // if disabled generate random data
    const data = (0, react_1.useMemo)(() => {
        if (disabled) {
            return (0, generator_1.generateScatterChartData)({
                count: 50,
                minValue: 100,
                maxValue: 500,
            });
        }
        return propData;
    }, [disabled, propData]);
    const disabledClassName = disabled ? "opacity-15" : "";
    const [aiModalOpenState, setAiModalOpenState] = react_1.default.useState(false);
    const { isOpen, toggleOpen } = (0, chart_wrapper_1.useWrapperState)(aiModalOpenState);
    /**
     * Formats a number value as a currency string.
     *
     * @param value - The numeric value to format
     * @returns A formatted currency string
     */
    const getLabel = (value) => {
        return (0, chart_utils_1.formatAmount)({
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
            currency,
            amount: value,
            locale,
        });
    };
    return (<recharts_1.ResponsiveContainer width="100%" height={height} className="flex flex-col gap-2">
      <recharts_1.ScatterChart className={`rounded-md border ${disabledClassName}`} margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30,
        }}>
        <defs>
          <pattern id="raster" patternUnits="userSpaceOnUse" width="64" height="64">
            {/* Pattern paths */}
            {[...Array(17)].map((_, i) => (<path key={i} d={`M${-106 + i * 8} 110L${22 + i * 8} -18`} stroke="#282828"/>))}
          </pattern>
        </defs>

        <recharts_1.CartesianGrid strokeDasharray="3 3" vertical={false} className="stoke-[#DCDAD2] dark:stroke-[#2C2C2C]"/>

        <recharts_1.Tooltip cursor={{ strokeDasharray: "3 3" }} cursorStyle={{
            stroke: "hsl(var(--primary))",
            border: "1px solid hsl(var(--primary))",
            borderRadius: "3px",
        }}/>
        <recharts_1.XAxis dataKey="x" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickMargin={15} tick={{
            fill: "#606060",
            fontSize: 12,
            fontFamily: "var(--font-sans)",
        }} unit={xUNit}/>

        <recharts_1.YAxis type="number" dataKey={"y"} stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickMargin={10} tickFormatter={getLabel} tick={{
            fill: "#606060",
            fontSize: 12,
            fontFamily: "var(--font-sans)",
        }} unit={yUnit}/>

        <recharts_1.Scatter strokeWidth={2.5} type="monotone" data={data} stroke="hsl(var(--primary))" fill="url(#raster)"/>
      </recharts_1.ScatterChart>
    </recharts_1.ResponsiveContainer>);
};
exports.ScatterChart = ScatterChart;
