"use client";
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
exports.FileUploadLoadingButton = void 0;
const React = __importStar(require("react"));
const react_icons_1 = require("@radix-ui/react-icons");
const file_upload_utils_1 = require("../../lib/file-upload-utils");
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
const FileUploadLoadingButton = React.forwardRef(({ children, className, variant, size, action, pending, ...props }, ref) => {
    const [, setButtonAction] = React.useState("create");
    return (<button_1.Button className={(0, cn_1.cn)((0, button_1.buttonVariants)({ variant, size, className }))} ref={ref} disabled={pending} {...props} onClick={(0, file_upload_utils_1.composeEventHandlers)(props.onClick, () => {
            if (!props.disabled) {
                setButtonAction(action);
            }
        })}>
      {pending && (<react_icons_1.ReloadIcon className="mr-2 size-4 animate-spin" aria-hidden="true"/>)}

      {children}
    </button_1.Button>);
});
exports.FileUploadLoadingButton = FileUploadLoadingButton;
FileUploadLoadingButton.displayName = "FileUploadLoadingButton";
