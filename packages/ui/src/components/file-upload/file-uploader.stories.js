"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const file_uploader_1 = require("./file-uploader");
const meta = {
    component: file_uploader_1.FileUploader,
    argTypes: {
        className: {
            control: "text",
            defaultValue: "", // Default value
        },
    },
};
exports.default = meta;
exports.Default = {};
