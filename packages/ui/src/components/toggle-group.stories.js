"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.Large = exports.Small = exports.Single = exports.Outline = exports.Default = void 0;
const react_icons_1 = require("@radix-ui/react-icons");
const _1 = require(".");
const items = [
    {
        value: "bold",
        "aria-label": "Toggle bold",
        children: <react_icons_1.FontBoldIcon className="size-4"/>,
    },
    {
        value: "italic",
        "aria-label": "Toggle italic",
        children: <react_icons_1.FontItalicIcon className="size-4"/>,
    },
    {
        value: "strikethrough",
        "aria-label": "Toggle strikethrough",
        children: <react_icons_1.UnderlineIcon className="size-4"/>,
    },
];
const meta = {
    component: _1.ToggleGroup,
    args: {
        type: "multiple",
        variant: "default",
        size: "default",
        disabled: false,
    },
    argTypes: {
        type: {
            options: ["single", "multiple"],
            control: { type: "select" },
        },
        variant: {
            options: ["default", "outline"],
            control: { type: "select" },
        },
        size: {
            options: ["default", "sm", "lg"],
            control: { type: "select" },
        },
    },
    render: (args) => (<_1.ToggleGroup {...args}>
      {items.map((item) => (<_1.ToggleGroupItem key={item.value} {...item}/>))}
    </_1.ToggleGroup>),
};
exports.default = meta;
exports.Default = {};
exports.Outline = { args: { variant: "outline" } };
exports.Single = { args: { type: "single" } };
exports.Small = { args: { size: "sm" } };
exports.Large = { args: { size: "lg" } };
exports.Disabled = { args: { disabled: true } };
