"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bun_test_1 = require("bun:test");
const utils_1 = require("./utils");
(0, bun_test_1.describe)('formatAmountValue', () => {
    (0, bun_test_1.it)('should handle numbers with comma as decimal separator', () => {
        (0, bun_test_1.expect)((0, utils_1.formatAmountValue)({ amount: '1.234,56' })).toBe(1234.56);
    });
    (0, bun_test_1.it)('should handle numbers with period as thousands separator', () => {
        (0, bun_test_1.expect)((0, utils_1.formatAmountValue)({ amount: '1.234.56' })).toBe(1234.56);
    });
    (0, bun_test_1.it)('should handle numbers with period as decimal separator', () => {
        (0, bun_test_1.expect)((0, utils_1.formatAmountValue)({ amount: '1234.56' })).toBe(1234.56);
    });
    (0, bun_test_1.it)('should handle plain numbers', () => {
        (0, bun_test_1.expect)((0, utils_1.formatAmountValue)({ amount: '1234' })).toBe(1234);
    });
    (0, bun_test_1.it)('should invert the amount when inverted is true', () => {
        (0, bun_test_1.expect)((0, utils_1.formatAmountValue)({ amount: '1234.56', inverted: true })).toBe(-1234.56);
    });
    (0, bun_test_1.it)('should handle negative numbers', () => {
        (0, bun_test_1.expect)((0, utils_1.formatAmountValue)({ amount: '-1234.56' })).toBe(-1234.56);
    });
    (0, bun_test_1.it)('should invert negative numbers when inverted is true', () => {
        (0, bun_test_1.expect)((0, utils_1.formatAmountValue)({ amount: '-1234.56', inverted: true })).toBe(1234.56);
    });
    (0, bun_test_1.it)('should handle zero', () => {
        (0, bun_test_1.expect)((0, utils_1.formatAmountValue)({ amount: '0' })).toBe(0);
        (0, bun_test_1.expect)((0, utils_1.formatAmountValue)({ amount: '0', inverted: true })).toBe(-0);
    });
});
(0, bun_test_1.describe)('formatDate', () => {
    (0, bun_test_1.it)('should format a valid date string', () => {
        (0, bun_test_1.expect)((0, utils_1.formatDate)('2023-05-15', 'Europe/Berlin')).toBe('2023-05-15');
    });
    (0, bun_test_1.it)('should handle date strings with non-date characters', () => {
        (0, bun_test_1.expect)((0, utils_1.formatDate)('2023/05/15', 'Europe/Berlin')).toBe('2023-05-15');
        (0, bun_test_1.expect)((0, utils_1.formatDate)('May 15, 2023', 'Europe/Berlin')).toBe('2023-05-15');
    });
    (0, bun_test_1.it)('should return undefined for invalid date strings', () => {
        (0, bun_test_1.expect)((0, utils_1.formatDate)('invalid-date', 'Europe/Berlin')).toBeUndefined();
        (0, bun_test_1.expect)((0, utils_1.formatDate)('2023-13-45', 'Europe/Berlin')).toBeUndefined();
    });
    (0, bun_test_1.it)('should handle different date formats', () => {
        (0, bun_test_1.expect)((0, utils_1.formatDate)('05/15/2023', 'Europe/Berlin')).toBe('2023-05-15');
    });
    (0, bun_test_1.it)('should handle dates with time', () => {
        (0, bun_test_1.expect)((0, utils_1.formatDate)('2023-05-15T14:30:00', 'Europe/Berlin')).toBe('2023-05-15');
    });
    (0, bun_test_1.it)('should handle dates dot separated', () => {
        (0, bun_test_1.expect)((0, utils_1.formatDate)('04.09.2024', 'Europe/Berlin')).toBe('2024-09-04');
    });
    (0, bun_test_1.it)('should handle dates with time', () => {
        (0, bun_test_1.expect)((0, utils_1.formatDate)('08.05.2024 09:12:07', 'Europe/Berlin')).toBe('2024-05-08');
    });
    (0, bun_test_1.it)('should handle dates 07/Aug/2024', () => {
        (0, bun_test_1.expect)((0, utils_1.formatDate)('07/Aug/2024', 'Europe/Berlin')).toBe('2024-08-07');
    });
    (0, bun_test_1.it)('should handle dates 24-08-2024', () => {
        (0, bun_test_1.expect)((0, utils_1.formatDate)('24-08-2024', 'Europe/Berlin')).toBe('2024-08-24');
    });
    (0, bun_test_1.it)('should handle European timezones', () => {
        (0, bun_test_1.expect)((0, utils_1.formatDate)('2023-05-15', 'Europe/Berlin')).toBe('2023-05-15');
    });
    (0, bun_test_1.it)('should handle America timezones', () => {
        (0, bun_test_1.expect)((0, utils_1.formatDate)('2023-05-15', 'America/New_York')).toBe('2023-05-14');
    });
});
