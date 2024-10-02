"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWithNavigationPropsAndCallback = exports.ButtonWithNavigationProps = exports.ButtonWithCallback = exports.ButtonWithClassName = exports.Default = void 0;
const logout_button_1 = require("./logout-button");
const meta = {
    component: logout_button_1.LogoutButton,
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
exports.ButtonWithCallback = {
    args: {
        className: "w-full rounded-2xl border-black",
        callback: () => {
            alert("Logout Successful");
        },
    },
};
exports.ButtonWithNavigationProps = {
    args: {
        className: "w-full rounded-2xl border-black",
        variant: "navigation",
    },
};
exports.ButtonWithNavigationPropsAndCallback = {
    args: {
        className: "w-full rounded-2xl border-black",
        variant: "navigation",
        callback: () => {
            alert("Logout Successful");
        },
    },
};
