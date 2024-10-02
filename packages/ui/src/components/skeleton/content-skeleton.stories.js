"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLineChart = exports.CustomHeight = exports.Default = void 0;
const content_skeleton_1 = require("./content-skeleton");
const meta = {
    component: content_skeleton_1.ContentPlaceholder,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Default = {};
exports.CustomHeight = {
    render: () => (<div>
      <content_skeleton_1.ContentPlaceholder chartType="bar" enableStats={true}/>
    </div>),
};
exports.CustomLineChart = {
    render: () => <content_skeleton_1.ContentPlaceholder chartType="line" enableStats={true}/>,
};
