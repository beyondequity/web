'use client'

import { useEffect, useRef, memo } from 'react'

function AdvancedChart({ symbol = 'NASDAQ:AAPL' }: { symbol?: string }) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!container.current) return

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol,
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: 'dark',
      style: '1',
      locale: 'en',
      allow_symbol_change: true,
      calendar: false,
      support_host: 'https://www.tradingview.com',
    })

    container.current.appendChild(script)
  }, [symbol])

  return (
    <div className="tradingview-widget-container w-full h-[600px]" ref={container}>
      <div className="tradingview-widget-container__widget h-full"></div>
    </div>
  )
}

export default memo(AdvancedChart)
