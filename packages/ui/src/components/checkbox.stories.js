"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.WithText = exports.Default = void 0;
const _1 = require(".");
const label_1 = require("../label");
const typography_1 = require("../typography");
const meta = {
    component: _1.Checkbox,
    args: {
        id: "checkbox",
        disabled: false,
    },
    argTypes: {
        asChild: {
            control: {
                disable: true,
            },
        },
    },
    render: (args) => (<div className="flex items-center space-x-2">
      <_1.Checkbox {...args}/>
      <label_1.Label htmlFor={args.id}>Accept terms and conditions</label_1.Label>
    </div>),
};
exports.default = meta;
exports.Default = {};
exports.WithText = {
    render: (args) => (<div className="flex items-start space-x-2">
      <_1.Checkbox {...args}/>
      <div className="grid gap-1.5 leading-none">
        <label_1.Label htmlFor={args.id}>Accept terms and conditions</label_1.Label>
        <typography_1.Typography variant="muted">
          You agree to our Terms of Service and Privacy Policy.
        </typography_1.Typography>
      </div>
    </div>),
};
exports.Disabled = {
    args: {
        disabled: true,
    },
};
