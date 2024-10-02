"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const _1 = require(".");
const meta = {
    component: _1.Separator,
    render: (args) => (<div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <_1.Separator {...args} className="my-4"/>
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <_1.Separator orientation="vertical"/>
        <div>Docs</div>
        <_1.Separator orientation="vertical"/>
        <div>Source</div>
      </div>
    </div>),
};
exports.default = meta;
exports.Default = {};
