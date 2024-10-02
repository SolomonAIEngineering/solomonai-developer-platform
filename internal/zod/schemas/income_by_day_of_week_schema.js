"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeByDayOfWeekSchema = void 0;
const zod_1 = require("zod");
exports.IncomeByDayOfWeekSchema = zod_1.z.object({
    DayOfWeek: zod_1.z.number().int().min(1).max(7),
    TotalIncome: zod_1.z.number().nonnegative(),
    TransactionCount: zod_1.z.number().int().nonnegative(),
    UserId: zod_1.z.string().uuid(),
});
