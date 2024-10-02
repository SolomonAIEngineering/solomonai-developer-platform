"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const calendar_1 = require("./calendar");
const meta = {
    component: () => (<calendar_1.Calendar mode="single" selected={new Date("2024-01-01")} onSelect={() => { }} className="rounded-md border"/>),
};
exports.default = meta;
exports.Default = {};
