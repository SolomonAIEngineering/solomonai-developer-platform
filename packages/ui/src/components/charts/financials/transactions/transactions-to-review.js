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
exports.TransactionsToReview = void 0;
const react_1 = __importStar(require("react"));
const expense_and_income_metrics_converter_1 = require("../../../../lib/converters/expense-and-income-metrics-converter");
const button_1 = require("../../../button");
const card_1 = require("../../../card");
const transactions_chart_1 = require("./transactions-chart");
const TransactionsToReview = ({ transactions, }) => {
    const transactionsByMonth = (0, react_1.useMemo)(() => {
        return transactions
            ? expense_and_income_metrics_converter_1.FinancialMetricsTransactionConverter.breakTransactionsByMonth(transactions)
            : {};
    }, [transactions]);
    return (<card_1.Card className="space-y-4">
      <card_1.CardHeader>
        <card_1.CardTitle className="text-3xl font-semibold">
          Transactions to Review
        </card_1.CardTitle>
      </card_1.CardHeader>
      <card_1.CardContent>
        <div className="overflow-x-auto">
          {Object.entries(transactionsByMonth).length > 0 ? (Object.entries(transactionsByMonth).map(([month, monthTransactions]) => (<transactions_chart_1.MonthlyTransactions key={month} month={month} transactions={monthTransactions}/>))) : (<p>No transactions available.</p>)}
        </div>
      </card_1.CardContent>
      <card_1.CardFooter>
        <div className="flex flex-1 justify-between">
          <p>
            Total: $
            {transactions
            .reduce((acc, transaction) => acc + (transaction.amount || 0), 0)
            .toFixed(2)}
          </p>
          <button_1.Button>View All</button_1.Button>
        </div>
      </card_1.CardFooter>
    </card_1.Card>);
};
exports.TransactionsToReview = TransactionsToReview;
