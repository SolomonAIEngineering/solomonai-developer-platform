"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWithClassName = exports.Default = void 0;
const feedback_button_1 = require("./feedback-button");
const meta = {
    component: feedback_button_1.FeedbackButton,
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
