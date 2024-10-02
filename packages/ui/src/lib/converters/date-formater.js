"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
/**
 * Converts a date string from ISO format to a custom format (e.g., "Sun, August 25").
 * @param dateString The date string in ISO format (e.g., "2024-08-30T08:00:41.906Z")
 * @returns A formatted date string (e.g., "Sun, August 25")
 */
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const dayOfWeek = dayNames[date.getUTCDay()];
    const month = monthNames[date.getUTCMonth()];
    const day = date.getUTCDate();
    return `${dayOfWeek}, ${month} ${day}`;
};
exports.formatDate = formatDate;
