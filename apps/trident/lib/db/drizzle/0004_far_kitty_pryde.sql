ALTER TABLE "industryCategory" DROP CONSTRAINT "industryCategory_parentId_industryCategory_id_fk";
--> statement-breakpoint
ALTER TABLE "industryCategory" DROP COLUMN IF EXISTS "parentId";