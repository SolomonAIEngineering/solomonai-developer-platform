"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const _1 = require(".");
const meta = {
    component: _1.AspectRatio,
    args: {
        ratio: 16 / 9,
    },
};
exports.default = meta;
exports.Default = {
    render: (args) => (<div className="w-[400px]">
      <_1.AspectRatio {...args} className="bg-muted">
        <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="By Drew Beamer" className="rounded-md object-cover"/>
      </_1.AspectRatio>
    </div>),
};
