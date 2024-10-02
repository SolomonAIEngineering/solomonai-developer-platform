"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeByLocationSchema = void 0;
const zod_1 = require("zod");
exports.IncomeByLocationSchema = zod_1.z.object({
    Month: zod_1.z.number().int().min(202201).max(209912),
    City: zod_1.z.string(),
    Region: zod_1.z.string(),
    Country: zod_1.z.string(),
    TotalIncome: zod_1.z.number().nonnegative(),
    UserId: zod_1.z.string().uuid(),
});
