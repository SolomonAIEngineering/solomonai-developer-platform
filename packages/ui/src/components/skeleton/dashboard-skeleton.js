"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardSkeleton = void 0;
const avatar_1 = require("../avatar");
const button_1 = require("../button");
const card_1 = require("../card");
const dropdown_menu_1 = require("../dropdown-menu");
const skeleton_1 = require("../skeleton");
/**
 * v0 by Vercel.s
 * @see https://v0.dev/t/T9qXnZIlXN7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
const DashboardSkeleton = () => {
    return (<div className="min-w-screen flex min-h-screen overflow-hidden">
      <aside className="flex w-72 flex-col border-r bg-gray-100 p-4 dark:bg-zinc-950">
        <div className="flex h-16 shrink-0 items-center">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-wider"></span>
          </div>
        </div>
        <div className="flex-1 overflow-auto py-4">
          <nav className="flex flex-col space-y-1">
            <div className="flex items-center space-x-4">
              <skeleton_1.Skeleton className="h-5 w-5 rounded-full"/>
              <skeleton_1.Skeleton className="h-4 w-24 rounded"/>
            </div>
            <div className="flex items-center space-x-4">
              <skeleton_1.Skeleton className="h-5 w-5 rounded-full"/>
              <skeleton_1.Skeleton className="h-4 w-24 rounded"/>
            </div>
            <div className="flex items-center space-x-4">
              <skeleton_1.Skeleton className="h-5 w-5 rounded-full"/>
              <skeleton_1.Skeleton className="h-4 w-24 rounded"/>
            </div>
            <div className="flex items-center space-x-4">
              <skeleton_1.Skeleton className="h-5 w-5 rounded-full"/>
              <skeleton_1.Skeleton className="h-4 w-24 rounded"/>
            </div>
            <div className="flex items-center space-x-4">
              <skeleton_1.Skeleton className="h-5 w-5 rounded-full"/>
              <skeleton_1.Skeleton className="h-4 w-24 rounded"/>
            </div>
          </nav>
        </div>
      </aside>
      <div className="flex w-full flex-col">
        <header className="flex h-16 shrink-0 items-center gap-4 border-b bg-white px-4 shadow-sm dark:bg-zinc-950">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-wider"></span>
          </div>
          <nav className="ml-auto flex items-center gap-4">
            <skeleton_1.Skeleton className="h-4 w-24 rounded"/>
            <skeleton_1.Skeleton className="h-4 w-24 rounded"/>
            <skeleton_1.Skeleton className="h-4 w-24 rounded"/>
          </nav>
          <dropdown_menu_1.DropdownMenu>
            <dropdown_menu_1.DropdownMenuTrigger asChild>
              <button_1.Button className="rounded-full" size="icon" variant="ghost">
                <avatar_1.Avatar>
                  <avatar_1.AvatarImage alt="Avatar" src="/placeholder-avatar.jpg"/>
                  <avatar_1.AvatarFallback></avatar_1.AvatarFallback>
                </avatar_1.Avatar>
              </button_1.Button>
            </dropdown_menu_1.DropdownMenuTrigger>
            <dropdown_menu_1.DropdownMenuContent align="end">
              <dropdown_menu_1.DropdownMenuLabel>My Account</dropdown_menu_1.DropdownMenuLabel>
              <dropdown_menu_1.DropdownMenuSeparator />
              <dropdown_menu_1.DropdownMenuItem>Profile</dropdown_menu_1.DropdownMenuItem>
              <dropdown_menu_1.DropdownMenuItem>Settings</dropdown_menu_1.DropdownMenuItem>
              <dropdown_menu_1.DropdownMenuSeparator />
              <dropdown_menu_1.DropdownMenuItem>Logout</dropdown_menu_1.DropdownMenuItem>
            </dropdown_menu_1.DropdownMenuContent>
          </dropdown_menu_1.DropdownMenu>
        </header>
        <main className="flex-1 overflow-auto p-4">
          <div className="mx-auto max-w-7xl">
            <skeleton_1.Skeleton className="h-8 w-48 rounded"/>
            <skeleton_1.Skeleton className="mt-2 h-4 w-64 rounded"/>
            <DashboardSkeletonBody />
            <DashboardSkeletonBody />
            <DashboardSkeletonBody />
            <DashboardSkeletonBody />
          </div>
        </main>
      </div>
    </div>);
};
exports.DashboardSkeleton = DashboardSkeleton;
const DashboardSkeletonBody = () => {
    return (<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <card_1.Card>
        <card_1.CardHeader>
          <skeleton_1.Skeleton className="h-4 w-32 rounded"/>
          <skeleton_1.Skeleton className="mt-2 h-4 w-48 rounded"/>
        </card_1.CardHeader>
        <card_1.CardContent>
          <div className="flex items-center justify-between">
            <skeleton_1.Skeleton className="h-8 w-24 rounded"/>
            <skeleton_1.Skeleton className="h-8 w-8 rounded-full"/>
          </div>
        </card_1.CardContent>
      </card_1.Card>
      <card_1.Card>
        <card_1.CardHeader>
          <skeleton_1.Skeleton className="h-4 w-32 rounded"/>
          <skeleton_1.Skeleton className="mt-2 h-4 w-48 rounded"/>
        </card_1.CardHeader>
        <card_1.CardContent>
          <div className="flex items-center justify-between">
            <skeleton_1.Skeleton className="h-8 w-24 rounded"/>
            <skeleton_1.Skeleton className="h-8 w-8 rounded-full"/>
          </div>
        </card_1.CardContent>
      </card_1.Card>
      <card_1.Card>
        <card_1.CardHeader>
          <skeleton_1.Skeleton className="h-4 w-32 rounded"/>
          <skeleton_1.Skeleton className="mt-2 h-4 w-48 rounded"/>
        </card_1.CardHeader>
        <card_1.CardContent>
          <div className="flex items-center justify-between">
            <skeleton_1.Skeleton className="h-8 w-24 rounded"/>
            <skeleton_1.Skeleton className="h-8 w-8 rounded-full"/>
          </div>
        </card_1.CardContent>
      </card_1.Card>
    </div>);
};
