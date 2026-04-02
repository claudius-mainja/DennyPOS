import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Privacy() {
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
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Privacy Policy
                </h1>
                <p className="text-gray-400 mt-1">Last updated: January 2026</p>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 md:p-12 space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-5 h-5 text-green-400" />
                  <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    At DennyPOS, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and software services.
                  </p>
                  <p>
                    This policy applies to all users of DennyPOS services and conforms to the Protection of Personal Information Act (POPIA) of South Africa. By using our services, you consent to the practices described in this policy.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-5 h-5 text-green-400" />
                  <h2 className="text-xl font-semibold text-white">2. Information We Collect</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We collect the following types of information:</p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                      <h3 className="text-white font-medium mb-2">Personal Information</h3>
                      <ul className="space-y-1 text-sm text-gray-400">
                        <li>• Name and surname</li>
                        <li>• Email address</li>
                        <li>• Phone number</li>
                        <li>• Company name and business details</li>
                        <li>• Physical address</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                      <h3 className="text-white font-medium mb-2">Business Data</h3>
                      <ul className="space-y-1 text-sm text-gray-400">
                        <li>• Sales transactions processed through POS</li>
                        <li>• Inventory information</li>
                        <li>• Customer purchase history (if using loyalty features)</li>
                        <li>• Employee information (for multi-user access)</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                      <h3 className="text-white font-medium mb-2">Technical Information</h3>
                      <ul className="space-y-1 text-sm text-gray-400">
                        <li>• IP address</li>
                        <li>• Browser type and version</li>
                        <li>• Device information</li>
                        <li>• Cookies and usage data</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-5 h-5 text-green-400" />
                  <h2 className="text-xl font-semibold text-white">3. How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We use collected information for the following purposes:</p>
                  <ul className="space-y-2">
                    {[
                      'To provide and maintain our POS software services',
                      'To process transactions and send related information',
                      'To send technical notices, updates, and support messages',
                      'To respond to your comments, questions, and customer service requests',
                      'To monitor and analyze usage patterns and trends',
                      'To detect, prevent, and address technical issues',
                      'To provide you with news, special offers, and general communications',
                      'To improve our website and services'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-green-400">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">4. Data Security</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We implement robust security measures to protect your information:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Local data storage - your data stays on your premises',
                      'Encrypted data transmission using SSL/TLS',
                      'Role-based access controls for multi-user systems',
                      'Automatic daily backups',
                      'Regular security updates and patches',
                      'Access logging and audit trails'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">5. Data Retention</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Business data is retained according to your subscription type and can be exported or deleted upon request.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">6. Your Rights (POPIA)</h2>
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20 space-y-4">
                  <p className="text-white font-medium">
                    Under South Africa's POPIA, you have the right to:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    {[
                      'Know what personal information we hold about you',
                      'Request access to your personal information',
                      'Request correction of inaccurate information',
                      'Request deletion of your personal information',
                      'Object to the processing of your information',
                      'Lodge a complaint with the Information Regulator'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-green-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">7. Cookies and Tracking</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Our website uses cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. We use:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Essential cookies for website functionality',
                      'Analytics cookies to understand site usage',
                      'Preference cookies to remember your settings'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-green-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">8. Third-Party Services</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We may share your information with trusted third parties who assist us in operating our services, conducting our business, or servicing you. These parties are obligated to keep your information confidential and use it only for the purposes for which we disclose it to them.
                  </p>
                  <p>
                    We do not sell your personal information to third parties.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">9. Children's Privacy</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically for any changes.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">11. Contact Us</h2>
                <div className="glass rounded-xl p-6 space-y-4">
                  <p className="text-gray-300">
                    If you have any questions about this Privacy Policy or wish to exercise your rights, please contact our Information Officer:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 w-20">Email:</span>
                      <a href="mailto:privacy@dennypos.co.za" className="text-green-400 hover:text-green-300">privacy@dennypos.co.za</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 w-20">Phone:</span>
                      <a href="tel:+27743551336" className="text-green-400 hover:text-green-300">+27 74 355 1336</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-400 w-20">Address:</span>
                      <span className="text-gray-300">187 Alexandra, Halfway House, Midrand, Gauteng, South Africa</span>
                    </div>
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
