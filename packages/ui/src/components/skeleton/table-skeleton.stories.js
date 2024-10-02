"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHeight = exports.Default = void 0;
const table_skeleton_1 = __importDefault(require("./table-skeleton"));
const meta = {
    component: table_skeleton_1.default,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Default = {};
exports.CustomHeight = {
    render: () => (<div style={{ height: "400px" }}>
      <table_skeleton_1.default />
    </div>),
};
