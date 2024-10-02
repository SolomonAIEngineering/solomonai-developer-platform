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
exports.TopMerchantChart = void 0;
const react_1 = __importStar(require("react"));
const recharts_1 = require("recharts");
const merchant_sub_profile_converter_1 = require("../../../../lib/converters/merchant-sub-profile-converter");
const TopMerchantChart = ({ selectedSpendingPeriod, merchants, records, }) => {
    const chartData = (0, react_1.useMemo)(() => {
        return merchant_sub_profile_converter_1.MerchantFinancialMetricsConverter.identifyTopPerformingMerchants(records, selectedSpendingPeriod, 5);
    }, [records, selectedSpendingPeriod]);
    return (<div className="w-full">
      <recharts_1.ResponsiveContainer width="100%" height={300}>
        <recharts_1.BarChart className="rounded-md border" barGap={15} data={chartData} margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30,
        }}>
          <recharts_1.CartesianGrid strokeDasharray="3 3" vertical={false} className="stoke-[#DCDAD2] dark:stroke-[#2C2C2C]"/>
          <recharts_1.XAxis dataKey="merchant" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickMargin={15} tick={{
            fill: "#606060",
            fontSize: 12,
            fontFamily: "var(--font-sans)",
        }}/>
          <recharts_1.YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickMargin={10} tick={{
            fill: "#606060",
            fontSize: 12,
            fontFamily: "var(--font-sans)",
        }}/>
          <recharts_1.Tooltip />
          <recharts_1.Legend />
          <recharts_1.Bar dataKey="recentGrowthRate" fill="hsl(var(--primary))" activeBar={<recharts_1.Rectangle fill="black" stroke="gray"/>}/>
          <recharts_1.Bar dataKey="totalSpending" fill="#41191A" activeBar={<recharts_1.Rectangle fill="black" stroke="gray"/>}/>
        </recharts_1.BarChart>
      </recharts_1.ResponsiveContainer>
    </div>);
};
exports.TopMerchantChart = TopMerchantChart;
