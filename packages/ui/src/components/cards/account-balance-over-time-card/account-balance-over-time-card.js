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
exports.AccountBalanceOverTimeCard = void 0;
const React = __importStar(require("react"));
const cn_1 = require("../../../utils/cn");
const card_1 = require("../../card");
const account_balance_1 = require("../../charts/financials/account-balance");
/**
 * `AccountBalanceOverTimeCard` renders a card component displaying the historical account balance
 * of a given bank account identified by `plaidAccountId`.
 *
 * It fetches the account's balance history data using `useGetAccountBalanceHistoryQuery` and
 * displays it using `HistoricalAccountBalanceChart`. The component shows a spinner while the data
 * is loading, an error message if the data fetching fails, and a message prompting the user to wait
 * if the data is still being fetched.
 *
 * @param props - The props for the component.
 * @param props.accountBalanceHistory - The account balance history data for the account.
 * @returns A React functional component that displays the historical balance of a bank account.
 */
const AccountBalanceOverTimeCard = ({ accountBalanceHistory, className }) => {
    if (accountBalanceHistory.length === 0) {
        return (<div className={(0, cn_1.cn)("p-[1%]", className)}>
        <card_1.Card className="py-2">
          <card_1.CardHeader>
            <card_1.CardTitle>We are still pulling in your data!</card_1.CardTitle>
            <p>Sit tight and relax. We are still pulling in your data.</p>
          </card_1.CardHeader>
        </card_1.Card>
      </div>);
    }
    return (<div className={(0, cn_1.cn)("p-[1%]", className)}>
      <account_balance_1.AccountBalanceChart data={accountBalanceHistory} currency={"USD"}/>
    </div>);
};
exports.AccountBalanceOverTimeCard = AccountBalanceOverTimeCard;
