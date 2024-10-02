"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploaderWithClassName = exports.Default = void 0;
const file_uploader_primitive_1 = require("./file-uploader-primitive");
const meta = {
    component: file_uploader_primitive_1.FileUploader,
    argTypes: {
        className: {
            control: "text",
            defaultValue: "", // Default value
        },
    },
};
exports.default = meta;
exports.Default = {};
exports.FileUploaderWithClassName = {
    args: {
        className: "w-full rounded-2xl border-black",
    },
};
