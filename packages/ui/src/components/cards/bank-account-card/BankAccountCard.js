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
exports.FinancialProfileContext = exports.BankAccountContext = exports.BankAccountCard = exports.AccountBalanceHistoryContext = void 0;
const react_1 = __importStar(require("react"));
const financial_data_generator_1 = require("../../../lib/random/financial-data-generator");
const cn_1 = require("../../../utils/cn");
const card_1 = require("../../card");
const BankAccountCardContent_1 = require("./BankAccountCardContent");
const BankAccountCardFooter_1 = require("./BankAccountCardFooter");
const BankAccountCardHeader_1 = require("./BankAccountCardHeader");
// eslint-disable-next-line
/** @type {React.Context<T extends BankAccount>} */
const BankAccountContext = (0, react_1.createContext)(undefined);
exports.BankAccountContext = BankAccountContext;
const FinancialProfileContext = (0, react_1.createContext)({});
exports.FinancialProfileContext = FinancialProfileContext;
const AccountBalanceHistoryContext = (0, react_1.createContext)([]);
exports.AccountBalanceHistoryContext = AccountBalanceHistoryContext;
/**
 * Bank Account Card Component that displays the bank account information
 *
 * @param {{ bankAccount: any; FinancialUserProfile: any; className: any; contextQuestions: any; enableDemoMode: any; children: any; historicalAccountBalance: any; }} param0
 * @param {*} param0.bankAccount
 * @param {*} param0.financialProfile
 * @param {*} param0.className
 * @param {*} param0.contextQuestions
 * @param {*} param0.enableDemoMode
 * @param {*} param0.children
 * @param {*} param0.historicalAccountBalance
 * @returns {*}
 */
const BankAccountCard = ({ bankAccount, financialProfile, className, enableDemoMode, children, historicalAccountBalance, }) => {
    const currentBankAccount = enableDemoMode
        ? financial_data_generator_1.FinancialDataGenerator.generateRandomBankAccount()
        : bankAccount;
    return (<BankAccountContext.Provider value={currentBankAccount}>
      <FinancialProfileContext.Provider value={financialProfile}>
        <AccountBalanceHistoryContext.Provider value={historicalAccountBalance ? historicalAccountBalance : []}>
          <card_1.Card className={(0, cn_1.cn)("w-full leading-7 [&:not(:first-child)]:mt-6", className)}>
            <BankAccountCardHeader_1.BankAccountCardHeader />
            <BankAccountCardContent_1.BankAccountCardContent />
            <BankAccountCardFooter_1.BankAccountCardFooter />
            {children}
          </card_1.Card>
        </AccountBalanceHistoryContext.Provider>
      </FinancialProfileContext.Provider>
    </BankAccountContext.Provider>);
};
exports.BankAccountCard = BankAccountCard;
