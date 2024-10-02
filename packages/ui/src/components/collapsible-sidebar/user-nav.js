"use client";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNav = UserNav;
const React = __importStar(require("react"));
const link_1 = __importDefault(require("next/link"));
const lucide_react_1 = require("lucide-react");
const avatar_1 = require("../avatar");
const button_1 = require("../button");
const dropdown_menu_1 = require("../dropdown-menu");
const tooltip_1 = require("../tooltip");
function UserNav() {
    return (<dropdown_menu_1.DropdownMenu>
      <tooltip_1.TooltipProvider disableHoverableContent>
        <tooltip_1.Tooltip delayDuration={100}>
          <tooltip_1.TooltipTrigger asChild>
            <dropdown_menu_1.DropdownMenuTrigger asChild>
              <button_1.Button variant="outline" className="relative h-8 w-8 rounded-full">
                <avatar_1.Avatar className="h-8 w-8">
                  <avatar_1.AvatarImage src="#" alt="Avatar"/>
                  <avatar_1.AvatarFallback className="bg-transparent">JD</avatar_1.AvatarFallback>
                </avatar_1.Avatar>
              </button_1.Button>
            </dropdown_menu_1.DropdownMenuTrigger>
          </tooltip_1.TooltipTrigger>
          <tooltip_1.TooltipContent side="bottom">Profile</tooltip_1.TooltipContent>
        </tooltip_1.Tooltip>
      </tooltip_1.TooltipProvider>

      <dropdown_menu_1.DropdownMenuContent className="w-56" align="end" forceMount>
        <dropdown_menu_1.DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">
              johndoe@example.com
            </p>
          </div>
        </dropdown_menu_1.DropdownMenuLabel>
        <dropdown_menu_1.DropdownMenuSeparator />
        <dropdown_menu_1.DropdownMenuGroup>
          <dropdown_menu_1.DropdownMenuItem className="hover:cursor-pointer" asChild>
            <link_1.default href="/dashboard" className="flex items-center">
              <lucide_react_1.LayoutGrid className="mr-3 h-4 w-4 text-muted-foreground"/>
              Dashboard
            </link_1.default>
          </dropdown_menu_1.DropdownMenuItem>
          <dropdown_menu_1.DropdownMenuItem className="hover:cursor-pointer" asChild>
            <link_1.default href="/account" className="flex items-center">
              <lucide_react_1.User className="mr-3 h-4 w-4 text-muted-foreground"/>
              Account
            </link_1.default>
          </dropdown_menu_1.DropdownMenuItem>
        </dropdown_menu_1.DropdownMenuGroup>
        <dropdown_menu_1.DropdownMenuSeparator />
        <dropdown_menu_1.DropdownMenuItem className="hover:cursor-pointer" onClick={() => { }}>
          <lucide_react_1.LogOut className="mr-3 h-4 w-4 text-muted-foreground"/>
          Sign out
        </dropdown_menu_1.DropdownMenuItem>
      </dropdown_menu_1.DropdownMenuContent>
    </dropdown_menu_1.DropdownMenu>);
}
