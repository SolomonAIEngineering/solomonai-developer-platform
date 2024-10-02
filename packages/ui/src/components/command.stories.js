"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = exports.Default = void 0;
const react_1 = require("react");
const react_icons_1 = require("@radix-ui/react-icons");
const _1 = require(".");
const meta = {
    component: _1.Command,
    render: (args) => (<div className="mx-auto max-w-md pt-6">
      <_1.Command {...args} className="rounded-lg border shadow-md">
        <_1.CommandInput placeholder="Type a command or search..."/>
        <_1.CommandList>
          <_1.CommandEmpty>No results found.</_1.CommandEmpty>
          <_1.CommandGroup heading="Suggestions">
            <_1.CommandItem>Calendar</_1.CommandItem>
            <_1.CommandItem>Search Emoji</_1.CommandItem>
            <_1.CommandItem>Calculator</_1.CommandItem>
          </_1.CommandGroup>
          <_1.CommandSeparator />
          <_1.CommandGroup heading="Settings">
            <_1.CommandItem>Profile</_1.CommandItem>
            <_1.CommandItem>Billing</_1.CommandItem>
            <_1.CommandItem>Settings</_1.CommandItem>
          </_1.CommandGroup>
        </_1.CommandList>
      </_1.Command>
    </div>),
};
exports.default = meta;
exports.Default = {};
const DialogExample = (props) => {
    const [open, setOpen] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => {
            document.removeEventListener("keydown", down);
        };
    }, []);
    return (<>
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </p>
      <_1.CommandDialog {...props} open={open} onOpenChange={setOpen}>
        <_1.CommandInput placeholder="Type a command or search..."/>
        <_1.CommandList>
          <_1.CommandEmpty>No results found.</_1.CommandEmpty>
          <_1.CommandGroup heading="Suggestions">
            <_1.CommandItem>
              <react_icons_1.CalendarIcon className="mr-2 size-4"/>
              <span>Calendar</span>
            </_1.CommandItem>
            <_1.CommandItem>
              <react_icons_1.FaceIcon className="mr-2 size-4"/>
              <span>Search Emoji</span>
            </_1.CommandItem>
            <_1.CommandItem>
              <react_icons_1.RocketIcon className="mr-2 size-4"/>
              <span>Launch</span>
            </_1.CommandItem>
          </_1.CommandGroup>
          <_1.CommandSeparator />
          <_1.CommandGroup heading="Settings">
            <_1.CommandItem>
              <react_icons_1.PersonIcon className="mr-2 size-4"/>
              <span>Profile</span>
              <_1.CommandShortcut>⌘P</_1.CommandShortcut>
            </_1.CommandItem>
            <_1.CommandItem>
              <react_icons_1.EnvelopeClosedIcon className="mr-2 size-4"/>
              <span>Mail</span>
              <_1.CommandShortcut>⌘B</_1.CommandShortcut>
            </_1.CommandItem>
            <_1.CommandItem>
              <react_icons_1.GearIcon className="mr-2 size-4"/>
              <span>Settings</span>
              <_1.CommandShortcut>⌘S</_1.CommandShortcut>
            </_1.CommandItem>
          </_1.CommandGroup>
        </_1.CommandList>
      </_1.CommandDialog>
    </>);
};
exports.Dialog = {
    render: (args) => <DialogExample {...args}/>,
};
