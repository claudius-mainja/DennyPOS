import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowLeft, RefreshCw, Shield, Clock, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Returns() {
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
                <RefreshCw className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Returns & Exchanges Policy
                </h1>
                <p className="text-gray-400 mt-1">Last updated: January 2026</p>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Software License Returns</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Due to the nature of software products, DennyPOS does not offer refunds on purchased software licenses once the product has been downloaded, installed, or activated.
                  </p>
                  <p>
                    However, we understand that circumstances may arise where you need to make changes to your purchase. Our team is committed to working with you to find a suitable solution.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">30-Day Demo Period</h2>
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-2">
                        Free 30-Day Demo Available
                      </p>
                      <p className="text-gray-400 text-sm">
                        Before purchasing, you can request a complimentary 30-day demo period to evaluate DennyPOS thoroughly in your business environment. Contact us at sales@dennypos.co.za to arrange your demo.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">License Transfers</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    DennyPOS licenses are transferable to another business entity under the following conditions:
                  </p>
                  <ul className="space-y-2 list-none">
                    {[
                      'The original license holder must request the transfer in writing',
                      'The new owner must agree to the terms of service',
                      'A transfer fee of ZAR 500 applies',
                      'Transfers must be completed within 30 days of request'
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
                <h2 className="text-xl font-semibold text-white mb-4">Hardware Returns</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Hardware products purchased through DennyPOS may be returned within 14 days of delivery under the following conditions:
                  </p>
                  <ul className="space-y-2 list-none">
                    {[
                      'Items must be in original packaging and unused condition',
                      'Proof of purchase is required',
                      'Return shipping costs are the responsibility of the buyer',
                      'A 15% restocking fee applies to all hardware returns'
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
                <h2 className="text-xl font-semibold text-white mb-4">Exchange Policy</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    If you experience technical issues with your DennyPOS software that cannot be resolved within 7 business days, we will work with you to:
                  </p>
                  <ul className="space-y-2 list-none">
                    {[
                      'Provide alternative solutions or workarounds',
                      'Offer a temporary license extension while issues are resolved',
                      'Discuss license downgrade options where applicable',
                      'Arrange for technical support escalation'
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
                <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
                <div className="glass rounded-xl p-6 space-y-3">
                  <p className="text-gray-300">
                    If you have any questions about our Returns & Exchanges Policy, please contact us:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-gray-400">Email:</span> <a href="mailto:sales@dennypos.co.za" className="text-green-400 hover:text-green-300">sales@dennypos.co.za</a></p>
                    <p><span className="text-gray-400">Phone:</span> <a href="tel:+27743551336" className="text-green-400 hover:text-green-300">+27 74 355 1336</a></p>
                    <p><span className="text-gray-400">WhatsApp:</span> <a href="https://wa.me/27743551336" className="text-green-400 hover:text-green-300">+27 74 355 1336</a></p>
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
