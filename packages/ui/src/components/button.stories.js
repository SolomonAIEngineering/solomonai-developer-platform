"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.Ghost = exports.Outline = exports.Destructive = exports.Secondary = exports.Primary = void 0;
const lucide_react_1 = require("lucide-react");
const button_1 = require("./button");
const meta = {
    component: button_1.Button,
};
exports.default = meta;
exports.Primary = {
    args: {
        children: "Button",
    },
};
exports.Secondary = {
    args: {
        children: "Button",
        variant: "secondary",
    },
};
exports.Destructive = {
    args: {
        children: "Button",
        variant: "destructive",
    },
};
exports.Outline = {
    args: {
        children: "Button",
        variant: "outline",
    },
};
exports.Ghost = {
    args: {
        children: "Button",
        variant: "ghost",
    },
};
exports.Icon = {
    args: {
        children: <lucide_react_1.ChevronRight />,
        variant: "outline",
        size: "icon",
    },
};
