'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    TradingView: any
    Datafeeds: any
    Brokers: any
    tvWidget: any
    tradingHost: any
  }
}

export default function TradePage() {
  useEffect(() => {
    // Load Charting Library
    const libraryScript = document.createElement('script')
    libraryScript.src = 'https://trading-terminal.tradingview-widget.com/charting_library/charting_library.standalone.js'
    libraryScript.async = false

    // Load UDF Datafeed
    const datafeedScript = document.createElement('script')
    datafeedScript.src = 'https://trading-terminal.tradingview-widget.com/datafeeds/udf/dist/bundle.js'
    datafeedScript.async = false

    // Load Broker Sample
    const brokerScript = document.createElement('script')
    brokerScript.src = 'https://trading-terminal.tradingview-widget.com/broker-sample/dist/bundle.js'
    brokerScript.async = false

    const initializeWidget = () => {
      if (typeof window.TradingView === 'undefined' ||
          typeof window.Datafeeds === 'undefined' ||
          typeof window.Brokers === 'undefined') {
        return
      }

      // Custom Datafeed
      class CustomDatafeed extends window.Datafeeds.UDFCompatibleDatafeed {}

      const datafeed = new CustomDatafeed(
        'https://demo-feed-data.tradingview.com',
        undefined,
        {
          maxResponseLength: 1000,
          expectedOrder: 'latestFirst'
        }
      )

      // Custom Broker with demo positions
      class CustomBroker extends window.Brokers.BrokerDemo {
        constructor(host: any, quotesProvider: any) {
          super(host, quotesProvider)
          this.customPnL = this._host.factory.createWatchedValue(100000)

          // Simulate P&L updates
          setInterval(() => {
            const randomDelta = Math.random() * 10
            this.myCustomUpdate(randomDelta)
          }, 1000)
        }

        accountManagerInfo() {
          const result = super.accountManagerInfo()

          result.customFormatters = [
            {
              name: 'custom-type',
              formatText: (dataFields: any) => {
                return dataFields.values[0]
              }
            }
          ]

          const summaryProps = [
            {
              text: 'Account Balance',
              wValue: this.customPnL,
              formatter: 'fixed'
            }
          ]
          result.summary = summaryProps

          return result
        }

        positions() {
          return new Promise((resolve) => {
            resolve([])
          })
        }

        myCustomUpdate(delta: number) {
          this.customPnL.setValue(100000 + delta * 10)
        }
      }

      // Initialize widget
      const widget = new window.TradingView.widget({
        library_path: 'https://trading-terminal.tradingview-widget.com/charting_library/',
        fullscreen: true,
        symbol: 'NASDAQ:AAPL',
        interval: '1D',
        container: 'tv_chart_container',
        datafeed: datafeed,
        locale: 'en',
        theme: 'dark',
        toolbar_bg: '#0a0a0a',
        overrides: {
          'mainSeriesProperties.candleStyle.upColor': '#22c55e',
          'mainSeriesProperties.candleStyle.downColor': '#ef4444',
          'mainSeriesProperties.candleStyle.borderUpColor': '#22c55e',
          'mainSeriesProperties.candleStyle.borderDownColor': '#ef4444',
          'mainSeriesProperties.candleStyle.wickUpColor': '#22c55e',
          'mainSeriesProperties.candleStyle.wickDownColor': '#ef4444',
        },
        disabled_features: [],
        enabled_features: [
          'study_templates',
          'use_localstorage_for_settings',
          'save_chart_properties_to_local_storage',
        ],
        broker_factory: function (host: any) {
          window.tradingHost = host
          return new CustomBroker(host, datafeed)
        },
        broker_config: {
          configFlags: {
            supportClosePosition: true,
            supportPLUpdate: true,
            supportEditAmount: true,
            supportModifyOrderPrice: true,
            supportModifyBrackets: true,
            supportOrderBrackets: true,
            supportPositionBrackets: true,
            calculatePLUsingLast: true,
            supportOrdersHistory: true
          }
        }
      })

      window.tvWidget = widget
    }

    // Load scripts in sequence
    libraryScript.onload = () => {
      document.head.appendChild(datafeedScript)
      datafeedScript.onload = () => {
        document.head.appendChild(brokerScript)
        brokerScript.onload = () => {
          initializeWidget()
        }
      }
    }

    document.head.appendChild(libraryScript)

    return () => {
      if (window.tvWidget !== null && typeof window.tvWidget.remove === 'function') {
        window.tvWidget.remove()
        window.tvWidget = null
      }
      if (document.head.contains(libraryScript)) {
        document.head.removeChild(libraryScript)
      }
      if (document.head.contains(datafeedScript)) {
        document.head.removeChild(datafeedScript)
      }
      if (document.head.contains(brokerScript)) {
        document.head.removeChild(brokerScript)
      }
    }
  }, [])

  return (
    <div className="bg-primary absolute inset-0 top-[7rem]">
      <div id="tv_chart_container" className="w-full h-full" />
    </div>
  )
}
