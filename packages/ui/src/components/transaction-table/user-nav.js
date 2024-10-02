"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNav = UserNav;
const avatar_1 = require("../avatar");
const button_1 = require("../button");
const dropdown_menu_1 = require("../dropdown-menu");
function UserNav() {
    return (<dropdown_menu_1.DropdownMenu>
      <dropdown_menu_1.DropdownMenuTrigger asChild>
        <button_1.Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <avatar_1.Avatar className="h-9 w-9">
            <avatar_1.AvatarImage src="/avatars/03.png" alt="@shadcn"/>
            <avatar_1.AvatarFallback>SC</avatar_1.AvatarFallback>
          </avatar_1.Avatar>
        </button_1.Button>
      </dropdown_menu_1.DropdownMenuTrigger>
      <dropdown_menu_1.DropdownMenuContent className="w-56" align="end" forceMount>
        <dropdown_menu_1.DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">shadcn</p>
            <p className="text-xs leading-none text-muted-foreground">
              m@example.com
            </p>
          </div>
        </dropdown_menu_1.DropdownMenuLabel>
        <dropdown_menu_1.DropdownMenuSeparator />
        <dropdown_menu_1.DropdownMenuGroup>
          <dropdown_menu_1.DropdownMenuItem>
            Profile
            <dropdown_menu_1.DropdownMenuShortcut>⇧⌘P</dropdown_menu_1.DropdownMenuShortcut>
          </dropdown_menu_1.DropdownMenuItem>
          <dropdown_menu_1.DropdownMenuItem>
            Billing
            <dropdown_menu_1.DropdownMenuShortcut>⌘B</dropdown_menu_1.DropdownMenuShortcut>
          </dropdown_menu_1.DropdownMenuItem>
          <dropdown_menu_1.DropdownMenuItem>
            Settings
            <dropdown_menu_1.DropdownMenuShortcut>⌘S</dropdown_menu_1.DropdownMenuShortcut>
          </dropdown_menu_1.DropdownMenuItem>
          <dropdown_menu_1.DropdownMenuItem>New Team</dropdown_menu_1.DropdownMenuItem>
        </dropdown_menu_1.DropdownMenuGroup>
        <dropdown_menu_1.DropdownMenuSeparator />
        <dropdown_menu_1.DropdownMenuItem>
          Log out
          <dropdown_menu_1.DropdownMenuShortcut>⇧⌘Q</dropdown_menu_1.DropdownMenuShortcut>
        </dropdown_menu_1.DropdownMenuItem>
      </dropdown_menu_1.DropdownMenuContent>
    </dropdown_menu_1.DropdownMenu>);
}
