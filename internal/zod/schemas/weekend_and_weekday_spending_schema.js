"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeekendWeekdaySpendingSchema = void 0;
const zod_1 = require("zod");
exports.WeekendWeekdaySpendingSchema = zod_1.z.object({
    Month: zod_1.z.number().int(),
    DayType: zod_1.z.enum(['Weekend', 'Weekday']),
    TotalSpend: zod_1.z.number(),
    UserId: zod_1.z.string().uuid(),
});
