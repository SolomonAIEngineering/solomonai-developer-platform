"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collapsed = exports.Dropdown = exports.CustomSeparator = exports.Default = void 0;
const react_icons_1 = require("@radix-ui/react-icons");
const dropdown_menu_1 = require("@/primitives/dropdown-menu");
const _1 = require(".");
const items = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Components",
        href: "/components",
    },
];
const meta = {
    component: _1.Breadcrumb,
    render: (args) => (<_1.Breadcrumb {...args}>
      <_1.BreadcrumbList>
        {items.map((item) => (<>
            <_1.BreadcrumbItem>
              <_1.BreadcrumbLink href={item.href}>{item.label}</_1.BreadcrumbLink>
            </_1.BreadcrumbItem>
            <_1.BreadcrumbSeparator />
          </>))}
        <_1.BreadcrumbItem>
          <_1.BreadcrumbPage>Breadcrumb</_1.BreadcrumbPage>
        </_1.BreadcrumbItem>
      </_1.BreadcrumbList>
    </_1.Breadcrumb>),
};
exports.default = meta;
exports.Default = {};
exports.CustomSeparator = {
    render: (args) => (<_1.Breadcrumb {...args}>
      <_1.BreadcrumbList>
        {items.map((item) => (<>
            <_1.BreadcrumbItem>
              <_1.BreadcrumbLink href={item.href}>{item.label}</_1.BreadcrumbLink>
            </_1.BreadcrumbItem>
            <_1.BreadcrumbSeparator>
              <react_icons_1.SlashIcon />
            </_1.BreadcrumbSeparator>
          </>))}
        <_1.BreadcrumbItem>
          <_1.BreadcrumbPage>Breadcrumb</_1.BreadcrumbPage>
        </_1.BreadcrumbItem>
      </_1.BreadcrumbList>
    </_1.Breadcrumb>),
};
exports.Dropdown = {
    render: (args) => (<_1.Breadcrumb {...args}>
      <_1.BreadcrumbList>
        <_1.BreadcrumbItem>
          <_1.BreadcrumbLink href="/">Home</_1.BreadcrumbLink>
        </_1.BreadcrumbItem>
        <_1.BreadcrumbSeparator>
          <react_icons_1.SlashIcon />
        </_1.BreadcrumbSeparator>
        <_1.BreadcrumbItem>
          <dropdown_menu_1.DropdownMenu>
            <dropdown_menu_1.DropdownMenuTrigger className="flex items-center gap-1">
              Components
              <react_icons_1.ChevronDownIcon />
            </dropdown_menu_1.DropdownMenuTrigger>
            <dropdown_menu_1.DropdownMenuContent align="start">
              <dropdown_menu_1.DropdownMenuItem>Documentation</dropdown_menu_1.DropdownMenuItem>
              <dropdown_menu_1.DropdownMenuItem>Themes</dropdown_menu_1.DropdownMenuItem>
              <dropdown_menu_1.DropdownMenuItem>GitHub</dropdown_menu_1.DropdownMenuItem>
            </dropdown_menu_1.DropdownMenuContent>
          </dropdown_menu_1.DropdownMenu>
        </_1.BreadcrumbItem>
        <_1.BreadcrumbSeparator>
          <react_icons_1.SlashIcon />
        </_1.BreadcrumbSeparator>
        <_1.BreadcrumbItem>
          <_1.BreadcrumbPage>Breadcrumb</_1.BreadcrumbPage>
        </_1.BreadcrumbItem>
      </_1.BreadcrumbList>
    </_1.Breadcrumb>),
};
exports.Collapsed = {
    render: (args) => (<_1.Breadcrumb {...args}>
      <_1.BreadcrumbList>
        {items.map((item) => (<>
            <_1.BreadcrumbItem>
              <_1.BreadcrumbLink href={item.href}>{item.label}</_1.BreadcrumbLink>
            </_1.BreadcrumbItem>
            <_1.BreadcrumbSeparator />
          </>))}
        <_1.BreadcrumbItem>
          <_1.BreadcrumbEllipsis />
        </_1.BreadcrumbItem>
        <_1.BreadcrumbSeparator />
        <_1.BreadcrumbItem>
          <_1.BreadcrumbPage>Breadcrumb</_1.BreadcrumbPage>
        </_1.BreadcrumbItem>
      </_1.BreadcrumbList>
    </_1.Breadcrumb>),
};
