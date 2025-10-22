import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import { AnalyticsProvider, GoogleAnalytics, FacebookPixel, TwitterPixel } from '@beyondequity/analytics/providers'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import './globals.css'

const TickerTape = dynamic(() => import('../components/TickerTape'))

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BEGM - Beyond Equity Global Marketplace',
  description: '$0 commission trading. Trade stocks, crypto, options, and more. 24/5 market access.',
  keywords: ['trading', 'stocks', 'crypto', 'options', 'commission-free', 'investing'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <html lang="en" className="dark">
      <head>
        {isProduction && process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {isProduction && process.env.NEXT_PUBLIC_FB_PIXEL_ID && (
          <FacebookPixel pixelId={process.env.NEXT_PUBLIC_FB_PIXEL_ID} />
        )}
        {isProduction && process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID && (
          <TwitterPixel pixelId={process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID} />
        )}
      </head>
      <body className={inter.className}>
        <AnalyticsProvider
          config={{
            googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
            facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
            twitterPixelId: process.env.NEXT_PUBLIC_TWITTER_PIXEL_ID,
            enabled: isProduction,
          }}
        >
          <Header />
          {/* Sticky Ticker Tape Below Header - On All Pages */}
          <div className="sticky top-16 z-40 bg-primary/95 backdrop-blur-xl border-b border-white/10 shadow-lg">
            <TickerTape />
          </div>
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  )
}
