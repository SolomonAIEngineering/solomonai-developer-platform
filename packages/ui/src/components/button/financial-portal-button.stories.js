"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWithClassName = exports.Default = void 0;
const financial_portal_button_1 = require("./financial-portal-button");
const meta = {
    component: financial_portal_button_1.FinancialPortalButton,
    argTypes: {
        className: {
            control: "text",
            defaultValue: "", // Default value
        },
    },
};
exports.default = meta;
exports.Default = {};
exports.ButtonWithClassName = {
    args: {
        className: "w-full rounded-2xl border-black",
    },
};
