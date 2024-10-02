"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTableColumnHeader = DataTableColumnHeader;
const react_icons_1 = require("@radix-ui/react-icons");
const cn_1 = require("../../utils/cn");
const button_1 = require("../button");
const dropdown_menu_1 = require("../dropdown-menu");
function DataTableColumnHeader({ column, title, className, }) {
    if (!column.getCanSort()) {
        return <div className={(0, cn_1.cn)(className)}>{title}</div>;
    }
    return (<div className={(0, cn_1.cn)("flex items-center space-x-2", className)}>
      <dropdown_menu_1.DropdownMenu>
        <dropdown_menu_1.DropdownMenuTrigger asChild>
          <button_1.Button variant="ghost" size="sm" className="-ml-3 h-8 data-[state=open]:bg-accent">
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (<react_icons_1.ArrowDownIcon className="ml-2 h-4 w-4"/>) : column.getIsSorted() === "asc" ? (<react_icons_1.ArrowUpIcon className="ml-2 h-4 w-4"/>) : (<react_icons_1.CaretSortIcon className="ml-2 h-4 w-4"/>)}
          </button_1.Button>
        </dropdown_menu_1.DropdownMenuTrigger>
        <dropdown_menu_1.DropdownMenuContent align="start">
          <dropdown_menu_1.DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <react_icons_1.ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70"/>
            Asc
          </dropdown_menu_1.DropdownMenuItem>
          <dropdown_menu_1.DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <react_icons_1.ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70"/>
            Desc
          </dropdown_menu_1.DropdownMenuItem>
          <dropdown_menu_1.DropdownMenuSeparator />
          <dropdown_menu_1.DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <react_icons_1.EyeNoneIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70"/>
            Hide
          </dropdown_menu_1.DropdownMenuItem>
        </dropdown_menu_1.DropdownMenuContent>
      </dropdown_menu_1.DropdownMenu>
    </div>);
}
