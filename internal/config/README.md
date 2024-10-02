# @internal/config

This package contains shared configuration and business logic for Solomon AI applications.

## Overview

The `@internal/config` package serves as a central hub for core business logic, configurations, and shared utilities across different Solomon AI applications. It provides configuration for different user segments: Business, Consumer, and Solopreneur.

## Installation

This package is private and should be installed as a workspace dependency:

```bash
pnpm add @internal/config@workspace:
```

## Usage

Import the desired configuration in your application:

```typescript
import {
  BusinessConfig,
  ConsumerConfig,
  SolopreneurConfig,
} from '@internal/config'
```

## Available Configurations

- `BusinessConfig`: Configuration for business users
- `ConsumerConfig`: Configuration for consumer users
- `SolopreneurConfig`: Configuration for solopreneur users

Each configuration includes:

- Site metadata
- Navigation items
- Pricing plans
- API endpoints
- And more

## Types

The package also exports TypeScript types for the configurations:

```typescript
import { NavItem, PricingPlan, SiteConfig } from '@internal/config'
```

## Development

To work on this package:

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Run type checking:

   ```bash
   pnpm typecheck
   ```

3. Lint the code:

   ```bash
   pnpm lint
   ```

4. Format the code:
   ```bash
   pnpm format
   ```

## Building

This package is not built separately. It's used as-is by other packages in the monorepo.

## Contributing

When making changes to this package, ensure that you update all relevant configurations and maintain type safety.
