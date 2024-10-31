/*
  Warnings:

  - You are about to drop the `addresses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `audit_logs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `business_accounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `org_api_keys` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `org_members` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `org_usage_logs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `organizations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `settings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `team_members` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `teams` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tenant_api_keys` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tenant_usage_logs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tenants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_accounts` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "APIKeyEnvironment" AS ENUM ('development', 'staging', 'production');

-- DropForeignKey
ALTER TABLE "public"."addresses" DROP CONSTRAINT "addresses_business_account_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."addresses" DROP CONSTRAINT "addresses_team_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."addresses" DROP CONSTRAINT "addresses_user_account_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."audit_logs" DROP CONSTRAINT "audit_logs_business_account_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."audit_logs" DROP CONSTRAINT "audit_logs_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."audit_logs" DROP CONSTRAINT "audit_logs_team_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."audit_logs" DROP CONSTRAINT "audit_logs_tenant_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."audit_logs" DROP CONSTRAINT "audit_logs_user_account_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."business_accounts" DROP CONSTRAINT "business_accounts_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."business_accounts" DROP CONSTRAINT "business_accounts_tenant_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."org_api_keys" DROP CONSTRAINT "org_api_keys_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."org_api_keys" DROP CONSTRAINT "org_api_keys_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."org_members" DROP CONSTRAINT "org_members_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."org_usage_logs" DROP CONSTRAINT "org_usage_logs_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."settings" DROP CONSTRAINT "settings_business_account_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."settings" DROP CONSTRAINT "settings_tenant_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."settings" DROP CONSTRAINT "settings_user_account_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."team_members" DROP CONSTRAINT "team_members_business_account_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."team_members" DROP CONSTRAINT "team_members_team_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."team_members" DROP CONSTRAINT "team_members_user_account_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."teams" DROP CONSTRAINT "teams_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."teams" DROP CONSTRAINT "teams_tenant_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."tenant_api_keys" DROP CONSTRAINT "tenant_api_keys_tenant_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."tenant_usage_logs" DROP CONSTRAINT "tenant_usage_logs_tenant_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."tenants" DROP CONSTRAINT "tenants_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."user_accounts" DROP CONSTRAINT "user_accounts_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."user_accounts" DROP CONSTRAINT "user_accounts_tenant_id_fkey";

-- DropTable
DROP TABLE "public"."addresses";

-- DropTable
DROP TABLE "public"."audit_logs";

-- DropTable
DROP TABLE "public"."business_accounts";

-- DropTable
DROP TABLE "public"."org_api_keys";

-- DropTable
DROP TABLE "public"."org_members";

-- DropTable
DROP TABLE "public"."org_usage_logs";

-- DropTable
DROP TABLE "public"."organizations";

-- DropTable
DROP TABLE "public"."settings";

-- DropTable
DROP TABLE "public"."team_members";

-- DropTable
DROP TABLE "public"."teams";

-- DropTable
DROP TABLE "public"."tenant_api_keys";

-- DropTable
DROP TABLE "public"."tenant_usage_logs";

-- DropTable
DROP TABLE "public"."tenants";

-- DropTable
DROP TABLE "public"."user_accounts";

-- DropEnum
DROP TYPE "public"."APIKeyEnvironment";

-- CreateTable
CREATE TABLE "organizations" (
    "id" VARCHAR(100) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "display_name" VARCHAR(255),
    "domain" VARCHAR(255),
    "subscription_tier" VARCHAR(50) NOT NULL,
    "subscription_status" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "metadata" JSONB,
    "max_users" INTEGER,
    "technical_contact" VARCHAR(255),
    "user_id" VARCHAR(100),
    "storage_quota" BIGINT NOT NULL,
    "used_storage" BIGINT NOT NULL DEFAULT 0,
    "max_workspaces" INTEGER,
    "max_members" INTEGER,
    "api_key_prefix" VARCHAR(10) NOT NULL,
    "security_settings" JSONB,
    "feature_flags" JSONB,

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tenants" (
    "id" VARCHAR(100) NOT NULL,
    "organization_id" VARCHAR(100) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "external_id" VARCHAR(255),
    "status" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "storage_quota" BIGINT,
    "used_storage" BIGINT NOT NULL DEFAULT 0,
    "metadata" JSONB,
    "custom_domain" VARCHAR(255),
    "email" VARCHAR(255),
    "is_soft_deleted" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tenants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "org_members" (
    "id" BIGSERIAL NOT NULL,
    "organization_id" VARCHAR(100) NOT NULL,
    "user_id" VARCHAR(100) NOT NULL,
    "role" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255),
    "joined_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "invited_by" VARCHAR(100),
    "status" VARCHAR(50) NOT NULL,
    "last_access" TIMESTAMPTZ(6),
    "permissions" TEXT[],

    CONSTRAINT "org_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "org_api_keys" (
    "id" BIGSERIAL NOT NULL,
    "organization_id" VARCHAR(100) NOT NULL,
    "user_id" BIGINT,
    "key_name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "key_id" VARCHAR(255) NOT NULL,
    "key_hash" VARCHAR(255) NOT NULL,
    "scopes" TEXT[],
    "rate_limit" INTEGER NOT NULL DEFAULT 1000,
    "allowed_ips" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "allowed_domains" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "usage_count" INTEGER NOT NULL DEFAULT 0,
    "max_usage_count" INTEGER NOT NULL DEFAULT 0,
    "last_used_ip" VARCHAR(255),
    "environment" "APIKeyEnvironment" NOT NULL DEFAULT 'development',
    "revoked" BOOLEAN NOT NULL DEFAULT false,
    "revoked_at" TIMESTAMPTZ(6),
    "revoked_reason" TEXT,
    "expires_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "created_by" VARCHAR(100) NOT NULL,
    "last_used" TIMESTAMPTZ(6),
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "org_api_keys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tenant_api_keys" (
    "id" BIGSERIAL NOT NULL,
    "tenant_id" VARCHAR(100) NOT NULL,
    "key_name" VARCHAR(255) NOT NULL,
    "key_prefix" VARCHAR(32) NOT NULL,
    "key_hash" VARCHAR(255) NOT NULL,
    "key_id" VARCHAR(255) NOT NULL,
    "scopes" TEXT[],
    "expires_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" VARCHAR(100) NOT NULL,
    "last_used" TIMESTAMPTZ(6),
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tenant_api_keys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "org_usage_logs" (
    "id" BIGSERIAL NOT NULL,
    "organization_id" VARCHAR(100) NOT NULL,
    "timestamp" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "event_type" VARCHAR(50) NOT NULL,
    "quantity" BIGINT NOT NULL,
    "unit" VARCHAR(20) NOT NULL,
    "details" JSONB,

    CONSTRAINT "org_usage_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tenant_usage_logs" (
    "id" BIGSERIAL NOT NULL,
    "tenant_id" VARCHAR(100) NOT NULL,
    "timestamp" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "event_type" VARCHAR(50) NOT NULL,
    "quantity" BIGINT NOT NULL,
    "unit" VARCHAR(20) NOT NULL,
    "details" JSONB,

    CONSTRAINT "tenant_usage_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teams" (
    "id" BIGSERIAL NOT NULL,
    "organization_id" TEXT NOT NULL,
    "tenant_id" TEXT,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "team_type" VARCHAR(50) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" VARCHAR(100) NOT NULL,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_members" (
    "id" BIGSERIAL NOT NULL,
    "team_id" BIGINT NOT NULL,
    "user_account_id" BIGINT,
    "business_account_id" BIGINT,
    "role" VARCHAR(50) NOT NULL,
    "joined_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "invited_by" VARCHAR(100) NOT NULL,
    "status" VARCHAR(50) NOT NULL,
    "metadata" JSONB,
    "deleted_at" TIMESTAMPTZ(6),

    CONSTRAINT "team_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_accounts" (
    "id" BIGSERIAL NOT NULL,
    "organization_id" TEXT,
    "tenant_id" TEXT,
    "account_type" VARCHAR(50),
    "company_name" VARCHAR(255),
    "email" VARCHAR(255),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "auth0_user_id" VARCHAR(100),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "status" VARCHAR(50),
    "metadata" JSONB,
    "base_directory" VARCHAR(255),
    "bucket_location" VARCHAR(255),
    "bucket_name" VARCHAR(100),
    "region" VARCHAR(50),
    "last_access" TIMESTAMPTZ(6),
    "storage_quota" BIGINT,
    "used_storage" BIGINT,

    CONSTRAINT "business_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_accounts" (
    "id" BIGSERIAL NOT NULL,
    "organization_id" TEXT,
    "tenant_id" TEXT,
    "email" VARCHAR(255),
    "firstname" VARCHAR(100),
    "lastname" VARCHAR(100),
    "auth0_user_id" VARCHAR(100),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "status" VARCHAR(50),
    "metadata" JSONB,
    "base_directory" VARCHAR(255),
    "bucket_location" VARCHAR(255),
    "bucket_name" VARCHAR(100),
    "region" VARCHAR(50),
    "last_access" TIMESTAMPTZ(6),
    "storage_quota" BIGINT,
    "used_storage" BIGINT,

    CONSTRAINT "user_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" BIGSERIAL NOT NULL,
    "addressable_type" VARCHAR(50) NOT NULL,
    "user_account_id" BIGINT,
    "business_account_id" BIGINT,
    "team_id" BIGINT,
    "address_line1" VARCHAR(255) NOT NULL,
    "address_line2" VARCHAR(255),
    "city" VARCHAR(100) NOT NULL,
    "state" VARCHAR(100) NOT NULL,
    "country" VARCHAR(100) NOT NULL,
    "postal_code" VARCHAR(20) NOT NULL,
    "latitude" DECIMAL(10,8),
    "longitude" DECIMAL(11,8),
    "is_primary" BOOLEAN NOT NULL DEFAULT false,
    "address_type" VARCHAR(50) NOT NULL,
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" BIGSERIAL NOT NULL,
    "organization_id" TEXT,
    "tenant_id" TEXT,
    "actor_type" VARCHAR(50) NOT NULL,
    "actor_id" VARCHAR(100) NOT NULL,
    "event_type" VARCHAR(100) NOT NULL,
    "entity_type" VARCHAR(50) NOT NULL,
    "entity_id" BIGINT NOT NULL,
    "change_summary" JSONB,
    "metadata" JSONB,
    "ip_address" VARCHAR(45),
    "user_agent" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings" (
    "id" BIGSERIAL NOT NULL,
    "organization_id" TEXT,
    "tenant_id" TEXT,
    "business_account_id" BIGINT,
    "user_account_id" BIGINT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "settings_data" JSONB,
    "preferred_language" VARCHAR(10),
    "notification_settings" JSONB,
    "ui_settings" JSONB,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "organizations_email_key" ON "organizations"("email");

-- CreateIndex
CREATE UNIQUE INDEX "organizations_api_key_prefix_key" ON "organizations"("api_key_prefix");

-- CreateIndex
CREATE INDEX "organizations_subscription_status_idx" ON "organizations"("subscription_status");

-- CreateIndex
CREATE INDEX "organizations_subscription_tier_idx" ON "organizations"("subscription_tier");

-- CreateIndex
CREATE INDEX "organizations_domain_idx" ON "organizations"("domain");

-- CreateIndex
CREATE INDEX "tenants_organization_id_idx" ON "tenants"("organization_id");

-- CreateIndex
CREATE INDEX "tenants_external_id_idx" ON "tenants"("external_id");

-- CreateIndex
CREATE INDEX "tenants_status_idx" ON "tenants"("status");

-- CreateIndex
CREATE INDEX "org_members_organization_id_idx" ON "org_members"("organization_id");

-- CreateIndex
CREATE INDEX "org_members_user_id_idx" ON "org_members"("user_id");

-- CreateIndex
CREATE INDEX "org_members_email_idx" ON "org_members"("email");

-- CreateIndex
CREATE UNIQUE INDEX "org_members_organization_id_user_id_key" ON "org_members"("organization_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "org_api_keys_key_id_unique" ON "org_api_keys"("key_id");

-- CreateIndex
CREATE INDEX "org_api_keys_organization_id_idx" ON "org_api_keys"("organization_id");

-- CreateIndex
CREATE INDEX "org_api_keys_key_id_idx" ON "org_api_keys"("key_id");

-- CreateIndex
CREATE UNIQUE INDEX "org_api_keys_key_id_key" ON "org_api_keys"("key_id");

-- CreateIndex
CREATE UNIQUE INDEX "tenant_api_keys_key_prefix_key" ON "tenant_api_keys"("key_prefix");

-- CreateIndex
CREATE UNIQUE INDEX "tenant_api_keys_key_id_unique" ON "tenant_api_keys"("key_id");

-- CreateIndex
CREATE INDEX "tenant_api_keys_tenant_id_idx" ON "tenant_api_keys"("tenant_id");

-- CreateIndex
CREATE INDEX "tenant_api_keys_key_prefix_idx" ON "tenant_api_keys"("key_prefix");

-- CreateIndex
CREATE INDEX "org_usage_logs_organization_id_idx" ON "org_usage_logs"("organization_id");

-- CreateIndex
CREATE INDEX "org_usage_logs_timestamp_idx" ON "org_usage_logs"("timestamp");

-- CreateIndex
CREATE INDEX "org_usage_logs_event_type_idx" ON "org_usage_logs"("event_type");

-- CreateIndex
CREATE INDEX "tenant_usage_logs_tenant_id_idx" ON "tenant_usage_logs"("tenant_id");

-- CreateIndex
CREATE INDEX "tenant_usage_logs_timestamp_idx" ON "tenant_usage_logs"("timestamp");

-- CreateIndex
CREATE INDEX "tenant_usage_logs_event_type_idx" ON "tenant_usage_logs"("event_type");

-- CreateIndex
CREATE INDEX "teams_tenant_id_idx" ON "teams"("tenant_id");

-- CreateIndex
CREATE INDEX "teams_created_at_idx" ON "teams"("created_at");

-- CreateIndex
CREATE INDEX "teams_team_type_idx" ON "teams"("team_type");

-- CreateIndex
CREATE UNIQUE INDEX "teams_organization_id_name_key" ON "teams"("organization_id", "name");

-- CreateIndex
CREATE INDEX "team_members_role_idx" ON "team_members"("role");

-- CreateIndex
CREATE INDEX "team_members_status_idx" ON "team_members"("status");

-- CreateIndex
CREATE UNIQUE INDEX "team_members_team_id_user_account_id_key" ON "team_members"("team_id", "user_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_members_team_id_business_account_id_key" ON "team_members"("team_id", "business_account_id");

-- CreateIndex
CREATE INDEX "business_accounts_organization_id_idx" ON "business_accounts"("organization_id");

-- CreateIndex
CREATE INDEX "business_accounts_tenant_id_idx" ON "business_accounts"("tenant_id");

-- CreateIndex
CREATE INDEX "business_accounts_auth0_user_id_idx" ON "business_accounts"("auth0_user_id");

-- CreateIndex
CREATE INDEX "business_accounts_email_idx" ON "business_accounts"("email");

-- CreateIndex
CREATE INDEX "business_accounts_is_active_idx" ON "business_accounts"("is_active");

-- CreateIndex
CREATE INDEX "user_accounts_organization_id_idx" ON "user_accounts"("organization_id");

-- CreateIndex
CREATE INDEX "user_accounts_tenant_id_idx" ON "user_accounts"("tenant_id");

-- CreateIndex
CREATE INDEX "user_accounts_email_idx" ON "user_accounts"("email");

-- CreateIndex
CREATE INDEX "user_accounts_auth0_user_id_idx" ON "user_accounts"("auth0_user_id");

-- CreateIndex
CREATE INDEX "user_accounts_is_active_idx" ON "user_accounts"("is_active");

-- CreateIndex
CREATE INDEX "addresses_user_account_id_idx" ON "addresses"("user_account_id");

-- CreateIndex
CREATE INDEX "addresses_business_account_id_idx" ON "addresses"("business_account_id");

-- CreateIndex
CREATE INDEX "addresses_team_id_idx" ON "addresses"("team_id");

-- CreateIndex
CREATE INDEX "addresses_address_type_idx" ON "addresses"("address_type");

-- CreateIndex
CREATE INDEX "addresses_postal_code_idx" ON "addresses"("postal_code");

-- CreateIndex
CREATE INDEX "addresses_latitude_longitude_idx" ON "addresses"("latitude", "longitude");

-- CreateIndex
CREATE INDEX "audit_logs_organization_id_idx" ON "audit_logs"("organization_id");

-- CreateIndex
CREATE INDEX "audit_logs_tenant_id_idx" ON "audit_logs"("tenant_id");

-- CreateIndex
CREATE INDEX "audit_logs_actor_id_idx" ON "audit_logs"("actor_id");

-- CreateIndex
CREATE INDEX "audit_logs_event_type_idx" ON "audit_logs"("event_type");

-- CreateIndex
CREATE INDEX "audit_logs_entity_type_entity_id_idx" ON "audit_logs"("entity_type", "entity_id");

-- CreateIndex
CREATE INDEX "audit_logs_created_at_idx" ON "audit_logs"("created_at");

-- CreateIndex
CREATE INDEX "settings_organization_id_idx" ON "settings"("organization_id");

-- CreateIndex
CREATE INDEX "settings_tenant_id_idx" ON "settings"("tenant_id");

-- CreateIndex
CREATE INDEX "settings_business_account_id_idx" ON "settings"("business_account_id");

-- CreateIndex
CREATE INDEX "settings_user_account_id_idx" ON "settings"("user_account_id");

-- AddForeignKey
ALTER TABLE "tenants" ADD CONSTRAINT "tenants_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "org_members" ADD CONSTRAINT "org_members_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "org_api_keys" ADD CONSTRAINT "org_api_keys_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "org_api_keys" ADD CONSTRAINT "org_api_keys_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tenant_api_keys" ADD CONSTRAINT "tenant_api_keys_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "org_usage_logs" ADD CONSTRAINT "org_usage_logs_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tenant_usage_logs" ADD CONSTRAINT "tenant_usage_logs_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_user_account_id_fkey" FOREIGN KEY ("user_account_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_business_account_id_fkey" FOREIGN KEY ("business_account_id") REFERENCES "business_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_accounts" ADD CONSTRAINT "business_accounts_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business_accounts" ADD CONSTRAINT "business_accounts_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_accounts" ADD CONSTRAINT "user_accounts_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_accounts" ADD CONSTRAINT "user_accounts_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_user_account_id_fkey" FOREIGN KEY ("user_account_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_business_account_id_fkey" FOREIGN KEY ("business_account_id") REFERENCES "business_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_user_account_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "user_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_business_account_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "business_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_team_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "settings" ADD CONSTRAINT "settings_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "settings" ADD CONSTRAINT "settings_business_account_id_fkey" FOREIGN KEY ("business_account_id") REFERENCES "business_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "settings" ADD CONSTRAINT "settings_user_account_id_fkey" FOREIGN KEY ("user_account_id") REFERENCES "user_accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
