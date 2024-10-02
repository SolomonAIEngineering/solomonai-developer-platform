import { benchmarkTestEnv } from "./env.js";
import { Harness } from "./harness.js";
import { step } from "./request.js";
export class BenchmarkHarness extends Harness {
    env;
    constructor(t, d1) {
        super(t, d1);
        this.env = benchmarkTestEnv.parse(process.env);
    }
    static async init(t, d1) {
        const h = new BenchmarkHarness(t, d1);
        return h;
    }
    async get(req) {
        return await step({ method: "GET", ...req });
    }
    async post(req) {
        return await step({ method: "POST", ...req });
    }
    async put(req) {
        return await step({ method: "PUT", ...req });
    }
    async delete(req) {
        return await step({ method: "DELETE", ...req });
    }
}
