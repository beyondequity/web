'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-primary/50 backdrop-blur-xl">
      {/* Download Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">Download Mobile App</h3>
          <p className="text-white/70 mb-6">Trade on the go with our award-winning mobile app</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="https://apps.apple.com/us/app/beyondequity" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/20"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              Download on App Store
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.beyondequity" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/20"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>
          <h4 className="text-lg font-semibold text-white mb-4">Desktop & Web Platforms</h4>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link href="/download/mac" className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/20">
              Mac
            </Link>
            <Link href="/download/windows" className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/20">
              Windows
            </Link>
            <Link href="/web-trading" className="px-6 py-2 bg-success hover:bg-success/90 text-white rounded-lg transition-colors border border-success font-semibold">
              Web Trading
            </Link>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className="text-white font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-white text-sm transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white text-sm transition-colors">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-white/70 hover:text-white text-sm transition-colors">
                  HELP
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">PRODUCTS</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/pro-trader" className="text-white/70 hover:text-white text-sm transition-colors">
                  Pro Trader™
                </Link>
              </li>
              <li>
                <Link href="/products/elite-pro-trader" className="text-white/70 hover:text-white text-sm transition-colors">
                  Elite Pro Trader™
                </Link>
              </li>
              <li>
                <Link href="/products/global-marketplace" className="text-white/70 hover:text-white text-sm transition-colors">
                  Global Marketplace™
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">RESOURCES</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/download" className="text-white/70 hover:text-white text-sm transition-colors">
                  DOWNLOAD
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-white/70 hover:text-white text-sm transition-colors">
                  LEARN
                </Link>
              </li>
              <li>
                <Link href="/institutional" className="text-white/70 hover:text-white text-sm transition-colors">
                  INSTITUTIONAL
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">ACCOUNT</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/signup" className="text-white/70 hover:text-white text-sm transition-colors">
                  OPEN ACCOUNT
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-white/70 hover:text-white text-sm transition-colors">
                  LOG IN
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">LEGAL</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white text-sm transition-colors">
                  TERMS & CONDITIONS
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Member Of Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex items-center justify-center space-x-6 mb-6">
            <span className="text-white/70 text-sm">Member of:</span>
            <div className="flex items-center space-x-4 text-white/90 font-semibold text-sm">
              <span>FINRA</span>
              <span>•</span>
              <span>SIPC</span>
              <span>•</span>
              <span>NYSE</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-white/10 pt-8 space-y-4 text-white/60 text-xs leading-relaxed">
          <p>
            <strong className="text-white/80">BeyondEquity</strong> is a trading platform offered by BeyondEquity Inc. Securities products and brokerage services available through the BeyondEquity App are offered by BeyondEquity Securities, Inc. BeyondEquity Securities, Inc. is a member of FINRA, SIPC, and NYSE, 437 Madison Ave, 27th Floor, New York, NY 10022. For further information about BeyondEquity Securities, Inc., see FINRA BrokerCheck.
          </p>

          <p>
            All investments involve risk, including possible loss of principal. The past performance of a security, market, or financial product does not guarantee future results. Electronic trading poses unique risk to investors. System response and access times may vary due to market conditions, system performance, and other factors. Market volatility, volume, and system availability may delay account access and trade executions.
          </p>

          <p>
            $0.00 commission applies to online U.S. equity trades and exchange-traded funds (ETFs) in a BeyondEquity retail account only for BeyondEquity Securities, Inc. retail clients. Sell orders are subject to an activity assessment fee. Other exclusions and conditions may apply. Institutional accounts, OTC securities trading and other types of high-touch services are subject to different commission schedules.
          </p>

          <p>
            Margin may not be suitable for all investors due to the risks associated with using leverage. Please review the Margin Disclosure Statement to determine whether a margin account aligns with your investment objectives and risk tolerance.
          </p>

          <p>
            IPOs involve substantial risk and are not appropriate for every investor. Customers should read the offering prospectus carefully and make their own determination of whether an investment in the offering is consistent with their investment objectives, financial situation, and risk tolerance.
          </p>

          <p>
            Options trading entails significant risk and is not appropriate for all investors. Certain complex options strategies carry additional risk. Before trading options, please read Characteristics and Risks of Standardized Options.
          </p>

          <p>
            High-yield/non-investment-grade bonds involve greater price volatility and risk of default than investment-grade bonds. Any fixed income security sold or redeemed prior to maturity may be subject to loss. Diversification and asset allocation do not ensure a profit or guarantee against loss.
          </p>

          <p>
            No content on the website shall be considered a recommendation or solicitation for the purchase or sale of securities, futures or other investment products. All information and data on the website are for reference only and no historical data shall be considered as the basis for judging future trends.
          </p>

          <div className="pt-4 space-y-2">
            <div className="flex flex-wrap gap-4 text-xs">
              <Link href="/customer-relationship-summary" className="hover:text-white transition-colors">
                Customer Relationship Summary
              </Link>
              <Link href="/sec-rule-606" className="hover:text-white transition-colors">
                SEC RULE 606
              </Link>
              <Link href="/extended-hours-risk" className="hover:text-white transition-colors">
                Extended Hours Trading Risk Disclosure
              </Link>
              <Link href="/agreements" className="hover:text-white transition-colors">
                Agreements & Statements
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center">
          <p className="text-white/60 text-xs">
            ©{new Date().getFullYear()} Beyond Equity Global Market. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
