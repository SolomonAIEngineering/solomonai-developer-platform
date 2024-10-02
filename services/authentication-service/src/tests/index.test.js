"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrangler_1 = require("wrangler");
const vitest_1 = require("vitest");
(0, vitest_1.describe)("Worker", () => {
    let worker;
    (0, vitest_1.beforeAll)(async () => {
        worker = await (0, wrangler_1.unstable_dev)("src/index.ts", {
            experimental: { disableExperimentalWarning: true },
        });
    });
    (0, vitest_1.afterAll)(async () => {
        await worker.stop();
    });
    (0, vitest_1.it)("should return Hello World", async () => {
        const resp = await worker.fetch("/");
        if (resp !== null) {
            const text = await resp.text();
            (0, vitest_1.expect)(text).toMatchInlineSnapshot(`"Hello World!"`);
        }
    });
});
