"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpendingOverTime = void 0;
const react_1 = require("react");
const outline_1 = require("@heroicons/react/24/outline");
const date_formater_1 = require("../../../../lib/converters/date-formater");
const expense_and_income_metrics_converter_1 = require("../../../../lib/converters/expense-and-income-metrics-converter");
const financial_data_generator_1 = require("../../../../lib/random/financial-data-generator");
const cn_1 = require("../../../../utils/cn");
const badge_1 = require("../../../badge");
const card_1 = require("../../../card");
const sheet_1 = require("../../../sheet");
const table_1 = require("../../../table");
const bar_chart_1 = require("../../base/bar-chart");
const SpendingOverTime = ({ className, title, disabled, viewMoreHref, price, priceChange, expenseMetrics, budgetedAmount, transactions, ...rest }) => {
    const rootClassName = (0, cn_1.cn)("w-full max-w-4xl bg-background text-foreground p-6", className, disabled && "opacity-50 pointer-events-none");
    // generate the net Expense data if disabled
    if (disabled) {
        expenseMetrics =
            financial_data_generator_1.FinancialDataGenerator.generateExpenseMetricsAcrossManyYears(2022, 2024);
    }
    // compute the current month's expense
    const monthlyExpense = expense_and_income_metrics_converter_1.FinancialExpenseAndIncomeMetricsConverter.calculateMonthlyTotals(expenseMetrics, "expense");
    const hasData = expenseMetrics.length > 0;
    const data = (0, react_1.useMemo)(() => {
        return expense_and_income_metrics_converter_1.FinancialExpenseAndIncomeMetricsConverter.convertDataToChartDataPoints(expenseMetrics, "expense");
    }, [expenseMetrics]);
    0;
    // get the current month as this is the last month
    const currentMonthExpense = monthlyExpense[monthlyExpense.length - 1];
    // take the transactions and break them down into months
    const transactionsByMonth = (0, react_1.useMemo)(() => {
        return transactions
            ? expense_and_income_metrics_converter_1.FinancialMetricsTransactionConverter.breakTransactionsByMonth(transactions)
            : {};
    }, [transactions]);
    return (<card_1.Card className="bg-[#0b1727] text-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Monthly spending</h2>
        <sheet_1.Sheet>
          <sheet_1.SheetTrigger asChild>
            <button className="text-sm text-foreground flex items-center gap-2">
              Transactions
              <outline_1.ArrowRightIcon className="ml-1 h-4 w-4"/>
            </button>
          </sheet_1.SheetTrigger>
          <sheet_1.SheetContent className="w-full md:min-w-[80%] overflow-y-auto z-50 py-5 md:py-15">
            <h2 className="text-xl font-semibold mb-4">
              Transactions by Month
            </h2>
            {Object.keys(transactionsByMonth).length > 0 ? (Object.entries(transactionsByMonth).map(([month, monthTransactions]) => (<div key={month} className="mb-8 overflow-x-auto">
                    <div className="flex flex-1 justify-between p-[2%]">
                      <h3 className="text-xl font-semibold mb-2">{month}</h3>
                      <p className="text-xl font-base">
                        $
                        {monthTransactions
                .reduce((acc, transaction) => acc + (transaction.amount || 0), 0)
                .toFixed(2)}
                      </p>
                    </div>
                    <div className="overflow-x-auto">
                      <table_1.Table>
                        <table_1.TableBody>
                          {monthTransactions.map((transaction, index) => (<table_1.TableRow key={index} className="rounded-2xl">
                              <table_1.TableCell>
                                {(0, date_formater_1.formatDate)(transaction.currentDate || "")}
                              </table_1.TableCell>
                              <table_1.TableCell>{transaction.accountId}</table_1.TableCell>
                              <table_1.TableCell>{transaction.name}</table_1.TableCell>
                              <table_1.TableCell>
                                ${transaction.amount?.toFixed(2)}
                              </table_1.TableCell>
                              <table_1.TableCell>
                                <badge_1.Badge variant="outline" className="p-2">
                                  {transaction.personalFinanceCategoryPrimary}
                                </badge_1.Badge>
                              </table_1.TableCell>
                            </table_1.TableRow>))}
                        </table_1.TableBody>
                      </table_1.Table>
                    </div>
                  </div>))) : (<p>No transactions available.</p>)}
          </sheet_1.SheetContent>
        </sheet_1.Sheet>
      </div>
      <div className="text-center mb-4">
        <div className="text-2xl font-bold">
          ${currentMonthExpense?.total} Spent This Month
        </div>
        {budgetedAmount && (<div className="text-sm text-[#4a90e2]">
            out of ${budgetedAmount} budgeted
          </div>)}
      </div>
      <div className="relative">
        {hasData ? (<bar_chart_1.BarChart currency="USD" data={data} height={300} locale="en-US" enableAssistantMode={false} enableComparison={false} disabled={disabled}/>) : (<p className="text-center text-muted-foreground">
            No chart data available
          </p>)}
      </div>
    </card_1.Card>);
};
exports.SpendingOverTime = SpendingOverTime;
