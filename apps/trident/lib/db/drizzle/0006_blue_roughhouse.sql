ALTER TABLE "lead" ALTER COLUMN "data" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "lead" ALTER COLUMN "createdAt" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "lead" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "lead" ALTER COLUMN "updatedAt" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "firstName" text NOT NULL;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "lastName" text NOT NULL;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "phone" text;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "company" text;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "jobTitle" text;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "industry" "industry";--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "website" text;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "address" jsonb;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "source" "leadSource" NOT NULL;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "campaign" text;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "referrer" text;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "medium" text;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "term" text;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "content" text;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "status" "leadStatus" DEFAULT 'new' NOT NULL;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "rating" "rating";--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "leadScore" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "engagementLevel" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "preferredContactMethod" "contactMethod";--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "optedIn" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "notes" text;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "seasonalInterest" jsonb;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "purchaseTimeline" text;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "lastContactedAt" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "nextFollowUpAt" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "ownerId" text;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "activityHistory" jsonb;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "gdprConsent" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "ccpaConsent" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "customFields" jsonb;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "lead" ADD CONSTRAINT "lead_ownerId_user_id_fk" FOREIGN KEY ("ownerId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
