"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePayloadArray = generatePayloadArray;
exports.generateScatterChartData = generateScatterChartData;
const date_utils_1 = require("../date-utils");
/**
 * Generates an array of Payload objects with random numerical values.
 *
 * @param options - Configuration options for the generator
 * @returns An array of Payload objects
 * @example
 *   const payloads = generatePayloadArray({ count: 5, minValue: 100, maxValue: 500 });
 */
function generatePayloadArray(options) {
    const { count, minValue = 0, maxValue = 1000 } = options;
    return Array.from({ length: count }, (_, index) => {
        const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        const randomDate = (0, date_utils_1.generateRandomDate)({
            start: new Date(2020, 0, 1),
            end: new Date(2023, 11, 31),
            inclusiveEnd: true,
        });
        return {
            value: randomValue,
            date: randomDate.toISOString(),
        };
    });
}
function generateScatterChartData(options) {
    const { count = 5, minValue = 0, maxValue = 1000 } = options;
    return Array.from({ length: count }, () => {
        const x = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
        const y = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
        return { x: x.toString(), y: y };
    });
}
