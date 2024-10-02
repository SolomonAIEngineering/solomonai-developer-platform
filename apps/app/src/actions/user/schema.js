"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = void 0;
const zod_1 = require("zod");
exports.updateUserSchema = zod_1.z.object({
    full_name: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
    avatar_url: zod_1.z.string().optional(),
});
