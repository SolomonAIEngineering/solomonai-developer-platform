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
exports.TransactionCard = void 0;
const react_1 = __importStar(require("react"));
const outline_1 = require("@heroicons/react/24/outline");
const financial_data_processor_1 = require("../../../lib/financial-data-processor");
const button_1 = require("../../button");
const card_1 = require("../../card");
const sheet_1 = require("../../sheet");
const shortenIfTooLong = (str, maxLength) => str.length > maxLength ? str.substr(0, maxLength) + "..." : str;
const TransactionCard = ({ transaction, enableSimpleView = false, }) => {
    const [selectedTransaction, setSelectedTransaction] = (0, react_1.useState)(null);
    return (<sheet_1.Sheet>
      <card_1.Card className="w-full p-1">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <div className="text-md truncate font-semibold">
              {shortenIfTooLong(transaction.merchantName || "Unknown Merchant", 25)}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {transaction.categories?.map((category, index) => (<button_1.Button key={index} className="py-2 text-xs" size="sm" variant="outline">
                {category.toLowerCase()}
              </button_1.Button>))}
          </div>
          <div className="flex flex-col justify-evenly gap-1">
            {transaction.amount && (<span className="text-lg font-bold">
                {financial_data_processor_1.FinancialDataProcessor.formatCurrency(transaction.amount)}
              </span>)}
            <span className="font-base text-xs">
              {financial_data_processor_1.FinancialDataProcessor.formatDate(transaction.authorizedDate?.toString() ?? "")}
            </span>
          </div>
          <sheet_1.SheetTrigger asChild onClick={() => setSelectedTransaction(transaction)}>
            <div className="ml-3 flex flex-auto items-center truncate text-sm font-bold">
              <outline_1.ArrowLeftEndOnRectangleIcon className="h-5 w-5"/>
            </div>
          </sheet_1.SheetTrigger>
          <sheet_1.SheetContent className="p-[5%] md:min-w-[90%]">
            {selectedTransaction && (<sheet_1.SheetHeader>
                <p>{selectedTransaction.merchantName || "Unknown Merchant"}</p>
              </sheet_1.SheetHeader>)}
          </sheet_1.SheetContent>
        </div>
      </card_1.Card>
    </sheet_1.Sheet>);
};
exports.TransactionCard = TransactionCard;
