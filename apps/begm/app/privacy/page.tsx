'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
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

          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-1 mb-8">Last Updated: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-1 leading-relaxed">
                Beyond Equity Global Marketplace ("BEGM", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our trading platform and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-1 ml-4">
                <li>Name, email address, phone number, and mailing address</li>
                <li>Date of birth and Social Security Number (for identity verification)</li>
                <li>Financial information including bank account and payment card details</li>
                <li>Employment information and income data</li>
                <li>Government-issued identification documents</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Trading Information</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-1 ml-4">
                <li>Trading history and account activity</li>
                <li>Portfolio holdings and performance data</li>
                <li>Transaction records and order information</li>
                <li>Deposit and withdrawal history</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Technical Information</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-1 ml-4">
                <li>IP address and device information</li>
                <li>Browser type and operating system</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-1 mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-1 ml-4">
                <li>Provide and maintain our trading services</li>
                <li>Process transactions and manage your account</li>
                <li>Verify your identity and comply with regulatory requirements</li>
                <li>Detect and prevent fraud, money laundering, and other illegal activities</li>
                <li>Communicate with you about your account and our services</li>
                <li>Improve our platform and develop new features</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Comply with legal obligations and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-muted-1 mb-3">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-1 ml-4">
                <li><strong className="text-white">Regulatory Authorities:</strong> SEC, FINRA, SIPC, and other regulatory bodies as required by law</li>
                <li><strong className="text-white">Service Providers:</strong> Third-party vendors who assist in operating our platform</li>
                <li><strong className="text-white">Financial Institutions:</strong> Banks and payment processors for transaction processing</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law, subpoena, or court order</li>
                <li><strong className="text-white">Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              </ul>
              <p className="text-muted-1 mt-4">
                We do not sell your personal information to third parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-muted-1 leading-relaxed">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-1 ml-4 mt-3">
                <li>256-bit SSL encryption for data transmission</li>
                <li>Secure data storage with encryption at rest</li>
                <li>Two-factor authentication (2FA) for account access</li>
                <li>Regular security audits and penetration testing</li>
                <li>Employee training on data protection and security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
              <p className="text-muted-1 mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-1 ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct or update inaccurate information</li>
                <li>Request deletion of your information (subject to legal obligations)</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to certain processing of your information</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-muted-1 leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookies through your browser settings, but disabling cookies may limit certain features of our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Third-Party Links</h2>
              <p className="text-muted-1 leading-relaxed">
                Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to read their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
              <p className="text-muted-1 leading-relaxed">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-1 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our platform and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
              <p className="text-muted-1 leading-relaxed mb-3">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="glass-effect rounded-lg p-6">
                <p className="text-white mb-2"><strong>Beyond Equity Global Marketplace</strong></p>
                <p className="text-muted-1">
                  40 Wall Street ("The Trump Building")<br />
                  27th Floor<br />
                  New York, NY 10005
                </p>
                <p className="text-muted-1 mt-3">Email: privacy@beyondequity.com</p>
                <p className="text-muted-1">Phone: (646)-380-1801 (Main Office)</p>
                <p className="text-muted-1">Phone: (646)-441-0400 (Business)</p>
                <p className="text-muted-1 mt-3">Website: www.beyondalphaventures.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
