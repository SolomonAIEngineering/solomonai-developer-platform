import { TriggerClient } from "@trigger.dev/sdk";
import { jobManager } from "./index";
export class TriggerClientWrapper {
  client;
  constructor(id, apiKey, apiUrl) {
    this.client = new TriggerClient({
      id,
      apiKey,
      apiUrl,
    });
    jobManager.attachJobsToClient(this.client);
  }
  getClient() {
    return this.client;
  }
}
