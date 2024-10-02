"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWithClassName = exports.Default = void 0;
const login_button_1 = require("./login-button");
const meta = {
    component: login_button_1.LogInButton,
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
