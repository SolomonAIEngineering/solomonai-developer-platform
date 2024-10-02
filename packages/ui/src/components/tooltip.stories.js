"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const button_1 = require("../button");
const _1 = require(".");
const meta = {
    component: _1.TooltipContent,
    args: {
        children: "This is a tooltip.",
    },
    render: (args) => (<_1.TooltipProvider>
      <_1.Tooltip>
        <_1.TooltipTrigger asChild>
          <button_1.Button variant="outline">Hover</button_1.Button>
        </_1.TooltipTrigger>
        <_1.TooltipContent {...args}/>
      </_1.Tooltip>
    </_1.TooltipProvider>),
};
exports.default = meta;
exports.Default = {};
