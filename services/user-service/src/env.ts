import type { UserActionMessageBody } from "@/message/user-action-message";
import {
  D1Database,
  Fetcher,
  Hyperdrive,
  KVNamespace,
  Queue,
  R2Bucket,
  RateLimit,
} from "@cloudflare/workers-types";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

export let zEnv = z.object({
  VERSION: z.string().default("unknown"),
  DB: z.custom<D1Database>((ns) => typeof ns === "object"),
  KV: z.custom<KVNamespace>((ns) => typeof ns === "object"),
  STORAGE: z.custom<R2Bucket>((ns) => typeof ns === "object"),
  BANK_STATEMENTS: z.custom<R2Bucket>((ns) => typeof ns === "object"),
  RATE_LIMITER: z.custom<RateLimit>((ns) => typeof ns === "object"),
  HYPERDRIVE: z.custom<Hyperdrive>((ns) => typeof ns === "object"),
  TELLER_CERT: z.custom<Fetcher>((ns) => typeof ns === "object").optional(),
  DATABASE_CLIENT: z.custom<PrismaClient>((ns) => typeof ns === "object"),
  ENVIRONMENT: z
    .enum(["development", "preview", "canary", "production"])
    .default("development"),
  PLATFORM_PREFIX: z.string().default("solomonai_platform"),
});

export type Env = z.infer<typeof zEnv>;
