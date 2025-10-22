'use client'

import Link from 'next/link'
import { ArrowLeft, Download, Monitor, CheckCircle } from 'lucide-react'

export default function WindowsDownloadPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/download"
            className="inline-flex items-center gap-2 text-success hover:text-success/80 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Downloads
          </Link>

          <div className="text-center mb-12">
            <Monitor className="w-20 h-20 text-success mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">BeyondEquity for Windows</h1>
            <p className="text-muted-1 text-lg">
              Professional trading platform optimized for Windows
            </p>
          </div>

          <div className="glass-effect rounded-lg p-8 mb-8 text-center">
            <p className="text-muted-1 mb-6">Version 2.5.1 • 145 MB • Windows 10 or later</p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-success hover:bg-success/90 text-white font-semibold rounded-lg transition-colors text-lg">
              <Download size={20} />
              Download for Windows
            </button>
            <p className="text-muted-1 text-sm mt-4">
              64-bit Windows required
            </p>
          </div>

          <div className="glass-effect rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
            <div className="space-y-3 text-muted-1">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span>Windows 10 or Windows 11 (64-bit)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span>4 GB RAM minimum (8 GB recommended)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span>250 MB available disk space</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span>Internet connection required</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span>.NET Framework 4.8 or later</span>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Installation Instructions</h2>
            <ol className="space-y-4 text-muted-1">
              <li className="flex items-start gap-3">
                <span className="bg-success text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <span>Download the BeyondEquity-Setup.exe file</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-success text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <span>Run the installer (you may need administrator privileges)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-success text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <span>Follow the installation wizard prompts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-success text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <span>Launch BeyondEquity from the Start menu or desktop shortcut</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-success text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                <span>Log in with your BeyondEquity credentials</span>
              </li>
            </ol>
          </div>

          <div className="glass-effect rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">What's New in 2.5.1</h2>
            <ul className="space-y-2 text-muted-1">
              <li>• Improved performance and stability</li>
              <li>• Enhanced multi-monitor support</li>
              <li>• New chart layout options</li>
              <li>• Bug fixes and security updates</li>
              <li>• Updated market data feeds</li>
              <li>• Windows 11 optimizations</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-1 text-sm">
              Need help? <Link href="/help" className="text-success hover:underline">Visit our Help Center</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
