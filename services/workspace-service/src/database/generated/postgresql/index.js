
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
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.21.1
 * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
 */
Prisma.prismaVersion = {
  client: "5.21.1",
  engine: "bf0e5e8a04cada8225617067eaa03d041e2bba36"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountsScalarFieldEnum = {
  auth0_user_id: 'auth0_user_id',
  base_directory: 'base_directory',
  bucket_location: 'bucket_location',
  bucket_name: 'bucket_name',
  id: 'id',
  region: 'region',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_active: 'is_active',
  settings: 'settings',
  last_access: 'last_access',
  storage_quota: 'storage_quota',
  used_storage: 'used_storage'
};

exports.Prisma.File_metadataScalarFieldEnum = {
  created_at: 'created_at',
  file_type: 'file_type',
  folder_metadata_id: 'folder_metadata_id',
  id: 'id',
  is_deleted: 'is_deleted',
  location: 'location',
  name: 'name',
  s3_acl: 's3_acl',
  s3_bucket_name: 's3_bucket_name',
  s3_content_disposition: 's3_content_disposition',
  s3_content_encoding: 's3_content_encoding',
  s3_content_length: 's3_content_length',
  s3_content_type: 's3_content_type',
  s3_etag: 's3_etag',
  s3_key: 's3_key',
  s3_last_modified: 's3_last_modified',
  s3_region: 's3_region',
  s3_server_side_encryption: 's3_server_side_encryption',
  s3_storage_class: 's3_storage_class',
  s3_version_id: 's3_version_id',
  size: 'size',
  tags: 'tags',
  updated_at: 'updated_at',
  upload_id: 'upload_id',
  version: 'version',
  version_id: 'version_id',
  markdown_content: 'markdown_content',
  mime_type: 'mime_type',
  checksum: 'checksum',
  preview_available: 'preview_available',
  preview_status: 'preview_status',
  thumbnail_url: 'thumbnail_url',
  last_accessed: 'last_accessed',
  access_count: 'access_count'
};

exports.Prisma.File_searchScalarFieldEnum = {
  id: 'id',
  file_id: 'file_id',
  content_tokens: 'content_tokens',
  metadata_tokens: 'metadata_tokens',
  search_text: 'search_text',
  language: 'language',
  last_indexed: 'last_indexed'
};

exports.Prisma.File_embeddingsScalarFieldEnum = {
  id: 'id',
  file_id: 'file_id',
  chunk_index: 'chunk_index',
  chunk_text: 'chunk_text',
  created_at: 'created_at'
};

exports.Prisma.File_versionsScalarFieldEnum = {
  id: 'id',
  file_id: 'file_id',
  version_number: 'version_number',
  s3_version_id: 's3_version_id',
  created_at: 'created_at',
  size: 'size',
  checksum: 'checksum',
  modified_by: 'modified_by',
  change_summary: 'change_summary'
};

exports.Prisma.Folder_metadataScalarFieldEnum = {
  created_at: 'created_at',
  folder_metadata_id: 'folder_metadata_id',
  id: 'id',
  is_deleted: 'is_deleted',
  name: 'name',
  s3_acl: 's3_acl',
  s3_bucket_name: 's3_bucket_name',
  s3_folder_path: 's3_folder_path',
  s3_last_modified: 's3_last_modified',
  s3_region: 's3_region',
  updated_at: 'updated_at',
  version_id: 'version_id',
  workspace_id: 'workspace_id',
  description: 'description',
  metadata: 'metadata'
};

exports.Prisma.Folder_searchScalarFieldEnum = {
  id: 'id',
  folder_id: 'folder_id',
  search_text: 'search_text',
  metadata_tokens: 'metadata_tokens',
  last_indexed: 'last_indexed'
};

exports.Prisma.WorkspacesScalarFieldEnum = {
  account_id: 'account_id',
  created_at: 'created_at',
  id: 'id',
  is_deleted: 'is_deleted',
  name: 'name',
  s3_acl: 's3_acl',
  s3_bucket_name: 's3_bucket_name',
  s3_folder_path: 's3_folder_path',
  s3_last_modified: 's3_last_modified',
  s3_region: 's3_region',
  tags: 'tags',
  unique_identifier: 'unique_identifier',
  updated_at: 'updated_at',
  version: 'version',
  version_id: 'version_id',
  description: 'description',
  metadata: 'metadata',
  storage_quota: 'storage_quota',
  used_storage: 'used_storage',
  workspace_type: 'workspace_type',
  parent_workspace_id: 'parent_workspace_id',
  workspace_path: 'workspace_path',
  icon_url: 'icon_url',
  color_theme: 'color_theme',
  is_template: 'is_template',
  template_id: 'template_id',
  favorite_count: 'favorite_count',
  last_activity: 'last_activity',
  retention_days: 'retention_days',
  default_view: 'default_view',
  max_file_size: 'max_file_size',
  max_storage_per_user: 'max_storage_per_user',
  max_versions: 'max_versions',
  allow_public_sharing: 'allow_public_sharing',
  require_approval: 'require_approval',
  member_limit: 'member_limit',
  guest_access: 'guest_access'
};

exports.Prisma.Workspace_searchScalarFieldEnum = {
  id: 'id',
  workspace_id: 'workspace_id',
  search_text: 'search_text',
  metadata_tokens: 'metadata_tokens',
  last_indexed: 'last_indexed'
};

exports.Prisma.Workspace_sharingScalarFieldEnum = {
  id: 'id',
  workspace_id: 'workspace_id',
  shared_with_id: 'shared_with_id',
  sharing_type: 'sharing_type',
  permission_level: 'permission_level',
  created_at: 'created_at',
  expires_at: 'expires_at',
  created_by: 'created_by',
  access_key: 'access_key',
  is_active: 'is_active',
  last_accessed: 'last_accessed'
};

exports.Prisma.Workspace_activityScalarFieldEnum = {
  id: 'id',
  workspace_id: 'workspace_id',
  user_id: 'user_id',
  action_type: 'action_type',
  action_details: 'action_details',
  timestamp: 'timestamp',
  ip_address: 'ip_address',
  user_agent: 'user_agent',
  affected_items: 'affected_items'
};

exports.Prisma.Workspace_templatesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  folder_structure: 'folder_structure',
  default_settings: 'default_settings',
  tags: 'tags',
  created_by: 'created_by',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_public: 'is_public',
  category: 'category',
  usage_count: 'usage_count',
  rating: 'rating'
};

exports.Prisma.Workspace_backupsScalarFieldEnum = {
  id: 'id',
  workspace_id: 'workspace_id',
  backup_frequency: 'backup_frequency',
  retention_period: 'retention_period',
  last_backup_at: 'last_backup_at',
  next_backup_at: 'next_backup_at',
  backup_location: 'backup_location',
  is_enabled: 'is_enabled',
  include_versions: 'include_versions',
  encryption_enabled: 'encryption_enabled',
  backup_status: 'backup_status'
};

exports.Prisma.Workspace_automationsScalarFieldEnum = {
  id: 'id',
  workspace_id: 'workspace_id',
  name: 'name',
  description: 'description',
  trigger_type: 'trigger_type',
  trigger_config: 'trigger_config',
  actions: 'actions',
  is_enabled: 'is_enabled',
  created_at: 'created_at',
  updated_at: 'updated_at',
  last_run: 'last_run',
  run_count: 'run_count'
};

exports.Prisma.Workspace_integrationsScalarFieldEnum = {
  id: 'id',
  workspace_id: 'workspace_id',
  service_name: 'service_name',
  config: 'config',
  auth_tokens: 'auth_tokens',
  webhook_url: 'webhook_url',
  is_active: 'is_active',
  last_sync: 'last_sync',
  sync_frequency: 'sync_frequency',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Workspace_complianceScalarFieldEnum = {
  id: 'id',
  workspace_id: 'workspace_id',
  retention_policy: 'retention_policy',
  encryption_settings: 'encryption_settings',
  compliance_level: 'compliance_level',
  audit_frequency: 'audit_frequency',
  last_audit: 'last_audit',
  required_tags: 'required_tags',
  restricted_actions: 'restricted_actions',
  gdpr_compliant: 'gdpr_compliant',
  hipaa_compliant: 'hipaa_compliant',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.accountsOrderByRelevanceFieldEnum = {
  auth0_user_id: 'auth0_user_id',
  base_directory: 'base_directory',
  bucket_location: 'bucket_location',
  bucket_name: 'bucket_name',
  region: 'region'
};

exports.Prisma.file_metadataOrderByRelevanceFieldEnum = {
  file_type: 'file_type',
  location: 'location',
  name: 'name',
  s3_acl: 's3_acl',
  s3_bucket_name: 's3_bucket_name',
  s3_content_disposition: 's3_content_disposition',
  s3_content_encoding: 's3_content_encoding',
  s3_content_type: 's3_content_type',
  s3_etag: 's3_etag',
  s3_key: 's3_key',
  s3_region: 's3_region',
  s3_server_side_encryption: 's3_server_side_encryption',
  s3_storage_class: 's3_storage_class',
  s3_version_id: 's3_version_id',
  tags: 'tags',
  upload_id: 'upload_id',
  version_id: 'version_id',
  markdown_content: 'markdown_content',
  mime_type: 'mime_type',
  checksum: 'checksum',
  preview_status: 'preview_status',
  thumbnail_url: 'thumbnail_url'
};

exports.Prisma.file_searchOrderByRelevanceFieldEnum = {
  content_tokens: 'content_tokens',
  metadata_tokens: 'metadata_tokens',
  search_text: 'search_text',
  language: 'language'
};

exports.Prisma.file_embeddingsOrderByRelevanceFieldEnum = {
  chunk_text: 'chunk_text'
};

exports.Prisma.file_versionsOrderByRelevanceFieldEnum = {
  s3_version_id: 's3_version_id',
  checksum: 'checksum',
  modified_by: 'modified_by',
  change_summary: 'change_summary'
};

exports.Prisma.folder_metadataOrderByRelevanceFieldEnum = {
  name: 'name',
  s3_acl: 's3_acl',
  s3_bucket_name: 's3_bucket_name',
  s3_folder_path: 's3_folder_path',
  s3_region: 's3_region',
  version_id: 'version_id',
  description: 'description'
};

exports.Prisma.folder_searchOrderByRelevanceFieldEnum = {
  search_text: 'search_text',
  metadata_tokens: 'metadata_tokens'
};

exports.Prisma.workspacesOrderByRelevanceFieldEnum = {
  name: 'name',
  s3_acl: 's3_acl',
  s3_bucket_name: 's3_bucket_name',
  s3_folder_path: 's3_folder_path',
  s3_region: 's3_region',
  tags: 'tags',
  unique_identifier: 'unique_identifier',
  version_id: 'version_id',
  description: 'description',
  workspace_type: 'workspace_type',
  workspace_path: 'workspace_path',
  icon_url: 'icon_url',
  color_theme: 'color_theme',
  default_view: 'default_view'
};

exports.Prisma.workspace_searchOrderByRelevanceFieldEnum = {
  search_text: 'search_text',
  metadata_tokens: 'metadata_tokens'
};

exports.Prisma.workspace_sharingOrderByRelevanceFieldEnum = {
  shared_with_id: 'shared_with_id',
  sharing_type: 'sharing_type',
  permission_level: 'permission_level',
  created_by: 'created_by',
  access_key: 'access_key'
};

exports.Prisma.workspace_activityOrderByRelevanceFieldEnum = {
  user_id: 'user_id',
  action_type: 'action_type',
  ip_address: 'ip_address',
  user_agent: 'user_agent',
  affected_items: 'affected_items'
};

exports.Prisma.workspace_templatesOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  tags: 'tags',
  created_by: 'created_by',
  category: 'category'
};

exports.Prisma.workspace_backupsOrderByRelevanceFieldEnum = {
  backup_frequency: 'backup_frequency',
  backup_location: 'backup_location',
  backup_status: 'backup_status'
};

exports.Prisma.workspace_automationsOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  trigger_type: 'trigger_type'
};

exports.Prisma.workspace_integrationsOrderByRelevanceFieldEnum = {
  service_name: 'service_name',
  webhook_url: 'webhook_url',
  sync_frequency: 'sync_frequency'
};

exports.Prisma.workspace_complianceOrderByRelevanceFieldEnum = {
  compliance_level: 'compliance_level',
  audit_frequency: 'audit_frequency',
  required_tags: 'required_tags',
  restricted_actions: 'restricted_actions'
};


exports.Prisma.ModelName = {
  accounts: 'accounts',
  file_metadata: 'file_metadata',
  file_search: 'file_search',
  file_embeddings: 'file_embeddings',
  file_versions: 'file_versions',
  folder_metadata: 'folder_metadata',
  folder_search: 'folder_search',
  workspaces: 'workspaces',
  workspace_search: 'workspace_search',
  workspace_sharing: 'workspace_sharing',
  workspace_activity: 'workspace_activity',
  workspace_templates: 'workspace_templates',
  workspace_backups: 'workspace_backups',
  workspace_automations: 'workspace_automations',
  workspace_integrations: 'workspace_integrations',
  workspace_compliance: 'workspace_compliance'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/dyomba/go/src/github.com/SolomonAIEngineering/solomonai-developer-platform/services/workspace-service/src/database/generated/postgresql",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [
      "fullTextIndex",
      "fullTextSearch",
      "multiSchema",
      "postgresqlExtensions"
    ],
    "sourceFilePath": "/Users/dyomba/go/src/github.com/SolomonAIEngineering/solomonai-developer-platform/services/workspace-service/prisma/schema.postgresql.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../../../../prisma",
  "clientVersion": "5.21.1",
  "engineVersion": "bf0e5e8a04cada8225617067eaa03d041e2bba36",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "//// ------------------------------------------------------\n//// File Storage System Schema\n////\n//// A comprehensive file storage system with advanced search\n//// capabilities, embedding support, and versioning.\n//// ------------------------------------------------------\n\n/// Configures the Prisma Client generator with advanced features\n/// @previewFeatures - Enables experimental features like fullTextSearch and multiSchema\n/// @output - Specifies the location for generated client code\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../src/database/generated/postgresql\"\n  previewFeatures = [\"fullTextIndex\", \"multiSchema\", \"postgresqlExtensions\", \"fullTextSearch\"]\n}\n\n/// Database configuration with required PostgreSQL extensions\n/// @extensions\n/// - pgvector: Enables vector operations for embeddings and similarity search\n/// - pg_trgm: Provides fuzzy text search capabilities\n/// - btree_gin: Enables GIN indexing for efficient text search\ndatasource db {\n  provider   = \"postgresql\"\n  url        = env(\"DATABASE_URL\")\n  extensions = [pgvector, pg_trgm, btree_gin]\n}\n\n/// Represents user accounts in the system\n/// @field auth0_user_id - External authentication identifier\n/// @field storage_quota - Maximum allowed storage in bytes\n/// @field used_storage - Current storage usage in bytes\n/// @index auth0_user_id - Optimizes authentication lookups\nmodel accounts {\n  auth0_user_id   String?      @db.VarChar(100) /// External auth provider ID\n  base_directory  String?      @db.VarChar(255) /// Root directory for user files\n  bucket_location String?      @db.VarChar(255) /// S3 bucket location\n  bucket_name     String?      @db.VarChar(100) /// S3 bucket name\n  id              BigInt       @id @default(autoincrement())\n  region          String?      @db.VarChar(50) /// AWS region\n  created_at      DateTime     @default(now()) @db.Timestamptz(6)\n  updated_at      DateTime     @updatedAt @db.Timestamptz(6)\n  is_active       Boolean      @default(true) /// Account status\n  settings        Json?        @db.JsonB /// User preferences and settings\n  last_access     DateTime?    @db.Timestamptz(6) /// Last account access timestamp\n  storage_quota   BigInt? /// Maximum storage limit in bytes\n  used_storage    BigInt? /// Current storage usage in bytes\n  workspaces      workspaces[] /// Associated workspaces\n\n  @@index([auth0_user_id], map: \"idx_user_auth0_user_id\")\n  @@index([created_at])\n  @@index([is_active])\n}\n\n/// Stores file metadata and S3 information\n/// @field file_type - MIME type or file extension\n/// @field location - File path or URL\n/// @field checksum - File hash for integrity verification\n/// @field preview_available - Indicates if a preview is generated\nmodel file_metadata {\n  created_at                DateTime  @default(now()) @db.Timestamptz(6)\n  file_type                 String?   @db.VarChar(100) /// File MIME type\n  folder_metadata_id        BigInt? /// Parent folder ID\n  id                        BigInt    @id @default(autoincrement())\n  is_deleted                Boolean   @default(false) /// Soft delete flag\n  location                  String?   @db.VarChar(1000) /// File location/path\n  name                      String?   @db.VarChar(255) /// File name\n  s3_acl                    String?   @db.VarChar(50) /// S3 access control\n  s3_bucket_name            String?   @db.VarChar(100) /// S3 bucket name\n  s3_content_disposition    String?   @db.VarChar(100) /// Content disposition\n  s3_content_encoding       String?   @db.VarChar(50) /// Content encoding\n  s3_content_length         BigInt? /// File size in bytes\n  s3_content_type           String?   @db.VarChar(100) /// Content type\n  s3_etag                   String?   @db.VarChar(100) /// S3 ETag\n  s3_key                    String?   @db.VarChar(1000) /// S3 object key\n  s3_last_modified          DateTime? @db.Timestamptz(6) /// Last S3 modification\n  s3_region                 String?   @db.VarChar(50) /// S3 region\n  s3_server_side_encryption String?   @db.VarChar(50) /// Encryption type\n  s3_storage_class          String?   @db.VarChar(50) /// S3 storage class\n  s3_version_id             String?   @db.VarChar(100) /// S3 version ID\n  size                      BigInt? /// File size in bytes\n  tags                      String[] /// File tags\n  updated_at                DateTime  @updatedAt @db.Timestamptz(6)\n  upload_id                 String?   @db.VarChar(100) /// Upload session ID\n  version                   Int? /// File version number\n  version_id                String?   @db.VarChar(100) /// Version identifier\n  markdown_content          String?   @db.Text /// Markdown content\n  mime_type                 String?   @db.VarChar(100) /// Detailed MIME type\n  checksum                  String?   @db.VarChar(64) /// File hash\n  preview_available         Boolean   @default(false) /// Preview status\n  preview_status            String?   @db.VarChar(50) /// Preview generation status\n  thumbnail_url             String?   @db.VarChar(1000) /// Preview thumbnail URL\n  last_accessed             DateTime? @db.Timestamptz(6) /// Last access timestamp\n  access_count              Int       @default(0) /// Access frequency\n\n  // Relationships\n  folder_metadata folder_metadata?  @relation(fields: [folder_metadata_id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_folder_metadata_files\")\n  file_search     file_search?\n  file_embeddings file_embeddings[]\n  file_versions   file_versions[]\n\n  // Indexes for performance optimization\n  @@index([name, file_type])\n  @@index([created_at])\n  @@index([s3_bucket_name, s3_key])\n  @@index([folder_metadata_id])\n  @@index([tags])\n  @@index([is_deleted])\n}\n\n/// Enables full-text and semantic search for files\n/// @field content_vector - Vector representation for semantic search\n/// @field content_tokens - Tokenized content for text search\n/// @field search_text - Searchable text content\nmodel file_search {\n  id              BigInt                      @id @default(autoincrement())\n  file_id         BigInt                      @unique\n  content_vector  Unsupported(\"vector(1536)\") /// Embedding vector\n  content_tokens  String                      @db.Text /// Tokenized content\n  metadata_tokens String                      @db.Text /// Tokenized metadata\n  search_text     String                      @db.Text /// Searchable content\n  language        String?                     @db.VarChar(10) /// Content language\n  last_indexed    DateTime                    @default(now()) @db.Timestamptz(6)\n  file_metadata   file_metadata               @relation(fields: [file_id], references: [id], onDelete: Cascade)\n\n  @@index([content_tokens])\n  @@index([metadata_tokens])\n  @@index([search_text])\n}\n\n/// Stores text embeddings for semantic search\n/// @field chunk_index - Position in the document\n/// @field chunk_text - Text segment\n/// @field embedding_vector - Vector representation\nmodel file_embeddings {\n  id               BigInt                      @id @default(autoincrement())\n  file_id          BigInt\n  chunk_index      Int /// Chunk sequence number\n  chunk_text       String                      @db.Text /// Text segment\n  embedding_vector Unsupported(\"vector(1536)\") /// Embedding vector\n  created_at       DateTime                    @default(now()) @db.Timestamptz(6)\n  file_metadata    file_metadata               @relation(fields: [file_id], references: [id], onDelete: Cascade)\n\n  @@unique([file_id, chunk_index])\n  @@index([file_id])\n}\n\n/// Tracks file version history\n/// @field version_number - Sequential version number\n/// @field change_summary - Description of changes\n/// @field modified_by - User who made changes\nmodel file_versions {\n  id             BigInt        @id @default(autoincrement())\n  file_id        BigInt\n  version_number Int /// Version sequence\n  s3_version_id  String        @db.VarChar(100) /// S3 version identifier\n  created_at     DateTime      @default(now()) @db.Timestamptz(6)\n  size           BigInt? /// Version size in bytes\n  checksum       String?       @db.VarChar(64) /// Version checksum\n  modified_by    String?       @db.VarChar(100) /// User identifier\n  change_summary String?       @db.Text /// Change description\n  file_metadata  file_metadata @relation(fields: [file_id], references: [id], onDelete: Cascade)\n\n  @@unique([file_id, version_number])\n  @@index([file_id])\n}\n\n/// Manages folder structure and hierarchy\n/// @field name - Folder name\n/// @field s3_folder_path - S3 path\n/// @field metadata - Additional folder metadata\nmodel folder_metadata {\n  created_at         DateTime  @default(now()) @db.Timestamptz(6)\n  folder_metadata_id BigInt? /// Parent folder ID\n  id                 BigInt    @id @default(autoincrement())\n  is_deleted         Boolean   @default(false) /// Soft delete flag\n  name               String?   @db.VarChar(255) /// Folder name\n  s3_acl             String?   @db.VarChar(50) /// Access control\n  s3_bucket_name     String?   @db.VarChar(100) /// S3 bucket name\n  s3_folder_path     String?   @db.VarChar(1000) /// S3 folder path\n  s3_last_modified   DateTime? @db.Timestamptz(6) /// Last modification\n  s3_region          String?   @db.VarChar(50) /// S3 region\n  updated_at         DateTime  @updatedAt @db.Timestamptz(6)\n  version_id         String?   @db.VarChar(100) /// Version ID\n  workspace_id       BigInt? /// Parent workspace\n  description        String?   @db.Text /// Folder description\n  metadata           Json?     @db.JsonB /// Additional metadata\n\n  // Relationships\n  file_metadata         file_metadata[]\n  folder_metadata       folder_metadata?  @relation(\"folder_metadataTofolder_metadata\", fields: [folder_metadata_id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_folder_metadata_child_folder\")\n  other_folder_metadata folder_metadata[] @relation(\"folder_metadataTofolder_metadata\")\n  workspaces            workspaces?       @relation(fields: [workspace_id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_workspaces_folders\")\n  folder_search         folder_search?\n\n  // Indexes\n  @@index([workspace_id])\n  @@index([folder_metadata_id])\n  @@index([name])\n  @@index([s3_bucket_name, s3_folder_path])\n  @@index([is_deleted])\n}\n\n/// Enables folder content search\n/// @field content_vector - Vector for semantic search\n/// @field search_text - Searchable content\n/// @field metadata_tokens - Searchable metadata\nmodel folder_search {\n  id              BigInt                      @id @default(autoincrement())\n  folder_id       BigInt                      @unique\n  content_vector  Unsupported(\"vector(1536)\") /// Embedding vector\n  search_text     String                      @db.Text /// Searchable content\n  metadata_tokens String                      @db.Text /// Tokenized metadata\n  last_indexed    DateTime                    @default(now()) @db.Timestamptz(6)\n  folder_metadata folder_metadata             @relation(fields: [folder_id], references: [id], onDelete: Cascade)\n\n  // Changed index types to standard B-tree\n  @@index([search_text])\n  @@index([metadata_tokens])\n}\n\n/// Manages workspace environments\n/// @field name - Workspace name\n/// @field storage_quota - Storage limit\n/// @field used_storage - Current usage\n/// @field metadata - Workspace settings\nmodel workspaces {\n  account_id        BigInt?\n  created_at        DateTime  @default(now()) @db.Timestamptz(6)\n  id                BigInt    @id @default(autoincrement())\n  is_deleted        Boolean   @default(false) /// Soft delete flag\n  name              String?   @db.VarChar(255) /// Workspace name\n  s3_acl            String?   @db.VarChar(50) /// Access control\n  s3_bucket_name    String?   @db.VarChar(100) /// S3 bucket name\n  s3_folder_path    String?   @db.VarChar(1000) /// S3 folder path\n  s3_last_modified  DateTime? @db.Timestamptz(6) /// Last modification\n  s3_region         String?   @db.VarChar(50) /// S3 region\n  tags              String[] /// Workspace tags\n  unique_identifier String?   @db.VarChar(100) /// Unique ID\n  updated_at        DateTime  @updatedAt @db.Timestamptz(6)\n  version           Int? /// Version number\n  version_id        String?   @db.VarChar(100) /// Version ID\n  description       String?   @db.Text /// Description\n  metadata          Json?     @db.JsonB /// Additional settings\n  storage_quota     BigInt? /// Storage limit\n  used_storage      BigInt? /// Current usage\n\n  // Relationships\n  folder_metadata  folder_metadata[]\n  accounts         accounts?         @relation(fields: [account_id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_accounts_workspace\")\n  workspace_search workspace_search?\n\n  // Additional fields\n  workspace_type      String?   @db.VarChar(50) // 'personal', 'team', 'project'\n  parent_workspace_id BigInt? // For nested workspaces\n  workspace_path      String?   @db.VarChar(500) // Full path in hierarchy\n  icon_url            String?   @db.VarChar(500)\n  color_theme         String?   @db.VarChar(50)\n  is_template         Boolean   @default(false)\n  template_id         BigInt?\n  favorite_count      Int       @default(0)\n  last_activity       DateTime? @db.Timestamptz(6)\n  retention_days      Int? // Days to keep deleted items\n  default_view        String?   @db.VarChar(50) // 'list', 'grid', 'timeline'\n\n  // Workspace limits and quotas\n  max_file_size        BigInt? // Maximum file size in bytes\n  max_storage_per_user BigInt? // Per-user storage limit\n  max_versions         Int? // Maximum versions per file\n\n  // Collaboration settings\n  allow_public_sharing Boolean @default(false)\n  require_approval     Boolean @default(false)\n  member_limit         Int?\n  guest_access         Boolean @default(false)\n\n  // New relations\n  workspace_sharing      workspace_sharing[]\n  workspace_activity     workspace_activity[]\n  workspace_backups      workspace_backups[]\n  workspace_automations  workspace_automations[]\n  workspace_integrations workspace_integrations[]\n  workspace_compliance   workspace_compliance[]\n  parent_workspace       workspaces?              @relation(\"WorkspaceHierarchy\", fields: [parent_workspace_id], references: [id])\n  child_workspaces       workspaces[]             @relation(\"WorkspaceHierarchy\")\n\n  // Indexes\n  @@index([account_id])\n  @@index([unique_identifier])\n  @@index([name])\n  @@index([tags])\n  @@index([is_deleted])\n  // Additional indexes\n  @@index([parent_workspace_id])\n  @@index([workspace_type])\n  @@index([workspace_path])\n}\n\n/// Enables workspace content search\n/// @field content_vector - Vector for semantic search\n/// @field search_text - Searchable content\n/// @field metadata_tokens - Searchable metadata\nmodel workspace_search {\n  id              BigInt                      @id @default(autoincrement())\n  workspace_id    BigInt                      @unique\n  content_vector  Unsupported(\"vector(1536)\") /// Embedding vector\n  search_text     String                      @db.Text /// Searchable content\n  metadata_tokens String                      @db.Text /// Tokenized metadata\n  last_indexed    DateTime                    @default(now()) @db.Timestamptz(6)\n  workspaces      workspaces                  @relation(fields: [workspace_id], references: [id], onDelete: Cascade)\n\n  // Changed index types to standard B-tree\n  @@index([search_text])\n  @@index([metadata_tokens])\n}\n\n/// Workspace collaboration and sharing settings\nmodel workspace_sharing {\n  id               BigInt     @id @default(autoincrement())\n  workspace_id     BigInt\n  shared_with_id   String     @db.VarChar(100) // Can be user ID or team ID\n  sharing_type     String     @db.VarChar(50) // 'user' or 'team'\n  permission_level String     @db.VarChar(50) // 'read', 'write', 'admin'\n  created_at       DateTime   @default(now()) @db.Timestamptz(6)\n  expires_at       DateTime?  @db.Timestamptz(6)\n  created_by       String     @db.VarChar(100)\n  access_key       String?    @db.VarChar(100) // For public sharing\n  is_active        Boolean    @default(true)\n  last_accessed    DateTime?  @db.Timestamptz(6)\n  workspaces       workspaces @relation(fields: [workspace_id], references: [id], onDelete: Cascade)\n\n  @@index([workspace_id])\n  @@index([shared_with_id])\n  @@index([access_key])\n}\n\n/// Workspace activity tracking\nmodel workspace_activity {\n  id             BigInt     @id @default(autoincrement())\n  workspace_id   BigInt\n  user_id        String     @db.VarChar(100)\n  action_type    String     @db.VarChar(50) // 'create', 'update', 'delete', 'share', etc.\n  action_details Json       @db.JsonB\n  timestamp      DateTime   @default(now()) @db.Timestamptz(6)\n  ip_address     String?    @db.VarChar(45)\n  user_agent     String?    @db.Text\n  affected_items String[] // IDs of affected files/folders\n  workspaces     workspaces @relation(fields: [workspace_id], references: [id], onDelete: Cascade)\n\n  @@index([workspace_id])\n  @@index([user_id])\n  @@index([timestamp])\n}\n\n/// Workspace templates for quick setup\nmodel workspace_templates {\n  id               BigInt   @id @default(autoincrement())\n  name             String   @db.VarChar(255)\n  description      String?  @db.Text\n  folder_structure Json     @db.JsonB\n  default_settings Json     @db.JsonB\n  tags             String[]\n  created_by       String   @db.VarChar(100)\n  created_at       DateTime @default(now()) @db.Timestamptz(6)\n  updated_at       DateTime @updatedAt @db.Timestamptz(6)\n  is_public        Boolean  @default(false)\n  category         String   @db.VarChar(100)\n  usage_count      Int      @default(0)\n  rating           Float?   @db.Real\n\n  @@index([category])\n  @@index([tags])\n}\n\n/// Workspace backup configuration\nmodel workspace_backups {\n  id                 BigInt     @id @default(autoincrement())\n  workspace_id       BigInt\n  backup_frequency   String     @db.VarChar(50) // 'daily', 'weekly', 'monthly'\n  retention_period   Int // Days to keep backups\n  last_backup_at     DateTime?  @db.Timestamptz(6)\n  next_backup_at     DateTime   @db.Timestamptz(6)\n  backup_location    String     @db.VarChar(255)\n  is_enabled         Boolean    @default(true)\n  include_versions   Boolean    @default(true)\n  encryption_enabled Boolean    @default(true)\n  backup_status      String     @db.VarChar(50)\n  workspaces         workspaces @relation(fields: [workspace_id], references: [id], onDelete: Cascade)\n\n  @@index([workspace_id])\n  @@index([next_backup_at])\n}\n\n/// Workspace automation rules\nmodel workspace_automations {\n  id             BigInt     @id @default(autoincrement())\n  workspace_id   BigInt\n  name           String     @db.VarChar(255)\n  description    String?    @db.Text\n  trigger_type   String     @db.VarChar(50) // 'file_upload', 'schedule', 'pattern_match', etc.\n  trigger_config Json       @db.JsonB\n  actions        Json[] // Array of actions to perform\n  is_enabled     Boolean    @default(true)\n  created_at     DateTime   @default(now()) @db.Timestamptz(6)\n  updated_at     DateTime   @updatedAt @db.Timestamptz(6)\n  last_run       DateTime?  @db.Timestamptz(6)\n  run_count      Int        @default(0)\n  workspaces     workspaces @relation(fields: [workspace_id], references: [id], onDelete: Cascade)\n\n  @@index([workspace_id])\n  @@index([trigger_type])\n}\n\n/// Workspace integrations\nmodel workspace_integrations {\n  id             BigInt     @id @default(autoincrement())\n  workspace_id   BigInt\n  service_name   String     @db.VarChar(100) // 'slack', 'teams', 'jira', etc.\n  config         Json       @db.JsonB\n  auth_tokens    Json?      @db.JsonB\n  webhook_url    String?    @db.VarChar(500)\n  is_active      Boolean    @default(true)\n  last_sync      DateTime?  @db.Timestamptz(6)\n  sync_frequency String?    @db.VarChar(50)\n  created_at     DateTime   @default(now()) @db.Timestamptz(6)\n  updated_at     DateTime   @updatedAt @db.Timestamptz(6)\n  workspaces     workspaces @relation(fields: [workspace_id], references: [id], onDelete: Cascade)\n\n  @@index([workspace_id])\n  @@index([service_name])\n}\n\n/// Workspace compliance and audit settings\nmodel workspace_compliance {\n  id                  BigInt     @id @default(autoincrement())\n  workspace_id        BigInt\n  retention_policy    Json       @db.JsonB\n  encryption_settings Json       @db.JsonB\n  compliance_level    String     @db.VarChar(50) // 'high', 'medium', 'low'\n  audit_frequency     String     @db.VarChar(50) // 'daily', 'weekly', 'monthly'\n  last_audit          DateTime?  @db.Timestamptz(6)\n  required_tags       String[]\n  restricted_actions  String[]\n  gdpr_compliant      Boolean    @default(false)\n  hipaa_compliant     Boolean    @default(false)\n  created_at          DateTime   @default(now()) @db.Timestamptz(6)\n  updated_at          DateTime   @updatedAt @db.Timestamptz(6)\n  workspaces          workspaces @relation(fields: [workspace_id], references: [id], onDelete: Cascade)\n\n  @@index([workspace_id])\n  @@index([compliance_level])\n}\n\n// Add this comment block for implementation guidance\n/// Search Implementation Notes:\n/// Since Prisma doesn't directly support GIN indexes with operator classes,\n/// you'll need to create them manually in PostgreSQL after deployment.\n///\n/// Example PostgreSQL commands for setting up full-text search indexes:\n/// ```sql\n/// -- For file_search\n/// CREATE INDEX idx_file_search_content\n/// ON file_search USING gin(to_tsvector('english', content_tokens));\n///\n/// CREATE INDEX idx_file_search_metadata\n/// ON file_search USING gin(to_tsvector('english', metadata_tokens));\n///\n/// CREATE INDEX idx_file_search_text\n/// ON file_search USING gin(to_tsvector('english', search_text));\n///\n/// -- For folder_search\n/// CREATE INDEX idx_folder_search_text\n/// ON folder_search USING gin(to_tsvector('english', search_text));\n///\n/// CREATE INDEX idx_folder_search_metadata\n/// ON folder_search USING gin(to_tsvector('english', metadata_tokens));\n///\n/// -- For workspace_search\n/// CREATE INDEX idx_workspace_search_text\n/// ON workspace_search USING gin(to_tsvector('english', search_text));\n///\n/// CREATE INDEX idx_workspace_search_metadata\n/// ON workspace_search USING gin(to_tsvector('english', metadata_tokens));\n/// ```\n///\n/// To use these indexes in queries:\n/// ```sql\n/// SELECT * FROM file_search\n/// WHERE to_tsvector('english', search_text) @@ to_tsquery('english', 'search_term');\n/// ```\n",
  "inlineSchemaHash": "a7e718e2a03deb73911d9dbce2798eaea83f65a7b375997e515bdf7db4c1b14a",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/database/generated/postgresql",
    "database/generated/postgresql",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"accounts\":{\"dbName\":null,\"fields\":[{\"name\":\"auth0_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"External auth provider ID\"},{\"name\":\"base_directory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Root directory for user files\"},{\"name\":\"bucket_location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"S3 bucket location\"},{\"name\":\"bucket_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"S3 bucket name\"},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"AWS region\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Account status\"},{\"name\":\"settings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"User preferences and settings\"},{\"name\":\"last_access\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Last account access timestamp\"},{\"name\":\"storage_quota\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Maximum storage limit in bytes\"},{\"name\":\"used_storage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Current storage usage in bytes\"},{\"name\":\"workspaces\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspaces\",\"relationName\":\"accountsToworkspaces\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Associated workspaces\"}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"Represents user accounts in the system\\\\n@field auth0_user_id - External authentication identifier\\\\n@field storage_quota - Maximum allowed storage in bytes\\\\n@field used_storage - Current storage usage in bytes\\\\n@index auth0_user_id - Optimizes authentication lookups\"},\"file_metadata\":{\"dbName\":null,\"fields\":[{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"File MIME type\"},{\"name\":\"folder_metadata_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Parent folder ID\"},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Soft delete flag\"},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"File location/path\"},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"File name\"},{\"name\":\"s3_acl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"S3 access control\"},{\"name\":\"s3_bucket_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"S3 bucket name\"},{\"name\":\"s3_content_disposition\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Content disposition\"},{\"name\":\"s3_content_encoding\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Content encoding\"},{\"name\":\"s3_content_length\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"File size in bytes\"},{\"name\":\"s3_content_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Content type\"},{\"name\":\"s3_etag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"S3 ETag\"},{\"name\":\"s3_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"S3 object key\"},{\"name\":\"s3_last_modified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Last S3 modification\"},{\"name\":\"s3_region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"S3 region\"},{\"name\":\"s3_server_side_encryption\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Encryption type\"},{\"name\":\"s3_storage_class\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"S3 storage class\"},{\"name\":\"s3_version_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"S3 version ID\"},{\"name\":\"size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"File size in bytes\"},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"File tags\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"upload_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Upload session ID\"},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"File version number\"},{\"name\":\"version_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Version identifier\"},{\"name\":\"markdown_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Markdown content\"},{\"name\":\"mime_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Detailed MIME type\"},{\"name\":\"checksum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"File hash\"},{\"name\":\"preview_available\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Preview status\"},{\"name\":\"preview_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Preview generation status\"},{\"name\":\"thumbnail_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Preview thumbnail URL\"},{\"name\":\"last_accessed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Last access timestamp\"},{\"name\":\"access_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Access frequency\"},{\"name\":\"folder_metadata\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"folder_metadata\",\"relationName\":\"file_metadataTofolder_metadata\",\"relationFromFields\":[\"folder_metadata_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_search\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"file_search\",\"relationName\":\"file_metadataTofile_search\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_embeddings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"file_embeddings\",\"relationName\":\"file_embeddingsTofile_metadata\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_versions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"file_versions\",\"relationName\":\"file_metadataTofile_versions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"Stores file metadata and S3 information\\\\n@field file_type - MIME type or file extension\\\\n@field location - File path or URL\\\\n@field checksum - File hash for integrity verification\\\\n@field preview_available - Indicates if a preview is generated\"},\"file_search\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content_tokens\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Tokenized content\"},{\"name\":\"metadata_tokens\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Tokenized metadata\"},{\"name\":\"search_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Searchable content\"},{\"name\":\"language\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Content language\"},{\"name\":\"last_indexed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_metadata\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"file_metadata\",\"relationName\":\"file_metadataTofile_search\",\"relationFromFields\":[\"file_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"Enables full-text and semantic search for files\\\\n@field content_vector - Vector representation for semantic search\\\\n@field content_tokens - Tokenized content for text search\\\\n@field search_text - Searchable text content\"},\"file_embeddings\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chunk_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Chunk sequence number\"},{\"name\":\"chunk_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Text segment\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_metadata\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"file_metadata\",\"relationName\":\"file_embeddingsTofile_metadata\",\"relationFromFields\":[\"file_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"file_id\",\"chunk_index\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"file_id\",\"chunk_index\"]}],\"isGenerated\":false,\"documentation\":\"Stores text embeddings for semantic search\\\\n@field chunk_index - Position in the document\\\\n@field chunk_text - Text segment\\\\n@field embedding_vector - Vector representation\"},\"file_versions\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"version_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Version sequence\"},{\"name\":\"s3_version_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"S3 version identifier\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Version size in bytes\"},{\"name\":\"checksum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Version checksum\"},{\"name\":\"modified_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"User identifier\"},{\"name\":\"change_summary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Change description\"},{\"name\":\"file_metadata\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"file_metadata\",\"relationName\":\"file_metadataTofile_versions\",\"relationFromFields\":[\"file_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"file_id\",\"version_number\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"file_id\",\"version_number\"]}],\"isGenerated\":false,\"documentation\":\"Tracks file version history\\\\n@field version_number - Sequential version number\\\\n@field change_summary - Description of changes\\\\n@field modified_by - User who made changes\"},\"folder_metadata\":{\"dbName\":null,\"fields\":[{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"folder_metadata_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Parent folder ID\"},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Soft delete flag\"},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Folder name\"},{\"name\":\"s3_acl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Access control\"},{\"name\":\"s3_bucket_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"S3 bucket name\"},{\"name\":\"s3_folder_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"S3 folder path\"},{\"name\":\"s3_last_modified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Last modification\"},{\"name\":\"s3_region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"S3 region\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"version_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Version ID\"},{\"name\":\"workspace_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Parent workspace\"},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Folder description\"},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Additional metadata\"},{\"name\":\"file_metadata\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"file_metadata\",\"relationName\":\"file_metadataTofolder_metadata\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"folder_metadata\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"folder_metadata\",\"relationName\":\"folder_metadataTofolder_metadata\",\"relationFromFields\":[\"folder_metadata_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"other_folder_metadata\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"folder_metadata\",\"relationName\":\"folder_metadataTofolder_metadata\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspaces\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspaces\",\"relationName\":\"folder_metadataToworkspaces\",\"relationFromFields\":[\"workspace_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"folder_search\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"folder_search\",\"relationName\":\"folder_metadataTofolder_search\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"Manages folder structure and hierarchy\\\\n@field name - Folder name\\\\n@field s3_folder_path - S3 path\\\\n@field metadata - Additional folder metadata\"},\"folder_search\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"folder_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"search_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Searchable content\"},{\"name\":\"metadata_tokens\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Tokenized metadata\"},{\"name\":\"last_indexed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"folder_metadata\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"folder_metadata\",\"relationName\":\"folder_metadataTofolder_search\",\"relationFromFields\":[\"folder_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"Enables folder content search\\\\n@field content_vector - Vector for semantic search\\\\n@field search_text - Searchable content\\\\n@field metadata_tokens - Searchable metadata\"},\"workspaces\":{\"dbName\":null,\"fields\":[{\"name\":\"account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Soft delete flag\"},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Workspace name\"},{\"name\":\"s3_acl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Access control\"},{\"name\":\"s3_bucket_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"S3 bucket name\"},{\"name\":\"s3_folder_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"S3 folder path\"},{\"name\":\"s3_last_modified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Last modification\"},{\"name\":\"s3_region\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"S3 region\"},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Workspace tags\"},{\"name\":\"unique_identifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Unique ID\"},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Version number\"},{\"name\":\"version_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Version ID\"},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Description\"},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Additional settings\"},{\"name\":\"storage_quota\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Storage limit\"},{\"name\":\"used_storage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Current usage\"},{\"name\":\"folder_metadata\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"folder_metadata\",\"relationName\":\"folder_metadataToworkspaces\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accounts\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"accounts\",\"relationName\":\"accountsToworkspaces\",\"relationFromFields\":[\"account_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace_search\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspace_search\",\"relationName\":\"workspace_searchToworkspaces\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_workspace_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color_theme\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_template\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"template_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favorite_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_activity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"retention_days\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default_view\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_file_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_storage_per_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_versions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allow_public_sharing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"require_approval\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member_limit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"guest_access\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace_sharing\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspace_sharing\",\"relationName\":\"workspace_sharingToworkspaces\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace_activity\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspace_activity\",\"relationName\":\"workspace_activityToworkspaces\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace_backups\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspace_backups\",\"relationName\":\"workspace_backupsToworkspaces\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace_automations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspace_automations\",\"relationName\":\"workspace_automationsToworkspaces\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace_integrations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspace_integrations\",\"relationName\":\"workspace_integrationsToworkspaces\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace_compliance\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspace_compliance\",\"relationName\":\"workspace_complianceToworkspaces\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_workspace\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspaces\",\"relationName\":\"WorkspaceHierarchy\",\"relationFromFields\":[\"parent_workspace_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"child_workspaces\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspaces\",\"relationName\":\"WorkspaceHierarchy\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"Manages workspace environments\\\\n@field name - Workspace name\\\\n@field storage_quota - Storage limit\\\\n@field used_storage - Current usage\\\\n@field metadata - Workspace settings\"},\"workspace_search\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"search_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Searchable content\"},{\"name\":\"metadata_tokens\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"Tokenized metadata\"},{\"name\":\"last_indexed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspaces\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspaces\",\"relationName\":\"workspace_searchToworkspaces\",\"relationFromFields\":[\"workspace_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"Enables workspace content search\\\\n@field content_vector - Vector for semantic search\\\\n@field search_text - Searchable content\\\\n@field metadata_tokens - Searchable metadata\"},\"workspace_sharing\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shared_with_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sharing_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permission_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"access_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_accessed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspaces\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspaces\",\"relationName\":\"workspace_sharingToworkspaces\",\"relationFromFields\":[\"workspace_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"Workspace collaboration and sharing settings\"},\"workspace_activity\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action_details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_agent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"affected_items\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspaces\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspaces\",\"relationName\":\"workspace_activityToworkspaces\",\"relationFromFields\":[\"workspace_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"Workspace activity tracking\"},\"workspace_templates\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"folder_structure\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default_settings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"is_public\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usage_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"Workspace templates for quick setup\"},\"workspace_backups\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"backup_frequency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"retention_period\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_backup_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"next_backup_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"backup_location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"include_versions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"encryption_enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"backup_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspaces\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspaces\",\"relationName\":\"workspace_backupsToworkspaces\",\"relationFromFields\":[\"workspace_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"Workspace backup configuration\"},\"workspace_automations\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trigger_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trigger_config\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actions\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"last_run\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"run_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspaces\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspaces\",\"relationName\":\"workspace_automationsToworkspaces\",\"relationFromFields\":[\"workspace_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"Workspace automation rules\"},\"workspace_integrations\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"service_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"config\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auth_tokens\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"webhook_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_sync\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sync_frequency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"workspaces\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspaces\",\"relationName\":\"workspace_integrationsToworkspaces\",\"relationFromFields\":[\"workspace_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"Workspace integrations\"},\"workspace_compliance\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"workspace_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"retention_policy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"encryption_settings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"compliance_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"audit_frequency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_audit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"required_tags\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"restricted_actions\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gdpr_compliant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hipaa_compliant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"workspaces\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"workspaces\",\"relationName\":\"workspace_complianceToworkspaces\",\"relationFromFields\":[\"workspace_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"Workspace compliance and audit settings\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "src/database/generated/postgresql/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/database/generated/postgresql/schema.prisma")
