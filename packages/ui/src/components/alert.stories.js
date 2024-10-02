"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destructive = exports.Default = void 0;
const react_icons_1 = require("@radix-ui/react-icons");
const _1 = require(".");
const meta = {
    component: _1.Alert,
    args: {
        variant: "default",
    },
    argTypes: {
        variant: {
            options: ["default", "destructive"],
            control: {
                type: "select",
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    render: (args) => (<_1.Alert {...args}>
      <react_icons_1.RocketIcon className="size-4"/>
      <_1.AlertTitle>Heads up!</_1.AlertTitle>
      <_1.AlertDescription>
        You can add components to your app using the cli.
      </_1.AlertDescription>
    </_1.Alert>),
};
exports.Destructive = {
    args: {
        variant: "destructive",
    },
    render: (args) => (<_1.Alert {...args}>
      <react_icons_1.ExclamationTriangleIcon className="size-4"/>
      <_1.AlertTitle>Error</_1.AlertTitle>
      <_1.AlertDescription>
        Your session has expired. Please log in again.
      </_1.AlertDescription>
    </_1.Alert>),
};
