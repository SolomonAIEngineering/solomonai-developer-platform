"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myTask = myTask;
const v3_1 = require("@trigger.dev/sdk/v3");
async function myTask() {
    try {
        const handle = await v3_1.tasks.trigger("hello-world", "James");
        return { handle };
    }
    catch (error) {
        console.error(error);
        return {
            error: "something went wrong",
        };
    }
}
