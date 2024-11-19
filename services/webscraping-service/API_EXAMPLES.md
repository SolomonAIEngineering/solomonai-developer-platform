# Transaction Enrichment Service - Security & Examples Guide

## Authentication & Security

### 1. API Key Authentication

#### 1.1 API Key Types

```typescript
interface ApiKey {
  key_id: string;          // Unique identifier for the key
  key_secret: string;      // Secret value for authentication
  environment: 'sandbox' | 'production';
  permissions: string[];   // Array of allowed permissions
  created_at: string;     // ISO8601 timestamp
  expires_at: string;     // ISO8601 timestamp
  last_used: string;      // ISO8601 timestamp
  rate_limit: {
    requests_per_minute: number;
    burst_limit: number;
  }
}
```

**Example Key Generation Request:**
```http
POST /v1/auth/keys
Content-Type: application/json
Authorization: Bearer YOUR_MASTER_KEY

{
  "name": "Production API Key",
  "environment": "production",
  "permissions": [
    "transactions:read",
    "transactions:write",
    "merchants:read",
    "webhooks:manage"
  ],
  "expires_in_days": 365
}
```

**Response:**
```json
{
  "key": {
    "id": "key_prod_7891234",
    "secret": "sk_prod_789123xyz456abc...",
    "permissions": ["transactions:read", "transactions:write", "merchants:read", "webhooks:manage"],
    "created_at": "2024-03-18T10:30:00Z",
    "expires_at": "2025-03-18T10:30:00Z"
  },
  "instructions": {
    "storage": "Store securely in environment variables",
    "rotation": "Rotate every 90 days",
    "revocation": "Can be revoked via /v1/auth/keys/{key_id}/revoke"
  }
}
```

### 2. Authentication Methods

#### 2.1 Bearer Token
```http
GET /v1/transactions
Authorization: Bearer sk_prod_789123xyz456abc...
```

#### 2.2 HMAC Authentication
For webhooks and high-security endpoints:

```typescript
const timestamp = Math.floor(Date.now() / 1000).toString();
const message = `${timestamp}.${JSON.stringify(requestBody)}`;
const signature = crypto
  .createHmac('sha256', API_SECRET)
  .update(message)
  .digest('hex');

const headers = {
  'X-Solomon-Timestamp': timestamp,
  'X-Solomon-Signature': signature
};
```

#### 2.3 OAuth2 (for platform integrations)

```http
POST /v1/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id=YOUR_CLIENT_ID
&client_secret=YOUR_CLIENT_SECRET
&scope=transactions:read merchants:read
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "transactions:read merchants:read"
}
```

### 3. Security Features

#### 3.1 Request Signing
All requests must be signed when using HMAC authentication:

```typescript
interface SignedRequest {
  method: string;
  path: string;
  timestamp: number;
  body?: string;
  signature: string;
}

function signRequest(request: SignedRequest, apiSecret: string): string {
  const message = [
    request.method,
    request.path,
    request.timestamp,
    request.body || ''
  ].join('.');

  return crypto
    .createHmac('sha256', apiSecret)
    .update(message)
    .digest('hex');
}
```

#### 3.2 Webhook Security
Verify incoming webhooks:

```typescript
function verifyWebhook(
  payload: string,
  signature: string,
  timestamp: string,
  webhookSecret: string
): boolean {
  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(`${timestamp}.${payload}`)
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}
```

#### 3.3 Rate Limiting
```http
HTTP/1.1 429 Too Many Requests
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1516131940
```

## Detailed Examples

### 1. Transaction Enrichment

#### 1.1 Basic Transaction Enrichment

```http
POST /v1/transactions/enrich
Authorization: Bearer sk_prod_789123xyz456abc
Content-Type: application/json

{
  "transaction": {
    "id": "tx_123456789",
    "timestamp": "2024-03-18T10:30:00Z",
    "amount": 99.99,
    "currency": "USD",
    "merchant_name": "STARBUCKS",
    "card_last_four": "1234"
  },
  "enrichment_options": {
    "merchant_details": true,
    "location_intelligence": true,
    "fraud_check": true
  }
}
```

**Success Response:**
```json
{
  "transaction_id": "tx_123456789",
  "enrichment_id": "enr_987654321",
  "status": "success",
  "enriched_data": {
    "merchant": {
      "name": "Starbucks",
      "normalized_name": "STARBUCKS_COFFEE_COMPANY",
      "legal_name": "Starbucks Corporation",
      "website": "https://www.starbucks.com",
      "industry": {
        "category": "Food and Beverage",
        "subcategory": "Coffee Shops",
        "mcc": "5814"
      },
      "contact": {
        "phone": "+1-800-782-7282",
        "email": "customercare@starbucks.com",
        "social_media": {
          "twitter": "@Starbucks",
          "facebook": "Starbucks",
          "instagram": "starbucks"
        }
      },
      "business_details": {
        "registration_number": "XXXX-YYYY-ZZZZ",
        "tax_id": "91-1xxxxx",
        "founded_year": 1971,
        "employee_count_range": "10000+"
      }
    },
    "location": {
      "coordinates": {
        "latitude": 40.7128,
        "longitude": -74.0060,
        "accuracy": 0.95
      },
      "address": {
        "street": "123 Broadway",
        "city": "New York",
        "state": "NY",
        "postal_code": "10013",
        "country": "US",
        "formatted": "123 Broadway, New York, NY 10013"
      },
      "area_details": {
        "type": "urban",
        "timezone": "America/New_York",
        "demographics": {
          "population_density": 27012,
          "median_income": 82123,
          "age_distribution": {
            "0-18": 0.15,
            "19-35": 0.45,
            "36-50": 0.25,
            "51+": 0.15
          }
        }
      }
    },
    "risk_assessment": {
      "score": 0.92,
      "level": "low",
      "factors": {
        "merchant_risk": 0.95,
        "location_risk": 0.90,
        "amount_risk": 0.93,
        "velocity_risk": 0.91
      },
      "flags": [],
      "recommendations": []
    }
  },
  "metadata": {
    "processed_at": "2024-03-18T10:30:05Z",
    "processing_time_ms": 250,
    "data_sources": [
      "merchant_db",
      "location_service",
      "risk_engine"
    ]
  }
}
```

#### 1.2 Receipt Processing with Transaction

```http
POST /v1/receipts/process
Authorization: Bearer sk_prod_789123xyz456abc
Content-Type: multipart/form-data
Boundary: ------------------------boundary123456789

---------------------------boundary123456789
Content-Disposition: form-data; name="transaction_id"

tx_123456789
---------------------------boundary123456789
Content-Disposition: form-data; name="file"; filename="receipt.jpg"
Content-Type: image/jpeg

[Binary receipt image data]
---------------------------boundary123456789
Content-Disposition: form-data; name="options"

{
  "ocr_engine": "premium",
  "extract_line_items": true,
  "verify_amounts": true
}
---------------------------boundary123456789--
```

**Success Response:**
```json
{
  "receipt_id": "rct_987654321",
  "transaction_id": "tx_123456789",
  "status": "success",
  "data": {
    "merchant": {
      "name": "Starbucks",
      "address": "123 Broadway, New York, NY 10013",
      "phone": "+1-212-555-0123",
      "tax_id": "91-1xxxxx"
    },
    "transaction": {
      "date": "2024-03-18T10:28:33Z",
      "total": 99.99,
      "subtotal": 91.99,
      "tax": 8.00,
      "tip": 0.00
    },
    "line_items": [
      {
        "description": "Venti Caffe Latte",
        "quantity": 2,
        "unit_price": 4.95,
        "total": 9.90,
        "category": "Beverages"
      },
      {
        "description": "Bacon Gouda Sandwich",
        "quantity": 1,
        "unit_price": 4.95,
        "total": 4.95,
        "category": "Food"
      }
    ],
    "payment": {
      "method": "VISA",
      "card_last_four": "1234",
      "authorization_code": "AUTH123456"
    }
  },
  "meta": {
    "confidence_score": 0.98,
    "processing_time_ms": 1250,
    "original_file": {
      "name": "receipt.jpg",
      "size": 1024567,
      "mime_type": "image/jpeg"
    }
  }
}
```

### 2. Bulk Processing

#### 2.1 Bulk Transaction Upload

```http
POST /v1/transactions/enrich/bulk
Authorization: Bearer sk_prod_789123xyz456abc
Content-Type: application/json

{
  "transactions": [
    {
      "id": "tx_123456789",
      "timestamp": "2024-03-18T10:30:00Z",
      "amount": 99.99,
      "currency": "USD",
      "merchant_name": "STARBUCKS"
    },
    {
      "id": "tx_123456790",
      "timestamp": "2024-03-18T10:35:00Z",
      "amount": 25.50,
      "currency": "USD",
      "merchant_name": "UBER"
    }
  ],
  "options": {
    "batch_size": 100,
    "priority": "normal",
    "callback_url": "https://api.yourapp.com/webhooks/enrichment",
    "error_handling": "continue"
  }
}
```

**Initial Response:**
```json
{
  "batch_id": "batch_123456789",
  "status": "processing",
  "total_transactions": 2,
  "estimated_completion_time": "2024-03-18T10:31:00Z",
  "callback_url": "https://api.yourapp.com/webhooks/enrichment",
  "results_url": "https://api.solomon-ai.co/v1/transactions/enrich/bulk/batch_123456789"
}
```

#### 2.2 Webhook Notification (When Complete)

```http
POST https://api.yourapp.com/webhooks/enrichment
X-Solomon-Signature: sha256=...
X-Solomon-Timestamp: 1710751860

{
  "event": "batch.completed",
  "batch_id": "batch_123456789",
  "timestamp": "2024-03-18T10:31:00Z",
  "summary": {
    "total": 2,
    "successful": 2,
    "failed": 0
  },
  "results_url": "https://api.solomon-ai.co/v1/transactions/enrich/bulk/batch_123456789"
}
```

### 3. Error Handling Examples

#### 3.1 Rate Limit Error
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1516131940

{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Rate limit exceeded. Please retry after 2024-03-18T10:32:20Z",
    "details": {
      "limit": 100,
      "remaining": 0,
      "reset_at": "2024-03-18T10:32:20Z",
      "retry_after": 80
    }
  }
}
```

#### 3.2 Validation Error
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "error": {
    "code": "validation_error",
    "message": "The request was invalid",
    "details": {
      "fields": {
        "transaction.amount": "must be a positive number",
        "transaction.timestamp": "must be a valid ISO8601 datetime"
      }
    }
  }
}
```

#### 3.3 Authentication Error
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json

{
  "error": {
    "code": "invalid_authentication",
    "message": "Invalid API key provided",
    "details": {
      "reason": "expired_key",
      "expired_at": "2024-03-17T00:00:00Z"
    }
  }
}
```

## Best Practices for Security

1. **API Key Management**
   - Store keys securely in environment variables
   - Rotate keys every 90 days
   - Use different keys for different environments
   - Implement key expiration and automatic rotation

2. **Request Signing**
   - Sign all requests using HMAC
   - Include timestamp in signature
   - Verify webhook signatures
   - Implement replay attack prevention

3. **Rate Limiting**
   - Implement client-side rate limiting
   - Use exponential backoff for retries
   - Monitor rate limit headers
   - Cache frequently accessed data

4. **Error Handling**
   - Implement proper error handling
   - Log security-related errors
   - Monitor failed authentication attempts
   - Implement circuit breakers for failing endpoints

5. **Data Security**
   - Encrypt sensitive data in transit and at rest
   - Implement proper access controls
   - Regular security audits
   - Compliance with PCI DSS, GDPR, etc.

6. **Webhook Security**
   - Verify webhook signatures
   - Use HTTPS endpoints
   - Implement retry logic
   - Monitor webhook failures
