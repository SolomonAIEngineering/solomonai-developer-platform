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
exports.RadialChart = void 0;
const react_1 = __importStar(require("react"));
const date_fns_1 = require("date-fns");
const recharts_1 = require("recharts");
const chart_utils_1 = require("../../../lib/chart-utils");
const chart_wrapper_1 = require("./chart-wrapper");
/**
 * Custom tooltip content component for the RadialChart.
 */
const ToolTipContent = ({ payload, currency, locale, }) => {
    if (!payload)
        return null;
    const { value = 0, date } = payload[0]?.payload ?? {};
    return (<div className="w-[240px] border bg-background shadow-sm">
      <div className="px-3 py-2">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-medium">
            {(0, chart_utils_1.formatAmount)({
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
            currency,
            amount: value,
            locale,
        })}
          </p>
          <p className="text-right text-xs text-[#606060]">
            {date && (0, date_fns_1.format)(new Date(date), "MMM, y")}
          </p>
        </div>
      </div>
    </div>);
};
/**
 * RadialChart component that displays financial data over time.
 *
 * @param props - The component props
 * @returns A React component
 */
const RadialChart = ({ currency, data: propData, height = 290, locale, enableAssistantMode, disabled = false, }) => {
    const data = (0, react_1.useMemo)(() => {
        if (disabled) {
            return [
                { label: "Math", value: 120 },
                { label: "Chinese", value: 98 },
                { label: "English", value: 86 },
                { label: "Geography", value: 99 },
                { label: "Physics", value: 85 },
                { label: "History", value: 65 },
            ];
        }
        return propData;
    }, [disabled, propData]);
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
    // Calculate the maximum Y-axis value
    const maxYAxisValue = (0, chart_utils_1.roundToNearestFactor)(data.map(({ value }) => value));
    const yAxisLabelMaxValue = getLabel(maxYAxisValue);
    /**
     * Custom tooltip component for the RadialChart.
     *
     * @param props - The tooltip props from recharts
     * @returns A React component
     */
    const CustomTooltip = (props) => (<ToolTipContent payload={props.payload} locale={locale} currency={currency}/>);
    const disabledClassName = disabled ? "opacity-15" : "";
    return (<recharts_1.ResponsiveContainer width="100%" height={height} className="flex flex-col gap-2">
      <recharts_1.RadarChart data={data} className={`rounded-md border ${disabledClassName}`} margin={{
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

        <recharts_1.PolarGrid strokeDasharray="3 3" className="stoke-[#DCDAD2] dark:stroke-[#2C2C2C]"/>

        <recharts_1.Tooltip content={CustomTooltip} cursor={false}/>

        <recharts_1.PolarAngleAxis dataKey="label" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tick={{
            fill: "#606060",
            fontSize: 12,
            fontFamily: "var(--font-sans)",
        }}/>

        <recharts_1.PolarRadiusAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} width={(0, chart_utils_1.getYAxisWidth)(yAxisLabelMaxValue)} tick={{
            fill: "#606060",
            fontSize: 12,
            fontFamily: "var(--font-sans)",
        }}/>

        <recharts_1.Radar strokeWidth={2.5} fillOpacity={0.6} type="monotone" dataKey="value" stroke="hsl(var(--primary))" fill="url(#raster)"/>
      </recharts_1.RadarChart>
    </recharts_1.ResponsiveContainer>);
};
exports.RadialChart = RadialChart;
