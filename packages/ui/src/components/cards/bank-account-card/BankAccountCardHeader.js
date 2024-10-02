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
exports.BankAccountCardHeader = void 0;
const react_1 = __importStar(require("react"));
const financial_data_processor_1 = require("../../../lib/financial-data-processor");
const badge_1 = require("../../badge");
const button_1 = require("../../button");
const card_1 = require("../../card");
const label_1 = require("../../label");
const BankAccountCard_1 = require("./BankAccountCard");
/**
 * The `BankAccountCardHeader` component is responsible for rendering the header section of a bank account card in a user interface.
 *
 * This component showcases critical information about a bank account, such as:
 * - The account's current balance.
 * - Account name.
 * - Account subtype (e.g., Savings, Checking).
 * - Account number.
 * - A dropdown menu to view associated pockets of the bank account.
 *
 * This component relies on utility functions for formatting numbers and pocket names.
 *
 * @remarks
 * The component fetches bank account information from the `BankAccountContext` and presents it in a structured format.
 * It utilizes various UI components such as `Badge`, `Button`, `Label`, and `DropdownMenu` to display information effectively.
 *
 * @example
 * ```tsx
 * import { BankAccountCardHeader } from './path-to-component';
import { FinancialDataProcessor } from '../../../lib/financial-data-processor';
 *
 * function BankAccountView() {
 *   return (
 *     <BankAccountContext.Provider value={someBankAccount}>
 *       <BankAccountCardHeader />
 *     </BankAccountContext.Provider>
 *   );
 * }
 * ```
 *
 * @example Using within a card view:
 * ```tsx
 * <Card>
 *   <BankAccountCardHeader />
 *   // ... other card content
 * </Card>
 * ```
 *
 * @returns {React.FC} Returns a React Functional Component.
 */
const BankAccountCardHeader = () => {
    const bankAccount = (0, react_1.useContext)(BankAccountCard_1.BankAccountContext);
    if (bankAccount === undefined) {
        return null;
    }
    const bankAccountInstance = bankAccount;
    // get the goals from the pockets
    const goals = bankAccountInstance.pockets?.reduce((acc, pocket) => {
        if (pocket.goals) {
            acc += pocket.goals.length;
        }
        return acc;
    }, 0);
    const numberOfDecimalPointsToFormatNumbers = 2;
    return (<card_1.CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
      <div className="space-y-1 text-left">
        <card_1.CardTitle className="text-xs font-bold text-background dark:text-foreground">
          $
          {financial_data_processor_1.FinancialDataProcessor.formatNumber(bankAccount.balance, numberOfDecimalPointsToFormatNumbers)}
        </card_1.CardTitle>
        <card_1.CardTitle className="text-xs font-bold" style={{
            fontSize: "11px",
        }}>
          {bankAccount.name}
        </card_1.CardTitle>
        <div>
          <div className="flex flex-1 justify-start gap-2">
            <badge_1.Badge className="rounded-2xl border border-black bg-background px-2 font-bold text-foreground" style={{
            fontSize: "10px",
        }} variant={"outline"}>
              {bankAccount.subtype}
            </badge_1.Badge>
          </div>
        </div>
        <div>
          <div className="flex gap-1">
            <span className="text-xs text-gray-600 dark:text-gray-200">
              bankAccount Number:{" "}
            </span>
            <span className="text-xs font-bold">{bankAccount.number}</span>
          </div>
        </div>
        <div className="flex flex-1 gap-2">
          <label_1.Label className="text-2xl font-bold">
            $
            {financial_data_processor_1.FinancialDataProcessor.formatNumber(bankAccount.balance, numberOfDecimalPointsToFormatNumbers)}
          </label_1.Label>
          <button_1.Button className="flex justify-center rounded-2xl p-2 text-xs" variant={"outline"}>
            {bankAccountInstance.pockets?.length} Pockets
          </button_1.Button>
          <button_1.Button className="flex justify-center rounded-2xl p-2 text-xs" variant={"outline"}>
            {goals} Goals
          </button_1.Button>
        </div>
      </div>
    </card_1.CardHeader>);
};
exports.BankAccountCardHeader = BankAccountCardHeader;
