"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const label_1 = require("@/primitives/label");
const _1 = require(".");
const meta = {
    component: _1.RadioGroup,
};
exports.default = meta;
exports.Default = {
    args: {
        defaultValue: "option-one",
    },
    render: (args) => (<_1.RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <_1.RadioGroupItem value="option-one" id="option-one"/>
        <label_1.Label htmlFor="option-one">Option One</label_1.Label>
      </div>
      <div className="flex items-center space-x-2">
        <_1.RadioGroupItem value="option-two" id="option-two"/>
        <label_1.Label htmlFor="option-two">Option Two</label_1.Label>
      </div>
    </_1.RadioGroup>),
};
