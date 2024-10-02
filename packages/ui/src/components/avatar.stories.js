"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const avatar_1 = require("./avatar");
const meta = {
    component: () => (<avatar_1.Avatar>
      <avatar_1.AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
      <avatar_1.AvatarFallback>CN</avatar_1.AvatarFallback>
    </avatar_1.Avatar>),
};
exports.default = meta;
exports.Default = {};
