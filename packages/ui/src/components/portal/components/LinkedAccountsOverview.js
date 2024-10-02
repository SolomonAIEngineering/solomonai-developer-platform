"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedAccountsOverview = void 0;
const react_1 = __importDefault(require("react"));
const linked_account_card_1 = require("../../cards/linked-account-card/linked-account-card");
const LinkedAccountsOverview = ({ linkedInstitutions, }) => (<div className="grid grid-cols-1 gap-4 pt-3 md:grid-cols-3 lg:grid-cols-3">
    {linkedInstitutions.map((link, idx) => (<linked_account_card_1.LinkedAccountCard link={link} key={idx}/>))}
  </div>);
exports.LinkedAccountsOverview = LinkedAccountsOverview;
