# Enhanced Schema with Organization and Tenant Support

In this documentation, we will integrate organization and tenant support into your existing Prisma schema. This enhancement allows you to manage multi-level tenancy, enabling organizations to have multiple tenants and providing a structured way to handle data isolation, permissions, and settings across different levels.

## Table of Contents

1. **Introduction**
2. **Architecture Overview**
3. **Key Concepts**
4. **Updated Schema**
   - Generator and Datasource Configuration
   - Models
     - Organizations
     - Tenants
     - Business Accounts
     - User Accounts
     - Roles
     - Teams
     - Settings
     - Tags
     - Other Models
5. **Relationships Between Models**
6. **Usage Examples**
7. **Implementation Notes**
8. **Security Considerations**
9. **Best Practices**
10. **Conclusion**


## Introduction

This documentation provides a comprehensive guide on enhancing your Prisma schema with organization and tenant support. The goal is to implement a multi-tenant architecture that allows for hierarchical management of organizations and their respective tenants, integrating seamlessly with your existing models like business accounts, user accounts, roles, and settings.


## Architecture Overview

The enhanced schema introduces a three-tier architecture:

1. **Organizations**: Represent your direct customers (e.g., companies or enterprises).
2. **Tenants**: Represent subdivisions or clients of your organizations.
3. **End Users**: Individual users associated with either organizations or tenants.

This structure enables:

- **Data Isolation**: Ensures data belonging to one tenant is inaccessible to others.
- **Hierarchical Permissions**: Allows permissions to be set at different levels (organization, tenant, user).
- **Scalability**: Supports a scalable model for managing multiple organizations and tenants.

## Key Concepts

- Organizations can have multiple tenants.
- Tenants are associated with organizations and can have their own settings.
- Business Accounts and User Accounts can be linked to organizations and tenants.
- Roles and Permissions can be defined at the organization and tenant levels.
- Settings and Preferences can be customized per organization or tenant.

## Updated Schema

### Generator and Datasource Configuration

```prisma
generator client {
  provider        = "prisma-client-js"
  output          = "../src/database/generated/postgresql"
  previewFeatures = ["fullTextIndex", "multiSchema"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

### Models

#### Organizations

Organizations represent your direct customers and serve as the top-level entities in your multi-tenant architecture.

```prisma
model organizations {
  id                    BigInt                @id @default(autoincrement())
  name                  String                @db.VarChar(255)
  display_name          String?               @db.VarChar(255)
  domain                String?               @db.VarChar(255)
  subscription_tier     String                @db.VarChar(50) // e.g., 'free', 'premium', 'enterprise'
  subscription_status   String                @db.VarChar(50) // e.g., 'active', 'suspended'
  email                 String                @unique @db.VarChar(255) // Primary contact email
  created_at            DateTime              @default(now())
  updated_at            DateTime              @updatedAt
  is_active             Boolean               @default(true)
  metadata              Json?                 @db.JsonB
  storage_quota         BigInt                // Total storage quota for the organization
  used_storage          BigInt                @default(0)
  max_users             Int?                  // Maximum number of users allowed
  technical_contact     String?               @db.VarChar(255)

  // Relations
  tenants               tenants[]
  business_accounts     business_accounts[]
  user_accounts         user_accounts[]

  @@index([subscription_status])
  @@index([subscription_tier])
  @@index([domain])
}
```

- **Fields Explanation:**
  - `id`: Unique identifier for the organization.
  - `name`, `display_name`, `domain`: Basic information about the organization.
  - `subscription_tier`, `subscription_status`: Subscription details.
  - `email`: Primary contact email, must be unique.
  - `storage_quota`, `used_storage`: For quota management.
  - `metadata`: Additional custom data.

#### Tenants

Tenants are subdivisions within organizations, representing clients or departments.

```prisma
model tenants {
  id              BigInt         @id @default(autoincrement())
  organization_id BigInt
  name            String         @db.VarChar(255)
  external_id     String?        @db.VarChar(255) // External identifier
  status          String         @db.VarChar(50) // e.g., 'active', 'suspended'
  created_at      DateTime       @default(now())
  updated_at      DateTime       @updatedAt
  storage_quota   BigInt?        // Optional quota specific to the tenant
  used_storage    BigInt         @default(0)
  metadata        Json?          @db.JsonB
  custom_domain   String?        @db.VarChar(255)

  // Relations
  organization    organizations  @relation(fields: [organization_id], references: [id], onDelete: Cascade)
  business_accounts  business_accounts[]
  user_accounts      user_accounts[]

  @@index([organization_id])
  @@index([status])
}
```

- **Fields Explanation:**
  - `organization_id`: Links the tenant to an organization.
  - `name`, `external_id`: Identifiers for the tenant.
  - `status`: Operational status.
  - `storage_quota`, `used_storage`: For tenant-specific quota management.

#### Business Accounts

Business accounts represent entities that can be associated with organizations and tenants.

```prisma
model business_accounts {
  id                          BigInt                @id @default(autoincrement())
  organization_id             BigInt?
  tenant_id                   BigInt?
  company_name                String?               @db.VarChar(255)
  email                       String?               @db.VarChar(255)
  phone_number                String?               @db.VarChar(50)
  created_at                  DateTime              @default(now())
  updated_at                  DateTime              @updatedAt
  is_active                   Boolean               @default(true)
  profile_image_url           String?               @db.Text
  subscription_tier           String?               @db.VarChar(50)
  subscription_start_date     DateTime?
  subscription_end_date       DateTime?

  // Relations
  organization                organizations?        @relation(fields: [organization_id], references: [id], onDelete: SetNull)
  tenant                      tenants?              @relation(fields: [tenant_id], references: [id], onDelete: SetNull)
  addresses                   addresses[]
  settings                    settings[]
  roles                       roles[]

  @@index([email])
  @@index([organization_id])
  @@index([tenant_id])
}
```

- **Fields Explanation:**
  - `organization_id`, `tenant_id`: Optional links to organization or tenant.
  - `company_name`, `email`, `phone_number`: Business account details.
  - `subscription_tier`: Subscription information.

#### User Accounts

User accounts represent individual users who can be associated with organizations, tenants, or both.

```prisma
model user_accounts {
  id                          BigInt                @id @default(autoincrement())
  organization_id             BigInt?
  tenant_id                   BigInt?
  firstname                   String?               @db.VarChar(100)
  lastname                    String?               @db.VarChar(100)
  email                       String?               @db.VarChar(255)
  phone_number                String?               @db.VarChar(50)
  username                    String?               @db.VarChar(100)
  created_at                  DateTime              @default(now())
  updated_at                  DateTime              @updatedAt
  is_active                   Boolean               @default(true)
  profile_image_url           String?               @db.Text

  // Relations
  organization                organizations?        @relation(fields: [organization_id], references: [id], onDelete: SetNull)
  tenant                      tenants?              @relation(fields: [tenant_id], references: [id], onDelete: SetNull)
  addresses                   addresses[]
  settings                    settings[]
  roles                       roles[]
  teams                       teams[]

  @@index([email])
  @@index([username])
  @@index([organization_id])
  @@index([tenant_id])
}
```

- **Fields Explanation:**
  - `organization_id`, `tenant_id`: Optional links to organization or tenant.
  - `firstname`, `lastname`, `email`, `username`: User details.

#### Roles

Roles define permissions for business accounts and user accounts at different levels.

```prisma
model roles {
  id                BigInt                @id @default(autoincrement())
  name              String?               @db.VarChar(100)
  description       String?               @db.Text
  is_active         Boolean               @default(true)
  organization_id   BigInt?
  tenant_id         BigInt?

  // Permissions
  can_create_users  Boolean               @default(false)
  can_read_users    Boolean               @default(true)
  can_update_users  Boolean               @default(false)
  can_delete_users  Boolean               @default(false)
  // Add more permissions as needed

  // Relations
  organization      organizations?        @relation(fields: [organization_id], references: [id], onDelete: SetNull)
  tenant            tenants?              @relation(fields: [tenant_id], references: [id], onDelete: SetNull)
  business_accounts business_accounts[]
  user_accounts     user_accounts[]

  @@index([name])
  @@index([organization_id])
  @@index([tenant_id])
}
```

- **Fields Explanation:**
  - `organization_id`, `tenant_id`: Scope of the role.
  - `can_create_users`, `can_read_users`, etc.: Permission flags.

#### Teams

Teams can be associated with organizations and tenants, grouping users together.

```prisma
model teams {
  id                BigInt                @id @default(autoincrement())
  name              String?               @db.VarChar(100)
  description       String?               @db.Text
  organization_id   BigInt?
  tenant_id         BigInt?
  created_at        DateTime              @default(now())
  updated_at        DateTime              @updatedAt
  is_active         Boolean               @default(true)

  // Relations
  organization      organizations?        @relation(fields: [organization_id], references: [id], onDelete: SetNull)
  tenant            tenants?              @relation(fields: [tenant_id], references: [id], onDelete: SetNull)
  user_accounts     user_accounts[]

  @@index([name])
  @@index([organization_id])
  @@index([tenant_id])
}
```

#### Settings

Settings can now be scoped to organizations and tenants.

```prisma
model settings {
  id                          BigInt                @id @default(autoincrement())
  organization_id             BigInt?
  tenant_id                   BigInt?
  user_account_id             BigInt?
  business_account_id         BigInt?
  app_theme                   String?               @db.VarChar(50)
  preferred_language          String?               @db.VarChar(10)
  created_at                  DateTime              @default(now())
  updated_at                  DateTime              @updatedAt

  // Relations
  organization                organizations?        @relation(fields: [organization_id], references: [id], onDelete: SetNull)
  tenant                      tenants?              @relation(fields: [tenant_id], references: [id], onDelete: SetNull)
  user_account                user_accounts?        @relation(fields: [user_account_id], references: [id], onDelete: SetNull)
  business_account            business_accounts?    @relation(fields: [business_account_id], references: [id], onDelete: SetNull)

  @@index([organization_id])
  @@index([tenant_id])
  @@index([user_account_id])
  @@index([business_account_id])
}
```

#### Tags

Tags can be associated with organizations and tenants for better categorization.

```prisma
model tags {
  id                  BigInt             @id @default(autoincrement())
  tag_name            String?            @db.VarChar(100)
  tag_description     String?            @db.Text
  metadata            String[]
  organization_id     BigInt?
  tenant_id           BigInt?
  user_account_id     BigInt?
  business_account_id BigInt?
  team_id             BigInt?
  created_at          DateTime           @default(now())
  updated_at          DateTime           @updatedAt

  // Relations
  organization        organizations?     @relation(fields: [organization_id], references: [id], onDelete: SetNull)
  tenant              tenants?           @relation(fields: [tenant_id], references: [id], onDelete: SetNull)
  business_account    business_accounts? @relation(fields: [business_account_id], references: [id], onDelete: SetNull)
  user_account        user_accounts?     @relation(fields: [user_account_id], references: [id], onDelete: SetNull)
  team                teams?             @relation(fields: [team_id], references: [id], onDelete: SetNull)

  @@index([tag_name])
  @@index([organization_id])
  @@index([tenant_id])
  @@index([business_account_id])
  @@index([user_account_id])
  @@index([team_id])
}
```

### Other Models

Other models like `addresses`, `financial_preferences`, `notification_settings`, etc., can be updated similarly by adding `organization_id` and `tenant_id` fields if needed.

## Relationships Between Models

- **Organizations** have many **tenants**, **business_accounts**, and **user_accounts**.
- **Tenants** belong to an organization and have many **business_accounts** and **user_accounts**.
- **Business Accounts** can belong to an organization, a tenant, or neither.
- **User Accounts** can belong to an organization, a tenant, or neither.
- **Roles** can be scoped to an organization or a tenant.
- **Settings** can be associated with organizations, tenants, **business_accounts**, or **user_accounts**.

## Usage Examples

### Creating an Organization

```javascript
const organization = await prisma.organizations.create({
  data: {
    name: 'Acme Corporation',
    subscription_tier: 'enterprise',
    storage_quota: 1000000000000, // 1TB
    email: 'admin@acme.com',
  },
});
```

### Adding a Tenant to an Organization

```javascript
const tenant = await prisma.tenants.create({
  data: {
    organization_id: organization.id,
    name: 'Acme Subsidiary',
    storage_quota: 500000000000, // 500GB
  },
});
```

### Creating a Business Account under a Tenant

```javascript
const businessAccount = await prisma.business_accounts.create({
  data: {
    tenant_id: tenant.id,
    company_name: 'Acme Subsidiary LLC',
    email: 'contact@acmesubsidiary.com',
  },
});
```

### Assigning a Role to a User within a Tenant

```javascript
const role = await prisma.roles.create({
  data: {
    name: 'Tenant Admin',
    tenant_id: tenant.id,
    can_create_users: true,
    can_read_users: true,
    can_update_users: true,
    can_delete_users: true,
  },
});

const user = await prisma.user_accounts.create({
  data: {
    tenant_id: tenant.id,
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@acmesubsidiary.com',
    roles: {
      connect: { id: role.id },
    },
  },
});
```

## Implementation Notes

- **Data Isolation**: Always include `organization_id` and `tenant_id` in your queries to ensure proper data isolation.
- **Cascade Deletes**: Use `onDelete: Cascade` where appropriate to automatically delete dependent records.
- **Indexes**: Ensure foreign keys and commonly queried fields are indexed for performance optimization.
- **Permissions**: Implement role-based access control (RBAC) using the `roles` model.

## Security Considerations

1. **Data Isolation**:
   - Ensure that queries are scoped to the appropriate `organization_id` and `tenant_id`.
   - Use middleware to automatically inject `organization_id` and `tenant_id` into queries based on the authenticated user's context.
2. **Role-Based Access Control**:
   - Define roles with specific permissions.
   - Check permissions before performing sensitive operations.
3. **Quota Management**:
   - Enforce storage quotas at the organization and tenant levels.
   - Prevent operations that would exceed allocated quotas.
4. **Secure API Keys**:
   - If using API keys, store only hashed versions.
   - Use a `key_prefix` for quick lookup without exposing the full key.

## Best Practices

- **Use Transactions**: Wrap related operations in transactions to maintain data integrity.
- **Error Handling**: Implement comprehensive error handling and logging.
- **Regular Audits**: Conduct security and data audits regularly.
- **Scalability**: Design with scalability in mind, considering future growth in organizations and tenants.
- **Documentation**: Keep your schema and API documentation up to date.

## Conclusion

By integrating organization and tenant support into your schema, you've established a robust multi-tenant architecture that supports hierarchical data management, improved security, and scalable growth. This setup allows for fine-grained control over data access, permissions, and settings at different levels of your application.

Feel free to reach out if you have any questions or need further assistance with implementing these changes!