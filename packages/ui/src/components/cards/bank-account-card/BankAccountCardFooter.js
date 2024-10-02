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
exports.BankAccountCardFooter = void 0;
const react_1 = __importStar(require("react"));
const card_1 = require("../../card");
const account_balance_1 = require("../../charts/financials/account-balance");
const BankAccountCard_1 = require("./BankAccountCard");
/**
 * The `BankAccountCardFooter` component is designed to display the footer section of a bank account card in a user interface.
 *
 * This component primarily showcases:
 * - A button containing the bank account's name.
 * - An associated check icon adjacent to the account's name.
 *
 * The appearance and behavior of the footer can be customized using properties that conform to the `IBankAccountCardFooter` interface.
 *
 * @remarks
 * This component fetches bank account data from the `BankAccountContext` and displays the account's name within a button.
 * The button serves as a visual confirmation or status indicator, further emphasized by the `CheckIcon`.
 *
 * @example
 * ```tsx
 * import { BankAccountCardFooter } from './path-to-component';
 *
 * function BankAccountFooterView() {
 *   return (
 *     <BankAccountContext.Provider value={someBankAccount}>
 *       <BankAccountCardFooter className="custom-class" />
 *     </BankAccountContext.Provider>
 *   );
 * }
 * ```
 *
 * @example Applying custom styles using `className` prop:
 * ```tsx
 * <BankAccountCardFooter className="text-foreground bg-blue-500" />
 * ```
 *
 * @param props - Component properties conforming to `IBankAccountCardFooter`.
 * @returns {React.FC<IBankAccountCardFooter>} Returns a React Functional Component.
 */
const BankAccountCardFooter = (props) => {
    const { className } = props;
    const historicalAccountBalance = (0, react_1.useContext)(BankAccountCard_1.AccountBalanceHistoryContext);
    return (<card_1.CardFooter className={className}>
      <div className="w-full">
        <account_balance_1.AccountBalanceChart data={historicalAccountBalance} currency={"USD"}/>
      </div>
    </card_1.CardFooter>);
};
exports.BankAccountCardFooter = BankAccountCardFooter;
