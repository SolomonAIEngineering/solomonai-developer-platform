# Transaction Enrichment Service API Specification v1.0

## Base URL
```
https://api.solomon-ai.co/v1
```

## Authentication
All API requests require authentication using Bearer token in the Authorization header:
```
Authorization: Bearer YOUR_API_KEY
```

## API Endpoints

### 1. Transaction Enrichment APIs

#### 1.1 Enrich Single Transaction
```http
POST /transactions/enrich
```

Enriches a single transaction with merchant, location, and fraud detection data.

**Request Body:**
```json
{
  "transaction": {
    "id": "string",
    "timestamp": "ISO8601 string",
    "amount": "decimal",
    "currency": "string",
    "merchant_name": "string?",
    "merchant_url": "string?",
    "card_last_four": "string?",
    "payment_method": "string?",
    "location": {
      "latitude": "decimal?",
      "longitude": "decimal?",
      "address": "string?"
    }
  },
  "enrichment_options": {
    "merchant_details": "boolean?",
    "location_intelligence": "boolean?",
    "fraud_check": "boolean?",
    "categories": "boolean?",
    "detailed_response": "boolean?"
  }
}
```

**Response:**
```json
{
  "transaction_id": "string",
  "enrichment_id": "string",
  "status": "success | processing | failed",
  "enriched_data": {
    "merchant": {
      "name": "string",
      "normalized_name": "string",
      "legal_name": "string?",
      "website": "string?",
      "industry": {
        "category": "string",
        "subcategory": "string",
        "mcc": "string?"
      },
      "contact": {
        "phone": "string?",
        "email": "string?",
        "social_media": {
          "twitter": "string?",
          "facebook": "string?",
          "instagram": "string?"
        }
      },
      "business_details": {
        "registration_number": "string?",
        "tax_id": "string?",
        "founded_year": "integer?",
        "employee_count_range": "string?"
      }
    },
    "location": {
      "coordinates": {
        "latitude": "decimal",
        "longitude": "decimal",
        "accuracy": "decimal"
      },
      "address": {
        "street": "string",
        "city": "string",
        "state": "string",
        "postal_code": "string",
        "country": "string",
        "formatted": "string"
      },
      "area_details": {
        "type": "urban | suburban | rural",
        "timezone": "string",
        "demographics": {
          "population_density": "decimal?",
          "median_income": "decimal?",
          "age_distribution": "object?"
        }
      }
    },
    "risk_assessment": {
      "score": "decimal",
      "level": "low | medium | high",
      "factors": {
        "merchant_risk": "decimal",
        "location_risk": "decimal",
        "amount_risk": "decimal",
        "velocity_risk": "decimal"
      },
      "flags": ["string"],
      "recommendations": ["string"]
    },
    "categories": {
      "primary": "string",
      "secondary": ["string"],
      "tags": ["string"]
    }
  },
  "metadata": {
    "processed_at": "ISO8601 string",
    "processing_time_ms": "integer",
    "data_sources": ["string"]
  }
}
```

#### 1.2 Bulk Transaction Enrichment
```http
POST /transactions/enrich/bulk
```

Process multiple transactions in a single request.

**Request Body:**
```json
{
  "transactions": [{
    // Array of transaction objects (same as single enrichment)
  }],
  "options": {
    "batch_size": "integer?",
    "priority": "high | normal | low",
    "callback_url": "string?",
    "error_handling": "continue | fail_fast"
  }
}
```

**Response:**
```json
{
  "batch_id": "string",
  "status": "processing",
  "total_transactions": "integer",
  "estimated_completion_time": "ISO8601 string",
  "callback_url": "string?",
  "results_url": "string"
}
```

#### 1.3 Check Bulk Processing Status
```http
GET /transactions/enrich/bulk/{batch_id}
```

**Response:**
```json
{
  "batch_id": "string",
  "status": "processing | completed | failed",
  "progress": {
    "total": "integer",
    "processed": "integer",
    "failed": "integer",
    "remaining": "integer"
  },
  "results_url": "string?",
  "error_summary": {
    "count": "integer",
    "types": [{
      "error": "string",
      "count": "integer"
    }]
  }
}
```

### 2. Receipt Processing APIs

#### 2.1 Process Receipt
```http
POST /receipts/process
```

**Request Body (multipart/form-data):**
```
file: binary
transaction_id: string
options: {
  "ocr_engine": "standard | premium",
  "extract_line_items": "boolean",
  "verify_amounts": "boolean"
}
```

**Response:**
```json
{
  "receipt_id": "string",
  "transaction_id": "string",
  "status": "success | processing | failed",
  "data": {
    "merchant": {
      "name": "string",
      "address": "string?",
      "phone": "string?",
      "tax_id": "string?"
    },
    "transaction": {
      "date": "ISO8601 string",
      "time": "string",
      "total": "decimal",
      "subtotal": "decimal?",
      "tax": "decimal?",
      "tip": "decimal?"
    },
    "line_items": [{
      "description": "string",
      "quantity": "integer",
      "unit_price": "decimal",
      "total": "decimal",
      "category": "string?"
    }],
    "payment": {
      "method": "string?",
      "card_last_four": "string?",
      "authorization_code": "string?"
    }
  },
  "meta": {
    "confidence_score": "decimal",
    "processing_time_ms": "integer",
    "original_file": {
      "name": "string",
      "size": "integer",
      "mime_type": "string"
    }
  }
}
```

### 3. Merchant Intelligence APIs

#### 3.1 Merchant Lookup
```http
GET /merchants/lookup
```

**Query Parameters:**
```
name: string
url: string?
location: string?
```

**Response:**
```json
{
  "merchants": [{
    "id": "string",
    "name": "string",
    "confidence_score": "decimal",
    "details": {
      // Merchant details object
    }
  }]
}
```

#### 3.2 Merchant Details
```http
GET /merchants/{merchant_id}
```

**Response:**
```json
{
  "id": "string",
  "basic_info": {
    "name": "string",
    "legal_name": "string?",
    "website": "string?",
    "founded": "string?",
    "status": "active | inactive | suspended"
  },
  "business_details": {
    "type": "string?",
    "registration_number": "string?",
    "tax_id": "string?"
  },
  "locations": [{
    "type": "headquarters | branch",
    "address": {
      // Address object
    },
    "contact": {
      // Contact object
    }
  }],
  "categories": {
    "primary": "string",
    "secondary": ["string"],
    "tags": ["string"]
  },
  "reputation": {
    "score": "decimal?",
    "reviews_count": "integer?",
    "average_rating": "decimal?"
  }
}
```

### 4. Location Intelligence APIs

#### 4.1 Location Enrichment
```http
POST /locations/enrich
```

**Request Body:**
```json
{
  "location": {
    "latitude": "decimal?",
    "longitude": "decimal?",
    "address": "string?"
  },
  "options": {
    "include_demographics": "boolean?",
    "include_risk_factors": "boolean?",
    "include_nearby": "boolean?"
  }
}
```

**Response:**
```json
{
  "location": {
    // Location object with enriched data
  },
  "demographics": {
    // Demographic data if requested
  },
  "risk_factors": {
    // Location-based risk factors if requested
  },
  "nearby": {
    // Nearby points of interest if requested
  }
}
```

### 5. Analytics APIs

#### 5.1 Merchant Analytics
```http
GET /analytics/merchants/{merchant_id}
```

**Query Parameters:**
```
start_date: ISO8601 string
end_date: ISO8601 string
metrics: string[] (comma-separated)
```

**Response:**
```json
{
  "merchant_id": "string",
  "period": {
    "start": "ISO8601 string",
    "end": "ISO8601 string"
  },
  "metrics": {
    "transaction_count": "integer",
    "total_volume": "decimal",
    "average_transaction": "decimal",
    "risk_score_trend": ["decimal"],
    "category_distribution": {
      // Category distribution data
    }
  }
}
```

#### 5.2 Transaction Analytics
```http
POST /analytics/transactions
```

**Request Body:**
```json
{
  "filters": {
    "start_date": "ISO8601 string",
    "end_date": "ISO8601 string",
    "merchants": ["string"],
    "categories": ["string"],
    "amount_range": {
      "min": "decimal?",
      "max": "decimal?"
    }
  },
  "metrics": ["string"],
  "grouping": ["string"],
  "limit": "integer?"
}
```

### 6. Webhook APIs

#### 6.1 Register Webhook
```http
POST /webhooks
```

**Request Body:**
```json
{
  "url": "string",
  "events": ["string"],
  "secret": "string?",
  "description": "string?"
}
```

#### 6.2 List Webhooks
```http
GET /webhooks
```

#### 6.3 Delete Webhook
```http
DELETE /webhooks/{webhook_id}
```

### 7. Configuration APIs

#### 7.1 Update Enrichment Settings
```http
PUT /settings/enrichment
```

**Request Body:**
```json
{
  "default_options": {
    "merchant_details": "boolean",
    "location_intelligence": "boolean",
    "fraud_check": "boolean"
  },
  "processing": {
    "batch_size": "integer",
    "priority": "string",
    "error_handling": "string"
  },
  "webhooks": {
    "enabled": "boolean",
    "events": ["string"]
  }
}
```

## Rate Limits

| Plan | Requests/Minute | Bulk Size | Concurrent Requests |
|------|----------------|-----------|-------------------|
| Basic | 100 | 1,000 | 5 |
| Pro | 1,000 | 10,000 | 20 |
| Enterprise | Custom | Custom | Custom |

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

## Webhook Events

- `transaction.enriched`
- `receipt.processed`
- `merchant.updated`
- `batch.completed`
- `batch.failed`
- `risk.high_alert`

## Best Practices

1. **Batch Processing**
   - Use bulk endpoints for more than 10 transactions
   - Implement retry logic with exponential backoff
   - Store batch_id for status checking

2. **Error Handling**
   - Always check response status codes
   - Implement webhook error handling
   - Log failed transaction IDs

3. **Performance**
   - Cache merchant details when possible
   - Use compression for large requests
   - Implement request rate limiting

4. **Security**
   - Rotate API keys regularly
   - Use HTTPS for webhook endpoints
   - Validate webhook signatures
