# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Beyond Equity Global Marketplace (BEGM) is a modern commission-free trading platform supporting stocks, crypto, options, and commodities. This is a **pnpm monorepo** using **Turbo** for build orchestration.

**Key Technologies:**
- Next.js 15.5.6 with App Router and React 19.2.0
- Tailwind CSS 4.1.14 for styling
- @hanzo/ui component library (Hanzo AI's UI framework)
- Zustand for state management
- Playwright for E2E testing
- Alpaca API for trading and market data

## Monorepo Structure

```
beyondequity/web/
├── apps/
│   └── begm/              # Main trading platform app (runs on port 3001)
├── packages/
│   ├── analytics/         # Unified analytics (React GA4)
│   ├── portfolio/         # Portfolio data utilities (tsup build)
│   ├── types/             # Shared TypeScript types (tsup build)
│   └── ui/                # Shared UI components (no build - direct TS export)
```

## Essential Commands

### Development
```bash
# Install dependencies (REQUIRED: use pnpm, NOT npm)
pnpm install

# Run all apps in dev mode
pnpm dev

# Run specific app (begm runs on port 3001)
pnpm --filter @beyondequity/begm dev

# Run from within app directory
cd apps/begm && pnpm dev
```

### Building
```bash
# Build all packages and apps (respects dependency order)
pnpm build

# Build specific package
pnpm --filter @beyondequity/types build

# Clean build artifacts
pnpm clean
```

### Testing
```bash
# Run all tests
pnpm test

# Run Playwright tests for begm
pnpm --filter @beyondequity/begm test

# Run type checking
pnpm lint
```

### Formatting
```bash
# Format all files
pnpm format
```

## Package Build Systems

**Important**: Packages use different build systems:

1. **@beyondequity/ui**: No build step - exports TypeScript source directly
   - `build` script is a no-op
   - Components imported directly from `.tsx` files
   - Uses `exports` field to map imports

2. **@beyondequity/types**, **@beyondequity/portfolio**, **@beyondequity/analytics**: Use tsup
   - Build to `dist/` with both CJS and ESM outputs
   - Must run `pnpm build` before consuming
   - Turbo handles build order automatically

## Architecture Patterns

### Next.js App Router Structure (apps/begm)

The app uses Next.js 13+ App Router with file-based routing:

```
app/
├── layout.tsx              # Root layout with analytics providers
├── page.tsx                # Homepage
├── (auth)/                 # Route group for auth pages
├── markets/                # Market overview pages
├── trade/                  # Trading interface
│   └── page.tsx            # TradingView Advanced Chart + Robinhood-style order panel
├── symbol/[symbol]/        # Dynamic symbol detail pages
└── [...other routes]/
```

**Key Conventions:**
- All pages are Server Components by default
- Use `'use client'` directive for client components
- Components in `components/` directory are app-specific
- Shared components come from `@beyondequity/ui`

### Component Imports

**Always prefer @hanzo/ui for base components:**
```typescript
// ✅ CORRECT - Use @hanzo/ui for base components
import { Button, Card } from '@hanzo/ui/primitives'
import { ApplyTypography } from '@hanzo/ui/primitives'

// ✅ CORRECT - Use @beyondequity/ui for app-specific shared components
import { Footer, Logo } from '@beyondequity/ui/components'

// ✅ CORRECT - App-specific components from local directory
import { MarketSwitcher } from '@/components/MarketSwitcher'
```

### State Management

Uses **Zustand** for client-side state:
```typescript
// Store pattern used in the app
import { create } from 'zustand'

const useStore = create((set) => ({
  // state and actions
}))
```

### Trading Page Architecture

The trading interface (`app/trade/page.tsx`) combines:
- **TradingView Advanced Chart**: Full-featured charting widget with built-in symbol selector
- **Robinhood-style Order Panel**: Fixed right panel for order entry and management
- Layout uses absolute positioning to prevent gaps and ensure full coverage

### Styling Approach

**Tailwind CSS 4.1.14** with custom color scheme:
```typescript
// Custom colors (from tailwind.config.ts)
primary: '#0A0A0A'      // Dark background
secondary: '#141414'    // Slightly lighter background
accent: '#1E1E1E'       // UI elements
gold: '#D4AF37'         // Brand accent
gold-light: '#F4E4BC'   // Light gold variant
```

**Class naming patterns:**
- Use utility-first approach
- Responsive prefixes: `md:`, `lg:`, etc.
- Dark mode: project uses dark theme by default
- Framer Motion for animations

### API Integration

**Alpaca API** (lib/alpaca/client.ts):
- Paper trading endpoint: `https://paper-api.alpaca.markets`
- Handles market data and order execution
- Environment variables required:
  - `ALPACA_API_KEY`
  - `ALPACA_API_SECRET`
  - `ALPACA_API_URL`

### Analytics

Uses `@beyondequity/analytics` package with React GA4:
```typescript
// In layout.tsx
import { AnalyticsProvider } from '@beyondequity/analytics/providers'

// Tracks page views and events
```

## Development Workflow

1. **Always run `pnpm install` from monorepo root** - never use npm
2. **Turborepo handles dependency order** - packages build in correct sequence
3. **Changes to packages require rebuild** - except @beyondequity/ui (no build step)
4. **Use pnpm workspaces** - changes to one package immediately available to others
5. **Test with Playwright** - E2E tests for critical user flows

## Important Notes

- **Never use npm or yarn** - this is a pnpm monorepo (packageManager: "pnpm@9.15.4")
- **Always use @hanzo/ui** - per user's global CLAUDE.md instructions
- **Port 3001** - begm app runs on this port by default
- **TradingView widgets** - Use Advanced Chart for full trading interface
- **Workspace protocol** - Dependencies use `workspace:*` for local packages
- **React 19** - Uses latest React version, ensure compatibility

## Deployment

BEGM can be deployed as:
- Static export: `pnpm export` (builds to `out/` directory)
- Server-side rendered: Standard Next.js deployment
- Edge functions: Vercel Edge Runtime compatible

## Environment Variables

Required for full functionality:
```env
# Alpaca API
ALPACA_API_KEY=
ALPACA_API_SECRET=
ALPACA_API_URL=https://paper-api.alpaca.markets

# Analytics
NEXT_PUBLIC_GA_ID=

# Authentication (if using NextAuth)
NEXTAUTH_URL=
NEXTAUTH_SECRET=

# Database (if using)
DATABASE_URL=
```
