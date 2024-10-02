"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserAction = void 0;
const safe_action_1 = require("@/actions/safe-action");
const mutations_1 = require("@v1/supabase/mutations");
const schema_1 = require("./schema");
exports.updateUserAction = safe_action_1.authActionClient
    .schema(schema_1.updateUserSchema)
    .metadata({
    name: "update-user",
})
    .action(async ({ parsedInput: input, ctx: { user } }) => {
    const result = await (0, mutations_1.updateUser)(user.id, input);
    return result;
});
