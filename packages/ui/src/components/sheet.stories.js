"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const button_1 = require("@/primitives/button");
const input_1 = require("@/primitives/input");
const label_1 = require("@/primitives/label");
const _1 = require(".");
const meta = {
    component: _1.SheetContent,
    args: {
        side: "right",
    },
    argTypes: {
        side: {
            options: ["left", "right", "top", "bottom"],
            control: { type: "select" },
        },
    },
};
exports.default = meta;
exports.Default = {
    render: (args) => (<_1.Sheet>
      <_1.SheetTrigger asChild>
        <button_1.Button variant="outline">Open</button_1.Button>
      </_1.SheetTrigger>
      <_1.SheetContent {...args}>
        <_1.SheetHeader>
          <_1.SheetTitle>Edit profile</_1.SheetTitle>
          <_1.SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </_1.SheetDescription>
        </_1.SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label_1.Label htmlFor="name" className="text-right">
              Name
            </label_1.Label>
            <input_1.Input id="name" value="Pedro Duarte" className="col-span-3"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label_1.Label htmlFor="username" className="text-right">
              Username
            </label_1.Label>
            <input_1.Input id="username" value="@peduarte" className="col-span-3"/>
          </div>
        </div>
        <_1.SheetFooter>
          <_1.SheetClose asChild>
            <button_1.Button type="submit">Save changes</button_1.Button>
          </_1.SheetClose>
        </_1.SheetFooter>
      </_1.SheetContent>
    </_1.Sheet>),
};
