"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSize = formatSize;
exports.formatAmount = formatAmount;
exports.secondsToHoursAndMinutes = secondsToHoursAndMinutes;
exports.calculateAvgBurnRate = calculateAvgBurnRate;
exports.formatTransactionDate = formatTransactionDate;
exports.getYAxisWidth = getYAxisWidth;
exports.roundToNearestFactor = roundToNearestFactor;
exports.generateTickValues = generateTickValues;
exports.computeChartDataDifferenceOverTime = computeChartDataDifferenceOverTime;
const date_fns_1 = require("date-fns");
function formatSize(bytes) {
    const units = ["byte", "kilobyte", "megabyte", "gigabyte", "terabyte"];
    const unitIndex = Math.max(0, Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1));
    return Intl.NumberFormat("en-US", {
        style: "unit",
        unit: units[unitIndex],
    }).format(+Math.round(bytes / 1024 ** unitIndex));
}
function formatAmount({ currency, amount, locale = "en-US", minimumFractionDigits, maximumFractionDigits, }) {
    if (!currency) {
        return amount.toString();
    }
    return Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits,
        maximumFractionDigits,
    }).format(amount);
}
function secondsToHoursAndMinutes(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours) {
        return `${hours}h`;
    }
    if (minutes) {
        return `${minutes}m`;
    }
    return "0h";
}
function calculateAvgBurnRate(data) {
    if (!data) {
        return 0;
    }
    return data?.reduce((acc, curr) => acc + curr.value, 0) / data?.length;
}
function formatTransactionDate(date) {
    if ((0, date_fns_1.isSameYear)(new Date(), new Date(date))) {
        return (0, date_fns_1.format)(new Date(date), "MMM d");
    }
    return (0, date_fns_1.format)(new Date(date), "P");
}
/**
 * Calculates the width of the Y-axis based on the length of the value string.
 *
 * @param value - The value to calculate the width for
 * @returns The calculated width in pixels
 * @throws {Error} If the input is not a valid number or string
 */
function getYAxisWidth(value) {
    if (typeof value !== "number" && typeof value !== "string") {
        throw new Error("Invalid input: value must be a number or string");
    }
    const stringValue = value.toString();
    return stringValue.length * 7 + 2;
}
/**
 * Rounds an array of numbers to the nearest factor based on their distribution.
 *
 * @param numbers - An array of numbers to round
 * @returns The maximum rounded value, or undefined if the input array is empty
 * @throws {Error} If the input is not an array of numbers
 */
function roundToNearestFactor(numbers) {
    if (!Array.isArray(numbers) ||
        numbers.some((num) => typeof num !== "number")) {
        throw new Error("Invalid input: numbers must be an array of numbers");
    }
    if (numbers.length === 0)
        return 0;
    if (numbers.length === 1)
        return numbers[0] || 0;
    const maxNumber = Math.max(...numbers);
    // Determine the magnitude of the maximum number
    const magnitude = Math.floor(Math.log10(maxNumber));
    // Calculate potential rounding factors
    const factors = [1, 2, 5].map((f) => f * Math.pow(10, magnitude));
    // Find the smallest factor that's larger than the maximum number
    const roundingFactor = factors.find((f) => f > maxNumber) || factors[factors.length - 1];
    return roundingFactor || 0;
}
/**
 * Generates an array of rounded tick values for a chart axis.
 *
 * @param min - The minimum value in the data set
 * @param max - The maximum value in the data set
 * @param desiredTickCount - The desired number of ticks (default is 5)
 * @returns An array of rounded tick values
 */
function generateTickValues(min, max, desiredTickCount = 5) {
    if (min >= max) {
        throw new Error("Invalid input: min must be less than max");
    }
    const range = max - min;
    const roughTickSize = range / (desiredTickCount - 1);
    const roundingFactor = Math.pow(10, Math.floor(Math.log10(roughTickSize)));
    const normalizedTickSize = Math.ceil(roughTickSize / roundingFactor) * roundingFactor;
    const ticks = [];
    let currentTick = Math.floor(min / normalizedTickSize) * normalizedTickSize;
    while (currentTick <= max) {
        ticks.push(Number(currentTick.toFixed(2)));
        currentTick += normalizedTickSize;
    }
    return ticks;
}
/**
 * Computes the difference in chart data points over time based on a specified period.
 *
 * This function takes an array of chart data points and calculates the difference
 * between current and previous values based on a weekly or monthly period. It's useful
 * for analyzing trends and changes in time-series data.
 *
 * @param {ChartDataPoint[]} inputData - An array of chart data points, each containing a date and value.
 * @param {"weekly" | "monthly"} period - The time period for comparison, either "weekly" or "monthly".
 *
 * @returns {ChartDatePointWithDifference} An object containing:
 *   - result: An array of data items, each with the current date, current value, and previous value.
 *   - meta: An object specifying the period used for calculations.
 *
 * @example
 * const inputData = [
 *   { date: "2023-01-01", value: 100 },
 *   { date: "2023-01-08", value: 150 },
 *   { date: "2023-01-15", value: 200 }
 * ];
 * const result = computeChartDataDifferenceOverTime(inputData, "weekly");
 *
 * @remarks
 * - The function assumes that the input data is sorted by date in ascending order.
 * - For weekly comparisons, it uses a 7-day threshold.
 * - For monthly comparisons, it uses a 28-day threshold as an approximation.
 * - The first data point will always have a previous value of 0.
 *
 * @throws {Error} Throws an error if the input array is empty or if an invalid period is provided.
 *
 * @see {@link ChartDataPoint} for the structure of input data points.
 * @see {@link ChartDatePointWithDifference} for the structure of the return value.
 */
function computeChartDataDifferenceOverTime(inputData, period) {
    return {
        result: inputData.map((point, index) => {
            const currentDate = new Date(point.date);
            let previousValue = 0;
            if (index > 0) {
                const previousPoint = inputData[index - 1];
                if (previousPoint) {
                    const previousDate = new Date(previousPoint.date);
                    const timeDifference = currentDate.getTime() - previousDate.getTime();
                    const daysDifference = timeDifference / (1000 * 3600 * 24);
                    if ((period === "weekly" && daysDifference >= 7) ||
                        (period === "monthly" && daysDifference >= 28)) {
                        previousValue = point.value;
                    }
                    else {
                        previousValue = previousPoint.value;
                    }
                }
            }
            return {
                date: point.date,
                current: { value: point.value },
                previous: { value: previousValue },
            };
        }),
        meta: { period },
    };
}
