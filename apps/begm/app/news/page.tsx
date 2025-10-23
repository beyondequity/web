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
      displayMode: 'regular',
      colorTheme: 'dark',
      locale: 'en',
    })

    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current && containerRef.current.contains(script)) {
        containerRef.current.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="bg-primary" style={{ height: 'calc(100vh - 7rem)' }}>
      {/* Page Header */}
      <div className="border-b border-white/10 px-4 py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-white mb-1">Market News</h1>
          <p className="text-sm text-white/70">
            Stay updated with the latest market news, analysis, and insights
          </p>
        </div>
      </div>

      {/* TradingView Timeline Widget - Full Height */}
      <div
        ref={containerRef}
        className="tradingview-widget-container"
        style={{ height: 'calc(100% - 6rem)' }}
      >
        <div className="tradingview-widget-container__widget" style={{ height: '100%', width: '100%' }}></div>
      </div>
    </div>
  )
}
