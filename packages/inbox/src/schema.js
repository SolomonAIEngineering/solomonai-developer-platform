"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inboxWebhookPostSchema = exports.inboxAttachment = void 0;
const zod_1 = require("zod");
exports.inboxAttachment = zod_1.z.object({
    Name: zod_1.z.string(),
    Content: zod_1.z.string(),
    ContentType: zod_1.z.string(),
    ContentID: zod_1.z.string(),
    ContentLength: zod_1.z.number(),
});
exports.inboxWebhookPostSchema = zod_1.z.object({
    OriginalRecipient: zod_1.z.union([
        zod_1.z
            .string({ required_error: 'OriginalRecipient is required' })
            .email({ message: 'Invalid email format' })
            .endsWith('@inbox.solomon-ai.app', { message: 'Invalid email domain' }),
        zod_1.z
            .string({ required_error: 'OriginalRecipient is required' })
            .email({ message: 'Invalid email format' })
            .endsWith('@inbox.staging.solomon-ai.app', {
            message: 'Invalid email domain',
        }),
    ]),
    Attachments: zod_1.z.array(exports.inboxAttachment).optional(),
    Subject: zod_1.z.string().optional(),
    TextBody: zod_1.z.string().optional(),
    HtmlBody: zod_1.z.string().optional(),
    FromFull: zod_1.z.object({
        Name: zod_1.z.string(),
        Email: zod_1.z.string(),
    }),
    MessageID: zod_1.z.string({ required_error: 'MessageID is required' }),
});
