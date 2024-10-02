"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskSchema = void 0;
const zod_1 = require("zod");
// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
exports.taskSchema = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string(),
    status: zod_1.z.string(),
    label: zod_1.z.string(),
    priority: zod_1.z.string(),
});
