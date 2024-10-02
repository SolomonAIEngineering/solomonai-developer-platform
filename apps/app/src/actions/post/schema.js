"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareLinkSchema = void 0;
const zod_1 = require("zod");
exports.shareLinkSchema = zod_1.z.object({
    postId: zod_1.z.string(),
    baseUrl: zod_1.z.string(),
});
