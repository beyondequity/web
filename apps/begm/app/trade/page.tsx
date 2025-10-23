'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { TrendingUp, TrendingDown } from 'lucide-react'

declare global {
  interface Window {
    TradingView: any
  }
}

export default function TradePage() {
  const [currentSymbol, setCurrentSymbol] = useState('NASDAQ:AAPL')
  const [widget, setWidget] = useState<any>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/tv.js'
    script.async = true
    script.onload = () => {
      if (typeof window.TradingView !== 'undefined') {
        const newWidget = new window.TradingView.widget({
          autosize: true,
          symbol: currentSymbol,
          interval: 'D',
          timezone: 'America/New_York',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#0a0a0a',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: 'tradingview_chart',
          details: true,
          hotlist: true,
          calendar: true,
          studies: [
            'Volume@tv-basicstudies',
            'MASimple@tv-basicstudies',
            'RSI@tv-basicstudies',
            'MACD@tv-basicstudies'
          ],
          disabled_features: [],
          enabled_features: [
            'study_templates',
            'use_localstorage_for_settings',
            'save_chart_properties_to_local_storage',
            'header_symbol_search',
            'header_compare',
            'header_undo_redo',
            'header_screenshot',
            'header_fullscreen_button',
            'left_toolbar',
            'control_bar',
            'timeframes_toolbar',
            'display_market_status',
            'show_interval_dialog_on_key_press'
          ],
          overrides: {
            'mainSeriesProperties.candleStyle.upColor': '#22c55e',
            'mainSeriesProperties.candleStyle.downColor': '#ef4444',
            'mainSeriesProperties.candleStyle.borderUpColor': '#22c55e',
            'mainSeriesProperties.candleStyle.borderDownColor': '#ef4444',
            'mainSeriesProperties.candleStyle.wickUpColor': '#22c55e',
            'mainSeriesProperties.candleStyle.wickDownColor': '#ef4444',
          },
        })

        // Subscribe to symbol changes
        newWidget.onChartReady(() => {
          newWidget.activeChart().onSymbolChanged().subscribe(null, (symbolData: any) => {
            setCurrentSymbol(symbolData.name)
          })
        })

        setWidget(newWidget)
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
    <div className="bg-primary absolute inset-0 top-[7rem]">
      {/* Trading Interface */}
      <div className="flex h-full">
        {/* Center - Chart */}
        <div className="flex-1 relative">
          <div id="tradingview_chart" className="absolute inset-0" />
        </div>

        {/* Right Sidebar - Trade Panel */}
        <div className="w-80 bg-primary/50 border-l border-white/10 overflow-y-auto">
          <div className="p-4">
            {/* Current Symbol Display */}
            <div className="mb-4 p-3 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-xs text-white/60 mb-1">Trading</div>
              <div className="text-lg font-bold text-white">{currentSymbol}</div>
            </div>

            {/* Buy/Sell Tabs */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                <TrendingUp size={16} />
                Buy
              </button>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                <TrendingDown size={16} />
                Sell
              </button>
            </div>

            {/* Order Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-white/60 mb-1">Order Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-accent/50">
                  <option>Market</option>
                  <option>Limit</option>
                  <option>Stop</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-white/60 mb-1">Amount</label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-accent/50"
                />
              </div>

              <div>
                <label className="block text-xs text-white/60 mb-1">Price (USD)</label>
                <input
                  type="number"
                  placeholder="Market Price"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-accent/50"
                />
              </div>

              <button className="w-full px-4 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors">
                Place Order
              </button>

              <div className="pt-4 border-t border-white/10 text-xs text-white/50 text-center">
                <Link href="/signup" className="text-accent hover:text-accent/80 underline">
                  Create account
                </Link>
                {' '}to start trading
              </div>
            </div>

            {/* Market Stats */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-xs font-semibold text-white/60 uppercase mb-3">Market Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">24h Volume</span>
                  <span className="text-white">$42.5M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">24h High</span>
                  <span className="text-green-400">$262.85</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">24h Low</span>
                  <span className="text-red-400">$255.43</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Market Cap</span>
                  <span className="text-white">$3.81T</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
