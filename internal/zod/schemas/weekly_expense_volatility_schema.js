"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeeklyExpenseVolatilitySchema = void 0;
const zod_1 = require("zod");
// WeeklyExpenseVolatility
exports.WeeklyExpenseVolatilitySchema = zod_1.z.object({
    Month: zod_1.z.number().int(),
    WeekStart: zod_1.z.date(),
    ExpenseVolatility: zod_1.z.number(),
    UserId: zod_1.z.string().uuid(),
});
