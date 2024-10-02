"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHeight = exports.Default = void 0;
const dashboard_skeleton_1 = require("./dashboard-skeleton");
const meta = {
    component: dashboard_skeleton_1.DashboardSkeleton,
    tags: ["autodocs"],
};
exports.default = meta;
exports.Default = {};
exports.CustomHeight = {
    render: () => (<div style={{ height: "800px" }}>
      <dashboard_skeleton_1.DashboardSkeleton />
    </div>),
};
