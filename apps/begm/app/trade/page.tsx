'use client'

import { useEffect } from 'react'
import Link from 'next/link'

declare global {
  interface Window {
    TradingView: any
  }
}

export default function TradePage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/tv.js'
    script.async = true
    script.onload = () => {
      if (typeof window.TradingView !== 'undefined') {
        new window.TradingView.widget({
          autosize: true,
          symbol: 'NASDAQ:AAPL',
          interval: 'D',
          timezone: 'America/New_York',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#0a0a0a',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: 'tradingview_chart',
          studies: [
            'STD;SMA'
          ],
          disabled_features: [],
          enabled_features: ['study_templates'],
          overrides: {
            'mainSeriesProperties.candleStyle.upColor': '#22c55e',
            'mainSeriesProperties.candleStyle.downColor': '#ef4444',
            'mainSeriesProperties.candleStyle.borderUpColor': '#22c55e',
            'mainSeriesProperties.candleStyle.borderDownColor': '#ef4444',
            'mainSeriesProperties.candleStyle.wickUpColor': '#22c55e',
            'mainSeriesProperties.candleStyle.wickDownColor': '#ef4444',
          },
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="bg-primary">
      {/* Info Bar */}
      <div className="bg-primary/95 backdrop-blur-sm border-b border-white/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-white">Live Trading Platform</h1>
            <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
              Live Markets
            </span>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-sm text-white/80 hidden sm:block">
              Ready to trade with real money?
            </p>
            <Link
              href="/signup"
              className="px-4 py-2 bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Sign Up Now
            </Link>
            <Link
              href="/demo"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors hidden sm:block"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </div>

      {/* TradingView Chart - Full viewport height minus header/ticker/info bar */}
      <div className="relative" style={{ height: 'calc(100vh - 8rem)' }}>
        <div id="tradingview_chart" className="absolute inset-0" />
      </div>
    </div>
  )
}
