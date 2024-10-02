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
exports.shellVariants = void 0;
exports.FileUploadShell = FileUploadShell;
const React = __importStar(require("react"));
const class_variance_authority_1 = require("class-variance-authority");
const cn_1 = require("../../utils/cn");
const shellVariants = (0, class_variance_authority_1.cva)("grid items-center gap-8 pb-8 pt-6 md:py-8", {
    variants: {
        variant: {
            default: "container",
            sidebar: "",
            centered: "mx-auto mb-16 mt-20 max-w-md justify-center",
            markdown: "container max-w-3xl gap-0 py-8 md:py-10 lg:py-10",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
exports.shellVariants = shellVariants;
function FileUploadShell({ className, as: Comp = "section", variant, ...props }) {
    return (<Comp className={(0, cn_1.cn)(shellVariants({ variant }), className)} {...props}/>);
}
