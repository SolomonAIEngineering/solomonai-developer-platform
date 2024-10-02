"use strict";
// CreditCard.tsx
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCard = void 0;
const react_1 = __importDefault(require("react"));
const card_1 = require("../../card");
/**
 * The `CreditCard` component displays a representation of a credit card with essential details.
 */
const CreditCard = ({ cardholderName, cardNumber, expiryDate, cvv, cardType = "Visa", }) => {
    return (<card_1.Card className="m-2 rounded-lg border bg-gradient-to-tr from-gray-600 to-slate-900 p-6 text-foreground md:min-w-[300px]">
      <div className="flex justify-between">
        <div>{cardType}</div>
        <div className="font-semibold">BANK</div>
      </div>
      <div className="font-base my-4 text-lg">
        <div>{cardNumber.match(/.{1,4}/g)?.join(" ")}</div>
        <div>{cardholderName}</div>
        <div>{expiryDate}</div>
      </div>
      <div className="text-sm">CVV: {cvv.length > 0 ? cvv : "XXXX"}</div>
    </card_1.Card>);
};
exports.CreditCard = CreditCard;
