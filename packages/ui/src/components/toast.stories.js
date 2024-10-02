"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destructive = exports.WithAction = exports.WithTitle = exports.Simple = exports.Default = void 0;
const button_1 = require("@/primitives/button");
const toast_1 = require("./toast");
const toaster_1 = require("./toaster");
const use_toast_1 = require("./use-toast");
const ToastDemo = (props) => {
    const { toast } = (0, use_toast_1.useToast)();
    return (<button_1.Button variant="outline" onClick={() => {
            toast(props);
        }}>
      Show Toast
    </button_1.Button>);
};
const meta = {
    component: ToastDemo,
    args: {
        variant: "default",
        title: "Scheduled: Catch up",
        description: "Friday, February 10, 2023 at 5:57 PM",
    },
    argTypes: {
        action: { control: { disable: true } },
        variant: {
            options: ["default", "destructive"],
            control: { type: "select" },
        },
    },
    render: (args) => (<div>
      <ToastDemo {...args}/>
      <toaster_1.Toaster />
    </div>),
};
exports.default = meta;
exports.Default = {};
exports.Simple = {
    args: {
        title: "",
        description: "Your message has been sent.",
    },
};
exports.WithTitle = {
    args: {
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
    },
};
exports.WithAction = {
    args: {
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <toast_1.ToastAction altText="Try again">Try again</toast_1.ToastAction>,
    },
};
exports.Destructive = {
    args: {
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <toast_1.ToastAction altText="Try again">Try again</toast_1.ToastAction>,
    },
};
