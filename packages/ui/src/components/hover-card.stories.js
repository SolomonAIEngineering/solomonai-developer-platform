"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_icons_1 = require("@radix-ui/react-icons");
const avatar_1 = require("@/primitives/avatar");
const button_1 = require("@/primitives/button");
const _1 = require(".");
const meta = {
    component: _1.HoverCard,
};
exports.default = meta;
exports.Default = {
    render: (args) => (<_1.HoverCard {...args}>
      <_1.HoverCardTrigger asChild>
        <button_1.Button variant="link">@nextjs</button_1.Button>
      </_1.HoverCardTrigger>
      <_1.HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <avatar_1.Avatar>
            <avatar_1.AvatarImage src="https://github.com/vercel.png"/>
            <avatar_1.AvatarFallback>VC</avatar_1.AvatarFallback>
          </avatar_1.Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework - created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <react_icons_1.CalendarIcon className="mr-2 size-4 opacity-70"/>{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </_1.HoverCardContent>
    </_1.HoverCard>),
};
