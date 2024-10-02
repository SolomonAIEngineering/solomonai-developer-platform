"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetIncomeChart = void 0;
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const expense_and_income_metrics_converter_1 = require("../../../../lib/converters/expense-and-income-metrics-converter");
const financial_data_generator_1 = require("../../../../lib/random/financial-data-generator");
const cn_1 = require("../../../../utils/cn");
const badge_1 = require("../../../badge");
const card_1 = require("../../../card");
const sheet_1 = require("../../../sheet");
const table_1 = require("../../../table");
const bar_chart_1 = require("../../base/bar-chart");
const category_horizontal_chart_1 = require("../categories/category-horizontal-chart");
const NetIncomeChart = ({ className, title, disabled, viewMoreHref, enableAssistantMode, enableComparison, price, priceChange, incomeMetrics, ...rest }) => {
    const rootClassName = (0, cn_1.cn)("w-full max-w-4xl bg-background text-foreground p-6", className, disabled && "opacity-50 pointer-events-none");
    // generate the net income data if disabled
    if (disabled) {
        incomeMetrics = financial_data_generator_1.FinancialDataGenerator.generateIncomeMetricsAcrossManyYears(2022, 2024);
    }
    const netIncomeData = (0, react_1.useMemo)(() => {
        return expense_and_income_metrics_converter_1.FinancialExpenseAndIncomeMetricsConverter.convertDataToChartDataPoints(incomeMetrics, "income");
    }, [incomeMetrics]);
    console.log(netIncomeData);
    const yearlyTotalIncome = (0, react_1.useMemo)(() => {
        return expense_and_income_metrics_converter_1.FinancialExpenseAndIncomeMetricsConverter.computeTotalIncomeByYear(incomeMetrics);
    }, [incomeMetrics]);
    const yearlyAverageMonthlyIncome = (0, react_1.useMemo)(() => {
        return expense_and_income_metrics_converter_1.FinancialExpenseAndIncomeMetricsConverter.computeAverageMonthlyIncomeByYear(incomeMetrics);
    }, [incomeMetrics]);
    const hasData = incomeMetrics.length > 0;
    const years = (0, react_1.useMemo)(() => {
        return Object.keys(yearlyTotalIncome).sort((a, b) => Number(a) - Number(b));
    }, [yearlyTotalIncome]);
    const monthlyIncome = (0, react_1.useMemo)(() => {
        return expense_and_income_metrics_converter_1.FinancialExpenseAndIncomeMetricsConverter.computeMonthlyIncome(incomeMetrics);
    }, [incomeMetrics]);
    const incomeByCategory = (0, react_1.useMemo)(() => {
        const categories = expense_and_income_metrics_converter_1.FinancialExpenseAndIncomeMetricsConverter.computeIncomeByCategory(incomeMetrics);
        return categories;
    }, [incomeMetrics]);
    return (<card_1.Card className={rootClassName} {...rest}>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold">Net income</h2>
          <p className="text-sm text-muted-foreground">{title}</p>
          {hasData ? (<>
              <div className="mt-2 text-3xl font-bold text-foreground">
                ${price}
              </div>
              <div className="flex items-center mt-1">
                <badge_1.Badge variant="default" className="border p-[2%]">
                  {priceChange}%
                </badge_1.Badge>
                <span className="ml-2 text-sm text-muted-foreground">
                  vs {price} in previous month
                </span>
              </div>
            </>) : (<p className="mt-2 text-sm text-muted-foreground">
              No data available
            </p>)}
        </div>
        {hasData && (<sheet_1.Sheet>
            <sheet_1.SheetTrigger asChild>
              <button className="text-sm text-muted-foreground flex items-center">
                View More <lucide_react_1.ArrowRightIcon className="ml-1 h-4 w-4"/>
              </button>
            </sheet_1.SheetTrigger>
            <sheet_1.SheetContent className="w-full md:min-w-[70%] scrollbar-hide overflow-y-auto">
              <h2 className="text-lg font-semibold mb-4">Net income details</h2>
              <h3 className="text-md font-semibold mt-4 mb-2">
                Income this month
              </h3>
              <div>
                <bar_chart_1.BarChart currency="USD" data={netIncomeData} height={300} locale="en-US" enableAssistantMode={false} enableComparison={false} disabled={disabled}/>
              </div>
              <div className="mt-6">
                <h3 className="text-md font-semibold mb-2">Key Metrics</h3>
                <table_1.Table>
                  <table_1.TableHeader>
                    <table_1.TableRow>
                      <table_1.TableHead>Metric</table_1.TableHead>
                      {years.map((year) => (<table_1.TableHead key={year}>{year}</table_1.TableHead>))}
                    </table_1.TableRow>
                  </table_1.TableHeader>
                  <table_1.TableBody>
                    <table_1.TableRow>
                      <table_1.TableCell>Average Monthly Income</table_1.TableCell>
                      {years.map((year) => (<table_1.TableCell key={year}>
                          $
                          {yearlyAverageMonthlyIncome[Number(year)]?.toFixed(2) || "N/A"}
                        </table_1.TableCell>))}
                    </table_1.TableRow>
                    <table_1.TableRow>
                      <table_1.TableCell>Year Total Income</table_1.TableCell>
                      {years.map((year) => (<table_1.TableCell key={year}>
                          $
                          {yearlyTotalIncome[Number(year)]?.toFixed(2) || "N/A"}
                        </table_1.TableCell>))}
                    </table_1.TableRow>
                  </table_1.TableBody>
                </table_1.Table>
              </div>
              <div className="mt-6 border-t flex flex-col gap-6">
                <div className="mt-6">
                  <category_horizontal_chart_1.CategoryChart data={incomeByCategory} title={"Income by Category"} description={"Income by Category over time"}/>
                </div>
                <div className="flex flex-col gap-3">
                  {monthlyIncome.map(({ month, year, totalIncome }) => (<div key={`${month}-${year}`}>
                      <div className="flex flex-1 items-center justify-between">
                        <p className="text-md font-bold">
                          {month} {year}
                        </p>
                        <p className="text-sm font-semibold">
                          ${totalIncome.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex flex-1 items-center justify-between">
                        <p className="text-sm font-normal">
                          {month.substring(0, 3)}'
                          {year.toString().substring(2, 4)} Total Income
                        </p>
                        <p className="text-xs font-semibold">
                          {totalIncome.toFixed(2)}
                        </p>
                      </div>
                    </div>))}
                </div>
              </div>
            </sheet_1.SheetContent>
          </sheet_1.Sheet>)}
      </div>
      <div className="mt-6">
        {hasData ? (<bar_chart_1.BarChart currency="USD" data={netIncomeData} height={300} locale="en-US" enableAssistantMode={enableAssistantMode} enableComparison={enableComparison} disabled={disabled}/>) : (<p className="text-center text-muted-foreground">
            No chart data available
          </p>)}
      </div>
    </card_1.Card>);
};
exports.NetIncomeChart = NetIncomeChart;