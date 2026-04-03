import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Phone, Mail, Star, Zap, Shield, Crown } from 'lucide-react'

const packageIcons = {
  starter: Shield,
  professional: Zap,
  enterprise: Crown,
}

export default function Pricing() {
  const { t } = useTranslation()
  const [isAnnual, setIsAnnual] = useState(false)

  const packages = [
    {
      key: 'starter',
      price: isAnnual ? 1499 : 1799,
      savings: isAnnual ? 'ZAR 3,600/year' : null,
      ...t('pricing.packages.starter', { returnObjects: true }),
    },
    {
      key: 'professional',
      price: isAnnual ? 2999 : 3599,
      savings: isAnnual ? 'ZAR 7,200/year' : null,
      popular: true,
      ...t('pricing.packages.professional', { returnObjects: true }),
    },
    {
      key: 'enterprise',
      price: isAnnual ? 5999 : 7199,
      savings: isAnnual ? 'ZAR 14,400/year' : null,
      ...t('pricing.packages.enterprise', { returnObjects: true }),
    },
  ]

  const addons = [
    { name: 'Additional Terminal', price: 'ZAR 299/month', desc: 'Add more POS stations' },
    { name: 'E-commerce Integration', price: 'ZAR 199/month', desc: 'Online store sync' },
    { name: 'API Access', price: 'ZAR 149/month', desc: 'Custom integrations' },
    { name: 'Priority Training', price: 'ZAR 999/once', desc: 'Extended training session' },
  ]

  const faqs = [
    {
      q: 'Can I switch between plans?',
      a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
    },
    {
      q: 'Is there a free trial?',
      a: 'Yes! We offer a free 30-day demo period so you can test DennyPOS thoroughly in your business before committing. Contact us to start your trial.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept EFT, credit card, and can arrange debit orders for monthly subscriptions.',
    },
    {
      q: 'Are there any setup fees?',
      a: 'Basic setup is included. Custom installations may have additional fees which are quoted during consultation.',
    },
  ]

  return (
    <main className="pt-24 pb-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-green-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
              {t('pricing.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              {t('pricing.title')}
            </h1>
            <p className="text-gray-400 text-lg">
              Choose the perfect plan for your business. All prices in South African Rand.
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <div className="glass rounded-full p-1 flex items-center">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  !isAnnual ? 'bg-green-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {t('pricing.monthly')}
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  isAnnual ? 'bg-green-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {t('pricing.annual')}
                <span className="text-xs bg-green-500/20 px-2 py-0.5 rounded-full">Save 17%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => {
              const Icon = packageIcons[pkg.key]
              return (
                <motion.div
                  key={pkg.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative glass rounded-3xl p-8 ${
                    pkg.popular
                      ? 'border-green-500 shadow-glow-lg scale-105'
                      : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-green-500 text-white text-sm font-semibold rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {t('pricing.popular')}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      pkg.popular ? 'bg-green-500/20' : 'bg-white/5'
                    }`}>
                      <Icon className={`w-7 h-7 ${pkg.popular ? 'text-green-400' : 'text-gray-400'}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-gray-400 text-sm">{pkg.desc}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-white">ZAR {pkg.price.toLocaleString()}</span>
                      <span className="text-gray-400">{t('pricing.monthly')}</span>
                    </div>
                    {pkg.savings && (
                      <p className="text-green-400 text-sm mt-2">{pkg.savings} savings</p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/27743551336?text=Hi, I'm interested in the ${pkg.name} plan for DennyPOS`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-green-500 hover:bg-green-400 text-white'
                        : 'border border-green-500/50 text-green-400 hover:bg-green-500/10'
                    }`}
                  >
                    {t('pricing.cta')}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Optional Add-ons
            </h2>
            <p className="text-gray-400 mt-2">
              Customize your plan with additional features
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-1">{addon.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{addon.desc}</p>
                <p className="text-green-400 font-semibold">{addon.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent" />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Not Sure Which Plan Is Right?
              </h2>
              <p className="text-gray-400 mb-8">
                Our team can help you find the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/27743551336?text=Hi, I need help choosing the right DennyPOS plan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp Us
                </a>
                <a
                  href="mailto:sales@dennypos.co.za?subject=Pricing Inquiry"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
