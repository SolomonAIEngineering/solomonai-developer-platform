"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyFileUploadCardWithTitleAndDescription = exports.EmptyFileUploadCardWithTitle = exports.EmptyFileUploadCardWithActionAndIcon = exports.EmptyFileUploadCardWithIcon = exports.EmptyFileUploadCardWithAction = exports.EmptyFileUploadCardWithClassName = exports.Default = void 0;
const React = __importStar(require("react"));
const react_icons_1 = require("@radix-ui/react-icons");
const button_1 = require("../button");
const empty_file_upload_card_1 = require("./empty-file-upload-card");
const meta = {
    component: empty_file_upload_card_1.EmptyFileUploadCard,
    argTypes: {
        className: {
            control: "text",
            defaultValue: "", // Default value
        },
    },
};
exports.default = meta;
exports.Default = {};
exports.EmptyFileUploadCardWithClassName = {
    args: {
        className: "w-full rounded-2xl border-black",
    },
};
exports.EmptyFileUploadCardWithAction = {
    args: {
        action: <button_1.Button>Upload</button_1.Button>,
    },
};
exports.EmptyFileUploadCardWithIcon = {
    args: {
        icon: react_icons_1.ImageIcon,
    },
};
exports.EmptyFileUploadCardWithActionAndIcon = {
    args: {
        action: <button_1.Button>Upload</button_1.Button>,
        icon: react_icons_1.ImageIcon,
    },
};
exports.EmptyFileUploadCardWithTitle = {
    args: {
        title: "No files uploaded",
    },
};
exports.EmptyFileUploadCardWithTitleAndDescription = {
    args: {
        title: "No files uploaded",
        description: "Upload some files to see them here",
    },
};
