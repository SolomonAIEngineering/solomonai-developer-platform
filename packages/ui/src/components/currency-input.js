"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyInput = CurrencyInput;
const react_number_format_1 = require("react-number-format");
const input_1 = require("./input");
function CurrencyInput({ thousandSeparator = true, ...props }) {
    return (<react_number_format_1.NumericFormat thousandSeparator={thousandSeparator} customInput={input_1.Input} {...props}/>);
}
