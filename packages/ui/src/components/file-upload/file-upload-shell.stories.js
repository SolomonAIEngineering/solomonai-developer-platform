"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadShellWithCentered = exports.FileUploadShellWithMarkdown = exports.FileUploadShellWithVariant = exports.FileUploadShellWithClassName = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const file_upload_shell_1 = require("./file-upload-shell");
const meta = {
    component: file_upload_shell_1.FileUploadShell,
    argTypes: {
        className: {
            control: "text",
            defaultValue: "", // Default value
        },
    },
};
exports.default = meta;
exports.Default = {};
exports.FileUploadShellWithClassName = {
    args: {
        className: "w-full rounded-2xl border-black",
    },
};
exports.FileUploadShellWithVariant = {
    args: {
        variant: "sidebar",
        children: (<div>
        <p>Hey Yoan</p>
      </div>),
    },
};
exports.FileUploadShellWithMarkdown = {
    args: {
        variant: "markdown",
        children: (<div>
        <p>Hey Yoan</p>
      </div>),
    },
};
exports.FileUploadShellWithCentered = {
    args: {
        variant: "centered",
        children: (<div>
        <p>Hey Yoan</p>
      </div>),
    },
};
