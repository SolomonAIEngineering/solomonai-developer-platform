import { App } from "@/hono/app";
import { registerHealthApi } from "./health";


export function setupRoutes(app: App) {
  // register the accounts api route
  registerHealthApi(app);
}
