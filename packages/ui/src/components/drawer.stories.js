"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const button_1 = require("@/primitives/button");
const _1 = require(".");
const meta = {
    component: _1.Drawer,
    render: (args) => (<_1.Drawer {...args}>
      <_1.DrawerTrigger>Open</_1.DrawerTrigger>
      <_1.DrawerContent>
        <_1.DrawerHeader>
          <_1.DrawerTitle>Are you absolutely sure?</_1.DrawerTitle>
          <_1.DrawerDescription>This action cannot be undone.</_1.DrawerDescription>
        </_1.DrawerHeader>
        <_1.DrawerFooter>
          <button_1.Button>Submit</button_1.Button>
          <_1.DrawerClose asChild>
            <button_1.Button variant="outline">Cancel</button_1.Button>
          </_1.DrawerClose>
        </_1.DrawerFooter>
      </_1.DrawerContent>
    </_1.Drawer>),
};
exports.default = meta;
exports.Default = {};
