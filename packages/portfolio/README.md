# @beyondequity/portfolio

Shared portfolio data and utilities for the Beyond Alpha ecosystem.

## Overview

This package contains the centralized portfolio data for Beyond Alpha Ventures' investment portfolio. It provides:
- Portfolio company data
- Helper functions for filtering and querying companies
- Portfolio summary statistics

All apps in the monorepo can import this package to access the same portfolio data, ensuring consistency across the marketing site (BAV) and trading platform (BEGM).

## Installation

This package is part of the Beyond Alpha monorepo and is automatically available to all apps.

```typescript
import { 
  portfolioCompanies, 
  getPortfolioCompany,
  getCompaniesBySector,
  getPortfolioSummary 
} from '@beyondequity/portfolio'
```

## Usage

### Get all portfolio companies

```typescript
import { portfolioCompanies } from '@beyondequity/portfolio'

console.log(portfolioCompanies) // Array of all portfolio companies
```

### Get a specific company

```typescript
import { getPortfolioCompany } from '@beyondequity/portfolio'

const spacex = getPortfolioCompany('spacex')
console.log(spacex.name) // "SpaceX"
```

### Filter by sector

```typescript
import { getCompaniesBySector } from '@beyondequity/portfolio'

const aiCompanies = getCompaniesBySector('ai')
console.log(aiCompanies.length) // Number of AI companies
```

### Get portfolio summary

```typescript
import { getPortfolioSummary } from '@beyondequity/portfolio'

const summary = getPortfolioSummary()
console.log(summary.totalCompanies) // Total number of companies
console.log(summary.totalValue) // Total portfolio valuation
console.log(summary.sectorDistribution) // Distribution across sectors
```

## Data Structure

Each portfolio company includes:
- Basic information (id, name, description)
- Investment details (sector, stage, date)
- Metrics and performance data
- Updates and milestones

See `@beyondequity/types` for the complete `PortfolioCompany` type definition.

## Development

```bash
# Build the package
pnpm build

# Watch mode
pnpm dev

# Type checking
pnpm lint
```
