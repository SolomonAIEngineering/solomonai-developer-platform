import { createRoute, z } from "@hono/zod-openapi";
import { openApiErrorResponses } from "../../pkg/errors/index.js";
import { listPosts } from "../../utils/index.js";
const listPostsRoute = createRoute({
  tags: ["posts"],
  operationId: "listPosts",
  method: "get",
  path: "/v1/posts",
  responses: {
    200: {
      description: "List of posts",
      content: {
        "text/plain": {
          schema: z.string(),
        },
      },
    },
    ...openApiErrorResponses,
  },
});
export const registerV1ListPosts = (app) =>
  app.openapi(listPostsRoute, async (c) => {
    const posts = await listPosts(c.env.DB);
    const origin = new URL(c.req.url).origin;
    const body = posts
      .map((post) => `${origin}${post.slug}\n${post.body}`)
      .join(`\n\n${"-".repeat(20)}\n`);
    return c.text(body);
  });
