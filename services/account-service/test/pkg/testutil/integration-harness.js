import { integrationTestEnv } from "./env.js";
import { Harness } from "./harness.js";
import { step } from "./request.js";
export class IntegrationHarness extends Harness {
  baseUrl;
  constructor(t, d1) {
    super(t, d1);
    this.baseUrl = integrationTestEnv.parse(process.env).UNKEY_BASE_URL;
  }
  static async init(t, d1) {
    const h = new IntegrationHarness(t, d1);
    return h;
  }
  async do(req) {
    const reqWithUrl = {
      ...req,
      url: new URL(req.url, this.baseUrl).toString(),
    };
    return step(reqWithUrl);
  }
  async get(req) {
    return this.do({ method: "GET", ...req });
  }
  async post(req) {
    return this.do({ method: "POST", ...req });
  }
  async put(req) {
    return this.do({ method: "PUT", ...req });
  }
  async delete(req) {
    return this.do({ method: "DELETE", ...req });
  }
}
