import { z } from "@hono/zod-openapi";
export const RecordSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  email: z.string().email(),
  createdAt: z.string().datetime(),
  data: z.record(z.unknown()),
});
