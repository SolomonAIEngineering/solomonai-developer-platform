"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.Large = exports.Small = exports.WithText = exports.Outline = exports.Default = void 0;
const react_icons_1 = require("@radix-ui/react-icons");
const _1 = require(".");
const meta = {
    component: _1.Toggle,
    args: {
        "aria-label": "Toggle bold",
        children: <react_icons_1.FontBoldIcon className="size-4"/>,
        size: "default",
        variant: "default",
    },
    argTypes: {
        children: { control: { disable: true } },
        asChild: { control: { disable: true } },
        size: {
            options: ["default", "sm", "lg"],
            control: { type: "select" },
        },
        variant: {
            options: ["default", "outline"],
            control: { type: "select" },
        },
    },
};
exports.default = meta;
exports.Default = {};
exports.Outline = { args: { variant: "outline" } };
exports.WithText = {
    args: {
        children: (<>
        <react_icons_1.FontItalicIcon className="mr-2 size-4"/>
        Italic
      </>),
    },
};
exports.Small = { args: { size: "sm" } };
exports.Large = { args: { size: "lg" } };
exports.Disabled = { args: { disabled: true } };
