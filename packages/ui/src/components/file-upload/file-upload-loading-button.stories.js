"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingButtonWithCreateActionAndPending = exports.LoadingButtonWithDeleteAction = exports.LoadingButtonWithUpdateAction = exports.LoadingButtonWithCreateAction = exports.FileUploadLoadingButtonWithClassName = exports.Default = void 0;
const file_upload_loading_button_1 = require("./file-upload-loading-button");
const meta = {
    component: file_upload_loading_button_1.FileUploadLoadingButton,
    argTypes: {
        action: {
            control: "select",
            options: ["create", "update", "delete"],
        },
        pending: {
            control: "boolean",
        },
    },
};
exports.default = meta;
exports.Default = {};
exports.FileUploadLoadingButtonWithClassName = {
    args: {
        className: "w-full rounded-2xl border-black",
    },
};
exports.LoadingButtonWithCreateAction = {
    args: {
        action: "create",
    },
};
exports.LoadingButtonWithUpdateAction = {
    args: {
        action: "update",
    },
};
exports.LoadingButtonWithDeleteAction = {
    args: {
        action: "delete",
    },
};
exports.LoadingButtonWithCreateActionAndPending = {
    args: {
        action: "create",
        pending: true,
    },
};
