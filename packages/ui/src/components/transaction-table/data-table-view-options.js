"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableViewOptions = DataTableViewOptions;
const react_dropdown_menu_1 = require("@radix-ui/react-dropdown-menu");
const react_icons_1 = require("@radix-ui/react-icons");
const button_1 = require("../button");
const dropdown_menu_1 = require("../dropdown-menu");
function DataTableViewOptions({ table, }) {
    return (<dropdown_menu_1.DropdownMenu>
      <react_dropdown_menu_1.DropdownMenuTrigger asChild>
        <button_1.Button variant="outline" size="sm" className="ml-auto hidden h-8 lg:flex">
          <react_icons_1.MixerHorizontalIcon className="mr-2 h-4 w-4"/>
          View
        </button_1.Button>
      </react_dropdown_menu_1.DropdownMenuTrigger>
      <dropdown_menu_1.DropdownMenuContent align="end" className="w-[150px]">
        <dropdown_menu_1.DropdownMenuLabel>Toggle columns</dropdown_menu_1.DropdownMenuLabel>
        <dropdown_menu_1.DropdownMenuSeparator />
        {table
            .getAllColumns()
            .filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide())
            .map((column) => {
            return (<dropdown_menu_1.DropdownMenuCheckboxItem key={column.id} className="capitalize" checked={column.getIsVisible()} onCheckedChange={(value) => column.toggleVisibility(!!value)}>
                {column.id}
              </dropdown_menu_1.DropdownMenuCheckboxItem>);
        })}
      </dropdown_menu_1.DropdownMenuContent>
    </dropdown_menu_1.DropdownMenu>);
}
