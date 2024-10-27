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

exports.Prisma.AccountsScalarFieldEnum = {
  auth0_user_id: "auth0_user_id",
  base_directory: "base_directory",
  bucket_location: "bucket_location",
  bucket_name: "bucket_name",
  id: "id",
  region: "region",
  created_at: "created_at",
  updated_at: "updated_at",
  is_active: "is_active",
  settings: "settings",
  last_access: "last_access",
  storage_quota: "storage_quota",
  used_storage: "used_storage",
};

exports.Prisma.File_metadataScalarFieldEnum = {
  created_at: "created_at",
  file_type: "file_type",
  folder_metadata_id: "folder_metadata_id",
  id: "id",
  is_deleted: "is_deleted",
  location: "location",
  name: "name",
  s3_acl: "s3_acl",
  s3_bucket_name: "s3_bucket_name",
  s3_content_disposition: "s3_content_disposition",
  s3_content_encoding: "s3_content_encoding",
  s3_content_length: "s3_content_length",
  s3_content_type: "s3_content_type",
  s3_etag: "s3_etag",
  s3_key: "s3_key",
  s3_last_modified: "s3_last_modified",
  s3_region: "s3_region",
  s3_server_side_encryption: "s3_server_side_encryption",
  s3_storage_class: "s3_storage_class",
  s3_version_id: "s3_version_id",
  size: "size",
  tags: "tags",
  updated_at: "updated_at",
  upload_id: "upload_id",
  version: "version",
  version_id: "version_id",
  markdown_content: "markdown_content",
  mime_type: "mime_type",
  checksum: "checksum",
  preview_available: "preview_available",
  preview_status: "preview_status",
  thumbnail_url: "thumbnail_url",
  last_accessed: "last_accessed",
  access_count: "access_count",
};

exports.Prisma.File_searchScalarFieldEnum = {
  id: "id",
  file_id: "file_id",
  content_tokens: "content_tokens",
  metadata_tokens: "metadata_tokens",
  search_text: "search_text",
  language: "language",
  last_indexed: "last_indexed",
};

exports.Prisma.File_embeddingsScalarFieldEnum = {
  id: "id",
  file_id: "file_id",
  chunk_index: "chunk_index",
  chunk_text: "chunk_text",
  created_at: "created_at",
};

exports.Prisma.File_versionsScalarFieldEnum = {
  id: "id",
  file_id: "file_id",
  version_number: "version_number",
  s3_version_id: "s3_version_id",
  created_at: "created_at",
  size: "size",
  checksum: "checksum",
  modified_by: "modified_by",
  change_summary: "change_summary",
};

exports.Prisma.Folder_metadataScalarFieldEnum = {
  created_at: "created_at",
  folder_metadata_id: "folder_metadata_id",
  id: "id",
  is_deleted: "is_deleted",
  name: "name",
  s3_acl: "s3_acl",
  s3_bucket_name: "s3_bucket_name",
  s3_folder_path: "s3_folder_path",
  s3_last_modified: "s3_last_modified",
  s3_region: "s3_region",
  updated_at: "updated_at",
  version_id: "version_id",
  workspace_id: "workspace_id",
  description: "description",
  metadata: "metadata",
};

exports.Prisma.Folder_searchScalarFieldEnum = {
  id: "id",
  folder_id: "folder_id",
  search_text: "search_text",
  metadata_tokens: "metadata_tokens",
  last_indexed: "last_indexed",
};

exports.Prisma.WorkspacesScalarFieldEnum = {
  account_id: "account_id",
  created_at: "created_at",
  id: "id",
  is_deleted: "is_deleted",
  name: "name",
  s3_acl: "s3_acl",
  s3_bucket_name: "s3_bucket_name",
  s3_folder_path: "s3_folder_path",
  s3_last_modified: "s3_last_modified",
  s3_region: "s3_region",
  tags: "tags",
  unique_identifier: "unique_identifier",
  updated_at: "updated_at",
  version: "version",
  version_id: "version_id",
  description: "description",
  metadata: "metadata",
  storage_quota: "storage_quota",
  used_storage: "used_storage",
  workspace_type: "workspace_type",
  parent_workspace_id: "parent_workspace_id",
  workspace_path: "workspace_path",
  icon_url: "icon_url",
  color_theme: "color_theme",
  is_template: "is_template",
  template_id: "template_id",
  favorite_count: "favorite_count",
  last_activity: "last_activity",
  retention_days: "retention_days",
  default_view: "default_view",
  max_file_size: "max_file_size",
  max_storage_per_user: "max_storage_per_user",
  max_versions: "max_versions",
  allow_public_sharing: "allow_public_sharing",
  require_approval: "require_approval",
  member_limit: "member_limit",
  guest_access: "guest_access",
};

exports.Prisma.Workspace_searchScalarFieldEnum = {
  id: "id",
  workspace_id: "workspace_id",
  search_text: "search_text",
  metadata_tokens: "metadata_tokens",
  last_indexed: "last_indexed",
};

exports.Prisma.Workspace_sharingScalarFieldEnum = {
  id: "id",
  workspace_id: "workspace_id",
  shared_with_id: "shared_with_id",
  sharing_type: "sharing_type",
  permission_level: "permission_level",
  created_at: "created_at",
  expires_at: "expires_at",
  created_by: "created_by",
  access_key: "access_key",
  is_active: "is_active",
  last_accessed: "last_accessed",
};

exports.Prisma.Workspace_activityScalarFieldEnum = {
  id: "id",
  workspace_id: "workspace_id",
  user_id: "user_id",
  action_type: "action_type",
  action_details: "action_details",
  timestamp: "timestamp",
  ip_address: "ip_address",
  user_agent: "user_agent",
  affected_items: "affected_items",
};

exports.Prisma.Workspace_templatesScalarFieldEnum = {
  id: "id",
  name: "name",
  description: "description",
  folder_structure: "folder_structure",
  default_settings: "default_settings",
  tags: "tags",
  created_by: "created_by",
  created_at: "created_at",
  updated_at: "updated_at",
  is_public: "is_public",
  category: "category",
  usage_count: "usage_count",
  rating: "rating",
};

exports.Prisma.Workspace_backupsScalarFieldEnum = {
  id: "id",
  workspace_id: "workspace_id",
  backup_frequency: "backup_frequency",
  retention_period: "retention_period",
  last_backup_at: "last_backup_at",
  next_backup_at: "next_backup_at",
  backup_location: "backup_location",
  is_enabled: "is_enabled",
  include_versions: "include_versions",
  encryption_enabled: "encryption_enabled",
  backup_status: "backup_status",
};

exports.Prisma.Workspace_automationsScalarFieldEnum = {
  id: "id",
  workspace_id: "workspace_id",
  name: "name",
  description: "description",
  trigger_type: "trigger_type",
  trigger_config: "trigger_config",
  actions: "actions",
  is_enabled: "is_enabled",
  created_at: "created_at",
  updated_at: "updated_at",
  last_run: "last_run",
  run_count: "run_count",
};

exports.Prisma.Workspace_integrationsScalarFieldEnum = {
  id: "id",
  workspace_id: "workspace_id",
  service_name: "service_name",
  config: "config",
  auth_tokens: "auth_tokens",
  webhook_url: "webhook_url",
  is_active: "is_active",
  last_sync: "last_sync",
  sync_frequency: "sync_frequency",
  created_at: "created_at",
  updated_at: "updated_at",
};

exports.Prisma.Workspace_complianceScalarFieldEnum = {
  id: "id",
  workspace_id: "workspace_id",
  retention_policy: "retention_policy",
  encryption_settings: "encryption_settings",
  compliance_level: "compliance_level",
  audit_frequency: "audit_frequency",
  last_audit: "last_audit",
  required_tags: "required_tags",
  restricted_actions: "restricted_actions",
  gdpr_compliant: "gdpr_compliant",
  hipaa_compliant: "hipaa_compliant",
  created_at: "created_at",
  updated_at: "updated_at",
};

exports.Prisma.SortOrder = {
  asc: "asc",
  desc: "desc",
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
};

exports.Prisma.JsonNullValueInput = {
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

exports.Prisma.accountsOrderByRelevanceFieldEnum = {
  auth0_user_id: "auth0_user_id",
  base_directory: "base_directory",
  bucket_location: "bucket_location",
  bucket_name: "bucket_name",
  region: "region",
};

exports.Prisma.file_metadataOrderByRelevanceFieldEnum = {
  file_type: "file_type",
  location: "location",
  name: "name",
  s3_acl: "s3_acl",
  s3_bucket_name: "s3_bucket_name",
  s3_content_disposition: "s3_content_disposition",
  s3_content_encoding: "s3_content_encoding",
  s3_content_type: "s3_content_type",
  s3_etag: "s3_etag",
  s3_key: "s3_key",
  s3_region: "s3_region",
  s3_server_side_encryption: "s3_server_side_encryption",
  s3_storage_class: "s3_storage_class",
  s3_version_id: "s3_version_id",
  tags: "tags",
  upload_id: "upload_id",
  version_id: "version_id",
  markdown_content: "markdown_content",
  mime_type: "mime_type",
  checksum: "checksum",
  preview_status: "preview_status",
  thumbnail_url: "thumbnail_url",
};

exports.Prisma.file_searchOrderByRelevanceFieldEnum = {
  content_tokens: "content_tokens",
  metadata_tokens: "metadata_tokens",
  search_text: "search_text",
  language: "language",
};

exports.Prisma.file_embeddingsOrderByRelevanceFieldEnum = {
  chunk_text: "chunk_text",
};

exports.Prisma.file_versionsOrderByRelevanceFieldEnum = {
  s3_version_id: "s3_version_id",
  checksum: "checksum",
  modified_by: "modified_by",
  change_summary: "change_summary",
};

exports.Prisma.folder_metadataOrderByRelevanceFieldEnum = {
  name: "name",
  s3_acl: "s3_acl",
  s3_bucket_name: "s3_bucket_name",
  s3_folder_path: "s3_folder_path",
  s3_region: "s3_region",
  version_id: "version_id",
  description: "description",
};

exports.Prisma.folder_searchOrderByRelevanceFieldEnum = {
  search_text: "search_text",
  metadata_tokens: "metadata_tokens",
};

exports.Prisma.workspacesOrderByRelevanceFieldEnum = {
  name: "name",
  s3_acl: "s3_acl",
  s3_bucket_name: "s3_bucket_name",
  s3_folder_path: "s3_folder_path",
  s3_region: "s3_region",
  tags: "tags",
  unique_identifier: "unique_identifier",
  version_id: "version_id",
  description: "description",
  workspace_type: "workspace_type",
  workspace_path: "workspace_path",
  icon_url: "icon_url",
  color_theme: "color_theme",
  default_view: "default_view",
};

exports.Prisma.workspace_searchOrderByRelevanceFieldEnum = {
  search_text: "search_text",
  metadata_tokens: "metadata_tokens",
};

exports.Prisma.workspace_sharingOrderByRelevanceFieldEnum = {
  shared_with_id: "shared_with_id",
  sharing_type: "sharing_type",
  permission_level: "permission_level",
  created_by: "created_by",
  access_key: "access_key",
};

exports.Prisma.workspace_activityOrderByRelevanceFieldEnum = {
  user_id: "user_id",
  action_type: "action_type",
  ip_address: "ip_address",
  user_agent: "user_agent",
  affected_items: "affected_items",
};

exports.Prisma.workspace_templatesOrderByRelevanceFieldEnum = {
  name: "name",
  description: "description",
  tags: "tags",
  created_by: "created_by",
  category: "category",
};

exports.Prisma.workspace_backupsOrderByRelevanceFieldEnum = {
  backup_frequency: "backup_frequency",
  backup_location: "backup_location",
  backup_status: "backup_status",
};

exports.Prisma.workspace_automationsOrderByRelevanceFieldEnum = {
  name: "name",
  description: "description",
  trigger_type: "trigger_type",
};

exports.Prisma.workspace_integrationsOrderByRelevanceFieldEnum = {
  service_name: "service_name",
  webhook_url: "webhook_url",
  sync_frequency: "sync_frequency",
};

exports.Prisma.workspace_complianceOrderByRelevanceFieldEnum = {
  compliance_level: "compliance_level",
  audit_frequency: "audit_frequency",
  required_tags: "required_tags",
  restricted_actions: "restricted_actions",
};

exports.Prisma.ModelName = {
  accounts: "accounts",
  file_metadata: "file_metadata",
  file_search: "file_search",
  file_embeddings: "file_embeddings",
  file_versions: "file_versions",
  folder_metadata: "folder_metadata",
  folder_search: "folder_search",
  workspaces: "workspaces",
  workspace_search: "workspace_search",
  workspace_sharing: "workspace_sharing",
  workspace_activity: "workspace_activity",
  workspace_templates: "workspace_templates",
  workspace_backups: "workspace_backups",
  workspace_automations: "workspace_automations",
  workspace_integrations: "workspace_integrations",
  workspace_compliance: "workspace_compliance",
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
