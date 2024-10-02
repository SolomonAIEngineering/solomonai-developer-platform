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
exports.BarChart = void 0;
const react_1 = __importStar(require("react"));
const date_fns_1 = require("date-fns");
const recharts_1 = require("recharts");
const chart_utils_1 = require("../../../lib/chart-utils");
const generator_1 = require("../../../lib/random/generator");
const cn_1 = require("../../../utils/cn");
const button_1 = require("../../button");
const chart_container_1 = require("./chart-container");
const chart_wrapper_1 = __importStar(require("./chart-wrapper"));
/**
 * Custom tooltip content component for the BarChart.
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
 * BarChart component that displays financial data over time.
 *
 * @param props - The component props
 * @returns A React component
 */
const BarChart = ({ currency, data: propData, height = 290, locale, enableAssistantMode, disabled = false, }) => {
    // if disabled generate random data
    const data = (0, react_1.useMemo)(() => {
        if (disabled) {
            return (0, generator_1.generatePayloadArray)({
                count: 50,
                minValue: 100,
                maxValue: 500,
            });
        }
        return propData;
    }, [disabled, propData]);
    const [enableCompare, setEnableCompare] = react_1.default.useState(false);
    const { isOpen, toggleOpen } = (0, chart_wrapper_1.useWrapperState)(false);
    const [dataSet, setDataSet] = react_1.default.useState(data.length > 0 ? data : []);
    const [comparisonTimePeriod, setComparisonTimePeriod] = react_1.default.useState("weekly");
    const filterDataByDateRange = (dateRange) => {
        const { from, to } = dateRange;
        setDataSet(data.filter(({ date }) => new Date(date) >= from && new Date(date) <= to));
    };
    // Add this useEffect hook to update dataSet when data changes
    react_1.default.useEffect(() => {
        setDataSet(data);
    }, [data]);
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
    const width = (0, chart_utils_1.getYAxisWidth)(yAxisLabelMaxValue);
    /**
     * Custom tooltip component for the BarChart.
     *
     * @param props - The tooltip props from recharts
     * @returns A React component
     */
    const CustomTooltip = (props) => (<ToolTipContent payload={props.payload} locale={locale} currency={currency}/>);
    // get the earliest date in the data
    // sort the data by date in ascending order
    const sortedData = data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const earliestDate = sortedData[0]?.date
        ? new Date(sortedData[0].date)
        : undefined;
    const latestDate = sortedData[sortedData.length - 1]?.date
        ? new Date(sortedData[sortedData.length - 1].date)
        : undefined;
    const differenceOverTime = (0, chart_utils_1.computeChartDataDifferenceOverTime)(data, comparisonTimePeriod);
    return (<div className="flex flex-col gap-2">
      <chart_wrapper_1.default buttonText="Open" openButtonText="Close" onOpen={() => setEnableCompare(true)} onClose={() => setEnableCompare(false)} className="hidden md:block">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold">Comparison Over Time</p>
          <div className="flex flex-1 gap-2">
            <button_1.Button size={"sm"} onClick={() => setComparisonTimePeriod("weekly")} variant={comparisonTimePeriod === "weekly" ? "default" : "outline"}>
              Weekly
            </button_1.Button>
            <button_1.Button size={"sm"} onClick={() => setComparisonTimePeriod("monthly")} variant={comparisonTimePeriod === "monthly" ? "default" : "outline"}>
              Monthly
            </button_1.Button>
          </div>
        </div>
      </chart_wrapper_1.default>
      <chart_container_1.ChartContainer data={data} dataSet={dataSet} setDataSet={setDataSet} height={height} earliestDate={earliestDate ?? new Date()} latestDate={latestDate ?? new Date()} filterDataByDateRange={filterDataByDateRange} enableAssistantMode={enableAssistantMode} disabled={disabled}>
        <recharts_1.BarChart data={enableCompare ? differenceOverTime.result : dataSet} className="rounded-md border" barGap={15} margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30,
        }}>
          <recharts_1.CartesianGrid strokeDasharray="3 3" vertical={false} className="stoke-[#DCDAD2] dark:stroke-[#2C2C2C]"/>

          <recharts_1.Tooltip content={CustomTooltip} cursor={false}/>

          <recharts_1.XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickMargin={15} tickFormatter={(value) => (0, date_fns_1.format)(new Date(value), "MMM")} tick={{
            fill: "#606060",
            fontSize: 12,
            fontFamily: "var(--font-sans)",
        }}/>

          <recharts_1.YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickMargin={10} tickFormatter={getLabel} width={(0, chart_utils_1.getYAxisWidth)(yAxisLabelMaxValue)} tick={{
            fill: "#606060",
            fontSize: 12,
            fontFamily: "var(--font-sans)",
        }}/>

          {enableCompare ? (<>
              <recharts_1.Bar dataKey="previous.value" barSize={16}>
                {differenceOverTime.result.map((entry, index) => (<recharts_1.Cell key={`cell-${index}`} className={(0, cn_1.cn)("fill-[#41191A]", +entry.previous.value > 0 &&
                    "fill-[#C6C6C6] dark:fill-[#323232]")}/>))}
              </recharts_1.Bar>

              <recharts_1.Bar dataKey="current.value" barSize={16}>
                {differenceOverTime.result.map((entry, index) => (<recharts_1.Cell key={`cell-${index}`} className={(0, cn_1.cn)("fill-[#FF3638]", +entry.current.value > 0 &&
                    "fill-[#121212] dark:fill-[#F5F5F3]")}/>))}
              </recharts_1.Bar>
            </>) : (<recharts_1.Bar barSize={16} type="monotone" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))"/>)}
        </recharts_1.BarChart>
        {/* <ChartWrapper
                buttonText="Open"
                openButtonText="Close"
                onOpen={() => setEnableCompare(true)}
                onClose={() => setEnableCompare(false)}
                className="absolute right-40 hidden md:block"
            >
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-bold">
                        Comparison Over Time
                    </p>
                    <div className="flex flex-1 gap-2">
                        <Button size={"sm"} onClick={() => setComparisonTimePeriod("weekly")} variant={
                            comparisonTimePeriod === "weekly" ? "default" : "outline"
                        }>
                            Weekly
                        </Button>
                        <Button size={"sm"} onClick={() => setComparisonTimePeriod("monthly")} variant={
                            comparisonTimePeriod === "monthly" ? "default" : "outline"
                        }>
                            Monthly
                        </Button>
                    </div>
                </div>
            </ChartWrapper> */}
      </chart_container_1.ChartContainer>
    </div>);
};
exports.BarChart = BarChart;
