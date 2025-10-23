'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

declare global {
  interface Window {
    TradingView: any
  }
}

export default function DemoPage() {
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
    <div className="fixed inset-0 bg-primary flex flex-col">
      {/* Top Bar */}
      <div className="h-14 bg-primary/95 backdrop-blur-sm border-b border-white/10 flex items-center justify-between px-4 z-10">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold text-white">Demo Trading Platform</h1>
          <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
            Practice Mode
          </span>
        </div>
        <Link
          href="/"
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          title="Exit Demo"
        >
          <X size={20} className="text-white/70 hover:text-white" />
        </Link>
      </div>

      {/* TradingView Chart */}
      <div className="flex-1 relative">
        <div id="tradingview_chart" className="absolute inset-0" />
      </div>

      {/* Bottom Info Bar */}
      <div className="h-10 bg-primary/95 backdrop-blur-sm border-t border-white/10 flex items-center justify-center px-4 z-10">
        <p className="text-xs text-white/60">
          Demo account with virtual funds •{' '}
          <Link href="/signup" className="text-accent hover:text-accent/80 underline">
            Create a real account
          </Link>
          {' '}to start trading
        </p>
      </div>
    </div>
  )
}
