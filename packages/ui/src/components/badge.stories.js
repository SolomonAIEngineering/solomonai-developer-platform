"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Outline = exports.Destructive = exports.Secondary = exports.Default = void 0;
const _1 = require(".");
const meta = {
    component: _1.Badge,
    args: {
        variant: "default",
        children: "Badge",
    },
    argTypes: {
        variant: {
            options: ["default", "secondary", "destructive", "outline"],
            control: { type: "select" },
        },
    },
};
exports.default = meta;
exports.Default = {};
exports.Secondary = {
    args: {
        variant: "secondary",
    },
};
exports.Destructive = {
    args: {
        variant: "destructive",
    },
};
exports.Outline = {
    args: {
        variant: "outline",
    },
};
