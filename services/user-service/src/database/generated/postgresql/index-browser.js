Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip,
} = require("./runtime/index-browser.js");

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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};

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
  is_soft_deleted: "is_soft_deleted",
  is_active: "is_active",
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
  max_usage_count: "max_usage_count",
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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message;
        const runtime = getRuntime();
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message =
            "PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `" +
            runtime.prettyName +
            "`).";
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`;

        throw new Error(message);
      },
    });
  }
}

exports.PrismaClient = PrismaClient;

Object.assign(exports, Prisma);
