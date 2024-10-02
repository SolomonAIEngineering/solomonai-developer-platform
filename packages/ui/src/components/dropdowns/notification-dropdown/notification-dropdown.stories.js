"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const notification_dropdown_1 = require("./notification-dropdown");
const meta = {
    component: notification_dropdown_1.ViewNotificationDropdown,
};
exports.default = meta;
exports.Default = {
    args: {
        title: "Notifications",
        children: (<div className="py-1">
        <div className="flex items-center px-4 py-2 text-sm">
          You have no notifications.
        </div>
      </div>),
    },
};
