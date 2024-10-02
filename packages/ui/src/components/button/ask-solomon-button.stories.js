"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWithClassName = exports.InactiveButton = exports.ButtonWithCustomLabel = exports.Default = void 0;
const ask_solomon_button_1 = require("./ask-solomon-button");
const meta = {
    component: ask_solomon_button_1.AskSolomonAiButton,
    argTypes: {
        active: {
            control: "boolean",
            defaultValue: false, // Default value
        },
        className: {
            control: "text",
            defaultValue: "", // Default value
        },
        href: {
            control: "text",
            defaultValue: false, // Default value
        },
        label: {
            control: "text",
            defaultValue: false, // Default value
        },
        asChild: {
            control: "boolean",
            defaultValue: false, // Default value
        },
    },
};
exports.default = meta;
exports.Default = {};
exports.ButtonWithCustomLabel = {
    args: {
        label: "custom label",
    },
};
exports.InactiveButton = {
    args: {
        active: false,
    },
};
exports.ButtonWithClassName = {
    args: {
        className: "w-full rounded-2xl border-black",
    },
};
