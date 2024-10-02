"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const _1 = require(".");
const meta = {
    component: _1.Menubar,
    render: (args) => (<_1.Menubar {...args}>
      <_1.MenubarMenu>
        <_1.MenubarTrigger>File</_1.MenubarTrigger>
        <_1.MenubarContent>
          <_1.MenubarItem>
            New Tab <_1.MenubarShortcut>⌘T</_1.MenubarShortcut>
          </_1.MenubarItem>
          <_1.MenubarItem>New Window</_1.MenubarItem>
          <_1.MenubarSeparator />
          <_1.MenubarItem>Share</_1.MenubarItem>
          <_1.MenubarSeparator />
          <_1.MenubarItem>Print</_1.MenubarItem>
        </_1.MenubarContent>
      </_1.MenubarMenu>
    </_1.Menubar>),
};
exports.default = meta;
exports.Default = {};
