"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLabelsForView = exports.filterAppointments = exports.calculateNewDates = void 0;
exports.cn = cn;
exports.removeUnderScores = removeUnderScores;
const clsx_1 = require("clsx");
const date_fns_1 = require("date-fns");
const tailwind_merge_1 = require("tailwind-merge");
function cn(...inputs) {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
const calculateNewDates = (viewMode, index, currentIndex, dateRange) => {
    let start = new Date(dateRange.from);
    let end = new Date(dateRange.to);
    const delta = (currentIndex - index) * -1;
    switch (viewMode) {
        case "day":
            start.setHours(start.getHours() + delta);
            end.setHours(end.getHours() + delta);
            break;
        case "week":
            start.setDate(start.getDate() + delta);
            end.setDate(end.getDate() + delta);
            break;
        case "month":
            start.setDate(start.getDate() + delta);
            end.setDate(end.getDate() + delta);
            break;
        case "year":
            start = new Date(dateRange.from);
            start.setMonth(index);
            end = new Date(start);
            end.setMonth(start.getMonth() + 1);
            break;
    }
    return { start, end };
};
exports.calculateNewDates = calculateNewDates;
const filterAppointments = (appt, index, dateRange, viewMode) => {
    const apptDate = new Date(appt.start);
    if (!dateRange.from ||
        !dateRange.to ||
        !(0, date_fns_1.isWithinInterval)(apptDate, { start: dateRange.from, end: dateRange.to })) {
        return false;
    }
    return isAppointmentInSlot(apptDate, index, viewMode, dateRange);
};
exports.filterAppointments = filterAppointments;
// Helper function to determine if an appointment should be displayed in a specific slot
const isAppointmentInSlot = (apptDate, index, viewMode, dateRange) => {
    if (!dateRange.from)
        return false;
    switch (viewMode) {
        case "day":
            return (apptDate.getHours() === index && (0, date_fns_1.isSameDay)(apptDate, dateRange.from));
        case "week":
            return (apptDate.getDay() -
                (6 -
                    (0, date_fns_1.differenceInDays)(new Date(dateRange.to), new Date(dateRange.from))) ===
                index && (0, date_fns_1.isSameWeek)(apptDate, dateRange.from));
        case "month":
            return ((0, date_fns_1.getWeekOfMonth)(apptDate) === index &&
                (0, date_fns_1.isSameMonth)(apptDate, dateRange.from));
        case "year":
            return apptDate.getMonth() === index;
        default:
            return false;
    }
};
const getLabelsForView = (viewMode, dateRange) => {
    switch (viewMode) {
        case "day":
            // Generate hourly labels for each day in the range
            return (0, date_fns_1.eachHourOfInterval)({
                start: (0, date_fns_1.startOfDay)(dateRange.start),
                end: (0, date_fns_1.endOfDay)(dateRange.end),
            }).map((hour) => (0, date_fns_1.format)(hour, "HH:mm"));
        case "week":
            // Weekly labels based on the week number within the year
            return (0, date_fns_1.eachDayOfInterval)({
                start: dateRange.start,
                end: dateRange.end,
            }).map((day) => `${(0, date_fns_1.format)(day, "ccc ")} the ${(0, date_fns_1.format)(day, "do")}`);
        case "month":
            // Monthly labels showing the full month name and year
            return (0, date_fns_1.eachWeekOfInterval)({
                start: (0, date_fns_1.startOfMonth)(dateRange.start),
                end: (0, date_fns_1.endOfMonth)(dateRange.end),
            }).map((week) => `${(0, date_fns_1.format)(week, "wo")} week of ${(0, date_fns_1.format)(week, "MMM")}`);
        case "year":
            // Yearly labels showing month names only
            return (0, date_fns_1.eachMonthOfInterval)({
                start: (0, date_fns_1.startOfYear)(dateRange.start),
                end: (0, date_fns_1.endOfYear)(dateRange.end),
            }).map((month) => (0, date_fns_1.format)(month, "MMM"));
        default:
            return [];
    }
};
exports.getLabelsForView = getLabelsForView;
/**
 * Replaces all underscores in a string with spaces and convert the string to lower case.
 * @param input - The string to format.
 * @returns The formatted string.
 */
function removeUnderScores(input) {
    // Replace all underscores with spaces and convert to lowercase
    const formatted = input.replace(/_/g, " ").toLowerCase();
    // Capitalize the first letter and concatenate it with the rest of the string
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
