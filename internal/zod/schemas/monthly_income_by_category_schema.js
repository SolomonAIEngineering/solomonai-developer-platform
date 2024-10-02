"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyIncomeByCategorySchema = void 0;
const zod_1 = require("zod");
exports.MonthlyIncomeByCategorySchema = zod_1.z.object({
    Month: zod_1.z.number().int(),
    Category: zod_1.z.string(),
    TotalIncome: zod_1.z.number(),
    UserId: zod_1.z.string().uuid(),
});
