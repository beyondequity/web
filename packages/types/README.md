# @beyondequity/types

Shared TypeScript types for the Beyond Alpha ecosystem.

## Overview

This package provides common type definitions used across all Beyond Alpha applications including:
- Portfolio and investment types
- Trading and market data types
- User and account types

## Installation

This package is part of the Beyond Alpha monorepo and is automatically available to all apps and packages within the workspace.

```typescript
import { PortfolioCompany, Asset, User } from '@beyondequity/types'
```

## Type Categories

### Portfolio Types
- `PortfolioCompany` - Investment portfolio company data
- `PortfolioMetrics` - Company performance metrics
- `InvestmentSector` - Investment sector categories
- `InvestmentStage` - Funding stage types
- `PortfolioSummary` - Aggregated portfolio statistics

### Trading Types
- `Asset` - Tradable asset information
- `Position` - Open position data
- `Order` - Trading order information
- `Trade` - Executed trade data
- `Portfolio` - Trading portfolio
- `MarketData` - Real-time market data
- `OptionContract` - Options contract details
- `LeapPromotion` - Promotional leap options

### User Types
- `User` - User account information
- `Account` - Trading account details
- `UserPreferences` - User settings and preferences
- `Session` - Authentication session data

## Development

```bash
# Build the package
pnpm build

# Watch mode
pnpm dev

# Type checking
pnpm lint
```
