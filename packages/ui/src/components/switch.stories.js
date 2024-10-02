"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const label_1 = require("@/primitives/label");
const _1 = require(".");
const meta = {
    component: _1.Switch,
    args: {
        id: "switch",
    },
};
exports.default = meta;
exports.Default = {
    render: (args) => (<div className="flex items-center space-x-2">
      <_1.Switch {...args}/>
      <label_1.Label htmlFor="airplane-mode">Airplane Mode</label_1.Label>
    </div>),
};
