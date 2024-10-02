"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioGroup = exports.Checkboxes = exports.Default = void 0;
const react_1 = require("react");
const _1 = require(".");
const button_1 = require("../button");
const meta = {
    component: _1.DropdownMenu,
    render: (args) => (<_1.DropdownMenu {...args}>
      <_1.DropdownMenuTrigger asChild>
        <button_1.Button variant="outline">Open</button_1.Button>
      </_1.DropdownMenuTrigger>
      <_1.DropdownMenuContent className="w-56">
        <_1.DropdownMenuLabel>My Account</_1.DropdownMenuLabel>
        <_1.DropdownMenuSeparator />
        <_1.DropdownMenuGroup>
          <_1.DropdownMenuItem>
            Profile
            <_1.DropdownMenuShortcut>⇧⌘P</_1.DropdownMenuShortcut>
          </_1.DropdownMenuItem>
          <_1.DropdownMenuItem>
            Billing
            <_1.DropdownMenuShortcut>⌘B</_1.DropdownMenuShortcut>
          </_1.DropdownMenuItem>
          <_1.DropdownMenuItem>
            Settings
            <_1.DropdownMenuShortcut>⌘S</_1.DropdownMenuShortcut>
          </_1.DropdownMenuItem>
          <_1.DropdownMenuItem>
            Keyboard shortcuts
            <_1.DropdownMenuShortcut>⌘K</_1.DropdownMenuShortcut>
          </_1.DropdownMenuItem>
        </_1.DropdownMenuGroup>
        <_1.DropdownMenuSeparator />
        <_1.DropdownMenuGroup>
          <_1.DropdownMenuItem>Team</_1.DropdownMenuItem>
          <_1.DropdownMenuSub>
            <_1.DropdownMenuSubTrigger>Invite users</_1.DropdownMenuSubTrigger>
            <_1.DropdownMenuPortal>
              <_1.DropdownMenuSubContent>
                <_1.DropdownMenuItem>Email</_1.DropdownMenuItem>
                <_1.DropdownMenuItem>Message</_1.DropdownMenuItem>
                <_1.DropdownMenuSeparator />
                <_1.DropdownMenuItem>More...</_1.DropdownMenuItem>
              </_1.DropdownMenuSubContent>
            </_1.DropdownMenuPortal>
          </_1.DropdownMenuSub>
          <_1.DropdownMenuItem>
            New Team
            <_1.DropdownMenuShortcut>⌘+T</_1.DropdownMenuShortcut>
          </_1.DropdownMenuItem>
        </_1.DropdownMenuGroup>
        <_1.DropdownMenuSeparator />
        <_1.DropdownMenuItem>GitHub</_1.DropdownMenuItem>
        <_1.DropdownMenuItem>Support</_1.DropdownMenuItem>
        <_1.DropdownMenuItem disabled>API</_1.DropdownMenuItem>
        <_1.DropdownMenuSeparator />
        <_1.DropdownMenuItem>
          Log out
          <_1.DropdownMenuShortcut>⇧⌘Q</_1.DropdownMenuShortcut>
        </_1.DropdownMenuItem>
      </_1.DropdownMenuContent>
    </_1.DropdownMenu>),
};
exports.default = meta;
exports.Default = {};
const CheckboxesExample = (props) => {
    const [showStatusBar, setShowStatusBar] = (0, react_1.useState)(true);
    const [showActivityBar, setShowActivityBar] = (0, react_1.useState)(false);
    const [showPanel, setShowPanel] = (0, react_1.useState)(false);
    return (<_1.DropdownMenu {...props}>
      <_1.DropdownMenuTrigger asChild>
        <button_1.Button variant="outline">Open</button_1.Button>
      </_1.DropdownMenuTrigger>
      <_1.DropdownMenuContent className="w-56">
        <_1.DropdownMenuLabel>Appearance</_1.DropdownMenuLabel>
        <_1.DropdownMenuSeparator />
        <_1.DropdownMenuCheckboxItem checked={showStatusBar ?? false} onCheckedChange={setShowStatusBar}>
          Status Bar
        </_1.DropdownMenuCheckboxItem>
        <_1.DropdownMenuCheckboxItem checked={showActivityBar ?? false} onCheckedChange={setShowActivityBar} disabled>
          Activity Bar
        </_1.DropdownMenuCheckboxItem>
        <_1.DropdownMenuCheckboxItem checked={showPanel ?? false} onCheckedChange={setShowPanel}>
          Panel
        </_1.DropdownMenuCheckboxItem>
      </_1.DropdownMenuContent>
    </_1.DropdownMenu>);
};
exports.Checkboxes = {
    render: (args) => <CheckboxesExample {...args}/>,
};
const RadioGroupExample = (props) => {
    const [position, setPosition] = (0, react_1.useState)("bottom");
    return (<_1.DropdownMenu {...props}>
      <_1.DropdownMenuTrigger asChild>
        <button_1.Button variant="outline">Open</button_1.Button>
      </_1.DropdownMenuTrigger>
      <_1.DropdownMenuContent className="w-56">
        <_1.DropdownMenuLabel>Panel Position</_1.DropdownMenuLabel>
        <_1.DropdownMenuSeparator />
        <_1.DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <_1.DropdownMenuRadioItem value="top">Top</_1.DropdownMenuRadioItem>
          <_1.DropdownMenuRadioItem value="bottom">Bottom</_1.DropdownMenuRadioItem>
          <_1.DropdownMenuRadioItem value="right">Right</_1.DropdownMenuRadioItem>
        </_1.DropdownMenuRadioGroup>
      </_1.DropdownMenuContent>
    </_1.DropdownMenu>);
};
exports.RadioGroup = {
    render: (args) => <RadioGroupExample {...args}/>,
};
