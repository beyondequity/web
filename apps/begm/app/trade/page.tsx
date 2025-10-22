'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { X } from 'lucide-react'

export default function TradePage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated
    // In a real app, this would check for a valid session/token
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem('isAuthenticated') === 'true'

      if (!isLoggedIn) {
        // Redirect to login with return URL
        router.push('/login?redirect=/trade')
      } else {
        setIsAuthenticated(true)
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  useEffect(() => {
    if (!isAuthenticated) return

    // Load TradingView Advanced Real-Time Chart Widget
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
          toolbar_bg: '#0a0f14',
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_legend: false,
          save_image: false,
          container_id: 'tradingview_chart',
          studies: [
            'MASimple@tv-basicstudies',
            'RSI@tv-basicstudies',
            'MACD@tv-basicstudies'
          ],
          show_popup_button: true,
          popup_width: '1000',
          popup_height: '650',
          allow_symbol_change: true,
          details: true,
          hotlist: true,
          calendar: true,
          withdateranges: true,
          hide_side_toolbar: false,
          studies_overrides: {},
          overrides: {
            'mainSeriesProperties.candleStyle.upColor': '#10b981',
            'mainSeriesProperties.candleStyle.downColor': '#ef4444',
            'mainSeriesProperties.candleStyle.borderUpColor': '#10b981',
            'mainSeriesProperties.candleStyle.borderDownColor': '#ef4444',
            'mainSeriesProperties.candleStyle.wickUpColor': '#10b981',
            'mainSeriesProperties.candleStyle.wickDownColor': '#ef4444',
            'paneProperties.background': '#0a0f14',
            'paneProperties.backgroundType': 'solid',
            'paneProperties.vertGridProperties.color': '#1a2332',
            'paneProperties.horzGridProperties.color': '#1a2332'
          }
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [isAuthenticated])

  const handleExit = () => {
    router.push('/')
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-primary flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-success mx-auto mb-4"></div>
          <p className="text-white/70">Loading trading platform...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-primary flex flex-col">
      {/* Top Bar with Exit Button */}
      <div className="h-14 bg-primary/95 backdrop-blur-sm border-b border-white/10 flex items-center justify-between px-4 z-10">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold text-white">Beyond Equity Trading Platform</h1>
          <div className="hidden md:flex items-center gap-2 text-sm text-white/60">
            <span>•</span>
            <span>Real-Time Market Data</span>
            <span>•</span>
            <span>Advanced Charting Tools</span>
          </div>
        </div>
        <button
          onClick={handleExit}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
        >
          <X size={18} />
          <span className="hidden sm:inline">Exit Platform</span>
        </button>
      </div>

      {/* Full-Screen TradingView Chart */}
      <div className="flex-1 relative">
        <div
          id="tradingview_chart"
          className="absolute inset-0"
          style={{ height: '100%', width: '100%' }}
        />
      </div>

      {/* Bottom Info Bar */}
      <div className="h-10 bg-primary/95 backdrop-blur-sm border-t border-white/10 flex items-center justify-center px-4 text-xs text-white/50">
        <p>
          <strong className="text-white/70">Demo Mode:</strong> This is a demonstration of our trading platform.
          Login required for live trading. Data provided by TradingView.
        </p>
      </div>
    </div>
  )
}

// Type declaration for TradingView
declare global {
  interface Window {
    TradingView: any
  }
}
