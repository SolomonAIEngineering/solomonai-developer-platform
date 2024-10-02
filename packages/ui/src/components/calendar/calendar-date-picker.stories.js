"use strict";
// CalendarDatePicker.stories.tsx
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomClassName = exports.CustomVariant = exports.CloseOnSelect = exports.CustomYearsRange = exports.SingleMonth = exports.Default = void 0;
const date_fns_1 = require("date-fns");
const calendar_date_picker_1 = require("./calendar-date-picker");
const meta = {
    component: calendar_date_picker_1.CalendarDatePicker,
    tags: ["autodocs"],
    argTypes: {
        id: { control: "text" },
        className: { control: "text" },
        closeOnSelect: { control: "boolean" },
        numberOfMonths: {
            control: { type: "radio", options: [1, 2] },
        },
        yearsRange: { control: "number" },
        variant: {
            control: {
                type: "select",
                options: [
                    "default",
                    "destructive",
                    "outline",
                    "secondary",
                    "ghost",
                    "link",
                ],
            },
        },
    },
};
exports.default = meta;
const today = new Date();
exports.Default = {
    args: {
        id: "default-picker",
        date: { from: today, to: (0, date_fns_1.addDays)(today, 7) },
        onDateSelect: (range) => console.log("Date selected:", range),
    },
};
exports.SingleMonth = {
    args: {
        ...exports.Default.args,
        id: "single-month-picker",
        numberOfMonths: 1,
        date: { from: today, to: today },
    },
};
exports.CustomYearsRange = {
    args: {
        ...exports.Default.args,
        id: "custom-years-range-picker",
        yearsRange: 20,
    },
};
exports.CloseOnSelect = {
    args: {
        ...exports.Default.args,
        id: "close-on-select-picker",
        closeOnSelect: true,
    },
};
exports.CustomVariant = {
    args: {
        ...exports.Default.args,
        id: "custom-variant-picker",
        variant: "outline",
    },
};
exports.CustomClassName = {
    args: {
        ...exports.Default.args,
        id: "custom-class-picker",
        className: "bg-blue-100 p-4 rounded-lg",
    },
};
