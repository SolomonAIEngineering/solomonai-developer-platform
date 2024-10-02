"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyExpensesByCategorySchema = void 0;
const zod_1 = require("zod");
exports.MonthlyExpensesByCategorySchema = zod_1.z.object({
    Month: zod_1.z.number().int(),
    Category: zod_1.z.string(),
    TotalExpense: zod_1.z.number(),
    UserId: zod_1.z.string().uuid(),
});
