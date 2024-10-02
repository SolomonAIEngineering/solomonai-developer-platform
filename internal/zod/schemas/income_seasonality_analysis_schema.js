"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeSeasonalityAnalysisSchema = void 0;
const zod_1 = require("zod");
exports.IncomeSeasonalityAnalysisSchema = zod_1.z.object({
    Month: zod_1.z.number().int().min(1).max(12),
    AvgMonthlyIncome: zod_1.z.number(),
    UserId: zod_1.z.string().uuid(),
});
