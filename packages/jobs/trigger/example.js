"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorldTask = void 0;
const v3_1 = require("@trigger.dev/sdk/v3");
exports.helloWorldTask = (0, v3_1.task)({
    id: "hello-world",
    run: async (payload, { ctx }) => {
        v3_1.logger.log("Hello, world!", { payload, ctx });
        await v3_1.wait.for({ seconds: 5 });
        return {
            message: "Hello, world!",
        };
    },
});
