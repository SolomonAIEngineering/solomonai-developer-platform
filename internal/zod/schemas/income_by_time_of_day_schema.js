"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeByTimeOfDaySchema = void 0;
const zod_1 = require("zod");
exports.IncomeByTimeOfDaySchema = zod_1.z.object({
    HourOfDay: zod_1.z.number().int().min(0).max(23),
    TotalIncome: zod_1.z.number().nonnegative(),
    TransactionCount: zod_1.z.number().int().nonnegative(),
    UserId: zod_1.z.string().uuid(),
});
