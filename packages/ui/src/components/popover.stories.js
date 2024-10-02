"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
const button_1 = require("@/primitives/button");
const input_1 = require("@/primitives/input");
const label_1 = require("@/primitives/label");
const _1 = require(".");
const meta = {
    component: _1.PopoverContent,
    args: {
        children: "Place content for the popover here.",
    },
    argTypes: {
        asChild: {
            control: { disable: true },
        },
    },
    render: (args) => (<_1.Popover>
      <_1.PopoverTrigger asChild>
        <button_1.Button variant="outline">Open</button_1.Button>
      </_1.PopoverTrigger>
      <_1.PopoverContent {...args}/>
    </_1.Popover>),
};
exports.default = meta;
exports.Default = {};
exports.Example = {
    argTypes: {
        children: {
            control: { disable: true },
        },
    },
    render: (args) => (<_1.Popover>
      <_1.PopoverTrigger asChild>
        <button_1.Button variant="outline">Open popover</button_1.Button>
      </_1.PopoverTrigger>
      <_1.PopoverContent className="w-80" {...args}>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label_1.Label htmlFor="width">Width</label_1.Label>
              <input_1.Input id="width" defaultValue="100%" className="col-span-2 h-8"/>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label_1.Label htmlFor="maxWidth">Max. width</label_1.Label>
              <input_1.Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8"/>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label_1.Label htmlFor="height">Height</label_1.Label>
              <input_1.Input id="height" defaultValue="25px" className="col-span-2 h-8"/>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label_1.Label htmlFor="maxHeight">Max. height</label_1.Label>
              <input_1.Input id="maxHeight" defaultValue="none" className="col-span-2 h-8"/>
            </div>
          </div>
        </div>
      </_1.PopoverContent>
    </_1.Popover>),
};
