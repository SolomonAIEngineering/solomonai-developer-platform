"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareLinkAction = void 0;
const safe_action_1 = require("@/actions/safe-action");
const dub_1 = require("@/lib/dub");
const schema_1 = require("./schema");
exports.shareLinkAction = safe_action_1.authActionClient
    .schema(schema_1.shareLinkSchema)
    .metadata({
    name: "share-link",
})
    .action(async ({ parsedInput: { postId, baseUrl } }) => {
    const link = await dub_1.dub.links.create({
        url: `${baseUrl}/post/${postId}`,
    });
    return link?.shortLink;
});
