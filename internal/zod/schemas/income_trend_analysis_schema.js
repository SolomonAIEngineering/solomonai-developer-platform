"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeTrendAnalysisSchema = void 0;
const zod_1 = require("zod");
exports.IncomeTrendAnalysisSchema = zod_1.z.object({
    Month: zod_1.z.number().int(),
    TotalIncome: zod_1.z.number(),
    AvgIncome: zod_1.z.number(),
    MaxIncome: zod_1.z.number(),
    MinIncome: zod_1.z.number(),
    UserId: zod_1.z.string().uuid(),
});
