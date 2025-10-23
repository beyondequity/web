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
    <div className="bg-primary">
      {/* Page Header */}
      <div className="border-b border-white/10 px-4 py-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Market News</h1>
          <p className="text-white/70">
            Stay updated with the latest market news, analysis, and insights from top financial sources
          </p>
        </div>
      </div>

      {/* TradingView Timeline Widget - Full Height */}
      <div className="container mx-auto px-4 py-4">
        <div className="bg-primary/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
          <div
            ref={containerRef}
            className="tradingview-widget-container"
            style={{ height: 'calc(100vh - 16rem)' }}
          >
            <div className="tradingview-widget-container__widget"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
