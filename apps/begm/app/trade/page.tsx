'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { Search, TrendingUp, TrendingDown, ChevronDown } from 'lucide-react'

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

const top100Symbols = [
  { symbol: 'NASDAQ:AAPL', name: 'Apple Inc.' },
  { symbol: 'NASDAQ:MSFT', name: 'Microsoft Corporation' },
  { symbol: 'NASDAQ:GOOGL', name: 'Alphabet Inc.' },
  { symbol: 'NASDAQ:AMZN', name: 'Amazon.com Inc.' },
  { symbol: 'NASDAQ:NVDA', name: 'NVIDIA Corporation' },
  { symbol: 'NASDAQ:TSLA', name: 'Tesla Inc.' },
  { symbol: 'NASDAQ:META', name: 'Meta Platforms Inc.' },
  { symbol: 'NYSE:BRK.B', name: 'Berkshire Hathaway' },
  { symbol: 'NYSE:V', name: 'Visa Inc.' },
  { symbol: 'NYSE:UNH', name: 'UnitedHealth Group' },
  { symbol: 'NYSE:JNJ', name: 'Johnson & Johnson' },
  { symbol: 'NYSE:WMT', name: 'Walmart Inc.' },
  { symbol: 'NYSE:JPM', name: 'JPMorgan Chase' },
  { symbol: 'NASDAQ:XOM', name: 'Exxon Mobil' },
  { symbol: 'NYSE:LLY', name: 'Eli Lilly' },
  { symbol: 'NASDAQ:AVGO', name: 'Broadcom Inc.' },
  { symbol: 'NYSE:PG', name: 'Procter & Gamble' },
  { symbol: 'NASDAQ:ORCL', name: 'Oracle Corporation' },
  { symbol: 'NYSE:MA', name: 'Mastercard' },
  { symbol: 'NYSE:HD', name: 'Home Depot' },
  { symbol: 'NYSE:CVX', name: 'Chevron Corporation' },
  { symbol: 'NASDAQ:COST', name: 'Costco Wholesale' },
  { symbol: 'NYSE:ABBV', name: 'AbbVie Inc.' },
  { symbol: 'NASDAQ:NFLX', name: 'Netflix Inc.' },
  { symbol: 'NYSE:MRK', name: 'Merck & Co.' },
  { symbol: 'NASDAQ:ASML', name: 'ASML Holding' },
  { symbol: 'NYSE:KO', name: 'Coca-Cola Company' },
  { symbol: 'NASDAQ:PEP', name: 'PepsiCo Inc.' },
  { symbol: 'NASDAQ:ADBE', name: 'Adobe Inc.' },
  { symbol: 'NYSE:TMO', name: 'Thermo Fisher' },
  { symbol: 'NASDAQ:CSCO', name: 'Cisco Systems' },
  { symbol: 'NYSE:BAC', name: 'Bank of America' },
  { symbol: 'NASDAQ:INTC', name: 'Intel Corporation' },
  { symbol: 'NASDAQ:CMCSA', name: 'Comcast Corporation' },
  { symbol: 'NYSE:DIS', name: 'Walt Disney' },
  { symbol: 'NASDAQ:AMD', name: 'AMD' },
  { symbol: 'NYSE:NKE', name: 'Nike Inc.' },
  { symbol: 'NASDAQ:QCOM', name: 'Qualcomm Inc.' },
  { symbol: 'BINANCE:BTCUSDT', name: 'Bitcoin' },
  { symbol: 'BINANCE:ETHUSDT', name: 'Ethereum' },
  { symbol: 'BINANCE:BNBUSDT', name: 'Binance Coin' },
  { symbol: 'BINANCE:SOLUSDT', name: 'Solana' },
  { symbol: 'BINANCE:XRPUSDT', name: 'Ripple' },
  { symbol: 'BINANCE:ADAUSDT', name: 'Cardano' },
  { symbol: 'BINANCE:DOGEUSDT', name: 'Dogecoin' },
  { symbol: 'FX:EURUSD', name: 'EUR/USD' },
  { symbol: 'FX:GBPUSD', name: 'GBP/USD' },
  { symbol: 'FX:USDJPY', name: 'USD/JPY' },
  { symbol: 'FX:AUDUSD', name: 'AUD/USD' },
  { symbol: 'FX:USDCAD', name: 'USD/CAD' },
  { symbol: 'GOLD', name: 'Gold' },
  { symbol: 'SILVER', name: 'Silver' },
  { symbol: 'CRUDE_OIL', name: 'Crude Oil' },
]

export default function TradePage() {
  const [currentSymbol, setCurrentSymbol] = useState('NASDAQ:AAPL')
  const [searchTerm, setSearchTerm] = useState('')
  const [widget, setWidget] = useState<any>(null)
  const [showSymbolDropdown, setShowSymbolDropdown] = useState(false)
  const [symbolFilter, setSymbolFilter] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSymbolDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSymbolChange = (symbol: string) => {
    setCurrentSymbol(symbol)
    setShowSymbolDropdown(false)
    setSymbolFilter('')
    if (widget && widget.setSymbol) {
      widget.setSymbol(symbol, 'D')
    }
  }

  const filteredSymbols = top100Symbols.filter(item =>
    symbolFilter === '' ||
    item.name.toLowerCase().includes(symbolFilter.toLowerCase()) ||
    item.symbol.toLowerCase().includes(symbolFilter.toLowerCase())
  )

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

          {/* Current Symbol & Status - Clickable Dropdown */}
          <div className="flex items-center gap-3 relative" ref={dropdownRef}>
            <button
              onClick={() => setShowSymbolDropdown(!showSymbolDropdown)}
              className="flex items-center gap-2 text-sm hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
            >
              <span className="text-white/60">Trading:</span>
              <span className="text-white font-semibold">{currentSymbol}</span>
              <ChevronDown size={16} className={`text-white/60 transition-transform ${showSymbolDropdown ? 'rotate-180' : ''}`} />
            </button>
            <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
              Live
            </span>

            {/* Symbol Dropdown */}
            {showSymbolDropdown && (
              <div className="absolute top-full left-0 mt-2 w-96 bg-primary/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50">
                {/* Search within dropdown */}
                <div className="p-3 border-b border-white/10">
                  <input
                    type="text"
                    placeholder="Search symbols..."
                    value={symbolFilter}
                    onChange={(e) => setSymbolFilter(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-accent/50"
                    autoFocus
                  />
                </div>
                {/* Symbols List */}
                <div className="max-h-96 overflow-y-auto">
                  {filteredSymbols.map((item) => (
                    <button
                      key={item.symbol}
                      onClick={() => handleSymbolChange(item.symbol)}
                      className={`w-full text-left px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 ${
                        currentSymbol === item.symbol ? 'bg-accent/20 text-accent' : 'text-white/80'
                      }`}
                    >
                      <div className="font-semibold text-sm">{item.name}</div>
                      <div className="text-xs text-white/50">{item.symbol}</div>
                    </button>
                  ))}
                  {filteredSymbols.length === 0 && (
                    <div className="px-4 py-8 text-center text-white/50 text-sm">
                      No symbols found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Trading Interface */}
      <div className="flex" style={{ height: 'calc(100vh - 8.5rem)' }}>
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
