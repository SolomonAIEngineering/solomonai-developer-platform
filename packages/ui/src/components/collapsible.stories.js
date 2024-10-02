"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_icons_1 = require("@radix-ui/react-icons");
const button_1 = require("@/primitives/button");
const _1 = require(".");
const meta = {
    component: _1.Collapsible,
};
exports.default = meta;
exports.Default = {
    render: (args) => (<_1.Collapsible {...args} className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <_1.CollapsibleTrigger asChild>
          <button_1.Button variant="ghost" size="sm">
            <react_icons_1.CaretSortIcon className="size-4"/>
            <span className="sr-only">Toggle</span>
          </button_1.Button>
        </_1.CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        @radix-ui/primitives
      </div>
      <_1.CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @stitches/react
        </div>
      </_1.CollapsibleContent>
    </_1.Collapsible>),
};
