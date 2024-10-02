"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyExpenseTrendSchema = void 0;
const zod_1 = require("zod");
exports.DailyExpenseTrendSchema = zod_1.z.object({
    Date: zod_1.z.date(),
    DailyExpense: zod_1.z.number().nonnegative(),
    UserId: zod_1.z.string().uuid(),
});
