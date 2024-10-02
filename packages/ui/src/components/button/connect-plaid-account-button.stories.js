"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWithClassName = exports.Default = void 0;
const connect_plaid_account_button_1 = require("./connect-plaid-account-button");
const meta = {
    component: connect_plaid_account_button_1.ConnectPlaidAccountButton,
    argTypes: {
        className: {
            control: "text",
            defaultValue: "", // Default value
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        className: "w-fit rounded-2xl border-black",
        token: "link_token",
        title: "Connect Plaid Account",
        onExit: () => {
            console.log("onExit");
        },
        onEvent: (_eventName, _metadata) => Promise.resolve(),
        onSuccess: () => { },
    },
};
exports.ButtonWithClassName = {
    args: {
        className: "w-full rounded-2xl border-black",
    },
};
