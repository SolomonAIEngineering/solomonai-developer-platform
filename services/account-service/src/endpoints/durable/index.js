import { serviceDurableObjectRoute } from "./routes.js";
import { handleServiceDurableObjectRequest } from "./handlers.js";
export class ServiceDurableObjectEndpoint {
  app;
  constructor(app) {
    this.app = app;
  }
  registerRoutes() {
    this.app.openapi(serviceDurableObjectRoute, async (c) => {
      const response = await handleServiceDurableObjectRequest(c);
      return response;
    });
  }
}
export const registerV1ServiceDurableObjectRoutes = (app) => {
  const serviceDurableObjectEndpoint = new ServiceDurableObjectEndpoint(app);
  serviceDurableObjectEndpoint.registerRoutes();
};
