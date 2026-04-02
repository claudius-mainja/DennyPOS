import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowLeft, FileText, Shield, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Terms() {
  const { t } = useTranslation()

  return (
    <main className="pt-24 pb-20">
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-radial from-green-500/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Terms and Conditions
                </h1>
                <p className="text-gray-400 mt-1">Last updated: January 2026</p>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    By accessing, browsing, or using the DennyPOS website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">2. Description of Service</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    DennyPOS provides point-of-sale software solutions designed for South African businesses. Our services include:
                  </p>
                  <ul className="space-y-2 list-none">
                    {[
                      'POS software licensing and installation',
                      'Inventory management systems',
                      'Sales reporting and analytics',
                      'Technical support and maintenance',
                      'Software updates and upgrades',
                      'Training and consultation services'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">3. Software License</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    When you purchase a DennyPOS license, you receive a non-exclusive, non-transferable license to use the software subject to these terms. The license grants you:
                  </p>
                  <ul className="space-y-2 list-none">
                    {[
                      'The right to install and use the software on approved devices',
                      'Access to software updates during the license period',
                      'Technical support as specified in your chosen package',
                      'The right to receive documentation and training materials'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">4. License Restrictions</h2>
                <div className="space-y-4 text-gray-300">
                  <p>You agree NOT to:</p>
                  <ul className="space-y-2 list-none">
                    {[
                      'Copy, modify, or distribute the software',
                      'Reverse engineer, decompile, or disassemble the software',
                      'Rent, lease, or lend the software to third parties',
                      'Remove or alter any proprietary notices',
                      'Use the software for any illegal purpose',
                      'Attempt to circumvent any copy protection mechanisms',
                      'Transfer your license without prior written consent'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">5. Payment Terms</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Payment terms for DennyPOS services are as follows:
                  </p>
                  <ul className="space-y-2 list-none">
                    {[
                      'Monthly subscriptions are billed in advance',
                      'Annual subscriptions offer a 17% discount and are billed annually',
                      'Payment methods include EFT, credit card, and debit order',
                      'Licenses become active upon receipt of payment',
                      'Overdue accounts may result in service suspension after 14 days'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">6. Intellectual Property</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    All intellectual property rights in DennyPOS software, including but not limited to patents, copyrights, trademarks, and trade secrets, remain the exclusive property of DennyPOS. Nothing in these terms transfers any ownership rights to you.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">7. Warranty Disclaimer</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    DennyPOS software is provided "AS IS" without warranty of any kind. We do not warrant that the software will meet your requirements, be error-free, or that defects will be corrected. We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    To the maximum extent permitted by law, DennyPOS shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of the software.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">9. Privacy</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of DennyPOS services, to understand how we collect, use, and protect your information.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">10. Termination</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We may terminate or suspend your access to DennyPOS services immediately, without prior notice, for any breach of these Terms and Conditions. Upon termination, your right to use the software will cease immediately.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">11. Governing Law</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of South Africa.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">12. Contact Information</h2>
                <div className="glass rounded-xl p-6 space-y-3">
                  <p className="text-gray-300">
                    For questions regarding these Terms and Conditions, please contact us:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-gray-400">Email:</span> <a href="mailto:sales@dennypos.co.za" className="text-green-400 hover:text-green-300">sales@dennypos.co.za</a></p>
                    <p><span className="text-gray-400">Phone:</span> <a href="tel:+27743551336" className="text-green-400 hover:text-green-300">+27 74 355 1336</a></p>
                    <p><span className="text-gray-400">Address:</span> 187 Alexandra, Halfway House, Midrand, Gauteng, South Africa</p>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
