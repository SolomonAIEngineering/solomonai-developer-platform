DO $$ BEGIN
 CREATE TYPE "public"."contactMethod" AS ENUM('email', 'phone', 'sms', 'in_person', 'social_media');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."industry" AS ENUM('retail', 'hospitality', 'manufacturing', 'services', 'technology');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."leadSource" AS ENUM('website', 'referral', 'social_media', 'advertisement', 'event', 'other');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."leadStatus" AS ENUM('new', 'contacted', 'qualified', 'lost', 'converted');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."rating" AS ENUM('hot', 'warm', 'cold');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
