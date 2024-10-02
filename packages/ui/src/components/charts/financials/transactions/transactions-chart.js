"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsByMonth = exports.TransactionRow = exports.MonthlyTransactions = exports.calculateMonthTotal = void 0;
const react_1 = __importDefault(require("react"));
const date_formater_1 = require("../../../../lib/converters/date-formater");
const badge_1 = require("../../../badge");
const table_1 = require("../../../table");
const TransactionsByMonth = ({ transactionsByMonth, }) => {
    const calculateMonthTotal = (transactions) => {
        return transactions.reduce((acc, transaction) => acc + (transaction.amount || 0), 0);
    };
    return (<div className="space-y-8">
      <h2 className="text-xl font-semibold">Transactions by Month</h2>
      {Object.entries(transactionsByMonth).length > 0 ? (Object.entries(transactionsByMonth).map(([month, monthTransactions]) => (<MonthlyTransactions key={month} month={month} transactions={monthTransactions}/>))) : (<p>No transactions available.</p>)}
    </div>);
};
exports.TransactionsByMonth = TransactionsByMonth;
const MonthlyTransactions = ({ month, transactions, }) => {
    const monthTotal = calculateMonthTotal(transactions);
    return (<div className="space-y-4 py-3">
      <div className="flex justify-between items-center p-2">
        <h3 className="text-xl font-semibold">{month}</h3>
        <p className="text-xl">${monthTotal.toFixed(2)}</p>
      </div>
      <div className="overflow-x-auto">
        <table_1.Table>
          <table_1.TableBody>
            {transactions.map((transaction, index) => (<TransactionRow key={index} transaction={transaction}/>))}
          </table_1.TableBody>
        </table_1.Table>
      </div>
    </div>);
};
exports.MonthlyTransactions = MonthlyTransactions;
const TransactionRow = ({ transaction }) => (<table_1.TableRow className="rounded-2xl">
    <table_1.TableCell>{(0, date_formater_1.formatDate)(transaction.currentDate || "")}</table_1.TableCell>
    <table_1.TableCell>{transaction.accountId}</table_1.TableCell>
    <table_1.TableCell>{transaction.name}</table_1.TableCell>
    <table_1.TableCell>${transaction.amount?.toFixed(2)}</table_1.TableCell>
    <table_1.TableCell>
      <badge_1.Badge variant="outline" className="p-2">
        {transaction.personalFinanceCategoryPrimary}
      </badge_1.Badge>
    </table_1.TableCell>
  </table_1.TableRow>);
exports.TransactionRow = TransactionRow;
const calculateMonthTotal = (transactions) => {
    return transactions.reduce((acc, transaction) => acc + (transaction.amount || 0), 0);
};
exports.calculateMonthTotal = calculateMonthTotal;
