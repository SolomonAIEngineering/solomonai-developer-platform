"use strict";
// CalendarDatePicker.stories.tsx
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithCallbacks = exports.WithCustomClassName = exports.WithInitialDateRange = exports.Default = void 0;
const calendar_picker_1 = require("./calendar-picker");
const meta = {
    component: calendar_picker_1.CalendarPicker,
    tags: ["autodocs"],
    argTypes: {
        initialFrom: {
            control: "date",
        },
        initialTo: {
            control: "date",
        },
        className: {
            control: "text",
        },
        onClick: { action: "clicked" },
        onDateChange: { action: "date changed" },
    },
};
exports.default = meta;
exports.Default = {
    args: {},
};
exports.WithInitialDateRange = {
    args: {
        initialFrom: new Date(2024, 0, 1), // January 1, 2024
        initialTo: new Date(2024, 11, 31), // December 31, 2024
    },
};
exports.WithCustomClassName = {
    args: {
        className: "bg-gray-100 rounded-lg shadow-md",
    },
};
exports.WithCallbacks = {
    args: {
        onClick: () => console.log("CalendarPicker clicked"),
        onDateChange: (from, to) => console.log("Date range changed:", from, to),
    },
};
