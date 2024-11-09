DO $$ BEGIN
 CREATE TYPE "public"."actionPriority" AS ENUM('critical', 'high', 'medium', 'low', 'optional');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."analysisStatus" AS ENUM('pending', 'processing', 'completed', 'failed', 'scheduled');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."confidenceLevel" AS ENUM('very_high', 'high', 'moderate', 'low', 'uncertain');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."seasonType" AS ENUM('peak', 'off', 'transition', 'micro-peak', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "abTestCampaign" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"startDate" timestamp with time zone NOT NULL,
	"endDate" timestamp with time zone,
	"status" text NOT NULL,
	"variants" jsonb,
	"metrics" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "apiKey" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"name" text NOT NULL,
	"key" text NOT NULL,
	"secret" text NOT NULL,
	"permissions" jsonb NOT NULL,
	"lastUsed" timestamp with time zone,
	"expiresAt" timestamp with time zone,
	"rateLimit" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "apiMetric" (
	"id" text PRIMARY KEY NOT NULL,
	"endpointId" text NOT NULL,
	"apiKeyId" text,
	"timestamp" timestamp with time zone NOT NULL,
	"method" text NOT NULL,
	"path" text NOT NULL,
	"statusCode" integer NOT NULL,
	"responseTime" integer NOT NULL,
	"requestSize" integer,
	"responseSize" integer,
	"error" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "apiVersion" (
	"id" text PRIMARY KEY NOT NULL,
	"version" text NOT NULL,
	"status" text NOT NULL,
	"deprecationDate" timestamp with time zone,
	"sunsetDate" timestamp with time zone,
	"changelog" jsonb,
	"createdAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "communicationTemplate" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"type" text NOT NULL,
	"subject" text,
	"content" text NOT NULL,
	"variables" jsonb,
	"industry" text,
	"season" text,
	"tags" jsonb,
	"isActive" boolean DEFAULT true
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "competitorAnalysis" (
	"id" text PRIMARY KEY NOT NULL,
	"competitorName" text NOT NULL,
	"activityType" text NOT NULL,
	"season" text,
	"impact" integer NOT NULL,
	"description" text,
	"observedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "customField" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"label" text NOT NULL,
	"type" text NOT NULL,
	"options" jsonb,
	"validation" jsonb,
	"industry" text,
	"isActive" boolean DEFAULT true
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "deal" (
	"id" text PRIMARY KEY NOT NULL,
	"leadId" text NOT NULL,
	"stage" text NOT NULL,
	"value" numeric(10, 2) NOT NULL,
	"probability" integer NOT NULL,
	"expectedCloseDate" timestamp with time zone,
	"actualCloseDate" timestamp with time zone,
	"reason" text,
	"notes" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "enhancedLeadScore" (
	"id" text PRIMARY KEY NOT NULL,
	"leadId" text NOT NULL,
	"baseScore" integer DEFAULT 0 NOT NULL,
	"engagementScore" integer DEFAULT 0 NOT NULL,
	"seasonalityScore" integer DEFAULT 0 NOT NULL,
	"demographicScore" integer DEFAULT 0 NOT NULL,
	"behavioralScore" integer DEFAULT 0 NOT NULL,
	"urgencyScore" integer DEFAULT 0 NOT NULL,
	"budgetScore" integer DEFAULT 0 NOT NULL,
	"totalScore" integer DEFAULT 0 NOT NULL,
	"scoreHistory" jsonb,
	"lastCalculated" timestamp with time zone NOT NULL,
	"nextRecalculationDate" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "enhancedLog" (
	"id" text PRIMARY KEY NOT NULL,
	"category" text NOT NULL,
	"severity" text NOT NULL,
	"context" jsonb NOT NULL,
	"timestamp" timestamp with time zone DEFAULT now() NOT NULL,
	"relatedEntityId" text,
	"relatedEntityType" text,
	"source" text NOT NULL,
	"stackTrace" text,
	"duration" integer,
	"ip" text,
	"userAgent" text,
	"tags" jsonb,
	"resolved" boolean DEFAULT false,
	"resolvedBy" text,
	"resolvedAt" timestamp with time zone,
	"notes" text,
	"retentionDays" integer DEFAULT 30
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "followUpTask" (
	"id" text PRIMARY KEY NOT NULL,
	"leadId" text NOT NULL,
	"assignedTo" text NOT NULL,
	"type" text NOT NULL,
	"priority" text NOT NULL,
	"dueDate" timestamp with time zone NOT NULL,
	"status" text NOT NULL,
	"notes" text,
	"completedAt" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "formBuilder" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"fields" jsonb NOT NULL,
	"styling" jsonb,
	"settings" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "industryCategory" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"parentId" text,
	"level" integer NOT NULL,
	"characteristics" jsonb,
	"metadata" jsonb,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "insight" (
	"id" text PRIMARY KEY NOT NULL,
	"type" text NOT NULL,
	"content" jsonb NOT NULL,
	"createdAt" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "integrationConfig" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"provider" text NOT NULL,
	"config" jsonb,
	"status" text NOT NULL,
	"lastSynced" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "leadCampaignProgress" (
	"id" text PRIMARY KEY NOT NULL,
	"leadId" text NOT NULL,
	"campaignId" text NOT NULL,
	"currentStage" integer DEFAULT 0 NOT NULL,
	"status" text NOT NULL,
	"startedAt" timestamp with time zone NOT NULL,
	"completedAt" timestamp with time zone,
	"metadata" jsonb,
	CONSTRAINT "leadCampaignProgress_leadId_campaignId_unique" UNIQUE("leadId","campaignId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "leadContactHistory" (
	"id" text PRIMARY KEY NOT NULL,
	"leadId" text NOT NULL,
	"type" text NOT NULL,
	"status" text NOT NULL,
	"outcome" text,
	"notes" text,
	"scheduledAt" timestamp with time zone,
	"completedAt" timestamp with time zone,
	"createdAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "leadEngagement" (
	"id" text PRIMARY KEY NOT NULL,
	"leadId" text NOT NULL,
	"type" text NOT NULL,
	"channel" text NOT NULL,
	"url" text,
	"duration" integer,
	"device" text,
	"location" text,
	"userAgent" text,
	"metadata" jsonb,
	"sessionId" text,
	"timestamp" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "leadNurtureCampaigns" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"triggerConditions" jsonb NOT NULL,
	"stages" jsonb NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"createdAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "leadQualificationRule" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"conditions" jsonb NOT NULL,
	"minimumScore" integer NOT NULL,
	"industry" text NOT NULL,
	"isActive" boolean DEFAULT true,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "leadRoutingRule" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"priority" integer NOT NULL,
	"conditions" jsonb NOT NULL,
	"assignTo" jsonb NOT NULL,
	"isActive" boolean DEFAULT true
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "leadScoringRules" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"category" text NOT NULL,
	"condition" jsonb NOT NULL,
	"scoreAdjustment" integer NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"priority" integer NOT NULL,
	"createdAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "marketContext" (
	"id" text PRIMARY KEY NOT NULL,
	"industryId" text NOT NULL,
	"region" text NOT NULL,
	"timeframe" jsonb NOT NULL,
	"economicIndicators" jsonb,
	"marketConditions" jsonb,
	"regulatoryEnvironment" jsonb,
	"sentiment" jsonb,
	"timestamp" timestamp with time zone NOT NULL,
	"confidence" numeric(4, 3) NOT NULL,
	"lastUpdated" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "nurtureSequence" (
	"id" text PRIMARY KEY NOT NULL,
	"industry" text NOT NULL,
	"season" text NOT NULL,
	"messageTemplate" jsonb NOT NULL,
	"sequenceOrder" integer NOT NULL,
	"delayInDays" integer NOT NULL,
	"variationId" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "performanceMetric" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"metric" text NOT NULL,
	"value" numeric(10, 2) NOT NULL,
	"dimension" jsonb,
	"timestamp" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pipelineStage" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"order" integer NOT NULL,
	"industry" text,
	"expectedDurationDays" integer,
	"requirements" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "predictiveModel" (
	"id" text PRIMARY KEY NOT NULL,
	"type" text NOT NULL,
	"parameters" jsonb NOT NULL,
	"accuracy" numeric(4, 3),
	"lastTrained" timestamp with time zone NOT NULL,
	"nextTrainingDue" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "seasonalAnalytics" (
	"id" text PRIMARY KEY NOT NULL,
	"patternId" text NOT NULL,
	"period" jsonb NOT NULL,
	"metrics" jsonb NOT NULL,
	"insights" jsonb,
	"attribution" jsonb,
	"metadata" jsonb,
	"created_at" timestamp with time zone NOT NULL,
	"updated_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "seasonalModel" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"version" text NOT NULL,
	"type" text NOT NULL,
	"purpose" text NOT NULL,
	"configuration" jsonb,
	"performance" jsonb,
	"lifecycle" jsonb,
	"monitoring" jsonb,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "seasonalPattern" (
	"id" text PRIMARY KEY NOT NULL,
	"industryId" text NOT NULL,
	"region" text NOT NULL,
	"seasonName" text NOT NULL,
	"startDate" date NOT NULL,
	"endDate" date NOT NULL,
	"expectedLeadIncrease" integer,
	"typicalConversionRate" integer,
	"notes" text,
	"pattern" jsonb NOT NULL,
	"realTimeModifiers" jsonb,
	"createdAt" timestamp with time zone NOT NULL,
	"modelId" text,
	"confidenceScore" numeric(4, 3) NOT NULL,
	"lastUpdated" timestamp with time zone NOT NULL,
	"nextUpdate" timestamp with time zone NOT NULL,
	"metadata" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "teamMember" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"role" text NOT NULL,
	"permissions" jsonb NOT NULL,
	"assignedLeads" jsonb,
	"lastActive" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "userProfile" (
	"userId" text NOT NULL,
	"industry" text NOT NULL,
	"companySize" text NOT NULL,
	"timezone" text NOT NULL,
	"notifications" jsonb,
	"lead_scoring_weights" jsonb,
	"preferences" jsonb,
	"customFields" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "webhookDelivery" (
	"id" text PRIMARY KEY NOT NULL,
	"endpointId" text NOT NULL,
	"leadId" text NOT NULL,
	"status" text NOT NULL,
	"attempts" integer DEFAULT 0 NOT NULL,
	"lastAttempt" timestamp with time zone,
	"nextAttempt" timestamp with time zone,
	"payload" jsonb NOT NULL,
	"response" jsonb,
	"error" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "workflow" (
	"id" text PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text,
	"trigger" jsonb,
	"actions" jsonb,
	"isActive" boolean DEFAULT true,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
ALTER TABLE "endpoint" ALTER COLUMN "createdAt" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "endpoint" ALTER COLUMN "updatedAt" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "lead" ALTER COLUMN "createdAt" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "lead" ALTER COLUMN "updatedAt" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "endpoint" ADD COLUMN "description" text;--> statement-breakpoint
ALTER TABLE "endpoint" ADD COLUMN "apiVersionId" text;--> statement-breakpoint
ALTER TABLE "endpoint" ADD COLUMN "config" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "endpoint" ADD COLUMN "monitoring" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "endpoint" ADD COLUMN "baseUrl" text;--> statement-breakpoint
ALTER TABLE "endpoint" ADD COLUMN "apiKey" text;--> statement-breakpoint
ALTER TABLE "endpoint" ADD COLUMN "secretKey" text;--> statement-breakpoint
ALTER TABLE "endpoint" ADD COLUMN "documentation" jsonb;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "validatedData" jsonb;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "enrichedData" jsonb;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "channel" text NOT NULL;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "attributionData" jsonb;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "status" text DEFAULT 'pending' NOT NULL;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "processingErrors" jsonb;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "apiVersion" text;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "requestId" text;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "ipAddress" text;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "userAgent" text;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "processedAt" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "lead" ADD COLUMN "enrichedAt" timestamp with time zone;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "apiKey" ADD CONSTRAINT "apiKey_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "apiMetric" ADD CONSTRAINT "apiMetric_endpointId_endpoint_id_fk" FOREIGN KEY ("endpointId") REFERENCES "public"."endpoint"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "apiMetric" ADD CONSTRAINT "apiMetric_apiKeyId_apiKey_id_fk" FOREIGN KEY ("apiKeyId") REFERENCES "public"."apiKey"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "deal" ADD CONSTRAINT "deal_leadId_lead_id_fk" FOREIGN KEY ("leadId") REFERENCES "public"."lead"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "enhancedLeadScore" ADD CONSTRAINT "enhancedLeadScore_leadId_lead_id_fk" FOREIGN KEY ("leadId") REFERENCES "public"."lead"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "followUpTask" ADD CONSTRAINT "followUpTask_leadId_lead_id_fk" FOREIGN KEY ("leadId") REFERENCES "public"."lead"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "followUpTask" ADD CONSTRAINT "followUpTask_assignedTo_user_id_fk" FOREIGN KEY ("assignedTo") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "industryCategory" ADD CONSTRAINT "industryCategory_parentId_industryCategory_id_fk" FOREIGN KEY ("parentId") REFERENCES "public"."industryCategory"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "integrationConfig" ADD CONSTRAINT "integrationConfig_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "leadCampaignProgress" ADD CONSTRAINT "leadCampaignProgress_leadId_lead_id_fk" FOREIGN KEY ("leadId") REFERENCES "public"."lead"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "leadCampaignProgress" ADD CONSTRAINT "leadCampaignProgress_campaignId_leadNurtureCampaigns_id_fk" FOREIGN KEY ("campaignId") REFERENCES "public"."leadNurtureCampaigns"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "leadContactHistory" ADD CONSTRAINT "leadContactHistory_leadId_lead_id_fk" FOREIGN KEY ("leadId") REFERENCES "public"."lead"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "leadEngagement" ADD CONSTRAINT "leadEngagement_leadId_lead_id_fk" FOREIGN KEY ("leadId") REFERENCES "public"."lead"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "marketContext" ADD CONSTRAINT "marketContext_industryId_industryCategory_id_fk" FOREIGN KEY ("industryId") REFERENCES "public"."industryCategory"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "performanceMetric" ADD CONSTRAINT "performanceMetric_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "seasonalAnalytics" ADD CONSTRAINT "seasonalAnalytics_patternId_seasonalPattern_id_fk" FOREIGN KEY ("patternId") REFERENCES "public"."seasonalPattern"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "seasonalPattern" ADD CONSTRAINT "seasonalPattern_industryId_industryCategory_id_fk" FOREIGN KEY ("industryId") REFERENCES "public"."industryCategory"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "seasonalPattern" ADD CONSTRAINT "seasonalPattern_modelId_seasonalModel_id_fk" FOREIGN KEY ("modelId") REFERENCES "public"."seasonalModel"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teamMember" ADD CONSTRAINT "teamMember_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userProfile" ADD CONSTRAINT "userProfile_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "webhookDelivery" ADD CONSTRAINT "webhookDelivery_endpointId_endpoint_id_fk" FOREIGN KEY ("endpointId") REFERENCES "public"."endpoint"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "webhookDelivery" ADD CONSTRAINT "webhookDelivery_leadId_lead_id_fk" FOREIGN KEY ("leadId") REFERENCES "public"."lead"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "endpoint" ADD CONSTRAINT "endpoint_apiVersionId_apiVersion_id_fk" FOREIGN KEY ("apiVersionId") REFERENCES "public"."apiVersion"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
