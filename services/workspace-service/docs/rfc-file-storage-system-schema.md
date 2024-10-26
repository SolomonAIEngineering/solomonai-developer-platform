# File Storage System Schema Documentation

## Overview
This schema defines a comprehensive file storage system with advanced search capabilities, embedding support, and versioning. The system is designed to handle large-scale file storage with efficient search and retrieval mechanisms.

## Database Configuration

### Extensions
```prisma
extensions = [pgvector, pg_trgm, btree_gin]
```
- `pgvector`: Enables vector similarity operations for embeddings
- `pg_trgm`: Provides fuzzy text search capabilities
- `btree_gin`: Enables GIN indexing for faster text search

## Core Models

### 1. Accounts
Represents user accounts in the system.

#### Key Fields:
- `auth0_user_id`: External authentication identifier
- `storage_quota`: Maximum allowed storage in bytes
- `used_storage`: Current storage usage in bytes

#### Usage:
```sql
-- Example: Find accounts approaching storage limit
SELECT * FROM accounts
WHERE (used_storage::float / storage_quota::float) > 0.9;
```

### 2. File Metadata
Primary model for file information storage.

#### Key Features:
- Complete S3 integration metadata
- File versioning support
- Usage analytics
- Preview generation status

#### Performance Optimizations:
```sql
-- Indexes for common queries
@@index([name, file_type])
@@index([s3_bucket_name, s3_key])
@@index([folder_metadata_id])
```

### 3. File Search
Handles search functionality for files.

#### Search Capabilities:
- Full-text search using GIN indexes
- Vector similarity search for semantic queries
- Metadata token search

```sql
-- Example: Semantic search query
SELECT fm.*
FROM file_metadata fm
JOIN file_search fs ON fm.id = fs.file_id
WHERE vector_cosine_distance(fs.content_vector, query_vector) < 0.3
ORDER BY vector_cosine_distance(fs.content_vector, query_vector)
LIMIT 10;
```

### 4. File Embeddings
Stores text embeddings for semantic search.

#### Structure:
- Chunked text storage
- Vector embeddings (1536 dimensions)
- Support for multiple chunks per file

#### Usage:
```sql
-- Example: Find similar content across chunks
SELECT fm.name, fe.chunk_text
FROM file_embeddings fe
JOIN file_metadata fm ON fe.file_id = fm.id
WHERE vector_cosine_distance(fe.embedding_vector, query_vector) < 0.2;
```

### 5. File Versions
Tracks file version history.

#### Features:
- Sequential version numbering
- Change tracking
- Modification attribution
- Size and checksum verification

### 6. Folder Metadata
Manages folder structure and hierarchy.

#### Key Features:
- Nested folder support
- S3 path mapping
- Folder-level permissions
- Search optimization

### 7. Workspace Organization
Manages workspace environments.

#### Features:
- Quota management
- Usage tracking
- Tagging system
- Search capabilities

## Search Implementation

### 1. Full-Text Search
Uses PostgreSQL's GIN indexes and trigram similarity.

```sql
-- Example full-text search implementation
CREATE INDEX idx_file_search_text ON file_search USING gin (search_text gin_trgm_ops);
```

### 2. Vector Search
Implements semantic search using pgvector.

```sql
-- Example vector similarity search
CREATE INDEX idx_file_embeddings_vector ON file_embeddings
USING ivfflat (embedding_vector vector_cosine_ops)
WITH (lists = 100);
```

### 3. Hybrid Search
Combines full-text and semantic search capabilities.

```sql
-- Example hybrid search query
WITH text_matches AS (
  SELECT file_id, ts_rank(to_tsvector(search_text), query) as text_rank
  FROM file_search
  WHERE search_text @@ query
),
vector_matches AS (
  SELECT file_id, vector_cosine_distance(content_vector, query_vector) as vector_rank
  FROM file_search
)
SELECT fm.*
FROM file_metadata fm
JOIN (
  SELECT file_id,
         (text_rank * 0.3 + vector_rank * 0.7) as combined_rank
  FROM text_matches
  JOIN vector_matches USING (file_id)
) ranked ON fm.id = ranked.file_id
ORDER BY combined_rank DESC;
```

## Storage Management

### 1. Quota System
```sql
-- Example quota check trigger
CREATE OR REPLACE FUNCTION check_storage_quota()
RETURNS TRIGGER AS $$
BEGIN
  IF (
    SELECT used_storage + NEW.size > storage_quota
    FROM accounts
    WHERE id = NEW.account_id
  ) THEN
    RAISE EXCEPTION 'Storage quota exceeded';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

### 2. Usage Tracking
```sql
-- Example usage update
CREATE OR REPLACE FUNCTION update_storage_usage()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE accounts
  SET used_storage = (
    SELECT COALESCE(SUM(size), 0)
    FROM file_metadata
    WHERE account_id = NEW.account_id
    AND is_deleted = false
  )
  WHERE id = NEW.account_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

## Performance Considerations

### 1. Indexing Strategy
- Strategic use of composite indexes
- GIN indexes for array and full-text fields
- B-tree indexes for exact matches
- Vector indexes for similarity search

### 2. Partitioning
Consider implementing table partitioning for large datasets:
```sql
-- Example partitioning strategy
CREATE TABLE file_metadata (
  -- ... columns ...
) PARTITION BY RANGE (created_at);

CREATE TABLE file_metadata_y2024m01
  PARTITION OF file_metadata
  FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');
```

### 3. Vacuum Strategy
Regular maintenance for optimal performance:
```sql
-- Recommended maintenance
VACUUM ANALYZE file_metadata;
VACUUM ANALYZE file_search;
REINDEX INDEX idx_file_search_vector;
```

## Security Considerations

### 1. Data Protection
- All sensitive data fields use appropriate field types
- Proper indexing for auth-related fields
- Soft delete implementation

### 2. Access Control
```sql
-- Example RLS policy
ALTER TABLE file_metadata ENABLE ROW LEVEL SECURITY;

CREATE POLICY file_access_policy ON file_metadata
  USING (account_id = current_user_account_id());
```

## Best Practices

### 1. File Operations
- Always check quotas before file uploads
- Update search indexes asynchronously
- Generate embeddings in background jobs
- Implement proper error handling

### 2. Search Operations
- Use pagination for search results
- Implement caching for frequent searches
- Consider query timeout limits
- Balance precision vs. recall

### 3. Maintenance
- Regular vacuum and analyze
- Monitor index usage
- Archive old versions
- Clean up orphaned records

## Example Queries

### 1. Advanced Search
```sql
-- Combined metadata and content search
SELECT DISTINCT fm.*
FROM file_metadata fm
JOIN file_search fs ON fm.id = fs.file_id
WHERE
  fs.search_text @@ to_tsquery('english', 'document & important')
  AND fm.file_type IN ('pdf', 'doc')
  AND fm.created_at > NOW() - INTERVAL '7 days'
ORDER BY fm.created_at DESC;
```

### 2. Storage Analysis
```sql
-- Storage usage by workspace
SELECT
  w.name as workspace_name,
  COUNT(fm.id) as file_count,
  SUM(fm.size) as total_size,
  w.storage_quota,
  (SUM(fm.size)::float / w.storage_quota::float * 100) as usage_percentage
FROM workspaces w
LEFT JOIN folder_metadata fm ON w.id = fm.workspace_id
WHERE w.is_deleted = false
GROUP BY w.id, w.name, w.storage_quota;
```

## Maintenance Procedures

### 1. Regular Cleanup
```sql
-- Clean up orphaned records
DELETE FROM file_search
WHERE file_id NOT IN (SELECT id FROM file_metadata);

-- Archive old versions
INSERT INTO file_versions_archive
SELECT * FROM file_versions
WHERE created_at < NOW() - INTERVAL '1 year';
```

### 2. Performance Optimization
```sql
-- Update statistics
ANALYZE file_metadata;
ANALYZE file_search;
ANALYZE file_embeddings;

-- Rebuild indexes
REINDEX INDEX idx_file_search_text;
REINDEX INDEX idx_file_embeddings_vector;
```

## Error Handling

### 1. Quota Exceeded
```sql
EXCEPTION WHEN OTHERS THEN
  IF SQLERRM LIKE '%Storage quota exceeded%' THEN
    -- Handle quota exceeded
  END IF;
```

### 2. Search Timeout
```sql
SET statement_timeout = '5s';
BEGIN;
  -- Search query here
EXCEPTION WHEN OTHERS THEN
  -- Handle timeout
END;
RESET statement_timeout;
```

## Schema Relationship

erDiagram
    ACCOUNTS ||--o{ WORKSPACES : has
    WORKSPACES ||--o{ FOLDER_METADATA : contains
    FOLDER_METADATA ||--o{ FILE_METADATA : stores
    FOLDER_METADATA ||--o{ FOLDER_METADATA : nested
    FILE_METADATA ||--o| FILE_SEARCH : indexes
    FILE_METADATA ||--o{ FILE_EMBEDDINGS : chunks
    FILE_METADATA ||--o{ FILE_VERSIONS : tracks
    WORKSPACES ||--o| WORKSPACE_SEARCH : indexes
    FOLDER_METADATA ||--o| FOLDER_SEARCH : indexes

    ACCOUNTS {
        BigInt id PK
        String auth0_user_id
        BigInt storage_quota
        BigInt used_storage
    }

    WORKSPACES {
        BigInt id PK
        BigInt account_id FK
        String name
        Json metadata
        BigInt storage_quota
    }

    FILE_METADATA {
        BigInt id PK
        String name
        String file_type
        BigInt size
        DateTime created_at
        Boolean is_deleted
    }

    FILE_SEARCH {
        BigInt id PK
        BigInt file_id FK
        vector content_vector
        String search_text
    }

    FILE_EMBEDDINGS {
        BigInt id PK
        BigInt file_id FK
        Int chunk_index
        String chunk_text
        vector embedding_vector
    }

    FILE_VERSIONS {
        BigInt id PK
        BigInt file_id FK
        Int version_number
        String change_summary
    }