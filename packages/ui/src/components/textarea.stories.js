"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithButton = exports.WithText = exports.WithLabel = exports.Disabled = exports.Default = void 0;
const _1 = require(".");
const button_1 = require("../button");
const label_1 = require("../label");
const typography_1 = require("../typography");
const meta = {
    component: _1.Textarea,
    args: {
        placeholder: "Type your message here.",
        disabled: false,
    },
};
exports.default = meta;
exports.Default = {};
exports.Disabled = { args: { disabled: true } };
exports.WithLabel = {
    args: {
        id: "message",
    },
    render: (args) => (<div className="grid w-full gap-1.5">
      <label_1.Label htmlFor={args.id}>Your Message</label_1.Label>
      <_1.Textarea {...args}/>
    </div>),
};
exports.WithText = {
    args: {
        id: "message",
    },
    render: (args) => (<div className="grid w-full gap-1.5">
      <label_1.Label htmlFor={args.id}>Your Message</label_1.Label>
      <_1.Textarea {...args}/>
      <typography_1.Typography variant="muted">
        Your message will be copied to the support team.
      </typography_1.Typography>
    </div>),
};
exports.WithButton = {
    render: (args) => (<div className="grid w-full gap-2">
      <_1.Textarea {...args}/>
      <button_1.Button>Send message</button_1.Button>
    </div>),
};
