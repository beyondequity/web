'use client'

import { useEffect, useRef } from 'react'

export default function TradePage() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const script = document.createElement('script')
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
      script.async = true
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: 'NASDAQ:AAPL',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        allow_symbol_change: true,
        calendar: false,
        hide_top_toolbar: false,
        hide_legend: false,
        save_image: true,
        hide_volume: false,
        support_host: 'https://www.tradingview.com',
        studies: [
          'STD;SMA',
          'STD;EMA', 
          'STD;MACD',
          'STD;RSI',
          'STD;Volume'
        ],
        show_popup_button: true,
        popup_width: '1000',
        popup_height: '650',
        container_id: 'tradingview_chart'
      })
      chartRef.current.appendChild(script)
    }
  }, [])

  return (
    <div className="bg-primary absolute inset-0 top-[7rem]">
      <div 
        ref={chartRef}
        className="tradingview-widget-container w-full h-full"
      >
        <div 
          id="tradingview_chart" 
          className="tradingview-widget-container__widget w-full h-full"
        />
      </div>
    </div>
  )
}
