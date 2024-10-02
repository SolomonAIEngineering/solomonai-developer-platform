"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const React = __importStar(require("react"));
const cn_1 = require("@/utils/cn");
const _1 = require(".");
const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (<li>
      <_1.NavigationMenuLink asChild>
        <a ref={ref} className={(0, cn_1.cn)("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)} {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </_1.NavigationMenuLink>
    </li>);
});
ListItem.displayName = "ListItem";
const components = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description: "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description: "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];
const meta = {
    component: _1.NavigationMenu,
    render: (args) => (<div className="container mx-auto flex justify-center">
      <_1.NavigationMenu {...args}>
        <_1.NavigationMenuList>
          <_1.NavigationMenuItem>
            <_1.NavigationMenuTrigger>Getting started</_1.NavigationMenuTrigger>
            <_1.NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <_1.NavigationMenuLink asChild>
                    <a className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-2 to-gray-4 p-6 no-underline outline-none focus:shadow-md" href="/">
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </_1.NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </_1.NavigationMenuContent>
          </_1.NavigationMenuItem>
          <_1.NavigationMenuItem>
            <_1.NavigationMenuTrigger>Components</_1.NavigationMenuTrigger>
            <_1.NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (<ListItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>))}
              </ul>
            </_1.NavigationMenuContent>
          </_1.NavigationMenuItem>
          <_1.NavigationMenuItem>
            <a href="/docs">
              <_1.NavigationMenuLink className={(0, _1.navigationMenuTriggerStyle)()}>
                Documentation
              </_1.NavigationMenuLink>
            </a>
          </_1.NavigationMenuItem>
        </_1.NavigationMenuList>
      </_1.NavigationMenu>
    </div>),
};
exports.default = meta;
exports.Default = {};
