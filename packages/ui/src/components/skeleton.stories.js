"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.Default = void 0;
const _1 = require(".");
const meta = {
    component: _1.Skeleton,
    render: (args) => (<div className="flex items-center space-x-4">
      <_1.Skeleton {...args} className="size-12 rounded-full"/>
      <div className="space-y-2">
        <_1.Skeleton className="h-4 w-[250px]"/>
        <_1.Skeleton className="h-4 w-[200px]"/>
      </div>
    </div>),
};
exports.default = meta;
exports.Default = {};
exports.Card = {
    render: (args) => (<div className="flex flex-col space-y-3">
      <_1.Skeleton {...args} className="h-[125px] w-[250px] rounded-xl"/>
      <div className="space-y-2">
        <_1.Skeleton className="h-4 w-[250px]"/>
        <_1.Skeleton className="h-4 w-[200px]"/>
      </div>
    </div>),
};
