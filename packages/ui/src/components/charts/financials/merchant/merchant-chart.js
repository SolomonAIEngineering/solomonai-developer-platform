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
exports.MerchantFinancialChart = exports.MERCHANT_CHART_TYPES = void 0;
exports.getMerchantChartTypeLabel = getMerchantChartTypeLabel;
exports.getMerchantChartTypeDescription = getMerchantChartTypeDescription;
const react_1 = __importStar(require("react"));
const merchant_sub_profile_converter_1 = require("../../../../lib/converters/merchant-sub-profile-converter");
const select_1 = require("../../../select");
const merchant_seasonal_trends_chart_1 = require("./merchant-seasonal-trends-chart");
const merchant_spending_over_time_1 = require("./merchant-spending-over-time");
const monthly_merchant_grow_rate_1 = require("./monthly-merchant-grow-rate");
const ranked_merchant_by_spending_chart_1 = require("./ranked-merchant-by-spending-chart");
const top_merchant_chart_1 = require("./top-merchant-chart");
exports.MERCHANT_CHART_TYPES = [
    {
        label: "Spending vs Month",
        value: "spendingVsMonth",
        description: "Shows how spending changes over time for each merchant",
    },
    {
        label: "Total Spending by Merchant",
        value: "totalSpendingByMerchant",
        description: "Compares total spending across different merchants",
    },
    {
        label: "Monthly Growth Rate",
        value: "monthlyGrowthRate",
        description: "Displays the month-over-month growth rate for each merchant",
    },
    {
        label: "Seasonal Trends",
        value: "seasonalTrends",
        description: "Breaks down spending across seasons for each merchant",
    },
    {
        label: "Top Performing Merchants",
        value: "topPerformingMerchants",
        description: "Shows the top performing merchants based on growth and total spending",
    },
];
function getMerchantChartTypeLabel(value) {
    const chartType = exports.MERCHANT_CHART_TYPES.find((type) => type.value === value);
    return chartType ? chartType.label : value;
}
function getMerchantChartTypeDescription(value) {
    const chartType = exports.MERCHANT_CHART_TYPES.find((type) => type.value === value);
    return chartType ? chartType.description : "";
}
const MerchantFinancialChart = ({ data, height = 400, width = 600, currency, locale, enableAssistantMode, enableDrillDown, }) => {
    const [selectedChart, setSelectedChart] = (0, react_1.useState)("spendingVsMonth");
    const [selectedSpendingPeriod, setSelectedSpendingPeriod] = (0, react_1.useState)("spentLastMonth");
    // get unique set of merchants
    const merchants = (0, react_1.useMemo)(() => {
        return data
            .map((item) => item.merchantName)
            .filter((value, index, self) => self.indexOf(value) === index);
    }, [data]);
    // set the default selected merchant
    const [selectedMerchant, setSelectedMerchant] = (0, react_1.useState)(merchants[0] || "");
    const chartData = (0, react_1.useMemo)(() => {
        switch (selectedChart) {
            case "spendingVsMonth":
                return merchant_sub_profile_converter_1.MerchantFinancialMetricsConverter.generateSpendingTimeSeries(data, selectedSpendingPeriod);
            case "totalSpendingByMerchant":
                return merchant_sub_profile_converter_1.MerchantFinancialMetricsConverter.rankMerchantsBySpending(data, selectedSpendingPeriod);
            case "monthlyGrowthRate":
                return merchant_sub_profile_converter_1.MerchantFinancialMetricsConverter.calculateMonthlyGrowthRate(data, selectedSpendingPeriod);
            case "seasonalTrends":
                return merchant_sub_profile_converter_1.MerchantFinancialMetricsConverter.identifySeasonalTrends(data, selectedSpendingPeriod);
            case "topPerformingMerchants":
                return merchant_sub_profile_converter_1.MerchantFinancialMetricsConverter.identifyTopPerformingMerchants(data, selectedSpendingPeriod, 10);
            default:
                return [];
        }
    }, [data, selectedChart, selectedSpendingPeriod]);
    const chartComponent = (0, react_1.useMemo)(() => {
        switch (selectedChart) {
            case "spendingVsMonth":
                return (<merchant_spending_over_time_1.MerchantSpendingVsMonthChart currency={currency} locale={locale} enableAssistantMode={enableAssistantMode} merchants={merchants} selectedSpendingPeriod={selectedSpendingPeriod} records={data}/>);
            case "totalSpendingByMerchant":
                return (<ranked_merchant_by_spending_chart_1.RankedMerchantsBySpendingChart currency={currency} locale={locale} enableAssistantMode={enableAssistantMode} selectedSpendingPeriod={selectedSpendingPeriod} records={data} xUNit={""} yUnit={currency}/>);
            case "monthlyGrowthRate":
                return (<monthly_merchant_grow_rate_1.MonthlyMerchantGrowthRateChart currency={currency} locale={locale} enableAssistantMode={enableAssistantMode} merchants={merchants} selectedSpendingPeriod={selectedSpendingPeriod} records={data}/>);
            case "seasonalTrends":
                return (<merchant_seasonal_trends_chart_1.MerchantSeasonalTrendsChart currency={currency} locale={locale} enableAssistantMode={enableAssistantMode} merchants={merchants} selectedSpendingPeriod={selectedSpendingPeriod} records={data} xUNit={""} yUnit={currency}/>);
            case "topPerformingMerchants":
                return (<top_merchant_chart_1.TopMerchantChart merchants={merchants} selectedSpendingPeriod={selectedSpendingPeriod} records={data}/>);
            default:
                return null;
        }
    }, [data, selectedChart, selectedSpendingPeriod]);
    const getAxisLabels = () => {
        switch (selectedChart) {
            case "spendingVsMonth":
                return { xLabel: "Month", yLabel: "Spending" };
            case "totalSpendingByMerchant":
                return { xLabel: "Merchant", yLabel: "Total Spending" };
            case "monthlyGrowthRate":
                return { xLabel: "Month", yLabel: "Growth Rate (%)" };
            case "seasonalTrends":
                return { xLabel: "Season", yLabel: "Spending" };
            case "topPerformingMerchants":
                return { xLabel: "Merchant", yLabel: "Performance Score" };
            default:
                return { xLabel: "X Axis", yLabel: "Y Axis" };
        }
    };
    const { xLabel, yLabel } = getAxisLabels();
    const topPerformingMerchants = merchant_sub_profile_converter_1.MerchantFinancialMetricsConverter.identifyTopPerformingMerchants(data, selectedSpendingPeriod, 5);
    const seasonalTrends = merchant_sub_profile_converter_1.MerchantFinancialMetricsConverter.identifySeasonalTrends(data, selectedSpendingPeriod);
    return (<div className="min-w-full md:min-w-[600px]">
      <div className="flex flex-1 justify-between gap-x-[2%]">
        <select_1.Select onValueChange={(value) => setSelectedChart(value)} value={selectedChart}>
          <select_1.SelectTrigger className="mb-4 w-fit">
            <select_1.SelectValue placeholder="Select a chart type"/>
          </select_1.SelectTrigger>
          <select_1.SelectContent>
            {exports.MERCHANT_CHART_TYPES.map((chartType) => (<select_1.SelectItem key={chartType.value} value={chartType.value}>
                {chartType.label}
              </select_1.SelectItem>))}
          </select_1.SelectContent>
        </select_1.Select>
        <select_1.Select onValueChange={(value) => setSelectedSpendingPeriod(value)} value={selectedSpendingPeriod}>
          <select_1.SelectTrigger className="mb-4 w-fit">
            <select_1.SelectValue placeholder="Select a spending period"/>
          </select_1.SelectTrigger>
          <select_1.SelectContent>
            <select_1.SelectItem value="spentLastWeek">Last Week</select_1.SelectItem>
            <select_1.SelectItem value="spentLastTwoWeeks">Last Two Weeks</select_1.SelectItem>
            <select_1.SelectItem value="spentLastMonth">Last Month</select_1.SelectItem>
            <select_1.SelectItem value="spentLastSixMonths">Last Six Months</select_1.SelectItem>
            <select_1.SelectItem value="spentLastYear">Last Year</select_1.SelectItem>
            <select_1.SelectItem value="spentLastTwoYears">Last Two Years</select_1.SelectItem>
          </select_1.SelectContent>
        </select_1.Select>
      </div>
      <div>
        <p className="text-lg font-bold md:text-2xl">
          {getMerchantChartTypeLabel(selectedChart)}
        </p>
        {chartComponent}
        <p className="font-base text-sm">
          {getMerchantChartTypeDescription(selectedChart)}
        </p>
      </div>
    </div>);
};
exports.MerchantFinancialChart = MerchantFinancialChart;
