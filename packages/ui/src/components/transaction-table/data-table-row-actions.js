"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableRowActions = DataTableRowActions;
const react_icons_1 = require("@radix-ui/react-icons");
const button_1 = require("../button");
const dropdown_menu_1 = require("../dropdown-menu");
const data_1 = require("./data/data");
function DataTableRowActions({ row, }) {
    const txn = row.original;
    return (<dropdown_menu_1.DropdownMenu>
      <dropdown_menu_1.DropdownMenuTrigger asChild>
        <button_1.Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <react_icons_1.DotsHorizontalIcon className="h-4 w-4"/>
          <span className="sr-only">Open menu</span>
        </button_1.Button>
      </dropdown_menu_1.DropdownMenuTrigger>
      <dropdown_menu_1.DropdownMenuContent align="end" className="w-[160px]">
        <dropdown_menu_1.DropdownMenuItem>Edit</dropdown_menu_1.DropdownMenuItem>
        <dropdown_menu_1.DropdownMenuItem>Make a copy</dropdown_menu_1.DropdownMenuItem>
        <dropdown_menu_1.DropdownMenuItem>Favorite</dropdown_menu_1.DropdownMenuItem>
        <dropdown_menu_1.DropdownMenuSeparator />
        <dropdown_menu_1.DropdownMenuSub>
          <dropdown_menu_1.DropdownMenuSubTrigger>Labels</dropdown_menu_1.DropdownMenuSubTrigger>
          <dropdown_menu_1.DropdownMenuSubContent>
            <dropdown_menu_1.DropdownMenuRadioGroup value={txn.name}>
              {data_1.labels.map((label) => (<dropdown_menu_1.DropdownMenuRadioItem key={label.value} value={label.value}>
                  {label.label}
                </dropdown_menu_1.DropdownMenuRadioItem>))}
            </dropdown_menu_1.DropdownMenuRadioGroup>
          </dropdown_menu_1.DropdownMenuSubContent>
        </dropdown_menu_1.DropdownMenuSub>
        <dropdown_menu_1.DropdownMenuSeparator />
        <dropdown_menu_1.DropdownMenuItem>
          Delete
          <dropdown_menu_1.DropdownMenuShortcut>⌘⌫</dropdown_menu_1.DropdownMenuShortcut>
        </dropdown_menu_1.DropdownMenuItem>
      </dropdown_menu_1.DropdownMenuContent>
    </dropdown_menu_1.DropdownMenu>);
}
