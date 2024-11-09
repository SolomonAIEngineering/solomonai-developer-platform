ALTER TABLE "lead" DROP COLUMN IF EXISTS "validatedData";--> statement-breakpoint
ALTER TABLE "lead" DROP COLUMN IF EXISTS "enrichedData";--> statement-breakpoint
ALTER TABLE "lead" DROP COLUMN IF EXISTS "channel";--> statement-breakpoint
ALTER TABLE "lead" DROP COLUMN IF EXISTS "attributionData";--> statement-breakpoint
ALTER TABLE "lead" DROP COLUMN IF EXISTS "status";--> statement-breakpoint
ALTER TABLE "lead" DROP COLUMN IF EXISTS "processingErrors";--> statement-breakpoint
ALTER TABLE "lead" DROP COLUMN IF EXISTS "apiVersion";--> statement-breakpoint
ALTER TABLE "lead" DROP COLUMN IF EXISTS "requestId";--> statement-breakpoint
ALTER TABLE "lead" DROP COLUMN IF EXISTS "ipAddress";--> statement-breakpoint
ALTER TABLE "lead" DROP COLUMN IF EXISTS "userAgent";--> statement-breakpoint
ALTER TABLE "lead" DROP COLUMN IF EXISTS "processedAt";--> statement-breakpoint
ALTER TABLE "lead" DROP COLUMN IF EXISTS "enrichedAt";