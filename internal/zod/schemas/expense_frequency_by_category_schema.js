"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseFrequencyByCategorySchema = void 0;
const zod_1 = require("zod");
exports.ExpenseFrequencyByCategorySchema = zod_1.z.object({
    Category: zod_1.z.string(),
    TransactionCount: zod_1.z.number().int().nonnegative(),
    UserId: zod_1.z.string().uuid(),
});
