Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
} = require("./runtime/wasm.js");

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 5.21.1
 * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
 */
Prisma.prismaVersion = {
  client: "5.21.1",
  engine: "bf0e5e8a04cada8225617067eaa03d041e2bba36",
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable",
});

exports.Prisma.OrganizationsScalarFieldEnum = {
  id: "id",
  name: "name",
  display_name: "display_name",
  domain: "domain",
  subscription_tier: "subscription_tier",
  subscription_status: "subscription_status",
  email: "email",
  created_at: "created_at",
  updated_at: "updated_at",
  is_active: "is_active",
  metadata: "metadata",
  max_users: "max_users",
  technical_contact: "technical_contact",
  user_id: "user_id",
  storage_quota: "storage_quota",
  used_storage: "used_storage",
  max_workspaces: "max_workspaces",
  max_members: "max_members",
  api_key_prefix: "api_key_prefix",
  security_settings: "security_settings",
  feature_flags: "feature_flags",
};

exports.Prisma.TenantsScalarFieldEnum = {
  id: "id",
  organization_id: "organization_id",
  name: "name",
  external_id: "external_id",
  status: "status",
  created_at: "created_at",
  updated_at: "updated_at",
  storage_quota: "storage_quota",
  used_storage: "used_storage",
  metadata: "metadata",
  custom_domain: "custom_domain",
  email: "email",
};

exports.Prisma.Org_membersScalarFieldEnum = {
  id: "id",
  organization_id: "organization_id",
  user_id: "user_id",
  role: "role",
  email: "email",
  name: "name",
  joined_at: "joined_at",
  invited_by: "invited_by",
  status: "status",
  last_access: "last_access",
  permissions: "permissions",
};

exports.Prisma.Org_api_keysScalarFieldEnum = {
  id: "id",
  organization_id: "organization_id",
  user_id: "user_id",
  key_name: "key_name",
  description: "description",
  key_id: "key_id",
  key_hash: "key_hash",
  scopes: "scopes",
  rate_limit: "rate_limit",
  allowed_ips: "allowed_ips",
  allowed_domains: "allowed_domains",
  usage_count: "usage_count",
  last_used_ip: "last_used_ip",
  environment: "environment",
  revoked: "revoked",
  revoked_at: "revoked_at",
  revoked_reason: "revoked_reason",
  expires_at: "expires_at",
  created_at: "created_at",
  updated_at: "updated_at",
  created_by: "created_by",
  last_used: "last_used",
  is_active: "is_active",
};

exports.Prisma.Tenant_api_keysScalarFieldEnum = {
  id: "id",
  tenant_id: "tenant_id",
  key_name: "key_name",
  key_prefix: "key_prefix",
  key_hash: "key_hash",
  key_id: "key_id",
  scopes: "scopes",
  expires_at: "expires_at",
  created_at: "created_at",
  created_by: "created_by",
  last_used: "last_used",
  is_active: "is_active",
};

exports.Prisma.Org_usage_logsScalarFieldEnum = {
  id: "id",
  organization_id: "organization_id",
  timestamp: "timestamp",
  event_type: "event_type",
  quantity: "quantity",
  unit: "unit",
  details: "details",
};

exports.Prisma.Tenant_usage_logsScalarFieldEnum = {
  id: "id",
  tenant_id: "tenant_id",
  timestamp: "timestamp",
  event_type: "event_type",
  quantity: "quantity",
  unit: "unit",
  details: "details",
};

exports.Prisma.TeamsScalarFieldEnum = {
  id: "id",
  organization_id: "organization_id",
  tenant_id: "tenant_id",
  name: "name",
  description: "description",
  team_type: "team_type",
  is_active: "is_active",
  metadata: "metadata",
  created_at: "created_at",
  updated_at: "updated_at",
  created_by: "created_by",
};

exports.Prisma.Team_membersScalarFieldEnum = {
  id: "id",
  team_id: "team_id",
  user_account_id: "user_account_id",
  business_account_id: "business_account_id",
  role: "role",
  joined_at: "joined_at",
  invited_by: "invited_by",
  status: "status",
  metadata: "metadata",
  deleted_at: "deleted_at",
};

exports.Prisma.Business_accountsScalarFieldEnum = {
  id: "id",
  organization_id: "organization_id",
  tenant_id: "tenant_id",
  account_type: "account_type",
  company_name: "company_name",
  email: "email",
  is_active: "is_active",
  auth0_user_id: "auth0_user_id",
  created_at: "created_at",
  updated_at: "updated_at",
  status: "status",
  metadata: "metadata",
  base_directory: "base_directory",
  bucket_location: "bucket_location",
  bucket_name: "bucket_name",
  region: "region",
  last_access: "last_access",
  storage_quota: "storage_quota",
  used_storage: "used_storage",
};

exports.Prisma.User_accountsScalarFieldEnum = {
  id: "id",
  organization_id: "organization_id",
  tenant_id: "tenant_id",
  email: "email",
  firstname: "firstname",
  lastname: "lastname",
  auth0_user_id: "auth0_user_id",
  is_active: "is_active",
  created_at: "created_at",
  updated_at: "updated_at",
  status: "status",
  metadata: "metadata",
  base_directory: "base_directory",
  bucket_location: "bucket_location",
  bucket_name: "bucket_name",
  region: "region",
  last_access: "last_access",
  storage_quota: "storage_quota",
  used_storage: "used_storage",
};

exports.Prisma.AddressesScalarFieldEnum = {
  id: "id",
  addressable_type: "addressable_type",
  user_account_id: "user_account_id",
  business_account_id: "business_account_id",
  team_id: "team_id",
  address_line1: "address_line1",
  address_line2: "address_line2",
  city: "city",
  state: "state",
  country: "country",
  postal_code: "postal_code",
  latitude: "latitude",
  longitude: "longitude",
  is_primary: "is_primary",
  address_type: "address_type",
  metadata: "metadata",
  created_at: "created_at",
  updated_at: "updated_at",
};

exports.Prisma.Audit_logsScalarFieldEnum = {
  id: "id",
  organization_id: "organization_id",
  tenant_id: "tenant_id",
  actor_type: "actor_type",
  actor_id: "actor_id",
  event_type: "event_type",
  entity_type: "entity_type",
  entity_id: "entity_id",
  change_summary: "change_summary",
  metadata: "metadata",
  ip_address: "ip_address",
  user_agent: "user_agent",
  created_at: "created_at",
};

exports.Prisma.SettingsScalarFieldEnum = {
  id: "id",
  organization_id: "organization_id",
  tenant_id: "tenant_id",
  business_account_id: "business_account_id",
  user_account_id: "user_account_id",
  created_at: "created_at",
  updated_at: "updated_at",
  settings_data: "settings_data",
  preferred_language: "preferred_language",
  notification_settings: "notification_settings",
  ui_settings: "ui_settings",
};

exports.Prisma.SortOrder = {
  asc: "asc",
  desc: "desc",
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
};

exports.Prisma.QueryMode = {
  default: "default",
  insensitive: "insensitive",
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull,
};

exports.Prisma.NullsOrder = {
  first: "first",
  last: "last",
};
exports.APIKeyEnvironment = exports.$Enums.APIKeyEnvironment = {
  development: "development",
  staging: "staging",
  production: "production",
};

exports.Prisma.ModelName = {
  organizations: "organizations",
  tenants: "tenants",
  org_members: "org_members",
  org_api_keys: "org_api_keys",
  tenant_api_keys: "tenant_api_keys",
  org_usage_logs: "org_usage_logs",
  tenant_usage_logs: "tenant_usage_logs",
  teams: "teams",
  team_members: "team_members",
  business_accounts: "business_accounts",
  user_accounts: "user_accounts",
  addresses: "addresses",
  audit_logs: "audit_logs",
  settings: "settings",
};
/**
 * Create the Client
 */
const config = {
  generator: {
    name: "client",
    provider: {
      fromEnvVar: null,
      value: "prisma-client-js",
    },
    output: {
      value:
        "/Users/yoan/go/src/github.com/SolomonAIEngineering/solomonai-developer-platform/services/user-service/src/database/generated/postgresql",
      fromEnvVar: null,
    },
    config: {
      engineType: "library",
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: "darwin-arm64",
        native: true,
      },
    ],
    previewFeatures: ["driverAdapters", "fullTextIndex", "multiSchema"],
    sourceFilePath:
      "/Users/yoan/go/src/github.com/SolomonAIEngineering/solomonai-developer-platform/services/user-service/prisma/schema.postgresql.prisma",
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: null,
  },
  relativePath: "../../../../prisma",
  clientVersion: "5.21.1",
  engineVersion: "bf0e5e8a04cada8225617067eaa03d041e2bba36",
  datasourceNames: ["db"],
  activeProvider: "postgresql",
  postinstall: false,
  inlineDatasources: {
    db: {
      url: {
        fromEnvVar: "DATABASE_URL",
        value: null,
      },
    },
  },
  inlineSchema:
    "/// ------------------------------------------------------\n/// Multi-tenant Organization Management System Schema\n/// ------------------------------------------------------\n///\n/// This schema implements a hierarchical multi-tenant architecture:\n/// 1. Organizations (Top level - your direct customers)\n/// 2. Tenants (Sub-organizations within each organization)\n/// 3. Teams (Collaborative groups within organizations/tenants)\n/// 4. Users/Business Accounts (End users within the hierarchy)\n///\n/// Key Features:\n/// - Complete multi-tenant isolation\n/// - Team-based collaboration\n/// - Comprehensive audit logging\n/// - Flexible address management\n/// - Hierarchical settings management\n///\n/// Usage Example:\n/// ```typescript\n/// // Create new organization with tenant and team\n/// const setup = await prisma.$transaction(async (tx) => {\n///   // Create organization\n///   const org = await tx.organizations.create({\n///     data: {\n///       name: 'Enterprise Corp',\n///       subscription_tier: 'business',\n///       email: 'admin@enterprise.com',\n///       tenants: {\n///         create: {\n///           name: 'Division A',\n///           status: 'active'\n///         }\n///       }\n///     }\n///   });\n///\n///   // Create team\n///   const team = await tx.teams.create({\n///     data: {\n///       organization_id: org.id,\n///       tenant_id: org.tenants[0].id,\n///       name: 'Engineering',\n///       team_type: 'department',\n///       created_by: 'auth0|123'\n///     }\n///   });\n///\n///   return { org, team };\n/// });\n/// ```\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../src/database/generated/postgresql\"\n  previewFeatures = [\"fullTextIndex\", \"multiSchema\", \"driverAdapters\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n/// Organization represents your direct customers (businesses using your platform)\n/// Each organization can have multiple tenants, teams, and user accounts\n///\n/// Usage:\n/// ```typescript\n/// // Create organization with subscription\n/// const org = await prisma.organizations.create({\n///   data: {\n///     name: 'Acme Corp',\n///     subscription_tier: 'business',\n///     email: 'admin@acme.com',\n///     metadata: {\n///       industry: 'technology',\n///       size: 'enterprise'\n///     }\n///   }\n/// });\n/// ```\nmodel organizations {\n  id                  String   @id @db.VarChar(100)\n  name                String   @db.VarChar(255)\n  display_name        String?  @db.VarChar(255)\n  domain              String?  @db.VarChar(255)\n  subscription_tier   String   @db.VarChar(50) /// Tier levels: 'free', 'premium', 'enterprise'\n  subscription_status String   @db.VarChar(50) /// Status: 'active', 'suspended', 'trialing'\n  email               String   @unique @db.VarChar(255)\n  created_at          DateTime @default(now())\n  updated_at          DateTime @updatedAt\n  is_active           Boolean  @default(true)\n  metadata            Json?    @db.JsonB /// Flexible storage for organization details\n  max_users           Int? /// User limit based on subscription\n  technical_contact   String?  @db.VarChar(255)\n\n  user_id           String? @db.VarChar(100) // Auth0 or other identity provider ID - NOTE: globally unique\n  storage_quota     BigInt // Total storage quota for organization\n  used_storage      BigInt  @default(0)\n  max_workspaces    Int? // Limit based on subscription\n  max_members       Int? // Limit based on subscription\n  api_key_prefix    String  @unique @db.VarChar(10)\n  security_settings Json?   @db.JsonB // Security and compliance settings\n  feature_flags     Json?   @db.JsonB // Enabled features based on subscription\n\n  // Relations\n  tenants           tenants[]\n  org_members       org_members[]\n  org_api_keys      org_api_keys[]\n  org_usage_logs    org_usage_logs[]\n  business_accounts business_accounts[]\n  user_accounts     user_accounts[]\n  teams             teams[]\n  audit_logs        audit_logs[]\n\n  @@index([subscription_status])\n  @@index([subscription_tier])\n  @@index([domain])\n}\n\n/// Tenants represent your customers' customers.\n/// Each tenant has isolated storage and can have its own\n/// workspaces, quotas, and API keys.\n///\n/// Example:\n/// ```typescript\n/// // Create tenant with custom quota\n/// const tenant = await prisma.tenants.create({\n///   data: {\n///     id: 'tenant_789',\n///     organization_id: 'org_123',\n///     name: 'Customer LLC',\n///     storage_quota: 50000000000, // 50GB\n///     metadata: {\n///       industry: 'healthcare',\n///       compliance_level: 'hipaa'\n///     }\n///   }\n/// });\n/// ```\nmodel tenants {\n  id              String   @id @db.VarChar(100)\n  organization_id String   @db.VarChar(100)\n  name            String   @db.VarChar(255)\n  external_id     String?  @db.VarChar(255) // Customer's internal identifier\n  status          String   @db.VarChar(50) // 'active', 'suspended', 'deleted'\n  created_at      DateTime @default(now()) @db.Timestamptz(6)\n  updated_at      DateTime @updatedAt @db.Timestamptz(6)\n  storage_quota   BigInt? // Optional tenant-specific quota\n  used_storage    BigInt   @default(0)\n  metadata        Json?    @db.JsonB\n  custom_domain   String?  @db.VarChar(255)\n  email           String?  @db.VarChar(255) /// Primary contact email\n\n  // Relations\n  organization      organizations       @relation(fields: [organization_id], references: [id], onDelete: Cascade)\n  business_accounts business_accounts[]\n  user_accounts     user_accounts[]\n  settings          settings[]\n  teams             teams[]\n  audit_logs        audit_logs[]\n  tenant_api_keys   tenant_api_keys[]\n  tenant_usage_logs tenant_usage_logs[]\n\n  @@index([organization_id])\n  @@index([external_id])\n  @@index([status])\n}\n\n/// Organization members represent users who can manage\n/// the organization settings, view usage, and manage tenants.\n///\n/// Example:\n/// ```typescript\n/// // Add admin member to organization\n/// const member = await prisma.org_members.create({\n///   data: {\n///     organization_id: 'org_123',\n///     user_id: 'auth0|123',\n///     role: 'admin',\n///     email: 'admin@startup.com',\n///     permissions: ['manage_tenants', 'view_usage', 'manage_api_keys']\n///   }\n/// });\n/// ```\nmodel org_members {\n  id              BigInt    @id @default(autoincrement())\n  organization_id String    @db.VarChar(100)\n  user_id         String    @db.VarChar(100) // Auth0 or other identity provider ID\n  role            String    @db.VarChar(50) // 'owner', 'admin', 'member'\n  email           String    @db.VarChar(255)\n  name            String?   @db.VarChar(255)\n  joined_at       DateTime  @default(now()) @db.Timestamptz(6)\n  invited_by      String?   @db.VarChar(100)\n  status          String    @db.VarChar(50) // 'active', 'invited', 'suspended'\n  last_access     DateTime? @db.Timestamptz(6)\n  permissions     String[] // Array of specific permissions\n\n  organization organizations @relation(fields: [organization_id], references: [id], onDelete: Cascade)\n\n  @@unique([organization_id, user_id])\n  @@index([organization_id])\n  @@index([user_id])\n  @@index([email])\n}\n\n/// API keys for organization-level access\n/// Used for managing tenants, viewing usage, and organization-wide operations\n///\n/// Example:\n/// ```typescript\n/// // Create new API key\n/// const apiKey = await prisma.org_api_keys.create({\n///   data: {\n///     organization_id: 'org_123',\n///     key_name: 'Tenant Management API',\n///     key_prefix: 'org_key_123',\n///     key_hash: hashedApiKey,\n///     scopes: ['manage_tenants', 'read_usage']\n///   }\n/// });\n/// ```\n// Define an enum for APIKeyEnvironment to restrict the possible values\nenum APIKeyEnvironment {\n  development\n  staging\n  production\n}\n\nmodel org_api_keys {\n  id              BigInt            @id @default(autoincrement())\n  organization_id String            @db.VarChar(100)\n  user_id         BigInt? // Foreign key to `user_accounts.id`\n  key_name        String            @db.VarChar(255)\n  description     String?           @db.Text\n  key_id          String            @unique(map: \"org_api_keys_key_id_unique\") @db.VarChar(255) // Unique key identifier\n  key_hash        String            @db.VarChar(255) // Hashed API key for security\n  scopes          String[] // Array of permitted operations\n  rate_limit      Int               @default(1000) // Default rate limit\n  allowed_ips     String[]          @default([]) // Whitelisted IP addresses\n  allowed_domains String[]          @default([]) // Whitelisted domains\n  usage_count     Int               @default(0) // Number of times the key has been used\n  last_used_ip    String?           @db.VarChar(255) // IP address from which the key was last used\n  environment     APIKeyEnvironment @default(development) // Environment where the key is valid\n  revoked         Boolean           @default(false) // Indicates if the key has been revoked\n  revoked_at      DateTime?         @db.Timestamptz(6) // Timestamp when the key was revoked\n  revoked_reason  String?           @db.Text // Reason for revocation\n  expires_at      DateTime?         @db.Timestamptz(6) // Expiration date of the key\n  created_at      DateTime          @default(now()) @db.Timestamptz(6)\n  updated_at      DateTime          @updatedAt @db.Timestamptz(6)\n  created_by      String            @db.VarChar(100)\n  last_used       DateTime?         @db.Timestamptz(6)\n  is_active       Boolean           @default(true) // Indicates if the key is active\n\n  // relations\n  organization organizations  @relation(fields: [organization_id], references: [id], onDelete: Cascade)\n  user         user_accounts? @relation(fields: [user_id], references: [id], onDelete: Cascade)\n\n  @@unique([key_id]) // Ensures that `key_id` is unique across all records\n  // indexes and constraints\n  @@index([organization_id])\n  @@index([key_id])\n}\n\n/// API keys for tenant-specific operations\n/// Used by tenants to access their own storage and manage their workspaces\n///\n/// Example:\n/// ```typescript\n/// // Create tenant API key\n/// const tenantKey = await prisma.tenant_api_keys.create({\n///   data: {\n///     tenant_id: 'tenant_456',\n///     key_name: 'Storage Access',\n///     key_prefix: 'tenant_key_789',\n///     key_hash: hashedApiKey,\n///     scopes: ['read_files', 'write_files']\n///   }\n/// });\n/// ```\nmodel tenant_api_keys {\n  id         BigInt    @id @default(autoincrement())\n  tenant_id  String    @db.VarChar(100)\n  key_name   String    @db.VarChar(255)\n  key_prefix String    @unique @db.VarChar(32)\n  key_hash   String    @db.VarChar(255)\n  key_id     String    @unique(map: \"tenant_api_keys_key_id_unique\") @db.VarChar(255) // Unique key identifier\n  scopes     String[]\n  expires_at DateTime? @db.Timestamptz(6)\n  created_at DateTime  @default(now()) @db.Timestamptz(6)\n  created_by String    @db.VarChar(100)\n  last_used  DateTime? @db.Timestamptz(6)\n  is_active  Boolean   @default(true)\n\n  tenant tenants @relation(fields: [tenant_id], references: [id], onDelete: Cascade)\n\n  @@index([tenant_id])\n  @@index([key_prefix])\n}\n\n/// Tracks organization-level resource usage\n/// Used for billing and monitoring\n///\n/// Example:\n/// ```typescript\n/// // Log storage usage\n/// const usage = await prisma.org_usage_logs.create({\n///   data: {\n///     organization_id: 'org_123',\n///     event_type: 'storage',\n///     quantity: 1000000, // 1MB\n///     unit: 'bytes',\n///     details: { operation: 'file_upload', workspace_id: '123' }\n///   }\n/// });\n/// ```\nmodel org_usage_logs {\n  id              BigInt   @id @default(autoincrement())\n  organization_id String   @db.VarChar(100)\n  timestamp       DateTime @default(now()) @db.Timestamptz(6)\n  event_type      String   @db.VarChar(50) // 'storage', 'api', 'bandwidth'\n  quantity        BigInt // Amount of resource used\n  unit            String   @db.VarChar(20) // 'bytes', 'requests', 'mb'\n  details         Json?    @db.JsonB\n\n  organization organizations @relation(fields: [organization_id], references: [id], onDelete: Cascade)\n\n  @@index([organization_id])\n  @@index([timestamp])\n  @@index([event_type])\n}\n\n/// Tracks tenant-level resource usage\n/// Used for monitoring and potential charge-back\n///\n/// Example:\n/// ```typescript\n/// // Log API usage\n/// const tenantUsage = await prisma.tenant_usage_logs.create({\n///   data: {\n///     tenant_id: 'tenant_456',\n///     event_type: 'api',\n///     quantity: 1,\n///     unit: 'requests',\n///     details: { endpoint: '/files/upload', status: 200 }\n///   }\n/// });\n/// ```\nmodel tenant_usage_logs {\n  id         BigInt   @id @default(autoincrement())\n  tenant_id  String   @db.VarChar(100)\n  timestamp  DateTime @default(now()) @db.Timestamptz(6)\n  event_type String   @db.VarChar(50)\n  quantity   BigInt\n  unit       String   @db.VarChar(20)\n  details    Json?    @db.JsonB\n\n  tenant tenants @relation(fields: [tenant_id], references: [id], onDelete: Cascade)\n\n  @@index([tenant_id])\n  @@index([timestamp])\n  @@index([event_type])\n}\n\n/// Teams enable collaboration within organizations and tenants\n/// Teams can span across user and business accounts\n///\n/// Usage:\n/// ```typescript\n/// // Create team with members\n/// const team = await prisma.teams.create({\n///   data: {\n///     organization_id: org.id,\n///     name: 'Product Team',\n///     team_type: 'project',\n///     created_by: 'auth0|123',\n///     team_members: {\n///       create: [\n///         {\n///           user_account_id: user1.id,\n///           role: 'admin'\n///         }\n///       ]\n///     }\n///   }\n/// });\n/// ```\nmodel teams {\n  id              BigInt   @id @default(autoincrement())\n  organization_id String\n  tenant_id       String?\n  name            String   @db.VarChar(100)\n  description     String?  @db.Text\n  team_type       String   @db.VarChar(50) /// Types: 'department', 'project', 'workgroup'\n  is_active       Boolean  @default(true)\n  metadata        Json?    @db.JsonB /// Team-specific metadata\n  created_at      DateTime @default(now())\n  updated_at      DateTime @updatedAt\n  created_by      String   @db.VarChar(100) /// Auth0 ID of creator\n\n  // Relations\n  organization organizations  @relation(fields: [organization_id], references: [id])\n  tenant       tenants?       @relation(fields: [tenant_id], references: [id])\n  team_members team_members[]\n  addresses    addresses[]\n  audit_logs   audit_logs[]\n\n  @@unique([organization_id, name])\n  @@index([tenant_id])\n  @@index([created_at])\n  @@index([team_type])\n}\n\n/// Team membership management\n/// Tracks who belongs to which teams and their roles\n///\n/// Usage:\n/// ```typescript\n/// // Add member to team\n/// const membership = await prisma.team_members.create({\n///   data: {\n///     team_id: team.id,\n///     user_account_id: user.id,\n///     role: 'member',\n///     invited_by: 'auth0|123'\n///   }\n/// });\n/// ```\nmodel team_members {\n  id                  BigInt   @id @default(autoincrement())\n  team_id             BigInt\n  user_account_id     BigInt?\n  business_account_id BigInt?\n  role                String   @db.VarChar(50) /// Roles: 'admin', 'member', 'guest'\n  joined_at           DateTime @default(now())\n  invited_by          String   @db.VarChar(100) /// Auth0 ID of inviter\n  status              String   @db.VarChar(50) /// Status: 'active', 'invited', 'suspended'\n  metadata            Json?    @db.JsonB /// Member-specific metadata\n\n  // Relations\n  team             teams              @relation(fields: [team_id], references: [id])\n  user_account     user_accounts?     @relation(fields: [user_account_id], references: [id])\n  business_account business_accounts? @relation(fields: [business_account_id], references: [id])\n  deleted_at       DateTime?          @db.Timestamptz(6)\n\n  @@unique([team_id, user_account_id])\n  @@unique([team_id, business_account_id])\n  @@index([role])\n  @@index([status])\n}\n\n/// Business accounts represent organizational entities within the system\n///\n/// Usage:\n/// ```typescript\n/// // Create business account\n/// const business = await prisma.business_accounts.create({\n///   data: {\n///     organization_id: org.id,\n///     company_name: 'Acme Widgets',\n///     account_type: 'supplier',\n///     metadata: {\n///       tax_id: '123456',\n///       industry: 'manufacturing'\n///     }\n///   }\n/// });\n/// ```\nmodel business_accounts {\n  id              BigInt   @id @default(autoincrement())\n  organization_id String?\n  tenant_id       String?\n  account_type    String?  @db.VarChar(50) /// Type: 'customer', 'supplier', 'partner'\n  company_name    String?  @db.VarChar(255)\n  email           String?  @db.VarChar(255)\n  is_active       Boolean  @default(true)\n  auth0_user_id   String?  @db.VarChar(100)\n  created_at      DateTime @default(now())\n  updated_at      DateTime @updatedAt\n  status          String?  @db.VarChar(50)\n  metadata        Json?    @db.JsonB\n\n  base_directory  String?   @db.VarChar(255) /// Root directory for user files\n  bucket_location String?   @db.VarChar(255) /// S3 bucket location\n  bucket_name     String?   @db.VarChar(100) /// S3 bucket name\n  region          String?   @db.VarChar(50) /// AWS region\n  last_access     DateTime? @db.Timestamptz(6) /// Last account access timestamp\n  storage_quota   BigInt? /// Maximum storage limit in bytes\n  used_storage    BigInt? /// Current storage usage in bytes\n\n  // Relations\n  organization     organizations? @relation(fields: [organization_id], references: [id], onDelete: NoAction)\n  tenant           tenants?       @relation(fields: [tenant_id], references: [id], onDelete: NoAction)\n  settings         settings[]\n  addresses        addresses[]\n  team_memberships team_members[]\n  audit_logs       audit_logs[]\n\n  @@index([organization_id])\n  @@index([tenant_id])\n  @@index([auth0_user_id])\n  @@index([email])\n  @@index([is_active])\n}\n\n/// User accounts represent individual users within the system\n///\n/// Usage:\n/// ```typescript\n/// // Create user account\n/// const user = await prisma.user_accounts.create({\n///   data: {\n///     organization_id: org.id,\n///     email: 'john@acme.com',\n///     auth0_user_id: 'auth0|123',\n///     metadata: {\n///       department: 'engineering',\n///       title: 'Senior Developer'\n///     }\n///   }\n/// });\n/// ```\nmodel user_accounts {\n  id              BigInt   @id @default(autoincrement())\n  organization_id String?\n  tenant_id       String?\n  email           String?  @db.VarChar(255)\n  firstname       String?  @db.VarChar(100)\n  lastname        String?  @db.VarChar(100)\n  auth0_user_id   String?  @db.VarChar(100) /// External auth provider ID\n  is_active       Boolean  @default(true)\n  created_at      DateTime @default(now())\n  updated_at      DateTime @updatedAt\n  status          String?  @db.VarChar(50) /// Status: 'active', 'inactive', 'suspended'\n  metadata        Json?    @db.JsonB /// User-specific metadata\n\n  base_directory  String?   @db.VarChar(255) /// Root directory for user files\n  bucket_location String?   @db.VarChar(255) /// S3 bucket location\n  bucket_name     String?   @db.VarChar(100) /// S3 bucket name\n  region          String?   @db.VarChar(50) /// AWS region\n  last_access     DateTime? @db.Timestamptz(6) /// Last account access timestamp\n  storage_quota   BigInt? /// Maximum storage limit in bytes\n  used_storage    BigInt? /// Current storage usage in bytes\n\n  // Relations\n  organization     organizations? @relation(fields: [organization_id], references: [id], onDelete: NoAction)\n  tenant           tenants?       @relation(fields: [tenant_id], references: [id], onDelete: NoAction)\n  settings         settings[]\n  addresses        addresses[]\n  team_memberships team_members[]\n  audit_logs       audit_logs[]\n  org_api_keys     org_api_keys[]\n\n  @@index([organization_id])\n  @@index([tenant_id])\n  @@index([email])\n  @@index([auth0_user_id])\n  @@index([is_active])\n}\n\n/// Address management for users, businesses, and teams\n///\n/// Usage:\n/// ```typescript\n/// // Add address to business account\n/// const address = await prisma.addresses.create({\n///   data: {\n///     business_account_id: business.id,\n///     addressable_type: 'business',\n///     address_type: 'billing',\n///     address_line1: '123 Main St',\n///     city: 'San Francisco',\n///     country: 'USA',\n///     is_primary: true\n///   }\n/// });\n/// ```\nmodel addresses {\n  id                  BigInt   @id @default(autoincrement())\n  addressable_type    String   @db.VarChar(50) /// Type: 'user', 'business', 'team'\n  user_account_id     BigInt?\n  business_account_id BigInt?\n  team_id             BigInt?\n  address_line1       String   @db.VarChar(255)\n  address_line2       String?  @db.VarChar(255)\n  city                String   @db.VarChar(100)\n  state               String   @db.VarChar(100)\n  country             String   @db.VarChar(100)\n  postal_code         String   @db.VarChar(20)\n  latitude            Decimal? @db.Decimal(10, 8)\n  longitude           Decimal? @db.Decimal(11, 8)\n  is_primary          Boolean  @default(false)\n  address_type        String   @db.VarChar(50) /// Type: 'billing', 'shipping', 'office'\n  metadata            Json?    @db.JsonB\n  created_at          DateTime @default(now())\n  updated_at          DateTime @updatedAt\n\n  // Relations\n  user_account     user_accounts?     @relation(fields: [user_account_id], references: [id])\n  business_account business_accounts? @relation(fields: [business_account_id], references: [id])\n  team             teams?             @relation(fields: [team_id], references: [id])\n\n  @@index([user_account_id])\n  @@index([business_account_id])\n  @@index([team_id])\n  @@index([address_type])\n  @@index([postal_code])\n  @@index([latitude, longitude])\n}\n\n/// Audit logs track all system changes and activities\n/// Provides comprehensive tracking of who did what and when\nmodel audit_logs {\n  id              BigInt   @id @default(autoincrement())\n  organization_id String?\n  tenant_id       String?\n  actor_type      String   @db.VarChar(50) /// Who: 'user', 'business', 'system'\n  actor_id        String   @db.VarChar(100) /// Auth0 ID or system identifier\n  event_type      String   @db.VarChar(100) /// What: 'create', 'update', 'delete'\n  entity_type     String   @db.VarChar(50) /// Target: 'user', 'team', 'business'\n  entity_id       BigInt /// ID of affected entity\n  change_summary  Json?    @db.JsonB /// What changed: { old: {}, new: {} }\n  metadata        Json?    @db.JsonB /// Additional context\n  ip_address      String?  @db.VarChar(45) /// Where: IP address\n  user_agent      String?  @db.Text /// How: Browser/client info\n  created_at      DateTime @default(now()) /// When: Timestamp\n\n  // Relations\n  organization     organizations?     @relation(fields: [organization_id], references: [id], map: \"audit_logs_organization_id_fkey\")\n  tenant           tenants?           @relation(fields: [tenant_id], references: [id], map: \"audit_logs_tenant_id_fkey\")\n  user_account     user_accounts?     @relation(fields: [entity_id], references: [id], map: \"audit_logs_user_account_id_fkey\")\n  business_account business_accounts? @relation(fields: [entity_id], references: [id], map: \"audit_logs_business_account_id_fkey\")\n  team             teams?             @relation(fields: [entity_id], references: [id], map: \"audit_logs_team_id_fkey\")\n\n  @@index([organization_id])\n  @@index([tenant_id])\n  @@index([actor_id])\n  @@index([event_type])\n  @@index([entity_type, entity_id])\n  @@index([created_at])\n}\n\n/// Settings management for various entities in the system\n/// Provides flexible configuration storage\n///\n/// Usage:\n/// ```typescript\n/// // Create tenant settings\n/// const settings = await prisma.settings.create({\n///   data: {\n///     tenant_id: tenant.id,\n///     settings_data: {\n///       branding: {\n///         primary_color: '#FF0000',\n///         logo_url: 'https://...'\n///       },\n///       security: {\n///         mfa_required: true,\n///         session_timeout: 3600\n///       }\n///     }\n///   }\n/// });\n/// ```\nmodel settings {\n  id                    BigInt             @id @default(autoincrement())\n  organization_id       String?\n  tenant_id             String?\n  business_account_id   BigInt?\n  user_account_id       BigInt?\n  created_at            DateTime           @default(now())\n  updated_at            DateTime           @updatedAt\n  settings_data         Json?              @db.JsonB /// Flexible settings storage\n  preferred_language    String?            @db.VarChar(10) /// ISO language code\n  notification_settings Json?              @db.JsonB /// Notification preferences\n  ui_settings           Json?              @db.JsonB /// UI/UX preferences\n  // Relations\n  tenant                tenants?           @relation(fields: [tenant_id], references: [id])\n  business_accounts     business_accounts? @relation(fields: [business_account_id], references: [id])\n  user_accounts         user_accounts?     @relation(fields: [user_account_id], references: [id])\n\n  @@index([organization_id])\n  @@index([tenant_id])\n  @@index([business_account_id])\n  @@index([user_account_id])\n}\n\n/// Implementation Notes:\n/// 1. Data Isolation:\n///    Always include organization_id and tenant_id in queries\n///    ```typescript\n///    prisma.$use(async (params, next) => {\n///      if (params.model in ['user_accounts', 'business_accounts', 'teams']) {\n///        params.args.where = {\n///          ...params.args.where,\n///          organization_id: currentOrgId,\n///          tenant_id: currentTenantId\n///        };\n///      }\n///      return next(params);\n///    });\n///    ```\n///\n/// 2. Audit Logging:\n///    Log all important operations\n///    ```typescript\n///    const createAuditLog = async (\n///      orgId: number,\n///      actorId: string,\n///      event: string,\n///      entityType: string,\n///      entityId: number,\n///      changes: any\n///    ) => {\n///      await prisma.audit_logs.create({\n///        data: {\n///          organization_id: orgId,\n///          actor_type: 'user',\n///          actor_id: actorId,\n///          event_type: event,\n///          entity_type: entityType,\n///          entity_id: entityId,\n///          change_summary: changes\n///        }\n///      });\n///    };\n///    ```\n///\n/// 3. Address Management:\n///    Support multiple address types\n///    ```typescript\n///    const addAddress = async (\n///      entityType: 'user' | 'business' | 'team',\n///      entityId: number,\n///      addressData: any\n///    ) => {\n///      return prisma.addresses.create({\n///        data: {\n///          addressable_type: entityType,\n///          [`${entityType}_id`]: entityId,\n///          ...addressData\n///        }\n///      });\n///    };\n///    ```\n///\n/// 4. Team Management:\n///    Handle team hierarchy and membership\n///    ```typescript\n///    const addTeamMember = async (\n///      teamId: number,\n///      userId: number,\n///      role: string\n///    ) => {\n///      const membership = await prisma.team_members.create({\n///        data: {\n///          team_id: teamId,\n///          user_account_id: userId,\n///          role: role,\n///          status: 'active'\n///        }\n///      });\n///\n///      await createAuditLog(\n///        team.organization_id,\n///        'system',\n///        'team.member.add',\n///        'team_member',\n///        membership.id,\n///        { role }\n///      );\n///\n///      return membership;\n///    };\n///    ```\n\n/// Security Considerations:\n/// 1. Always validate organization and tenant access\n/// 2. Implement role-based access control\n/// 3. Audit sensitive operations\n/// 4. Validate address data\n/// 5. Sanitize metadata inputs\n/// 6. Implement rate limiting\n/// 7. Regular security audits\n",
  inlineSchemaHash:
    "267c62d659d606da819d53763d7649b0d56ae12597da5a924a2f7a0a032887b3",
  copyEngine: false,
};
config.dirname = "/";

config.runtimeDataModel = JSON.parse(
  '{"models":{"organizations":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"display_name","kind":"scalar","type":"String"},{"name":"domain","kind":"scalar","type":"String"},{"name":"subscription_tier","kind":"scalar","type":"String"},{"name":"subscription_status","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"updated_at","kind":"scalar","type":"DateTime"},{"name":"is_active","kind":"scalar","type":"Boolean"},{"name":"metadata","kind":"scalar","type":"Json"},{"name":"max_users","kind":"scalar","type":"Int"},{"name":"technical_contact","kind":"scalar","type":"String"},{"name":"user_id","kind":"scalar","type":"String"},{"name":"storage_quota","kind":"scalar","type":"BigInt"},{"name":"used_storage","kind":"scalar","type":"BigInt"},{"name":"max_workspaces","kind":"scalar","type":"Int"},{"name":"max_members","kind":"scalar","type":"Int"},{"name":"api_key_prefix","kind":"scalar","type":"String"},{"name":"security_settings","kind":"scalar","type":"Json"},{"name":"feature_flags","kind":"scalar","type":"Json"},{"name":"tenants","kind":"object","type":"tenants","relationName":"organizationsTotenants"},{"name":"org_members","kind":"object","type":"org_members","relationName":"org_membersToorganizations"},{"name":"org_api_keys","kind":"object","type":"org_api_keys","relationName":"org_api_keysToorganizations"},{"name":"org_usage_logs","kind":"object","type":"org_usage_logs","relationName":"org_usage_logsToorganizations"},{"name":"business_accounts","kind":"object","type":"business_accounts","relationName":"business_accountsToorganizations"},{"name":"user_accounts","kind":"object","type":"user_accounts","relationName":"organizationsTouser_accounts"},{"name":"teams","kind":"object","type":"teams","relationName":"organizationsToteams"},{"name":"audit_logs","kind":"object","type":"audit_logs","relationName":"audit_logsToorganizations"}],"dbName":null},"tenants":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"organization_id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"external_id","kind":"scalar","type":"String"},{"name":"status","kind":"scalar","type":"String"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"updated_at","kind":"scalar","type":"DateTime"},{"name":"storage_quota","kind":"scalar","type":"BigInt"},{"name":"used_storage","kind":"scalar","type":"BigInt"},{"name":"metadata","kind":"scalar","type":"Json"},{"name":"custom_domain","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"organization","kind":"object","type":"organizations","relationName":"organizationsTotenants"},{"name":"business_accounts","kind":"object","type":"business_accounts","relationName":"business_accountsTotenants"},{"name":"user_accounts","kind":"object","type":"user_accounts","relationName":"tenantsTouser_accounts"},{"name":"settings","kind":"object","type":"settings","relationName":"settingsTotenants"},{"name":"teams","kind":"object","type":"teams","relationName":"teamsTotenants"},{"name":"audit_logs","kind":"object","type":"audit_logs","relationName":"audit_logsTotenants"},{"name":"tenant_api_keys","kind":"object","type":"tenant_api_keys","relationName":"tenant_api_keysTotenants"},{"name":"tenant_usage_logs","kind":"object","type":"tenant_usage_logs","relationName":"tenant_usage_logsTotenants"}],"dbName":null},"org_members":{"fields":[{"name":"id","kind":"scalar","type":"BigInt"},{"name":"organization_id","kind":"scalar","type":"String"},{"name":"user_id","kind":"scalar","type":"String"},{"name":"role","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"joined_at","kind":"scalar","type":"DateTime"},{"name":"invited_by","kind":"scalar","type":"String"},{"name":"status","kind":"scalar","type":"String"},{"name":"last_access","kind":"scalar","type":"DateTime"},{"name":"permissions","kind":"scalar","type":"String"},{"name":"organization","kind":"object","type":"organizations","relationName":"org_membersToorganizations"}],"dbName":null},"org_api_keys":{"fields":[{"name":"id","kind":"scalar","type":"BigInt"},{"name":"organization_id","kind":"scalar","type":"String"},{"name":"user_id","kind":"scalar","type":"BigInt"},{"name":"key_name","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"key_id","kind":"scalar","type":"String"},{"name":"key_hash","kind":"scalar","type":"String"},{"name":"scopes","kind":"scalar","type":"String"},{"name":"rate_limit","kind":"scalar","type":"Int"},{"name":"allowed_ips","kind":"scalar","type":"String"},{"name":"allowed_domains","kind":"scalar","type":"String"},{"name":"usage_count","kind":"scalar","type":"Int"},{"name":"last_used_ip","kind":"scalar","type":"String"},{"name":"environment","kind":"enum","type":"APIKeyEnvironment"},{"name":"revoked","kind":"scalar","type":"Boolean"},{"name":"revoked_at","kind":"scalar","type":"DateTime"},{"name":"revoked_reason","kind":"scalar","type":"String"},{"name":"expires_at","kind":"scalar","type":"DateTime"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"updated_at","kind":"scalar","type":"DateTime"},{"name":"created_by","kind":"scalar","type":"String"},{"name":"last_used","kind":"scalar","type":"DateTime"},{"name":"is_active","kind":"scalar","type":"Boolean"},{"name":"organization","kind":"object","type":"organizations","relationName":"org_api_keysToorganizations"},{"name":"user","kind":"object","type":"user_accounts","relationName":"org_api_keysTouser_accounts"}],"dbName":null},"tenant_api_keys":{"fields":[{"name":"id","kind":"scalar","type":"BigInt"},{"name":"tenant_id","kind":"scalar","type":"String"},{"name":"key_name","kind":"scalar","type":"String"},{"name":"key_prefix","kind":"scalar","type":"String"},{"name":"key_hash","kind":"scalar","type":"String"},{"name":"key_id","kind":"scalar","type":"String"},{"name":"scopes","kind":"scalar","type":"String"},{"name":"expires_at","kind":"scalar","type":"DateTime"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"created_by","kind":"scalar","type":"String"},{"name":"last_used","kind":"scalar","type":"DateTime"},{"name":"is_active","kind":"scalar","type":"Boolean"},{"name":"tenant","kind":"object","type":"tenants","relationName":"tenant_api_keysTotenants"}],"dbName":null},"org_usage_logs":{"fields":[{"name":"id","kind":"scalar","type":"BigInt"},{"name":"organization_id","kind":"scalar","type":"String"},{"name":"timestamp","kind":"scalar","type":"DateTime"},{"name":"event_type","kind":"scalar","type":"String"},{"name":"quantity","kind":"scalar","type":"BigInt"},{"name":"unit","kind":"scalar","type":"String"},{"name":"details","kind":"scalar","type":"Json"},{"name":"organization","kind":"object","type":"organizations","relationName":"org_usage_logsToorganizations"}],"dbName":null},"tenant_usage_logs":{"fields":[{"name":"id","kind":"scalar","type":"BigInt"},{"name":"tenant_id","kind":"scalar","type":"String"},{"name":"timestamp","kind":"scalar","type":"DateTime"},{"name":"event_type","kind":"scalar","type":"String"},{"name":"quantity","kind":"scalar","type":"BigInt"},{"name":"unit","kind":"scalar","type":"String"},{"name":"details","kind":"scalar","type":"Json"},{"name":"tenant","kind":"object","type":"tenants","relationName":"tenant_usage_logsTotenants"}],"dbName":null},"teams":{"fields":[{"name":"id","kind":"scalar","type":"BigInt"},{"name":"organization_id","kind":"scalar","type":"String"},{"name":"tenant_id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"team_type","kind":"scalar","type":"String"},{"name":"is_active","kind":"scalar","type":"Boolean"},{"name":"metadata","kind":"scalar","type":"Json"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"updated_at","kind":"scalar","type":"DateTime"},{"name":"created_by","kind":"scalar","type":"String"},{"name":"organization","kind":"object","type":"organizations","relationName":"organizationsToteams"},{"name":"tenant","kind":"object","type":"tenants","relationName":"teamsTotenants"},{"name":"team_members","kind":"object","type":"team_members","relationName":"team_membersToteams"},{"name":"addresses","kind":"object","type":"addresses","relationName":"addressesToteams"},{"name":"audit_logs","kind":"object","type":"audit_logs","relationName":"audit_logsToteams"}],"dbName":null},"team_members":{"fields":[{"name":"id","kind":"scalar","type":"BigInt"},{"name":"team_id","kind":"scalar","type":"BigInt"},{"name":"user_account_id","kind":"scalar","type":"BigInt"},{"name":"business_account_id","kind":"scalar","type":"BigInt"},{"name":"role","kind":"scalar","type":"String"},{"name":"joined_at","kind":"scalar","type":"DateTime"},{"name":"invited_by","kind":"scalar","type":"String"},{"name":"status","kind":"scalar","type":"String"},{"name":"metadata","kind":"scalar","type":"Json"},{"name":"team","kind":"object","type":"teams","relationName":"team_membersToteams"},{"name":"user_account","kind":"object","type":"user_accounts","relationName":"team_membersTouser_accounts"},{"name":"business_account","kind":"object","type":"business_accounts","relationName":"business_accountsToteam_members"},{"name":"deleted_at","kind":"scalar","type":"DateTime"}],"dbName":null},"business_accounts":{"fields":[{"name":"id","kind":"scalar","type":"BigInt"},{"name":"organization_id","kind":"scalar","type":"String"},{"name":"tenant_id","kind":"scalar","type":"String"},{"name":"account_type","kind":"scalar","type":"String"},{"name":"company_name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"is_active","kind":"scalar","type":"Boolean"},{"name":"auth0_user_id","kind":"scalar","type":"String"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"updated_at","kind":"scalar","type":"DateTime"},{"name":"status","kind":"scalar","type":"String"},{"name":"metadata","kind":"scalar","type":"Json"},{"name":"base_directory","kind":"scalar","type":"String"},{"name":"bucket_location","kind":"scalar","type":"String"},{"name":"bucket_name","kind":"scalar","type":"String"},{"name":"region","kind":"scalar","type":"String"},{"name":"last_access","kind":"scalar","type":"DateTime"},{"name":"storage_quota","kind":"scalar","type":"BigInt"},{"name":"used_storage","kind":"scalar","type":"BigInt"},{"name":"organization","kind":"object","type":"organizations","relationName":"business_accountsToorganizations"},{"name":"tenant","kind":"object","type":"tenants","relationName":"business_accountsTotenants"},{"name":"settings","kind":"object","type":"settings","relationName":"business_accountsTosettings"},{"name":"addresses","kind":"object","type":"addresses","relationName":"addressesTobusiness_accounts"},{"name":"team_memberships","kind":"object","type":"team_members","relationName":"business_accountsToteam_members"},{"name":"audit_logs","kind":"object","type":"audit_logs","relationName":"audit_logsTobusiness_accounts"}],"dbName":null},"user_accounts":{"fields":[{"name":"id","kind":"scalar","type":"BigInt"},{"name":"organization_id","kind":"scalar","type":"String"},{"name":"tenant_id","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"firstname","kind":"scalar","type":"String"},{"name":"lastname","kind":"scalar","type":"String"},{"name":"auth0_user_id","kind":"scalar","type":"String"},{"name":"is_active","kind":"scalar","type":"Boolean"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"updated_at","kind":"scalar","type":"DateTime"},{"name":"status","kind":"scalar","type":"String"},{"name":"metadata","kind":"scalar","type":"Json"},{"name":"base_directory","kind":"scalar","type":"String"},{"name":"bucket_location","kind":"scalar","type":"String"},{"name":"bucket_name","kind":"scalar","type":"String"},{"name":"region","kind":"scalar","type":"String"},{"name":"last_access","kind":"scalar","type":"DateTime"},{"name":"storage_quota","kind":"scalar","type":"BigInt"},{"name":"used_storage","kind":"scalar","type":"BigInt"},{"name":"organization","kind":"object","type":"organizations","relationName":"organizationsTouser_accounts"},{"name":"tenant","kind":"object","type":"tenants","relationName":"tenantsTouser_accounts"},{"name":"settings","kind":"object","type":"settings","relationName":"settingsTouser_accounts"},{"name":"addresses","kind":"object","type":"addresses","relationName":"addressesTouser_accounts"},{"name":"team_memberships","kind":"object","type":"team_members","relationName":"team_membersTouser_accounts"},{"name":"audit_logs","kind":"object","type":"audit_logs","relationName":"audit_logsTouser_accounts"},{"name":"org_api_keys","kind":"object","type":"org_api_keys","relationName":"org_api_keysTouser_accounts"}],"dbName":null},"addresses":{"fields":[{"name":"id","kind":"scalar","type":"BigInt"},{"name":"addressable_type","kind":"scalar","type":"String"},{"name":"user_account_id","kind":"scalar","type":"BigInt"},{"name":"business_account_id","kind":"scalar","type":"BigInt"},{"name":"team_id","kind":"scalar","type":"BigInt"},{"name":"address_line1","kind":"scalar","type":"String"},{"name":"address_line2","kind":"scalar","type":"String"},{"name":"city","kind":"scalar","type":"String"},{"name":"state","kind":"scalar","type":"String"},{"name":"country","kind":"scalar","type":"String"},{"name":"postal_code","kind":"scalar","type":"String"},{"name":"latitude","kind":"scalar","type":"Decimal"},{"name":"longitude","kind":"scalar","type":"Decimal"},{"name":"is_primary","kind":"scalar","type":"Boolean"},{"name":"address_type","kind":"scalar","type":"String"},{"name":"metadata","kind":"scalar","type":"Json"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"updated_at","kind":"scalar","type":"DateTime"},{"name":"user_account","kind":"object","type":"user_accounts","relationName":"addressesTouser_accounts"},{"name":"business_account","kind":"object","type":"business_accounts","relationName":"addressesTobusiness_accounts"},{"name":"team","kind":"object","type":"teams","relationName":"addressesToteams"}],"dbName":null},"audit_logs":{"fields":[{"name":"id","kind":"scalar","type":"BigInt"},{"name":"organization_id","kind":"scalar","type":"String"},{"name":"tenant_id","kind":"scalar","type":"String"},{"name":"actor_type","kind":"scalar","type":"String"},{"name":"actor_id","kind":"scalar","type":"String"},{"name":"event_type","kind":"scalar","type":"String"},{"name":"entity_type","kind":"scalar","type":"String"},{"name":"entity_id","kind":"scalar","type":"BigInt"},{"name":"change_summary","kind":"scalar","type":"Json"},{"name":"metadata","kind":"scalar","type":"Json"},{"name":"ip_address","kind":"scalar","type":"String"},{"name":"user_agent","kind":"scalar","type":"String"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"organization","kind":"object","type":"organizations","relationName":"audit_logsToorganizations"},{"name":"tenant","kind":"object","type":"tenants","relationName":"audit_logsTotenants"},{"name":"user_account","kind":"object","type":"user_accounts","relationName":"audit_logsTouser_accounts"},{"name":"business_account","kind":"object","type":"business_accounts","relationName":"audit_logsTobusiness_accounts"},{"name":"team","kind":"object","type":"teams","relationName":"audit_logsToteams"}],"dbName":null},"settings":{"fields":[{"name":"id","kind":"scalar","type":"BigInt"},{"name":"organization_id","kind":"scalar","type":"String"},{"name":"tenant_id","kind":"scalar","type":"String"},{"name":"business_account_id","kind":"scalar","type":"BigInt"},{"name":"user_account_id","kind":"scalar","type":"BigInt"},{"name":"created_at","kind":"scalar","type":"DateTime"},{"name":"updated_at","kind":"scalar","type":"DateTime"},{"name":"settings_data","kind":"scalar","type":"Json"},{"name":"preferred_language","kind":"scalar","type":"String"},{"name":"notification_settings","kind":"scalar","type":"Json"},{"name":"ui_settings","kind":"scalar","type":"Json"},{"name":"tenant","kind":"object","type":"tenants","relationName":"settingsTotenants"},{"name":"business_accounts","kind":"object","type":"business_accounts","relationName":"business_accountsTosettings"},{"name":"user_accounts","kind":"object","type":"user_accounts","relationName":"settingsTouser_accounts"}],"dbName":null}},"enums":{},"types":{}}',
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.engineWasm = undefined;

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL:
      (typeof globalThis !== "undefined" && globalThis["DATABASE_URL"]) ||
      (typeof process !== "undefined" &&
        process.env &&
        process.env.DATABASE_URL) ||
      undefined,
  },
});

if (
  (typeof globalThis !== "undefined" && globalThis["DEBUG"]) ||
  (typeof process !== "undefined" && process.env && process.env.DEBUG) ||
  undefined
) {
  Debug.enable(
    (typeof globalThis !== "undefined" && globalThis["DEBUG"]) ||
      (typeof process !== "undefined" && process.env && process.env.DEBUG) ||
      undefined,
  );
}

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);
