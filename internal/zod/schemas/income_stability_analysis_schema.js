"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeStabilityAnalysisSchema = void 0;
const zod_1 = require("zod");
exports.IncomeStabilityAnalysisSchema = zod_1.z.object({
    Month: zod_1.z.number().int(),
    CoefficientOfVariation: zod_1.z.number(),
    UserId: zod_1.z.string().uuid(),
});
