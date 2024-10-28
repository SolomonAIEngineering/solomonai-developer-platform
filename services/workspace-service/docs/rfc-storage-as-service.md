# Comprehensive Documentation for Multi-Tenant File Storage System Schema

## Overview

This documentation provides an in-depth explanation of the multi-tenant file storage system schema designed for SaaS providers. The system supports a hierarchical multi-tenant architecture with built-in search capabilities, usage tracking, quota management, and fine-grained access control. It is optimized for PostgreSQL with required extensions and integrates with Prisma Client for database operations.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Key Concepts](#key-concepts)
3. [Models and Schemas](#models-and-schemas)
   - [Organizations](#organizations)
   - [Tenants](#tenants)
   - [Organization Members](#organization-members)
   - [API Keys](#api-keys)
     - [Organization API Keys](#organization-api-keys)
     - [Tenant API Keys](#tenant-api-keys)
   - [Usage Logs](#usage-logs)
     - [Organization Usage Logs](#organization-usage-logs)
     - [Tenant Usage Logs](#tenant-usage-logs)
   - [Accounts](#accounts)
   - [File Management](#file-management)
     - [File Metadata](#file-metadata)
     - [File Search](#file-search)
     - [File Embeddings](#file-embeddings)
     - [File Versions](#file-versions)
   - [Folder Management](#folder-management)
     - [Folder Metadata](#folder-metadata)
     - [Folder Search](#folder-search)
   - [Workspaces](#workspaces)
     - [Workspace Search](#workspace-search)
     - [Workspace Sharing](#workspace-sharing)
     - [Workspace Activity](#workspace-activity)
     - [Workspace Templates](#workspace-templates)
     - [Workspace Backups](#workspace-backups)
     - [Workspace Automations](#workspace-automations)
     - [Workspace Integrations](#workspace-integrations)
     - [Workspace Compliance](#workspace-compliance)
4. [Usage Examples](#usage-examples)
5. [Implementation Notes](#implementation-notes)
   - [Quota Management](#quota-management)
   - [API Access and Security](#api-access-and-security)
   - [Isolation and Data Security](#isolation-and-data-security)
   - [Subscription Management](#subscription-management)
6. [Search Implementation](#search-implementation)
   - [Full-text Search](#full-text-search)
   - [Vector/Semantic Search](#vectorsemantic-search)
7. [Usage Tracking](#usage-tracking)
8. [Performance Optimization](#performance-optimization)
9. [Required PostgreSQL Extensions](#required-postgresql-extensions)
10. [Search Indexing Setup](#search-indexing-setup)
11. [Best Practices](#best-practices)
12. [Security Considerations](#security-considerations)
13. [Prisma Client Configuration](#prisma-client-configuration)
14. [Datasource Configuration](#datasource-configuration)

---

## Architecture Overview

### Three-Tier Hierarchical Structure

The system is built upon a three-tier architecture to support multi-level tenancy:

1. **Organizations**: Your direct customers (e.g., startups, enterprises).
2. **Tenants**: Customers of your organizations (e.g., divisions, departments).
3. **End Users**: Individual users within tenants.

### Key Components

- **Isolation**: Tenants are fully isolated from each other. Files, workspaces, and settings are tenant-specific.
- **Quota Management**: Hierarchical quotas are enforced at the organization and tenant levels.
- **Access Control**: Fine-grained permissions and role-based access control at all levels.
- **Usage Tracking**: Comprehensive tracking for billing and monitoring at both organization and tenant levels.
- **Search Capabilities**: Full-text and vector-based search for files and folders.

---

## Key Concepts

- **Organizations**: Entities that represent your direct customers. They have their own subscriptions, quotas, settings, and can manage multiple tenants.
- **Tenants**: Subdivisions within organizations, representing your customers' customers. They have isolated storage, settings, and can manage their own workspaces and files.
- **Workspaces**: Configurable environments within tenants for organizing files and collaboration.
- **Quota Management**: Storage and resource limits enforced at both organization and tenant levels.
- **Access Control**: Roles and permissions defined for organization members and tenant users.
- **API Keys**: Secure access tokens for performing operations at organization and tenant levels.
- **Usage Tracking**: Logging and monitoring of resource usage for billing and compliance.

---

## Models and Schemas

### Organizations

Organizations represent your direct customers who will be providing storage services to their own customers.

#### Fields

- `id` (String): Unique identifier for the organization.
- `name` (String): Name of the organization.
- `display_name` (String): Display name for UI purposes.
- `domain` (String): Primary domain associated with the organization.
- `subscription_tier` (String): Subscription level (`'free'`, `'startup'`, `'business'`, `'enterprise'`).
- `subscription_status` (String): Status of the subscription (`'active'`, `'suspended'`, `'cancelled'`).
- `email` (String): Primary contact email (globally unique).
- `user_id` (String): Identity provider ID (e.g., Auth0 ID).
- `technical_contact` (String): Technical contact information.
- `storage_quota` (BigInt): Total storage quota in bytes.
- `used_storage` (BigInt): Current storage usage in bytes.
- `max_workspaces` (Int): Maximum number of workspaces allowed.
- `max_members` (Int): Maximum number of organization members.
- `api_key_prefix` (String): Prefix for API keys (unique).
- `security_settings` (Json): Security and compliance configurations.
- `feature_flags` (Json): Feature toggles based on subscription.

#### Relations

- `tenants`: List of associated tenants.
- `org_members`: Members of the organization.
- `org_api_keys`: API keys for organization-level access.
- `org_usage_logs`: Usage logs for the organization.
- `accounts`: Associated user accounts.

#### Indexes

- Indexed fields for optimizing queries on `subscription_status`, `subscription_tier`, and `domain`.

#### Example Usage

```typescript
// Create a new organization
const org = await prisma.organizations.create({
  data: {
    id: 'org_123',
    name: 'Startup Inc',
    subscription_tier: 'startup',
    storage_quota: 1_000_000_000_000, // 1TB
  },
});
```

### Tenants

Tenants represent subdivisions within organizations, allowing for isolated storage and settings.

#### Fields

- `id` (String): Unique identifier for the tenant.
- `organization_id` (String): Associated organization ID.
- `name` (String): Name of the tenant.
- `external_id` (String): External identifier used by the organization.
- `status` (String): Tenant status (`'active'`, `'suspended'`, `'deleted'`).
- `storage_quota` (BigInt): Tenant-specific storage quota.
- `used_storage` (BigInt): Current storage usage.
- `metadata` (Json): Additional metadata.
- `custom_domain` (String): Custom domain for the tenant.
- `settings` (Json): Tenant-specific settings.

#### Relations

- `organization`: Reference to the parent organization.
- `workspaces`: List of workspaces under the tenant.
- `tenant_api_keys`: API keys for tenant operations.
- `tenant_usage_logs`: Usage logs for the tenant.

#### Indexes

- Indexed fields for optimizing queries on `organization_id`, `external_id`, and `status`.

#### Example Usage

```typescript
// Create a tenant for the organization
const tenant = await prisma.tenants.create({
  data: {
    id: 'tenant_456',
    organization_id: 'org_123',
    name: 'Customer Corp',
    storage_quota: 100_000_000_000, // 100GB
  },
});
```

### Organization Members

Members who have access to manage organization settings, view usage, and handle tenants.

#### Fields

- `id` (BigInt): Unique identifier.
- `organization_id` (String): Associated organization ID.
- `user_id` (String): Identity provider ID.
- `role` (String): Role within the organization (`'owner'`, `'admin'`, `'member'`).
- `email` (String): Member's email address.
- `name` (String): Member's name.
- `joined_at` (DateTime): When the member joined.
- `status` (String): Member status (`'active'`, `'invited'`, `'suspended'`).
- `permissions` (String[]): Specific permissions assigned.

#### Relations

- `organization`: Reference to the parent organization.

#### Indexes

- Unique constraint on `organization_id` and `user_id`.
- Indexed fields for `email`, `user_id`, and `organization_id`.

#### Example Usage

```typescript
// Add admin member to organization
const member = await prisma.org_members.create({
  data: {
    organization_id: 'org_123',
    user_id: 'auth0|123',
    role: 'admin',
    email: 'admin@startup.com',
    permissions: ['manage_tenants', 'view_usage', 'manage_api_keys'],
  },
});
```

### API Keys

API keys provide secure access to the system for both organizations and tenants.

#### Organization API Keys

Used for organization-level operations like managing tenants, viewing usage, etc.

##### Fields

- `id` (BigInt): Unique identifier.
- `organization_id` (String): Associated organization ID.
- `key_name` (String): Name of the API key.
- `key_prefix` (String): Unique prefix for the API key.
- `key_hash` (String): Hashed value of the API key.
- `scopes` (String[]): Array of permitted operations.
- `expires_at` (DateTime): Expiration date.
- `created_by` (String): Creator's identifier.
- `is_active` (Boolean): Activation status.

##### Relations

- `organization`: Reference to the parent organization.

##### Indexes

- Indexed fields for `organization_id` and `key_prefix`.

##### Example Usage

```typescript
// Create new organization API key
const apiKey = await prisma.org_api_keys.create({
  data: {
    organization_id: 'org_123',
    key_name: 'Tenant Management API',
    key_prefix: 'org_key_123',
    key_hash: hashedApiKey,
    scopes: ['manage_tenants', 'read_usage'],
  },
});
```

#### Tenant API Keys

Used by tenants to access their own storage and manage workspaces.

##### Fields

- `id` (BigInt): Unique identifier.
- `tenant_id` (String): Associated tenant ID.
- `key_name` (String): Name of the API key.
- `key_prefix` (String): Unique prefix for the API key.
- `key_hash` (String): Hashed value of the API key.
- `scopes` (String[]): Array of permitted operations.
- `expires_at` (DateTime): Expiration date.
- `created_by` (String): Creator's identifier.
- `is_active` (Boolean): Activation status.

##### Relations

- `tenant`: Reference to the parent tenant.

##### Indexes

- Indexed fields for `tenant_id` and `key_prefix`.

##### Example Usage

```typescript
// Create tenant API key
const tenantKey = await prisma.tenant_api_keys.create({
  data: {
    tenant_id: 'tenant_456',
    key_name: 'Storage Access',
    key_prefix: 'tenant_key_789',
    key_hash: hashedApiKey,
    scopes: ['read_files', 'write_files'],
  },
});
```

### Usage Logs

Logs for tracking resource usage at both organization and tenant levels.

#### Organization Usage Logs

Tracks organization-level resource usage for billing and monitoring.

##### Fields

- `id` (BigInt): Unique identifier.
- `organization_id` (String): Associated organization ID.
- `timestamp` (DateTime): Event timestamp.
- `event_type` (String): Type of resource (`'storage'`, `'api'`, `'bandwidth'`).
- `quantity` (BigInt): Amount of resource used.
- `unit` (String): Unit of measurement (`'bytes'`, `'requests'`).
- `details` (Json): Additional details.

##### Relations

- `organization`: Reference to the parent organization.

##### Indexes

- Indexed fields for `organization_id`, `timestamp`, and `event_type`.

##### Example Usage

```typescript
// Log storage usage
const usage = await prisma.org_usage_logs.create({
  data: {
    organization_id: 'org_123',
    event_type: 'storage',
    quantity: 1_000_000, // 1MB
    unit: 'bytes',
    details: { operation: 'file_upload', workspace_id: '123' },
  },
});
```

#### Tenant Usage Logs

Tracks tenant-level resource usage for monitoring and potential charge-back.

##### Fields

- `id` (BigInt): Unique identifier.
- `tenant_id` (String): Associated tenant ID.
- `timestamp` (DateTime): Event timestamp.
- `event_type` (String): Type of resource.
- `quantity` (BigInt): Amount of resource used.
- `unit` (String): Unit of measurement.
- `details` (Json): Additional details.

##### Relations

- `tenant`: Reference to the parent tenant.

##### Indexes

- Indexed fields for `tenant_id`, `timestamp`, and `event_type`.

##### Example Usage

```typescript
// Log API usage
const tenantUsage = await prisma.tenant_usage_logs.create({
  data: {
    tenant_id: 'tenant_456',
    event_type: 'api',
    quantity: 1,
    unit: 'requests',
    details: { endpoint: '/files/upload', status: 200 },
  },
});
```

### Accounts

Represents user accounts in the system.

#### Fields

- `id` (BigInt): Unique identifier.
- `auth0_user_id` (String): External authentication provider ID.
- `email` (String): User's email address.
- `storage_quota` (BigInt): Maximum allowed storage in bytes.
- `used_storage` (BigInt): Current storage usage in bytes.
- `is_active` (Boolean): Account status.
- `settings` (Json): User preferences and settings.
- `organization_id` (String): Optional association to an organization.
- `tenant_id` (String): Optional association to a tenant.

#### Relations

- `workspaces`: List of workspaces associated with the account.
- `organization`: Reference to the associated organization.

#### Indexes

- Indexed fields for `auth0_user_id`, `created_at`, `is_active`, `organization_id`, and `tenant_id`.

---

### File Management

#### File Metadata

Stores metadata and S3 information for files.

##### Fields

- `id` (BigInt): Unique identifier.
- `name` (String): File name.
- `tenant_id` (String): Associated tenant ID.
- `folder_metadata_id` (BigInt): Parent folder ID.
- `s3_bucket_name` (String): S3 bucket name.
- `s3_key` (String): S3 object key.
- `size` (BigInt): File size in bytes.
- `checksum` (String): File hash for integrity verification.
- `mime_type` (String): MIME type of the file.
- `created_at` (DateTime): Creation timestamp.
- `updated_at` (DateTime): Last update timestamp.
- `is_deleted` (Boolean): Soft delete flag.

##### Relations

- `folder_metadata`: Reference to the parent folder.
- `file_search`: Associated search index.
- `file_embeddings`: List of embeddings for semantic search.
- `file_versions`: Version history of the file.

##### Indexes

- Indexed fields for `name`, `file_type`, `created_at`, `s3_bucket_name`, `s3_key`, `tags`, `is_deleted`, and `tenant_id`.

##### Example Usage

```typescript
// Upload file with metadata
const fileMetadata = await prisma.file_metadata.create({
  data: {
    name: 'report.pdf',
    tenant_id: 'tenant_456',
    s3_bucket_name: 'my-bucket',
    s3_key: 'tenant_456/reports/report.pdf',
    size: 2_048_000, // 2MB
    mime_type: 'application/pdf',
    checksum: 'abcdef1234567890',
  },
});
```

#### File Search

Enables full-text and semantic search for files.

##### Fields

- `id` (BigInt): Unique identifier.
- `file_id` (BigInt): Associated file ID.
- `content_vector`: Vector representation for semantic search.
- `content_tokens` (String): Tokenized content for full-text search.
- `metadata_tokens` (String): Tokenized metadata.
- `search_text` (String): Combined searchable text.
- `last_indexed` (DateTime): Timestamp of the last indexing.

##### Relations

- `file_metadata`: Reference to the associated file.

##### Indexes

- Indexed fields for `content_tokens`, `metadata_tokens`, and `search_text`.

##### Example Usage

```typescript
// Create search index for a file
await prisma.file_search.create({
  data: {
    file_id: fileMetadata.id,
    content_tokens: 'financial report Q1',
    metadata_tokens: 'pdf,report,finance',
    search_text: 'Full text content of the report',
  },
});
```

#### File Embeddings

Stores text embeddings for semantic search.

##### Fields

- `id` (BigInt): Unique identifier.
- `file_id` (BigInt): Associated file ID.
- `chunk_index` (Int): Position in the document.
- `chunk_text` (String): Text segment.
- `embedding_vector`: Vector representation of the text segment.
- `created_at` (DateTime): Creation timestamp.

##### Relations

- `file_metadata`: Reference to the associated file.

##### Indexes

- Unique constraint on `file_id` and `chunk_index`.

#### File Versions

Tracks version history of files.

##### Fields

- `id` (BigInt): Unique identifier.
- `file_id` (BigInt): Associated file ID.
- `version_number` (Int): Sequential version number.
- `s3_version_id` (String): S3 version identifier.
- `size` (BigInt): Size of the version.
- `checksum` (String): Checksum of the version.
- `modified_by` (String): User who made the changes.
- `change_summary` (String): Description of changes.
- `created_at` (DateTime): Creation timestamp.

##### Relations

- `file_metadata`: Reference to the associated file.

##### Indexes

- Unique constraint on `file_id` and `version_number`.

---

### Folder Management

#### Folder Metadata

Manages folder structure and hierarchy.

##### Fields

- `id` (BigInt): Unique identifier.
- `name` (String): Folder name.
- `folder_metadata_id` (BigInt): Parent folder ID.
- `s3_bucket_name` (String): S3 bucket name.
- `s3_folder_path` (String): S3 path to the folder.
- `created_at` (DateTime): Creation timestamp.
- `updated_at` (DateTime): Last update timestamp.
- `is_deleted` (Boolean): Soft delete flag.
- `metadata` (Json): Additional metadata.
- `workspace_id` (BigInt): Associated workspace ID.

##### Relations

- `folder_metadata`: Reference to the parent folder.
- `file_metadata`: List of files within the folder.
- `workspaces`: Reference to the associated workspace.
- `folder_search`: Associated search index.

##### Indexes

- Indexed fields for `workspace_id`, `folder_metadata_id`, `name`, `s3_bucket_name`, `s3_folder_path`, and `is_deleted`.

#### Folder Search

Enables search capabilities for folders.

##### Fields

- `id` (BigInt): Unique identifier.
- `folder_id` (BigInt): Associated folder ID.
- `content_vector`: Vector representation for semantic search.
- `search_text` (String): Searchable text content.
- `metadata_tokens` (String): Tokenized metadata.
- `last_indexed` (DateTime): Timestamp of the last indexing.

##### Relations

- `folder_metadata`: Reference to the associated folder.

##### Indexes

- Indexed fields for `search_text` and `metadata_tokens`.

---

### Workspaces

Workspaces are environments within tenants for organizing files and collaboration.

#### Fields

- `id` (BigInt): Unique identifier.
- `name` (String): Workspace name.
- `tenant_id` (String): Associated tenant ID.
- `storage_quota` (BigInt): Storage limit for the workspace.
- `used_storage` (BigInt): Current storage usage.
- `workspace_type` (String): Type of workspace (`'personal'`, `'team'`, `'project'`).
- `parent_workspace_id` (BigInt): For nested workspaces.
- `workspace_path` (String): Full path in the hierarchy.
- `is_deleted` (Boolean): Soft delete flag.
- `metadata` (Json): Workspace settings.
- `created_at` (DateTime): Creation timestamp.
- `updated_at` (DateTime): Last update timestamp.

#### Relations

- `folder_metadata`: List of folders within the workspace.
- `accounts`: Reference to the associated account.
- `tenant`: Reference to the associated tenant.
- `workspace_search`: Associated search index.
- `parent_workspace`: Reference to the parent workspace.
- `child_workspaces`: List of nested workspaces.

#### Indexes

- Indexed fields for `account_id`, `unique_identifier`, `name`, `tags`, `is_deleted`, `parent_workspace_id`, `workspace_type`, `workspace_path`, and `tenant_id`.

#### Example Usage

```typescript
// Create workspace with folder structure
const workspace = await prisma.workspaces.create({
  data: {
    tenant_id: 'tenant_456',
    name: 'Project X',
    storage_quota: 10_000_000_000, // 10GB
    folder_metadata: {
      create: {
        name: 'Root',
        s3_folder_path: '/tenant_456/project_x/',
      },
    },
  },
});
```

#### Workspace Search

Enables search capabilities within a workspace.

##### Fields

- `id` (BigInt): Unique identifier.
- `workspace_id` (BigInt): Associated workspace ID.
- `content_vector`: Vector representation for semantic search.
- `search_text` (String): Searchable text content.
- `metadata_tokens` (String): Tokenized metadata.
- `last_indexed` (DateTime): Timestamp of the last indexing.

##### Relations

- `workspaces`: Reference to the associated workspace.

##### Indexes

- Indexed fields for `search_text` and `metadata_tokens`.

#### Workspace Sharing

Manages collaboration and sharing settings for a workspace.

##### Fields

- `id` (BigInt): Unique identifier.
- `workspace_id` (BigInt): Associated workspace ID.
- `shared_with_id` (String): ID of the user or team.
- `sharing_type` (String): Type of sharing (`'user'`, `'team'`).
- `permission_level` (String): Access level (`'read'`, `'write'`, `'admin'`).
- `created_at` (DateTime): Creation timestamp.
- `expires_at` (DateTime): Expiration date.
- `is_active` (Boolean): Activation status.

##### Relations

- `workspaces`: Reference to the associated workspace.

##### Indexes

- Indexed fields for `workspace_id`, `shared_with_id`, and `access_key`.

#### Workspace Activity

Tracks activity within a workspace for auditing and monitoring.

##### Fields

- `id` (BigInt): Unique identifier.
- `workspace_id` (BigInt): Associated workspace ID.
- `user_id` (String): ID of the user who performed the action.
- `action_type` (String): Type of action (`'create'`, `'update'`, `'delete'`, etc.).
- `action_details` (Json): Details of the action.
- `timestamp` (DateTime): Timestamp of the action.
- `affected_items` (String[]): IDs of the affected files or folders.

##### Relations

- `workspaces`: Reference to the associated workspace.

##### Indexes

- Indexed fields for `workspace_id`, `user_id`, and `timestamp`.

#### Workspace Templates

Predefined templates for setting up new workspaces quickly.

##### Fields

- `id` (BigInt): Unique identifier.
- `name` (String): Template name.
- `description` (String): Template description.
- `folder_structure` (Json): Predefined folder structure.
- `default_settings` (Json): Default workspace settings.
- `tags` (String[]): Tags for categorization.
- `is_public` (Boolean): Visibility status.

##### Indexes

- Indexed fields for `category` and `tags`.

#### Workspace Backups

Configuration for automated backups of workspaces.

##### Fields

- `id` (BigInt): Unique identifier.
- `workspace_id` (BigInt): Associated workspace ID.
- `backup_frequency` (String): Frequency of backups (`'daily'`, `'weekly'`, `'monthly'`).
- `retention_period` (Int): Number of days to retain backups.
- `backup_location` (String): Storage location for backups.
- `is_enabled` (Boolean): Activation status.

##### Relations

- `workspaces`: Reference to the associated workspace.

##### Indexes

- Indexed fields for `workspace_id` and `next_backup_at`.

#### Workspace Automations

Automated workflows and rules within a workspace.

##### Fields

- `id` (BigInt): Unique identifier.
- `workspace_id` (BigInt): Associated workspace ID.
- `name` (String): Automation name.
- `trigger_type` (String): Type of trigger (`'file_upload'`, `'schedule'`, etc.).
- `trigger_config` (Json): Configuration for the trigger.
- `actions` (Json[]): Actions to perform.
- `is_enabled` (Boolean): Activation status.

##### Relations

- `workspaces`: Reference to the associated workspace.

##### Indexes

- Indexed fields for `workspace_id` and `trigger_type`.

#### Workspace Integrations

Third-party integrations for a workspace.

##### Fields

- `id` (BigInt): Unique identifier.
- `workspace_id` (BigInt): Associated workspace ID.
- `service_name` (String): Name of the integration service.
- `config` (Json): Configuration details.
- `auth_tokens` (Json): Authentication tokens.
- `is_active` (Boolean): Activation status.

##### Relations

- `workspaces`: Reference to the associated workspace.

##### Indexes

- Indexed fields for `workspace_id` and `service_name`.

#### Workspace Compliance

Compliance and audit settings for a workspace.

##### Fields

- `id` (BigInt): Unique identifier.
- `workspace_id` (BigInt): Associated workspace ID.
- `retention_policy` (Json): Data retention policies.
- `encryption_settings` (Json): Encryption configurations.
- `compliance_level` (String): Compliance level (`'high'`, `'medium'`, `'low'`).
- `audit_frequency` (String): Frequency of audits.
- `is_gdpr_compliant` (Boolean): GDPR compliance status.
- `is_hipaa_compliant` (Boolean): HIPAA compliance status.

##### Relations

- `workspaces`: Reference to the associated workspace.

##### Indexes

- Indexed fields for `workspace_id` and `compliance_level`.

---

## Usage Examples

### Creating an Organization with a Tenant

```typescript
const org = await prisma.organizations.create({
  data: {
    id: 'org_123',
    name: 'TechCorp',
    subscription_tier: 'business',
    storage_quota: 1_000_000_000_000, // 1TB
    tenants: {
      create: {
        id: 'tenant_456',
        name: 'Division A',
        storage_quota: 100_000_000_000, // 100GB
      },
    },
  },
});
```

### Creating a Workspace with Folder Structure

```typescript
const workspace = await prisma.workspaces.create({
  data: {
    tenant_id: 'tenant_456',
    name: 'Project X',
    storage_quota: 10_000_000_000, // 10GB
    folder_metadata: {
      create: {
        name: 'Root',
        s3_folder_path: '/tenant_456/project_x/',
      },
    },
  },
});
```

### Uploading a File with Search Indexing

```typescript
const file = await prisma.$transaction(async (tx) => {
  const metadata = await tx.file_metadata.create({
    data: {
      name: 'document.pdf',
      tenant_id: 'tenant_456',
      s3_bucket_name: 'my-bucket',
      s3_key: 'tenant_456/project_x/document.pdf',
      size: 1_024_000, // 1MB
    },
  });

  await tx.file_search.create({
    data: {
      file_id: metadata.id,
      content_tokens: 'extracted text content',
      metadata_tokens: 'pdf,document,project',
      search_text: 'Full searchable content',
    },
  });

  return metadata;
});
```

---

## Implementation Notes

### Quota Management

- **Organization Level**: Enforces a total storage quota across all tenants.
- **Tenant Level**: Tenants can have individual quotas that cannot exceed the organization's quota.
- **Usage Tracking**: Both organizations and tenants have `used_storage` fields that should be updated with each operation.

#### Quota Enforcement Example

```typescript
const checkQuota = async (tenantId: string, fileSize: number) => {
  const tenant = await prisma.tenants.findUnique({
    where: { id: tenantId },
    include: { organization: true },
  });

  if (!tenant) throw new Error('Tenant not found');

  const totalUsedStorage = tenant.used_storage + fileSize;
  const orgTotalUsedStorage = tenant.organization.used_storage + fileSize;

  if (totalUsedStorage > tenant.storage_quota) {
    throw new Error('Tenant quota exceeded');
  }

  if (orgTotalUsedStorage > tenant.organization.storage_quota) {
    throw new Error('Organization quota exceeded');
  }
};
```

### API Access and Security

- **API Keys**: Always store hashed API keys. Use `key_prefix` for lookups and hash the key for verification.
- **Scopes**: Define scopes for API keys to limit access to specific operations.
- **Expiration**: Set `expires_at` for API keys and check during authentication.

### Isolation and Data Security

- **Tenant Isolation**: Always include `tenant_id` in queries to prevent data leakage.
- **Middleware Enforcement**: Use Prisma middleware to automatically inject `tenant_id` into queries.

#### Middleware Example

```typescript
prisma.$use(async (params, next) => {
  if (params.model === 'file_metadata' && params.action === 'findMany') {
    params.args.where = {
      ...params.args.where,
      tenant_id: currentTenantId,
    };
  }
  return next(params);
});
```

### Subscription Management

- **Subscription Tiers**: Define features and limits based on `subscription_tier`.
- **Feature Flags**: Use `feature_flags` in the `organizations` model to toggle features.

---

## Search Implementation

### Full-text Search

Utilizes PostgreSQL's full-text search capabilities with `to_tsvector` and GIN indexes.

#### Example Query

```typescript
const searchFiles = async (query: string, tenantId: string) => {
  return prisma.file_search.findMany({
    where: {
      search_text: { contains: query },
      file_metadata: { tenant_id: tenantId },
    },
    include: { file_metadata: true },
  });
};
```

### Vector/Semantic Search

Leverages `pgvector` extension for semantic search using embedding vectors.

#### Example Query

```typescript
const semanticSearch = async (embedding: number[], tenantId: string) => {
  const results = await prisma.$queryRaw`
    SELECT fs.*, fm.*
    FROM file_search fs
    JOIN file_metadata fm ON fs.file_id = fm.id
    WHERE fm.tenant_id = ${tenantId}
    ORDER BY fs.content_vector <-> ${embedding}::vector
    LIMIT 10;
  `;
  return results;
};
```

---

## Usage Tracking

Tracks resource usage for billing and monitoring purposes.

#### Logging Usage Example

```typescript
const logUsage = async (tenantId: string, eventType: string, quantity: number) => {
  await prisma.$transaction([
    prisma.tenant_usage_logs.create({
      data: {
        tenant_id: tenantId,
        event_type: eventType,
        quantity,
        unit: eventType === 'storage' ? 'bytes' : 'requests',
      },
    }),
    prisma.tenants.update({
      where: { id: tenantId },
      data: { used_storage: { increment: quantity } },
    }),
  ]);
};
```

---

## Performance Optimization

### Indexing

- **Foreign Keys**: Ensure all foreign key fields are indexed.
- **Composite Indexes**: Create composite indexes for fields commonly used together in queries.
- **Search Indexes**: Use GIN indexes for text search fields.

### Batch Operations

Use transactions to batch multiple operations, reducing database round-trips.

#### Batch Update Example

```typescript
const batchUpdateFiles = async (files: any[]) => {
  await prisma.$transaction(
    files.map((file) =>
      prisma.file_metadata.update({
        where: { id: file.id },
        data: { ...file },
      })
    )
  );
};
```

### Pagination

Implement efficient pagination for listing operations.

#### Pagination Example

```typescript
const listFiles = async (tenantId: string, skip: number, take: number) => {
  return prisma.file_metadata.findMany({
    where: { tenant_id: tenantId },
    skip,
    take,
    orderBy: { created_at: 'desc' },
  });
};
```

---

## Required PostgreSQL Extensions

Ensure the following extensions are installed:

```sql
CREATE EXTENSION IF NOT EXISTS pgvector;
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS btree_gin;
```

---

## Search Indexing Setup

Create indexes to optimize search queries.

```sql
-- Full-text search GIN indexes
CREATE INDEX idx_file_search_content ON file_search USING gin(to_tsvector('english', content_tokens));
CREATE INDEX idx_file_search_metadata ON file_search USING gin(to_tsvector('english', metadata_tokens));

-- Vector similarity search index
CREATE INDEX idx_file_search_vector ON file_search USING ivfflat (content_vector vector_cosine_ops) WITH (lists = 100);
```

---

## Best Practices

1. **Transactions**: Use transactions for operations that involve multiple steps.
2. **Error Handling**: Implement robust error handling and rollbacks.
3. **Middleware**: Use middleware for enforcing tenant isolation and other policies.
4. **Monitoring**: Regularly monitor quotas, usage, and system health.
5. **Rate Limiting**: Implement rate limiting to prevent abuse of API keys.
6. **Backups**: Regularly back up critical data, including search indexes.
7. **Performance Monitoring**: Continuously monitor and optimize query performance.

---

## Security Considerations

1. **Data Isolation**: Always include `tenant_id` in queries and use middleware to enforce isolation.
2. **Quota Validation**: Validate quotas before performing operations to prevent overuse.
3. **API Key Security**: Store only hashed API keys and use prefixes for identification.
4. **Role-Based Access Control**: Implement roles and permissions for fine-grained access control.
5. **Regular Audits**: Conduct security audits and monitor logs for suspicious activities.
6. **Compliance**: Ensure compliance with regulations like GDPR and HIPAA where applicable.

---

## Prisma Client Configuration

The Prisma Client is configured with advanced features:

```prisma
generator client {
  provider        = "prisma-client-js"
  output          = "../src/database/generated/postgresql"
  previewFeatures = ["fullTextIndex", "multiSchema", "postgresqlExtensions", "fullTextSearch"]
}
```

- **@previewFeatures**: Enables experimental features such as full-text search and multi-schema support.
- **@output**: Specifies the output directory for the generated client code.

---

## Datasource Configuration

The datasource is configured for PostgreSQL with required extensions:

```prisma
datasource db {
  provider   = "postgresql"
  url        = env("DATABASE_URL")
  extensions = [pgvector, pg_trgm, btree_gin]
}
```

- **@extensions**:
  - **pgvector**: Enables vector operations for embeddings and similarity search.
  - **pg_trgm**: Provides fuzzy text search capabilities.
  - **btree_gin**: Enables GIN indexing for efficient text search.

---

## Conclusion

This comprehensive documentation provides detailed insights into the multi-tenant file storage system schema. By adhering to best practices, implementing robust security measures, and optimizing for performance, the system ensures scalability, reliability, and security for SaaS providers and their customers.

---

**Note**: Always keep the documentation up-to-date with any schema changes or updates to ensure consistency and reliability.