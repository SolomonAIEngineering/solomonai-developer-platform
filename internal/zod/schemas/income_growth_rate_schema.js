"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeGrowthRateSchema = void 0;
const zod_1 = require("zod");
exports.IncomeGrowthRateSchema = zod_1.z.object({
    Month: zod_1.z.number().int().min(202201).max(209912),
    GrowthRate: zod_1.z.number(),
    UserId: zod_1.z.string().uuid(),
});
