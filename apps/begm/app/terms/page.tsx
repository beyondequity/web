'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-success hover:text-success/80 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-1 mb-8">Last Updated: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-1 leading-relaxed">
                By accessing or using Beyond Equity Global Marketplace ("BEGM", "the Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
              <p className="text-muted-1 mb-3">To use our services, you must:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-1 ml-4">
                <li>Be at least 18 years of age</li>
                <li>Be a legal resident of a jurisdiction where our services are available</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Not be prohibited from using our services under applicable laws</li>
                <li>Provide accurate and complete registration information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Account Registration and Security</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">Registration</h3>
              <p className="text-muted-1 mb-3">
                You must create an account to use our trading services. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-1 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information as necessary</li>
                <li>Complete identity verification as required by law</li>
                <li>Comply with all applicable securities laws and regulations</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Account Security</h3>
              <p className="text-muted-1 mb-3">You are responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-1 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
                <li>Enabling two-factor authentication when available</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Trading Services</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">Brokerage Services</h3>
              <p className="text-muted-1 leading-relaxed mb-3">
                BEGM is provided by BeyondEquity Securities, Inc., a registered broker-dealer and member of FINRA and SIPC. Securities products are offered through BeyondEquity Securities, Inc.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Commission-Free Trading</h3>
              <p className="text-muted-1 mb-3">
                While we offer $0 commission on certain transactions, please note:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-1 ml-4">
                <li>$0 commission applies to online U.S. equity trades and ETFs only</li>
                <li>Other fees may apply (regulatory fees, wire transfer fees, etc.)</li>
                <li>Options trades may incur per-contract fees</li>
                <li>Cryptocurrency transactions may have different fee structures</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Market Data</h3>
              <p className="text-muted-1 leading-relaxed">
                Market data and quotes are provided for informational purposes only and may be delayed. Real-time data may require additional subscriptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Investment Risks</h2>
              <div className="glass-effect rounded-lg p-6 border border-yellow-500/20 bg-yellow-500/5">
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Important Risk Disclosure</h3>
                <p className="text-muted-1 mb-3">
                  All investments involve risk, including the possible loss of principal. You should carefully consider:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-1 ml-4">
                  <li>Past performance does not guarantee future results</li>
                  <li>Market volatility can result in significant losses</li>
                  <li>Margin trading and options involve substantial risk</li>
                  <li>Cryptocurrency trading is highly volatile and risky</li>
                  <li>Extended hours trading carries additional risks</li>
                  <li>You may lose more than your initial investment</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Prohibited Activities</h2>
              <p className="text-muted-1 mb-3">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-1 ml-4">
                <li>Engage in market manipulation or fraudulent trading practices</li>
                <li>Use our platform for money laundering or illegal activities</li>
                <li>Violate any securities laws or regulations</li>
                <li>Share or sell your account access to others</li>
                <li>Use automated trading systems without authorization</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Margin Trading</h2>
              <p className="text-muted-1 leading-relaxed">
                Margin trading involves borrowing funds to trade securities and carries significant risks. You may lose more than your initial investment. Margin is not suitable for all investors. Please review our Margin Disclosure Statement before trading on margin.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Account Termination</h2>
              <p className="text-muted-1 mb-3">We may suspend or terminate your account if:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-1 ml-4">
                <li>You violate these Terms</li>
                <li>You engage in fraudulent or illegal activities</li>
                <li>Required by law or regulatory authorities</li>
                <li>Your account remains inactive for an extended period</li>
                <li>We suspect unauthorized account access</li>
              </ul>
              <p className="text-muted-1 mt-4">
                You may close your account at any time by contacting customer support. You remain liable for all transactions prior to account closure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Intellectual Property</h2>
              <p className="text-muted-1 leading-relaxed">
                All content, trademarks, logos, and intellectual property on the Platform are owned by BeyondEquity or its licensors. You may not use, copy, or distribute any content without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Disclaimers</h2>
              <div className="glass-effect rounded-lg p-6">
                <p className="text-muted-1 leading-relaxed mb-3">
                  THE PLATFORM IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
                </p>
                <p className="text-muted-1 leading-relaxed">
                  We do not guarantee uninterrupted or error-free service. Market data, quotes, and information may contain errors or delays.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Limitation of Liability</h2>
              <p className="text-muted-1 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, BEYONDEQUITY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE PLATFORM.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Dispute Resolution</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">Arbitration Agreement</h3>
              <p className="text-muted-1 leading-relaxed mb-3">
                Any dispute arising from these Terms or your use of the Platform shall be resolved through binding arbitration in accordance with FINRA rules, except where prohibited by law.
              </p>
              <p className="text-muted-1 leading-relaxed">
                You waive your right to participate in class action lawsuits or class-wide arbitration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
              <p className="text-muted-1 leading-relaxed">
                These Terms are governed by the laws of the State of New York, without regard to conflict of law principles. You consent to the exclusive jurisdiction of courts in New York, New York.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">14. Changes to Terms</h2>
              <p className="text-muted-1 leading-relaxed">
                We may modify these Terms at any time. Material changes will be communicated via email or platform notification. Continued use of the Platform after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
              <div className="glass-effect rounded-lg p-6">
                <p className="text-white mb-2"><strong>BeyondEquity Securities, Inc.</strong></p>
                <p className="text-muted-1">
                  40 Wall Street ("The Trump Building")<br />
                  27th Floor<br />
                  New York, NY 10005
                </p>
                <p className="text-muted-1 mt-3">Customer Support: support@beyondequity.com</p>
                <p className="text-muted-1">Phone: (646)-380-1801 (Main Office)</p>
                <p className="text-muted-1">Phone: (646)-441-0400 (Business)</p>
                <p className="text-muted-1 mt-3">Website: www.beyondalphaventures.com</p>
                <p className="text-muted-1 mt-3">
                  <strong className="text-white">FINRA BrokerCheck:</strong> Visit{' '}
                  <a href="https://brokercheck.finra.org" target="_blank" rel="noopener noreferrer" className="text-success hover:text-success/80">
                    brokercheck.finra.org
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
