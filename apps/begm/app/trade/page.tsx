'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Search, TrendingUp, TrendingDown } from 'lucide-react'

declare global {
  interface Window {
    TradingView: any
  }
}

const popularSymbols = [
  { symbol: 'NASDAQ:AAPL', name: 'Apple' },
  { symbol: 'NASDAQ:MSFT', name: 'Microsoft' },
  { symbol: 'NASDAQ:GOOGL', name: 'Google' },
  { symbol: 'NASDAQ:TSLA', name: 'Tesla' },
  { symbol: 'BINANCE:BTCUSDT', name: 'Bitcoin' },
  { symbol: 'BINANCE:ETHUSDT', name: 'Ethereum' },
  { symbol: 'FX:EURUSD', name: 'EUR/USD' },
  { symbol: 'GOLD', name: 'Gold' },
]

export default function TradePage() {
  const [currentSymbol, setCurrentSymbol] = useState('NASDAQ:AAPL')
  const [searchTerm, setSearchTerm] = useState('')
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
          studies: ['STD;SMA'],
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

  const handleSymbolChange = (symbol: string) => {
    setCurrentSymbol(symbol)
    if (widget && widget.setSymbol) {
      widget.setSymbol(symbol, 'D')
    }
  }

  return (
    <div className="bg-primary">
      {/* Info Bar */}
      <div className="bg-primary/95 backdrop-blur-sm border-b border-white/10 px-4 py-2">
        <div className="flex items-center justify-between gap-4">
          {/* Symbol Search */}
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
              <input
                type="text"
                placeholder="Search symbol (e.g., AAPL, BTC, EUR/USD)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchTerm) {
                    handleSymbolChange(searchTerm.toUpperCase())
                    setSearchTerm('')
                  }
                }}
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-accent/50"
              />
            </div>
          </div>

          {/* Current Symbol & Status */}
          <div className="flex items-center gap-3">
            <div className="text-sm">
              <span className="text-white/60">Trading:</span>
              <span className="text-white font-semibold ml-2">{currentSymbol}</span>
            </div>
            <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
              Live
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Link
              href="/signup"
              className="px-3 py-1.5 bg-accent hover:bg-accent/90 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              Sign Up
            </Link>
            <Link
              href="/demo"
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg transition-colors"
            >
              Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Trading Interface */}
      <div className="flex" style={{ height: 'calc(100vh - 8.5rem)' }}>
        {/* Left Sidebar - Quick Symbols */}
        <div className="w-48 bg-primary/50 border-r border-white/10 overflow-y-auto">
          <div className="p-3">
            <h3 className="text-xs font-semibold text-white/60 uppercase mb-3">Quick Access</h3>
            <div className="space-y-1">
              {popularSymbols.map((item) => (
                <button
                  key={item.symbol}
                  onClick={() => handleSymbolChange(item.symbol)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    currentSymbol === item.symbol
                      ? 'bg-accent/20 text-accent border border-accent/30'
                      : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-white/50">{item.symbol.split(':')[1] || item.symbol}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center - Chart */}
        <div className="flex-1 relative">
          <div id="tradingview_chart" className="absolute inset-0" />
        </div>

        {/* Right Sidebar - Trade Panel */}
        <div className="w-80 bg-primary/50 border-l border-white/10 overflow-y-auto">
          <div className="p-4">
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
