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
exports.IncomeExpenseChart = exports.CHART_TYPES = void 0;
exports.getChartTypeLabel = getChartTypeLabel;
exports.getChartTypeDescription = getChartTypeDescription;
const react_1 = __importStar(require("react"));
const expense_and_income_metrics_converter_1 = require("../../../../lib/converters/expense-and-income-metrics-converter");
const select_1 = require("../../../select");
const area_chart_1 = require("../../base/area-chart");
const scatter_chart_1 = require("../../base/scatter-chart");
const chartTypes = [
    "txnCountVsMonth",
    "txnCountVsTotalAmount",
    "totalAmountVsMonth",
    "totalAmountVsCategory",
    "txnCountVsCategory",
    "aggregatedTotalAmountVsCategory",
    "aggregatedTxnCountVsCategory",
];
exports.CHART_TYPES = [
    {
        label: "Transaction Count vs Month",
        value: "txnCountVsMonth",
        description: "Shows how the number of transactions changes over time",
    },
    {
        label: "Transaction Count vs Total Amount",
        value: "txnCountVsTotalAmount",
        description: "Compares the number of transactions to the total amount",
    },
    {
        label: "Total Amount vs Month",
        value: "totalAmountVsMonth",
        description: "Displays the total amount trend over time",
    },
    {
        label: "Total Amount by Category",
        value: "totalAmountVsCategory",
        description: "Breaks down total amount across different categories",
    },
    {
        label: "Transaction Count by Category",
        value: "txnCountVsCategory",
        description: "Shows the number of transactions for each category",
    },
    {
        label: "Aggregated Total Amount by Category",
        value: "aggregatedTotalAmountVsCategory",
        description: "Displays the average total amount for each category",
    },
    {
        label: "Aggregated Transaction Count by Category",
        value: "aggregatedTxnCountVsCategory",
        description: "Shows the average number of transactions for each category",
    },
];
function getChartTypeLabel(value) {
    const chartType = exports.CHART_TYPES.find((type) => type.value === value);
    return chartType ? chartType.label : value;
}
function getChartTypeDescription(value) {
    const chartType = exports.CHART_TYPES.find((type) => type.value === value);
    return chartType ? chartType.description : "";
}
const IncomeExpenseChart = ({ data, type, height = 400, width = 600, currency, locale, enableAssistantMode, enableDrillDown, }) => {
    const [selectedChart, setSelectedChart] = (0, react_1.useState)("txnCountVsMonth");
    const chartData = (0, react_1.useMemo)(() => {
        switch (selectedChart) {
            case "txnCountVsMonth":
                return expense_and_income_metrics_converter_1.FinancialMetricsScatterPlotConverter.txnCountVsMonth(data, type);
            case "txnCountVsTotalAmount":
                return expense_and_income_metrics_converter_1.FinancialMetricsScatterPlotConverter.txnCountVsTotalAmount(data, type);
            case "totalAmountVsMonth":
                return expense_and_income_metrics_converter_1.FinancialMetricsScatterPlotConverter.totalAmountVsMonth(data, type);
            case "totalAmountVsCategory":
                return expense_and_income_metrics_converter_1.FinancialMetricsScatterPlotConverter.totalAmountVsCategory(data, type);
            case "txnCountVsCategory":
                return expense_and_income_metrics_converter_1.FinancialMetricsScatterPlotConverter.txnCountVsCategory(data, type);
            case "aggregatedTotalAmountVsCategory":
                return expense_and_income_metrics_converter_1.FinancialMetricsScatterPlotConverter.aggregatedTotalAmountVsCategory(data, type);
            case "aggregatedTxnCountVsCategory":
                return expense_and_income_metrics_converter_1.FinancialMetricsScatterPlotConverter.aggregatedTxnCountVsCategory(data, type);
            default:
                return [];
        }
    }, [data, type, selectedChart]);
    const getAxisLabels = () => {
        switch (selectedChart) {
            case "txnCountVsMonth":
                return { xLabel: "Month", yLabel: "Transaction Count" };
            case "txnCountVsTotalAmount":
                return {
                    xLabel: `Total ${type === "income" ? "Income" : "Expenses"}`,
                    yLabel: "Transaction Count",
                };
            case "totalAmountVsMonth":
                return {
                    xLabel: "Month",
                    yLabel: `Total ${type === "income" ? "Income" : "Expenses"}`,
                };
            case "totalAmountVsCategory":
            case "aggregatedTotalAmountVsCategory":
                return {
                    xLabel: "Category",
                    yLabel: `Total ${type === "income" ? "Income" : "Expenses"}`,
                };
            case "txnCountVsCategory":
            case "aggregatedTxnCountVsCategory":
                return { xLabel: "Category", yLabel: "Transaction Count" };
            default:
                return { xLabel: "X Axis", yLabel: "Y Axis" };
        }
    };
    const { xLabel, yLabel } = getAxisLabels();
    const txnCountvsMonthBarData = (0, react_1.useMemo)(() => {
        return expense_and_income_metrics_converter_1.FinancialMetricsScatterPlotConverter.txnCountVsMonthChartDataPoint(data, type);
    }, [data, type]);
    const totalAmountvsMonthBarData = (0, react_1.useMemo)(() => {
        return expense_and_income_metrics_converter_1.FinancialMetricsScatterPlotConverter.totalAmountVsMonthChartDataPoint(data, type);
    }, [data, type]);
    return (<div>
      <select_1.Select onValueChange={(value) => setSelectedChart(value)} value={selectedChart}>
        <select_1.SelectTrigger className="mb-4 w-fit">
          <select_1.SelectValue placeholder="Select a category"/>
        </select_1.SelectTrigger>
        <select_1.SelectContent>
          {chartTypes.map((category) => (<select_1.SelectItem key={category} value={category}>
              {getChartTypeLabel(category)}
            </select_1.SelectItem>))}
        </select_1.SelectContent>
      </select_1.Select>
      <div>
        <p className="text-lg font-bold md:text-2xl">
          {getChartTypeLabel(selectedChart)}
        </p>
        <scatter_chart_1.ScatterChart currency={currency} data={chartData} height={height} locale={locale} enableAssistantMode={enableAssistantMode} xUNit="" yUnit={currency}/>
        <p className="font-base text-sm">
          {getChartTypeDescription(selectedChart)}
        </p>
      </div>

      {enableDrillDown && (<div className="grid gap-2 py-[2%] md:grid-cols-1">
          <div className="border-none shadow-none">
            <p className="text-lg font-bold md:text-2xl">
              Transaction Count vs. {xLabel}
            </p>
            <area_chart_1.AreaChart currency={currency} data={txnCountvsMonthBarData} height={height} locale={locale} enableAssistantMode={enableAssistantMode}/>
          </div>
          <div className="border-none shadow-none">
            <p className="text-lg font-bold md:text-2xl">
              Total Amount vs. {xLabel}
            </p>
            <area_chart_1.AreaChart currency={currency} data={totalAmountvsMonthBarData} height={height} locale={locale} enableAssistantMode={enableAssistantMode}/>
          </div>
        </div>)}
    </div>);
};
exports.IncomeExpenseChart = IncomeExpenseChart;
