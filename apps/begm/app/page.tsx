'use client'

import { ArrowRight, TrendingUp, Shield, Zap, BarChart3, Clock, Smartphone } from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useAnalytics } from '@beyondequity/analytics/providers'

const AdvancedChart = dynamic(() => import('../components/AdvancedChart'), { ssr: false })

export default function Home() {
  const { trackEvent } = useAnalytics()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-info/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6">
              <Zap className="text-success" size={16} />
              <span className="text-sm font-semibold text-success">$0 Commission Trading</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Trade Everything.<br />
              <span className="bg-gradient-to-r from-success to-info bg-clip-text text-transparent">
                All Markets. One Platform.
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-1 mb-8 leading-relaxed max-w-3xl mx-auto">
              Stocks, crypto, forex, and commodities with real-time data, advanced analytics, and 24/5 market access.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link
                href="/signup"
                onClick={() => trackEvent({ category: 'CTA', action: 'Click', label: 'Hero Get Started' })}
                className="px-8 py-4 bg-success text-white rounded-lg font-semibold hover:bg-success/90 transition-all inline-flex items-center gap-2 shadow-lg shadow-success/20"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/trade"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Try Demo
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-muted-1 justify-center flex-wrap">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-success" />
                <span>SEC Regulated</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-success" />
                <span>24/5 Trading</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-success" />
                <span>FINRA/SIPC Member</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full View Demo Section - SECOND */}
      <section className="relative bg-secondary min-h-screen flex flex-col">
        {/* Demo Header */}
        <div className="container mx-auto px-4 pt-12 pb-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Full Trading Platform Demo
            </h2>
            <p className="text-xl text-muted-1">
              Experience our professional trading interface. Sign up to start trading with real money.
            </p>
          </div>
        </div>

        {/* Full View Trading Interface */}
        <div className="container mx-auto px-4 pb-12 flex-1 flex items-center">
          <div className="w-full max-w-[1600px] mx-auto">
            <div className="glass-effect rounded-2xl overflow-hidden border-2 border-success/20">
              {/* Trading Toolbar */}
              <div className="bg-primary/80 backdrop-blur-xl p-4 border-b border-white/10">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-success to-info flex items-center justify-center text-white font-bold">
                        A
                      </div>
                      <div>
                        <div className="font-bold text-lg">AAPL</div>
                        <div className="text-xs text-muted-1">Apple Inc.</div>
                      </div>
                    </div>
                    <div className="h-10 w-px bg-white/10"></div>
                    <div>
                      <div className="text-3xl font-bold">$245.12</div>
                      <div className="text-success text-sm font-semibold">+$5.67 (+2.37%)</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      disabled
                      className="px-8 py-3 bg-success text-white rounded-lg font-bold hover:bg-success/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    >
                      Buy AAPL
                    </button>
                    <button 
                      disabled
                      className="px-8 py-3 bg-red-500/20 border-2 border-red-500/30 text-red-400 rounded-lg font-bold hover:bg-red-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Sell AAPL
                    </button>
                  </div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-primary relative h-[600px]">
                <AdvancedChart symbol="NASDAQ:AAPL" />
                
                {/* Overlay Message */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center pointer-events-none">
                  <div className="inline-block bg-primary/95 backdrop-blur-xl border border-success/30 rounded-2xl px-8 py-6 shadow-2xl">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                      <span className="text-sm font-semibold text-success">LIVE DEMO MODE</span>
                    </div>
                    <p className="text-lg text-muted-1 mb-4">
                      You're viewing real-time market data. Create an account to start trading.
                    </p>
                    <Link
                      href="/signup"
                      onClick={() => trackEvent({ category: 'CTA', action: 'Click', label: 'Demo Chart Sign Up' })}
                      className="inline-flex items-center gap-2 px-10 py-4 bg-success text-white rounded-xl font-bold hover:bg-success/90 transition-all pointer-events-auto shadow-lg shadow-success/20"
                    >
                      Create Free Account
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom Stats Bar */}
              <div className="bg-primary/80 backdrop-blur-xl p-4 border-t border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <div className="text-muted-1 mb-1">Market Cap</div>
                    <div className="font-bold">$3.81T</div>
                  </div>
                  <div>
                    <div className="text-muted-1 mb-1">Volume</div>
                    <div className="font-bold">42.1M</div>
                  </div>
                  <div>
                    <div className="text-muted-1 mb-1">Day Range</div>
                    <div className="font-bold">$238.50 - $246.80</div>
                  </div>
                  <div>
                    <div className="text-muted-1 mb-1">52 Week</div>
                    <div className="font-bold">$164.08 - $250.42</div>
                  </div>
                  <div>
                    <div className="text-muted-1 mb-1">P/E Ratio</div>
                    <div className="font-bold">41.23</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Overview - Simple Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                All Markets. One Platform.
              </h2>
              <p className="text-xl text-muted-1">
                Trade across every major asset class with professional-grade tools
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'Stocks', icon: '📈', count: '10,000+', desc: 'US & International Equities' },
                { name: 'Crypto', icon: '₿', count: '200+', desc: 'Bitcoin, Ethereum & More' },
                { name: 'Forex', icon: '💱', count: '50+', desc: 'Major Currency Pairs' },
                { name: 'Commodities', icon: '🥇', count: '25+', desc: 'Gold, Oil, Agriculture' },
              ].map((market, i) => (
                <div key={i} className="glass-effect rounded-xl p-8 text-center hover:border-success/50 transition-all cursor-pointer group">
                  <div className="text-5xl mb-4">{market.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{market.name}</h3>
                  <div className="text-success text-sm font-semibold mb-2">{market.count}</div>
                  <p className="text-muted-1 text-sm">{market.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Why Choose BeyondEquity
              </h2>
              <p className="text-xl text-muted-1">
                Professional trading tools for everyone
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="text-success" size={32} />,
                  title: '$0 Commission',
                  desc: 'Trade stocks, crypto, and ETFs without paying commission fees on any transaction'
                },
                {
                  icon: <Clock className="text-info" size={32} />,
                  title: '24/5 Trading',
                  desc: 'Access markets around the clock from Sunday 8PM to Friday 8PM ET'
                },
                {
                  icon: <BarChart3 className="text-success" size={32} />,
                  title: 'Advanced Analytics',
                  desc: 'Professional charts, real-time data, and powerful screening tools'
                },
                {
                  icon: <Shield className="text-success" size={32} />,
                  title: 'SEC Regulated',
                  desc: 'Fully licensed and regulated. FINRA/SIPC member for your protection'
                },
                {
                  icon: <Smartphone className="text-info" size={32} />,
                  title: 'Mobile Trading',
                  desc: 'Trade on the go with our award-winning mobile app for iOS and Android'
                },
                {
                  icon: <TrendingUp className="text-success" size={32} />,
                  title: 'IPO Access',
                  desc: 'Get early access to IPOs and invest in companies before they go public'
                }
              ].map((feature, i) => (
                <div key={i} className="glass-effect rounded-xl p-8 hover:border-success/50 transition-all">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-1">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-success/10 via-transparent to-info/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Start Trading Today
            </h2>
            <p className="text-xl text-muted-1 mb-8">
              Join thousands of traders worldwide. Open your account in minutes.
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <Link
                href="/signup"
                onClick={() => trackEvent({ category: 'CTA', action: 'Click', label: 'Bottom Get Started' })}
                className="px-10 py-4 bg-success text-white rounded-lg font-bold text-lg hover:bg-success/90 transition-all inline-flex items-center gap-2 shadow-lg shadow-success/20"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/trade"
                className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
              >
                Try Demo First
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-1 flex-wrap">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-success" />
                <span>FINRA/SIPC Member</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-success" />
                <span>$0 Commission</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-success" />
                <span>24/5 Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
