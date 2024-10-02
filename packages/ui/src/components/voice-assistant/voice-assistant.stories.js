"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWithVoiceMode = exports.ButtonWithClassName = exports.Default = void 0;
const voice_assistant_1 = __importDefault(require("./voice-assistant"));
const meta = {
    component: voice_assistant_1.default,
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
exports.ButtonWithVoiceMode = {
    args: {
        className: "w-full rounded-2xl border-black",
        mode: "voice",
    },
};
