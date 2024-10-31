import {
  Hyperdrive,
  KVNamespace, RateLimit
} from "@cloudflare/workers-types";
import { z } from "zod";
import { PrismaClient } from "@/database/generated/postgresql";

export let zEnv = z.object({
  VERSION: z.string().default("unknown"),
  KV: z.custom<KVNamespace>((ns) => typeof ns === "object"),
  RATE_LIMITER: z.custom<RateLimit>((ns) => typeof ns === "object"),
  HYPERDRIVE: z.custom<Hyperdrive>((ns) => typeof ns === "object"),
  DATABASE_CLIENT: z.custom<PrismaClient>((ns) => typeof ns === "object").optional(),
  ENVIRONMENT: z
    .enum(["development", "preview", "canary", "production"])
    .default("development"),
  PLATFORM_PREFIX: z.string().default("solomonai_platform"),
});

export type Env = z.infer<typeof zEnv>;
