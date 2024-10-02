"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashflowDashboardOverview = void 0;
const financial_data_generator_1 = require("../../../../lib/random/financial-data-generator");
const cn_1 = require("../../../../utils/cn");
const net_expense_chart_1 = require("../expenses/net-expense-chart");
const net_income_chart_1 = require("../net-income/net-income-chart");
const CashflowDashboardOverview = ({ className, title, disabled, incomeMetrics, expenseMetrics, ...rest }) => {
    const rootClassName = (0, cn_1.cn)("grid gap-4 w-full", className, disabled && "opacity-50 pointer-events-none");
    if (disabled) {
        expenseMetrics =
            financial_data_generator_1.FinancialDataGenerator.generateExpenseMetricsAcrossManyYears(2022, 2024);
        incomeMetrics = financial_data_generator_1.FinancialDataGenerator.generateIncomeMetricsAcrossManyYears(2022, 2024);
    }
    return (<div {...rest} className={rootClassName}>
      {title && <h2 className="text-xl sm:text-2xl font-bold mb-4">{title}</h2>}

      <div className="min-h-64 sm:min-h-96 rounded-lg p-4">
        {/* Add your chart component here */}
        <net_income_chart_1.NetIncomeChart disabled={disabled} incomeMetrics={incomeMetrics} currency={"USD"} title={"Net Income"} price={1000} priceChange={20}/>
      </div>

      {/* Expense and income */}
      <div className="grid gap-4">
        {expenseMetrics && expenseMetrics.length > 0 && (<div className="rounded-lg p-4 md:h-full">
            {/* Add your expenses component here */}
            <net_expense_chart_1.NetExpenseChart disabled={disabled} expenseMetrics={expenseMetrics} currency={"USD"} title={"Net Expense"} price={1000} priceChange={20}/>
          </div>)}
      </div>
    </div>);
};
exports.CashflowDashboardOverview = CashflowDashboardOverview;
