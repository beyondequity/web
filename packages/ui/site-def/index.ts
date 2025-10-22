import type { LinkDef } from '@hanzo/ui/types'

export interface SiteDef {
  currentAs: string
  nav: {
    common: LinkDef[]
  }
  footer: LinkDef[][]
  aboveCopyright?: LinkDef[]
  companyName: string
  brandColor: string
  logo?: {
    src: string
    alt: string
  }
}

// Common legal links used across all Beyond Alpha sites
export const legal: LinkDef[] = [
  { href: '/privacy', title: 'Privacy' },
  { href: '/terms', title: 'Terms' },
  { href: '/cookies', title: 'Cookies' }
]

// BAV (Beyond Alpha Ventures) site definition
export const bavSiteDef: SiteDef = {
  currentAs: '',
  companyName: 'Beyond Alpha Ventures',
  brandColor: '#D4AF37',
  nav: {
    common: [
      { href: '/', title: 'Home' },
      { href: '/about', title: 'About' },
      { href: '/portfolio', title: 'Portfolio' },
      { href: '/team', title: 'Team' },
      { href: '/news', title: 'News' },
      { href: '/contact', title: 'Contact' }
    ]
  },
  footer: [
    [
      { href: '/about', title: 'About Us', variant: 'linkFG' as const },
      { href: '/invest', title: 'Investment Philosophy' },
      { href: '/portfolio', title: 'Portfolio' },
      { href: '/team', title: 'Team' }
    ],
    [
      { href: '/news', title: 'News & Updates', variant: 'linkFG' as const },
      { href: '/contact', title: 'Contact' },
      { href: '/institutional', title: 'For Institutions' }
    ],
    [
      { href: 'https://twitter.com/beyondalpha', title: 'Twitter', newTab: true, variant: 'linkFG' as const },
      { href: 'https://linkedin.com/company/beyondalpha', title: 'LinkedIn', newTab: true },
      { href: 'https://github.com/beyondalpha', title: 'GitHub', newTab: true }
    ]
  ],
  aboveCopyright: legal
}

// BEGM (Beyond Equity Global Marketplace) site definition
export const begmSiteDef: SiteDef = {
  currentAs: '',
  companyName: 'Beyond Equity Global Marketplace',
  brandColor: '#10B981', // Green for trading platform
  nav: {
    common: [
      { href: '/', title: 'Home' },
      { href: '/markets', title: 'Markets' },
      { href: '/trade', title: 'Trade' },
      { href: '/portfolio', title: 'Portfolio' },
      { href: '/learn', title: 'Learn' },
      { href: '/about', title: 'About' }
    ]
  },
  footer: [
    [
      { href: '/markets', title: 'Markets', variant: 'linkFG' as const },
      { href: '/stocks', title: 'Stocks' },
      { href: '/crypto', title: 'Crypto' },
      { href: '/options', title: 'Options' },
      { href: '/commodities', title: 'Commodities' }
    ],
    [
      { href: '/learn', title: 'Education', variant: 'linkFG' as const },
      { href: '/learn/crypto', title: 'Crypto Trading' },
      { href: '/learn/options', title: 'Options Trading' },
      { href: '/learn/optimization', title: 'Portfolio Optimization' }
    ],
    [
      { href: '/about', title: 'Company', variant: 'linkFG' as const },
      { href: '/pricing', title: 'Pricing' },
      { href: '/contact', title: 'Contact' },
      { href: '/api', title: 'API' }
    ]
  ],
  aboveCopyright: legal
}

export type { LinkDef }
