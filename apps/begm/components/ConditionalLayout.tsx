'use client'

import { usePathname } from 'next/navigation'
import { Header } from './Header'
import { Footer } from './Footer'
import dynamic from 'next/dynamic'

const TickerTape = dynamic(() => import('./TickerTape'))

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Hide header/ticker/footer for fullscreen pages
  const isFullscreenPage = pathname.startsWith('/trade') || pathname.startsWith('/demo')

  return (
    <>
      {!isFullscreenPage && (
        <>
          <Header />
          <div className="sticky top-16 z-40 bg-primary/95 backdrop-blur-xl border-b border-white/10 shadow-lg">
            <TickerTape />
          </div>
        </>
      )}
      <main className={isFullscreenPage ? '' : 'min-h-screen'}>
        {children}
      </main>
      {!isFullscreenPage && <Footer />}
    </>
  )
}
