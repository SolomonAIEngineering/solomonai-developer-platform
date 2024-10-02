"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.priorities = exports.statuses = exports.labels = void 0;
const react_icons_1 = require("@radix-ui/react-icons");
exports.labels = [
    {
        value: "bug",
        label: "Bug",
    },
    {
        value: "feature",
        label: "Feature",
    },
    {
        value: "documentation",
        label: "Documentation",
    },
];
exports.statuses = [
    {
        value: "backlog",
        label: "Backlog",
        icon: react_icons_1.QuestionMarkCircledIcon,
    },
    {
        value: "todo",
        label: "Todo",
        icon: react_icons_1.CircleIcon,
    },
    {
        value: "in progress",
        label: "In Progress",
        icon: react_icons_1.StopwatchIcon,
    },
    {
        value: "done",
        label: "Done",
        icon: react_icons_1.CheckCircledIcon,
    },
    {
        value: "canceled",
        label: "Canceled",
        icon: react_icons_1.CrossCircledIcon,
    },
];
exports.priorities = [
    {
        label: "Low",
        value: "low",
        icon: react_icons_1.ArrowDownIcon,
    },
    {
        label: "Medium",
        value: "medium",
        icon: react_icons_1.ArrowRightIcon,
    },
    {
        label: "High",
        value: "high",
        icon: react_icons_1.ArrowUpIcon,
    },
];
