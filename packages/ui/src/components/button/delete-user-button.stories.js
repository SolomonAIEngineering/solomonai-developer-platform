"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWithClassName = exports.Default = void 0;
const delete_user_button_1 = require("./delete-user-button");
const meta = {
    component: delete_user_button_1.DeleteUserButton,
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
