"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCloseButton = exports.Default = void 0;
const react_icons_1 = require("@radix-ui/react-icons");
const button_1 = require("@/primitives/button");
const input_1 = require("@/primitives/input");
const label_1 = require("@/primitives/label");
const _1 = require(".");
const meta = {
    component: _1.Dialog,
    render: (args) => (<_1.Dialog {...args}>
      <_1.DialogTrigger asChild>
        <button_1.Button variant="outline">Edit Profile</button_1.Button>
      </_1.DialogTrigger>
      <_1.DialogContent className="sm:max-w-[425px]">
        <_1.DialogHeader>
          <_1.DialogTitle>Edit profile</_1.DialogTitle>
          <_1.DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </_1.DialogDescription>
        </_1.DialogHeader>
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
        <_1.DialogFooter>
          <button_1.Button type="submit">Save changes</button_1.Button>
        </_1.DialogFooter>
      </_1.DialogContent>
    </_1.Dialog>),
};
exports.default = meta;
exports.Default = {};
exports.CustomCloseButton = {
    render: (args) => (<_1.Dialog {...args}>
      <_1.DialogTrigger asChild>
        <button_1.Button variant="outline">Share</button_1.Button>
      </_1.DialogTrigger>
      <_1.DialogContent className="sm:max-w-md">
        <_1.DialogHeader>
          <_1.DialogTitle>Share link</_1.DialogTitle>
          <_1.DialogDescription>
            Anyone who has this link will be able to view this.
          </_1.DialogDescription>
        </_1.DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <label_1.Label htmlFor="link" className="sr-only">
              Link
            </label_1.Label>
            <input_1.Input id="link" defaultValue="https://ui.shadcn.com/docs/installation" readOnly/>
          </div>
          <button_1.Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <react_icons_1.CopyIcon className="size-4"/>
          </button_1.Button>
        </div>
        <_1.DialogFooter className="sm:justify-start">
          <_1.DialogClose asChild>
            <button_1.Button type="button" variant="outline">
              Close
            </button_1.Button>
          </_1.DialogClose>
        </_1.DialogFooter>
      </_1.DialogContent>
    </_1.Dialog>),
};
