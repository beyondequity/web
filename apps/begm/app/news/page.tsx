'use client'

import { useEffect, useRef } from 'react'

export default function NewsPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify({
      feedMode: 'all_symbols',
      isTransparent: false,
      displayMode: 'adaptive',
      colorTheme: 'dark',
      locale: 'en',
      width: '100%',
      height: '100%',
    })

    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current && containerRef.current.contains(script)) {
        containerRef.current.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Market News</h1>
          <p className="text-white/70">
            Stay updated with the latest market news, analysis, and insights from top financial sources
          </p>
        </div>

        {/* TradingView Timeline Widget */}
        <div className="bg-primary/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
          <div
            ref={containerRef}
            className="tradingview-widget-container"
            style={{ minHeight: '800px' }}
          >
            <div className="tradingview-widget-container__widget"></div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-white/50 text-sm">
          <p>News powered by TradingView • Updated in real-time</p>
        </div>
      </div>
    </div>
  )
}
