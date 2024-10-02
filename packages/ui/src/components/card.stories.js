"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_icons_1 = require("@radix-ui/react-icons");
const button_1 = require("@/primitives/button");
const card_1 = require("@/primitives/card");
const switch_1 = require("@/primitives/switch");
const cn_1 = require("@/utils/cn");
const meta = {
    component: card_1.Card,
};
exports.default = meta;
const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
];
exports.Default = {
    render: (args) => (<card_1.Card className={(0, cn_1.cn)("w-[380px]", args.className)} {...args}>
      <card_1.CardHeader>
        <card_1.CardTitle>Notifications</card_1.CardTitle>
        <card_1.CardDescription>You have 3 unread messages.</card_1.CardDescription>
      </card_1.CardHeader>
      <card_1.CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <react_icons_1.BellIcon />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          <switch_1.Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (<div key={index} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <span className="flex size-2 translate-y-1 rounded-full bg-sky-500"/>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>))}
        </div>
      </card_1.CardContent>
      <card_1.CardFooter>
        <button_1.Button className="w-full">
          <react_icons_1.CheckIcon className="mr-2 size-4"/> Mark all as read
        </button_1.Button>
      </card_1.CardFooter>
    </card_1.Card>),
};
