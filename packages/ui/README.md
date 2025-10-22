# @beyondequity/ui

Shared UI components for the Beyond Alpha ecosystem, built on top of @hanzo/ui.

## Overview

This package provides brand-specific UI components and wrappers around the powerful @hanzo/ui component library. It ensures consistency across all Beyond Alpha applications while allowing for brand customization.

## Features

- **Built on @hanzo/ui**: Leverages the comprehensive Hanzo UI library (based on shadcn/ui with Radix UI primitives)
- **Brand-specific components**: Custom Header, Footer, and Logo components for Beyond Alpha branding
- **Multi-brand support**: Site definitions for BAV (Beyond Alpha Ventures) and BEGM (Beyond Equity Global Marketplace)
- **Responsive design**: Mobile and desktop optimized components
- **Theme support**: Dark/light mode with next-themes integration
- **Type-safe**: Full TypeScript support with exported types

## Installation

This package is part of the Beyond Alpha monorepo and is automatically available to all apps.

```typescript
import { Header, Footer, Logo } from '@beyondequity/ui'
import { bavSiteDef, begmSiteDef } from '@beyondequity/ui/site-def'
```

## Usage

### Site Definition

Each app should use its appropriate site definition:

```typescript
// apps/bav (Beyond Alpha Ventures)
import { bavSiteDef } from '@beyondequity/ui/site-def'

// apps/begm (Beyond Equity Global Marketplace)
import { begmSiteDef } from '@beyondequity/ui/site-def'
```

### Header Component

```typescript
import { Header } from '@beyondequity/ui'
import { bavSiteDef } from '@beyondequity/ui/site-def'

export default function RootLayout({ children }) {
  return (
    <>
      <Header siteDef={bavSiteDef} />
      {children}
    </>
  )
}
```

### Footer Component

```typescript
import { Footer } from '@beyondequity/ui'
import { bavSiteDef } from '@beyondequity/ui/site-def'

export default function AppFooter() {
  return <Footer siteDef={bavSiteDef} />
}
```

### Logo Component

```typescript
import { Logo } from '@beyondequity/ui'

// Default (BAV branding)
<Logo />

// Custom branding
<Logo 
  companyName="BEGM"
  brandColor="#10B981"
  size="lg"
/>
```

### Using @hanzo/ui Components

All @hanzo/ui components are re-exported for convenience:

```typescript
import { 
  Button, 
  Card, 
  Dialog,
  Input,
  cn 
} from '@beyondequity/ui'

// Use them like regular components
<Button variant="default">Click me</Button>
<Card className={cn('p-4', customClass)}>Content</Card>
```

## Available Components

### Beyond Alpha Components
- `Header` - Responsive header with navigation (desktop + mobile)
- `Footer` - Footer with navigation links and copyright
- `Logo` - Brand logo component with customization options

### Re-exported @hanzo/ui Components
All components from @hanzo/ui/primitives and @hanzo/ui/components are available, including:
- Layout: Card, Separator, Tabs, etc.
- Forms: Input, Button, Select, Checkbox, etc.
- Overlays: Dialog, Popover, Tooltip, etc.
- Navigation: NavigationMenu, NavItems, etc.
- Data: Table, Calendar, etc.
- And many more...

## Customization

### Site Definition

Create a new site definition for additional brands:

```typescript
export const customSiteDef: SiteDef = {
  currentAs: '',
  companyName: 'Your Company',
  brandColor: '#YOURCOLOR',
  nav: {
    common: [
      { href: '/', title: 'Home' },
      // ... more links
    ]
  },
  footer: [
    // ... footer link groups
  ],
  aboveCopyright: legal
}
```

### Theme

This package integrates with Tailwind CSS and next-themes for dark/light mode support. Make sure your app's layout includes the ThemeProvider from next-themes.

## Development

```bash
# Build the package
pnpm build

# Watch mode
pnpm dev

# Type checking
pnpm lint
```

## Dependencies

### Peer Dependencies
- `@hanzo/ui` - Base UI component library
- `next` - Next.js framework
- `react` & `react-dom` - React
- `next-themes` - Theme management
- `lucide-react` - Icon library
- `mobx` & `mobx-react-lite` - State management

### Direct Dependencies
- `framer-motion` - Animations
- `react-social-icons` - Social media icons

## Learn More

- [@hanzo/ui Documentation](https://github.com/hanzoai/react-sdk/tree/main/pkg/ui)
- [Radix UI](https://www.radix-ui.com/)
- [shadcn/ui](https://ui.shadcn.com/)
