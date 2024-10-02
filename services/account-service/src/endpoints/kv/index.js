import { getRoute, putRoute } from "./routes.js";
import { handleGetRequest, handlePutRequest } from "./handlers.js";
export class KVEndpoint {
  app;
  constructor(app) {
    this.app = app;
  }
  registerRoutes() {
    this.app.openapi(getRoute, handleGetRequest);
    this.app.openapi(putRoute, handlePutRequest);
  }
}
export const registerV1KVRoutes = (app) => {
  const kvEndpoint = new KVEndpoint(app);
  kvEndpoint.registerRoutes();
};
