'use client'

import { useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function SymbolDetailPage() {
  const params = useParams()
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)

  // Decode the symbol parameter (e.g., "NASDAQ:AAPL" might be encoded)
  const symbol = decodeURIComponent(params.symbol as string).toUpperCase()

  // Parse exchange and ticker from symbol (format: "EXCHANGE:TICKER" or just "TICKER")
  const [exchange, ticker] = symbol.includes(':') ? symbol.split(':') : ['', symbol]
  const displayName = ticker || symbol

  useEffect(() => {
    if (!containerRef.current) return

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify({
      "symbols": [
        [displayName, symbol + "|1D"]
      ],
      "chartOnly": false,
      "width": "100%",
      "height": "100%",
      "locale": "en",
      "colorTheme": "dark",
      "autosize": true,
      "showVolume": true,
      "showMA": true,
      "hideDateRanges": false,
      "hideMarketStatus": false,
      "hideSymbolLogo": false,
      "scalePosition": "right",
      "scaleMode": "Normal",
      "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      "fontSize": "10",
      "noTimeScale": false,
      "valuesTracking": "1",
      "changeMode": "price-and-percent",
      "chartType": "area",
      "lineWidth": 2,
      "lineType": 0,
      "dateRanges": [
        "1d|1",
        "1m|30",
        "3m|60",
        "12m|1D",
        "60m|1W",
        "all|1M"
      ],
      "upColor": "#22ab94",
      "downColor": "#f7525f",
      "borderUpColor": "#22ab94",
      "borderDownColor": "#f7525f",
      "wickUpColor": "#22ab94",
      "wickDownColor": "#f7525f",
      "backgroundColor": "#0a0f14",
      "gridLineColor": "rgba(242, 242, 242, 0.06)",
      "fontColor": "rgb(106, 109, 120)",
      "widgetFontColor": "#DBDBDB",
      "isTransparent": false,
      "volumeUpColor": "rgba(34, 171, 148, 0.5)",
      "volumeDownColor": "rgba(247, 82, 95, 0.5)"
    })

    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current && containerRef.current.contains(script)) {
        containerRef.current.removeChild(script)
      }
    }
  }, [symbol, displayName])

  return (
    <div className="min-h-screen bg-primary">

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{displayName}</h1>
              <p className="text-white/60">
                {exchange ? `${exchange} Exchange` : 'Symbol Overview'}
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/trade"
                className="px-6 py-2.5 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-all shadow-lg"
              >
                Trade {ticker}
              </Link>
              <Link
                href="/markets/stocks"
                className="px-6 py-2.5 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/5 transition-all"
              >
                View All Markets
              </Link>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-xl overflow-hidden border border-white/10" style={{ height: 'calc(100vh - 280px)', minHeight: '600px' }}>
          <div
            ref={containerRef}
            className="tradingview-widget-container h-full"
            style={{ height: '100%', width: '100%' }}
          >
            <div className="tradingview-widget-container__widget h-full"></div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/trade"
            className="glass-effect rounded-lg p-6 text-center hover:border-success/50 transition-all group"
          >
            <div className="text-2xl mb-2">📊</div>
            <div className="font-semibold text-white group-hover:text-success transition-colors">Advanced Charts</div>
            <div className="text-xs text-white/60 mt-1">Full trading platform</div>
          </Link>
          <Link
            href="/markets/stocks"
            className="glass-effect rounded-lg p-6 text-center hover:border-success/50 transition-all group"
          >
            <div className="text-2xl mb-2">📈</div>
            <div className="font-semibold text-white group-hover:text-success transition-colors">Stock Markets</div>
            <div className="text-xs text-white/60 mt-1">Browse all stocks</div>
          </Link>
          <Link
            href="/markets/crypto"
            className="glass-effect rounded-lg p-6 text-center hover:border-success/50 transition-all group"
          >
            <div className="text-2xl mb-2">₿</div>
            <div className="font-semibold text-white group-hover:text-success transition-colors">Crypto</div>
            <div className="text-xs text-white/60 mt-1">Cryptocurrency markets</div>
          </Link>
          <Link
            href="/signup"
            className="glass-effect rounded-lg p-6 text-center hover:border-success/50 transition-all group"
          >
            <div className="text-2xl mb-2">🚀</div>
            <div className="font-semibold text-white group-hover:text-success transition-colors">Start Trading</div>
            <div className="text-xs text-white/60 mt-1">Create free account</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
