"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeDiversityAnalysisSchema = void 0;
const zod_1 = require("zod");
exports.IncomeDiversityAnalysisSchema = zod_1.z.object({
    Month: zod_1.z.number().int().min(202201).max(209912),
    DistinctSources: zod_1.z.number().int().positive(),
    UserId: zod_1.z.string().uuid(),
});
