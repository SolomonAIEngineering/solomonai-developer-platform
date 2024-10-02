"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const _1 = require(".");
const meta = {
    component: _1.ContextMenu,
};
exports.default = meta;
exports.Default = {
    render: (args) => (<_1.ContextMenu {...args}>
      <_1.ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </_1.ContextMenuTrigger>
      <_1.ContextMenuContent className="w-64">
        <_1.ContextMenuItem inset>
          Back
          <_1.ContextMenuShortcut>⌘[</_1.ContextMenuShortcut>
        </_1.ContextMenuItem>
        <_1.ContextMenuItem inset disabled>
          Forward
          <_1.ContextMenuShortcut>⌘]</_1.ContextMenuShortcut>
        </_1.ContextMenuItem>
        <_1.ContextMenuItem inset>
          Reload
          <_1.ContextMenuShortcut>⌘R</_1.ContextMenuShortcut>
        </_1.ContextMenuItem>
        <_1.ContextMenuSub>
          <_1.ContextMenuSubTrigger inset>More Tools</_1.ContextMenuSubTrigger>
          <_1.ContextMenuSubContent className="w-48">
            <_1.ContextMenuItem>
              Save Page As...
              <_1.ContextMenuShortcut>⇧⌘S</_1.ContextMenuShortcut>
            </_1.ContextMenuItem>
            <_1.ContextMenuItem>Create Shortcut...</_1.ContextMenuItem>
            <_1.ContextMenuItem>Name Window...</_1.ContextMenuItem>
            <_1.ContextMenuSeparator />
            <_1.ContextMenuItem>Developer Tools</_1.ContextMenuItem>
          </_1.ContextMenuSubContent>
        </_1.ContextMenuSub>
        <_1.ContextMenuSeparator />
        <_1.ContextMenuCheckboxItem checked>
          Show Bookmarks Bar
          <_1.ContextMenuShortcut>⌘⇧B</_1.ContextMenuShortcut>
        </_1.ContextMenuCheckboxItem>
        <_1.ContextMenuCheckboxItem>Show Full URLs</_1.ContextMenuCheckboxItem>
        <_1.ContextMenuSeparator />
        <_1.ContextMenuRadioGroup value="pedro">
          <_1.ContextMenuLabel inset>People</_1.ContextMenuLabel>
          <_1.ContextMenuSeparator />
          <_1.ContextMenuRadioItem value="pedro">
            Pedro Duarte
          </_1.ContextMenuRadioItem>
          <_1.ContextMenuRadioItem value="colm">Colm Tuite</_1.ContextMenuRadioItem>
        </_1.ContextMenuRadioGroup>
      </_1.ContextMenuContent>
    </_1.ContextMenu>),
};
