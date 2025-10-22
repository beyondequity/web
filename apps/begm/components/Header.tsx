'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary/80 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">BeyondEquity</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button className="text-sm font-medium text-white/90 hover:text-white transition-colors flex items-center gap-1">
                PRODUCTS
                <ChevronDown size={16} className={`transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-primary/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl overflow-hidden">
                  <Link 
                    href="/products/pro-trader" 
                    className="block px-4 py-3 text-sm text-white/90 hover:bg-white/5 hover:text-white transition-colors border-b border-white/5"
                  >
                    <div className="font-semibold">BEGM Pro Trader™</div>
                    <div className="text-xs text-white/60 mt-1">Institutional-grade trading platform</div>
                  </Link>
                  <Link 
                    href="/products/elite-pro-trader" 
                    className="block px-4 py-3 text-sm text-white/90 hover:bg-white/5 hover:text-white transition-colors border-b border-white/5"
                  >
                    <div className="font-semibold">BEGM Elite Pro Trader™</div>
                    <div className="text-xs text-white/60 mt-1">Premium suite for high-frequency trading</div>
                  </Link>
                  <Link 
                    href="/products/global-marketplace" 
                    className="block px-4 py-3 text-sm text-white/90 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    <div className="font-semibold">BEGM Global Marketplace™</div>
                    <div className="text-xs text-white/60 mt-1">Bloomberg Terminal for Private Markets</div>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/invest" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              INVEST
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              PRICING
            </Link>
            <Link href="/learn" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              LEARN
            </Link>
            <Link href="/help" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              HELP
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              LOG IN
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-success text-white text-sm font-medium rounded-lg hover:bg-success/90 transition-all shadow-lg shadow-success/20"
            >
              Join BeyondEquity
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-primary/95 backdrop-blur-xl">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {/* Products Section */}
            <div className="mb-2">
              <div className="px-3 py-2 text-xs font-semibold text-white/60 uppercase">Products</div>
              <Link
                href="/products/pro-trader"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-white transition-colors"
              >
                BEGM Pro Trader™
              </Link>
              <Link
                href="/products/elite-pro-trader"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-white transition-colors"
              >
                BEGM Elite Pro Trader™
              </Link>
              <Link
                href="/products/global-marketplace"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/5 hover:text-white transition-colors"
              >
                BEGM Global Marketplace™
              </Link>
            </div>
            
            <Link
              href="/invest"
              className="block rounded-lg px-3 py-2 text-base font-medium text-white/90 hover:bg-white/5 hover:text-white transition-colors"
            >
              INVEST
            </Link>
            <Link
              href="/pricing"
              className="block rounded-lg px-3 py-2 text-base font-medium text-white/90 hover:bg-white/5 hover:text-white transition-colors"
            >
              PRICING
            </Link>
            <Link
              href="/learn"
              className="block rounded-lg px-3 py-2 text-base font-medium text-white/90 hover:bg-white/5 hover:text-white transition-colors"
            >
              LEARN
            </Link>
            <Link
              href="/help"
              className="block rounded-lg px-3 py-2 text-base font-medium text-white/90 hover:bg-white/5 hover:text-white transition-colors"
            >
              HELP
            </Link>
            <div className="mt-4 space-y-2">
              <Link
                href="/login"
                className="block rounded-lg px-3 py-2 text-base font-medium text-white/90 hover:bg-white/5 hover:text-white transition-colors"
              >
                LOG IN
              </Link>
              <Link
                href="/signup"
                className="block rounded-lg px-3 py-2 text-base font-medium bg-success text-white hover:bg-success/90 transition-colors text-center"
              >
                Join BeyondEquity
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
