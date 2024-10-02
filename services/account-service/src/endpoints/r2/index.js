import {
  handleDeleteRequest,
  handleGetRequest,
  handlePutRequest,
} from "./handlers.js";
import { deleteRoute, getRoute, putRoute } from "./routes.js";
// Define the Zod schema for our record type
class R2Endpoint {
  app;
  constructor(app) {
    this.app = app;
  }
  registerRoutes() {
    this.app.openapi(getRoute, (c) => handleGetRequest(c));
    this.app.openapi(putRoute, (c) => handlePutRequest(c));
    this.app.openapi(deleteRoute, (c) => handleDeleteRequest(c));
  }
}
// Export the R2Endpoint class to access route definitions
export { R2Endpoint };
export const registerV1R2Routes = (app) => {
  const r2Endpoint = new R2Endpoint(app);
  r2Endpoint.registerRoutes();
};
