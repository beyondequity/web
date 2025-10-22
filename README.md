# Beyond Equity Global Marketplace

Trading platform ecosystem for Beyond Equity.

## Project Structure

```
beyondequity/
├── apps/
│   └── begm/          # Beyond Equity Global Marketplace app
└── packages/
    ├── analytics/     # Analytics tracking
    ├── portfolio/     # Portfolio data and utilities
    ├── types/         # Shared TypeScript types
    └── ui/            # Shared UI components
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build all packages and apps
pnpm build

# Run tests
pnpm test
```

## Development

The begm app runs on port 3001 by default:
```bash
cd apps/begm
pnpm dev
```
