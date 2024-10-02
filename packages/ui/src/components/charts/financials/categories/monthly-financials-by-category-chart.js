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
exports.MonthlyFinancialByCategoryChart = void 0;
const react_1 = __importStar(require("react"));
const category_converter_1 = require("../../../../lib/converters/category-converter");
const financial_data_generator_1 = require("../../../../lib/random/financial-data-generator");
const cn_1 = require("../../../../utils/cn");
const accordion_1 = require("../../../accordion");
const card_1 = require("../../../card");
const select_1 = require("../../../select");
const area_chart_1 = require("../../base/area-chart");
const radial_chart_1 = require("../../base/radial-chart");
const scatter_chart_1 = require("../../base/scatter-chart");
// TODO: cluster by month (amount spent across months - totals)
// TODO: cluster by category (amount spent across categories - totals)
const MonthlyFinancialByCategoryChart = ({ currency, data: propData, type, height = 290, locale, enableAssistantMode, enableDrillDown, disabled, }) => {
    const data = (0, react_1.useMemo)(() => {
        if (disabled) {
            return type === "income"
                ? financial_data_generator_1.FinancialDataGenerator.generateUserCategoryMonthlyData(1000, 2024, "income")
                : financial_data_generator_1.FinancialDataGenerator.generateUserCategoryMonthlyData(1000, 2024, "expense");
        }
        return propData;
    }, [disabled, type, propData]);
    const getUniqueCategories = (data) => {
        return Array.from(new Set(data
            .map((item) => item.personalFinanceCategoryPrimary)
            .filter((category) => category !== undefined))).sort();
    };
    // get a unique set of primary categories
    const categories = getUniqueCategories(data);
    // if there is no data, return null
    if (!data || data.length === 0 || categories.length === 0) {
        return null;
    }
    // define a state variable to store the selected category
    const [selectedCategory, setSelectedCategory] = react_1.default.useState(categories[0] || "");
    // get the data for the selected category
    const chartData = category_converter_1.CategoryDataConverter.convertToChartDataPoints(data, selectedCategory, type === "income" ? "totalIncome" : "totalSpending");
    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
    };
    const title = type === "income"
        ? "Monthly Income By Category"
        : "Monthly Spend By Category";
    const description = type === "income"
        ? `Monthly income by category in ${currency}`
        : `Monthly spend by category in ${currency}`;
    const dataRecord = data[0];
    const monthlyTotalsAcrossAllCategories = category_converter_1.CategoryDataConverter.calculateMonthlyCategoryTotals(data, type);
    // convert to scatter chart data
    // check if the selected category exists in the monthlyTotalsAcrossAllCategories
    let scatterChartData = [];
    if (monthlyTotalsAcrossAllCategories[selectedCategory]) {
        scatterChartData = monthlyTotalsAcrossAllCategories[selectedCategory].map((item) => {
            return {
                x: item.month,
                y: item.total,
            };
        });
    }
    // compute category totals
    const categoryTotals = category_converter_1.CategoryDataConverter.calculateCategoryTotals(data, type);
    // convert to radial chart data
    const radialChartData = Object.entries(categoryTotals).map(([category, total]) => ({
        label: category,
        value: total,
    }));
    return (<div className="h-full w-full">
      <card_1.CardHeader>
        <card_1.CardTitle className="text-lg font-bold">{title}</card_1.CardTitle>
        <card_1.CardDescription>{description}</card_1.CardDescription>
      </card_1.CardHeader>
      <card_1.CardContent className="p-3">
        <select_1.Select onValueChange={handleCategoryChange} value={selectedCategory}>
          <select_1.SelectTrigger className="mb-4 w-[180px]">
            <select_1.SelectValue placeholder="Select a category"/>
          </select_1.SelectTrigger>
          <select_1.SelectContent>
            {categories.map((category) => (<select_1.SelectItem key={category} value={category}>
                {category}
              </select_1.SelectItem>))}
          </select_1.SelectContent>
        </select_1.Select>
        <div className={(0, cn_1.cn)("border-none text-white shadow-none", {
            "opacity-50": disabled,
        })}>
          <area_chart_1.AreaChart currency={currency} data={chartData} height={height} locale={locale} enableAssistantMode={enableAssistantMode} disabled={disabled}/>

          {enableDrillDown && scatterChartData.length > 0 && (<accordion_1.Accordion type="single" collapsible>
              <accordion_1.AccordionItem value="item-1">
                <accordion_1.AccordionTrigger>
                  Drill Down On {selectedCategory} Over Time
                </accordion_1.AccordionTrigger>
                <accordion_1.AccordionContent>
                  <div className="flex flex-col gap-2">
                    <radial_chart_1.RadialChart data={radialChartData} height={height} locale={locale} enableAssistantMode={enableAssistantMode} currency={currency}/>
                    <scatter_chart_1.ScatterChart currency={currency} data={scatterChartData} height={height} locale={locale} enableAssistantMode={enableAssistantMode} xUNit="" yUnit={currency}/>
                  </div>
                </accordion_1.AccordionContent>
              </accordion_1.AccordionItem>
            </accordion_1.Accordion>)}
        </div>
      </card_1.CardContent>
    </div>);
};
exports.MonthlyFinancialByCategoryChart = MonthlyFinancialByCategoryChart;
