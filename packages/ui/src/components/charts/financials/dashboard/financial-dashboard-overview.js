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
exports.MonthlySpendingChart = void 0;
const react_1 = __importStar(require("react"));
const expense_and_income_metrics_converter_1 = require("../../../../lib/converters/expense-and-income-metrics-converter");
const financial_data_generator_1 = require("../../../../lib/random/financial-data-generator");
const cn_1 = require("../../../../utils/cn");
const button_1 = require("../../../button");
const tabs_1 = require("../../../tabs");
const category_horizontal_chart_1 = require("../categories/category-horizontal-chart");
const net_expense_chart_1 = require("../expenses/net-expense-chart");
const net_income_chart_1 = require("../net-income/net-income-chart");
const transactions_to_review_1 = require("../transactions/transactions-to-review");
const MonthlySpendingChart = ({ className, title, disabled, transactions: propTransactions, expenseMetrics: propExpenseMetrics, incomeMetrics: propIncomeMetrics, ...rest }) => {
    const rootClassName = (0, cn_1.cn)("grid gap-4 w-full", className, disabled && "opacity-50 pointer-events-none");
    const expenseMetrics = (0, react_1.useMemo)(() => {
        if (disabled) {
            return financial_data_generator_1.FinancialDataGenerator.generateRandomExpenseMetrics(30, 2022);
        }
        return propExpenseMetrics;
    }, [disabled, propExpenseMetrics]);
    const incomeMetrics = (0, react_1.useMemo)(() => {
        if (disabled) {
            return financial_data_generator_1.FinancialDataGenerator.generateIncomeMetrics(30, 2022);
        }
        return propIncomeMetrics;
    }, [disabled, propIncomeMetrics]);
    const transactions = (0, react_1.useMemo)(() => {
        if (disabled) {
            return financial_data_generator_1.FinancialDataGenerator.generateRandomTransactions(30);
        }
        return propTransactions;
    }, [disabled, propTransactions]);
    const expenseByCategory = (0, react_1.useMemo)(() => {
        if (expenseMetrics && expenseMetrics.length === 0) {
            return [];
        }
        const categories = expense_and_income_metrics_converter_1.FinancialExpenseAndIncomeMetricsConverter.computeExpenseByCategory(expenseMetrics);
        return categories;
    }, [expenseMetrics]);
    const incomeByCategory = (0, react_1.useMemo)(() => {
        if (incomeMetrics && incomeMetrics.length === 0) {
            return [];
        }
        const categories = expense_and_income_metrics_converter_1.FinancialExpenseAndIncomeMetricsConverter.computeIncomeByCategory(incomeMetrics);
        return categories;
    }, [incomeMetrics]);
    const topExpenseCategories = (0, react_1.useMemo)(() => {
        if (expenseByCategory.length === 0) {
            return [];
        }
        return expenseByCategory
            .sort((a, b) => b.value - a.value)
            .slice(0, 8)
            .map((category) => ({
            name: category.category,
            total: category.value.toFixed(2),
        }));
    }, [expenseByCategory]);
    return (<div {...rest} className={rootClassName}>
      {title && <h2 className="text-xl sm:text-2xl font-bold mb-4">{title}</h2>}

      <tabs_1.Tabs defaultValue="spending">
        <tabs_1.TabsList className="grid grid-cols-2 w-fit rounded-2xl">
          <tabs_1.TabsTrigger value="spending">Spending</tabs_1.TabsTrigger>
          <tabs_1.TabsTrigger value="income">Income</tabs_1.TabsTrigger>
        </tabs_1.TabsList>
        <tabs_1.TabsContent value="spending" className="min-w-full">
          {/* Monthly spending chart */}
          <div className="min-h-64 sm:min-h-96 rounded-lg py-4">
            <net_expense_chart_1.NetExpenseChart disabled={disabled} expenseMetrics={expenseMetrics} currency={"USD"} title={"Net Expense"} price={1000} priceChange={20}/>
            {/* Add your chart component here */}
          </div>
        </tabs_1.TabsContent>
        <tabs_1.TabsContent value="income" className="min-w-full">
          {/* Monthly income chart */}
          <div className="min-h-64 sm:min-h-96 rounded-lg py-4">
            <net_income_chart_1.NetIncomeChart disabled={disabled} incomeMetrics={incomeMetrics} currency={"USD"} title={"Net Income"} price={1000} priceChange={20}/>
          </div>
        </tabs_1.TabsContent>
      </tabs_1.Tabs>

      {/* New scrollable component for top expense categories */}
      <div className="flex gap-3 items-center mb-2">
        <h3 className="text-lg font-semibold">
          Spending Across Top Categories
        </h3>
        <span className="text-md md:text-3xl font-bold">
          $
          {topExpenseCategories
            .reduce((sum, category) => sum + parseFloat(category.total), 0)
            .toFixed(2)}
        </span>
      </div>
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex space-x-2 p-2 w-max">
          {topExpenseCategories.map((category, index) => (<div key={index} className="flex-shrink-0">
              <button_1.Button variant="secondary" className="text-md flex items-center whitespace-nowrap">
                <span className="text-md font-bold mr-3">{category.name}</span>
                <span className="text-xs font-bold bg-secondary-foreground/10 px-2 py-1 rounded">
                  ${category.total}
                </span>
              </button_1.Button>
            </div>))}
        </div>
      </div>

      {/* Accounts, top categories, and transaction to review */}
      <div className="grid gap-4">
        {expenseByCategory && incomeByCategory && (<div className="rounded-lg p-4 md:h-full grid grid-cols-2">
            <div className="mt-6">
              <category_horizontal_chart_1.CategoryChart data={expenseByCategory} title={"Top Expense Category"} description={"Expense by Category over time"}/>
            </div>
            <div className="mt-6">
              <category_horizontal_chart_1.CategoryChart data={incomeByCategory} title={"Top Income Category"} description={"Income by Category over time"}/>
            </div>
          </div>)}
        <div>
          {transactions && (<div className="rounded-lg py-4 md:h-full">
              <transactions_to_review_1.TransactionsToReview transactions={transactions}/>
            </div>)}
        </div>
      </div>
    </div>);
};
exports.MonthlySpendingChart = MonthlySpendingChart;
