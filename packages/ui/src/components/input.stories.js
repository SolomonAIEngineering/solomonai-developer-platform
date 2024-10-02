"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithButton = exports.WithLabel = exports.Disabled = exports.File = exports.Default = void 0;
const button_1 = require("../button");
const label_1 = require("../label");
const _1 = require(".");
const meta = {
    component: _1.Input,
    args: {
        type: "email",
        placeholder: "Email",
    },
};
exports.default = meta;
exports.Default = {};
exports.File = {
    args: {
        id: "picture",
        type: "file",
    },
    render: (args) => (<div className="grid w-full max-w-sm items-center gap-1.5">
      <label_1.Label htmlFor="picture">Picture</label_1.Label>
      <_1.Input {...args}/>
    </div>),
};
exports.Disabled = {
    args: {
        disabled: true,
    },
};
exports.WithLabel = {
    args: {
        id: "email",
        placeholder: "johndoe@example.com",
    },
    render: (args) => (<div className="grid w-full max-w-sm items-center gap-1.5">
      <label_1.Label htmlFor="email">Email address</label_1.Label>
      <_1.Input {...args}/>
    </div>),
};
exports.WithButton = {
    render: (args) => (<div className="flex w-full max-w-sm items-center space-x-2">
      <_1.Input {...args}/>
      <button_1.Button type="submit">Subscribe</button_1.Button>
    </div>),
};
