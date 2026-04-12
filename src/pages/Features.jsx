import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  Check, ArrowRight, Zap, Shield, BarChart3, Users, 
  CreditCard, Smartphone, Package, Truck, Store, Utensils,
  Pill, Scissors, Wrench, ShoppingCart, Monitor, Printer, ScanLine
} from 'lucide-react'
import { FeatureIcon } from '../assets/Illustrations'

const dennyProducts = [
  {
    name: 'POS Touch Terminal',
    desc: '15" All-in-One Touch Screen',
    icon: Monitor,
    link: 'https://dennyexpress.co.za/shop-2/',
    price: 'From R4,999',
  },
  {
    name: 'Thermal Receipt Printer',
    desc: '80mm High Speed Printing',
    icon: Printer,
    link: 'https://dennyexpress.co.za/shop-2/',
    price: 'From R1,299',
  },
  {
    name: 'Barcode Scanner',
    desc: 'USB Laser Scanner - Wired',
    icon: ScanLine,
    link: 'https://dennyexpress.co.za/shop-2/',
    price: 'From R449',
  },
  {
    name: 'Cash Drawer',
    desc: 'Black, RJ11/RJ12 Interface',
    icon: Package,
    link: 'https://dennyexpress.co.za/shop-2/',
    price: 'From R899',
  },
]

const industryIcons = {
  retail: Store,
  restaurant: Utensils,
  qsr: Store,
  liquor: Package,
  pharmacy: Pill,
  hardware: Wrench,
  fashion: Store,
  electronics: Smartphone,
  salon: Scissors,
  automotive: Truck,
}

export default function Features() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('core')

  const categories = [
    { id: 'core', label: t('features.categories.core') },
    { id: 'inventory', label: t('features.categories.inventory') },
    { id: 'reports', label: t('features.categories.reports') },
    { id: 'integrations', label: t('features.categories.integrations') },
  ]

  const features = {
    core: [
      { icon: 'cart', title: t('features.items.sales.title'), desc: t('features.items.sales.desc'), highlight: true },
      { icon: 'credit', title: 'Multiple Payment Methods', desc: 'Cash, debit, credit, mobile & contactless', highlight: true },
      { icon: 'barcode', title: t('features.items.barcode.title'), desc: t('features.items.barcode.desc') },
      { icon: 'receipt', title: t('features.items.receipts.title'), desc: t('features.items.receipts.desc') },
      { icon: 'touch', title: t('features.items.touch.title'), desc: t('features.items.touch.desc') },
      { icon: 'discounts', title: t('features.items.discounts.title'), desc: t('features.items.discounts.desc') },
    ],
    inventory: [
      { icon: 'inventory', title: t('features.items.inventory.title'), desc: t('features.items.inventory.desc'), highlight: true },
      { icon: 'suppliers', title: t('features.items.suppliers.title'), desc: t('features.items.suppliers.desc') },
      { icon: 'multi', title: t('features.items.multi.title'), desc: t('features.items.multi.desc') },
      { icon: 'barcode', title: 'Batch Scanning', desc: 'Scan multiple items quickly' },
      { icon: 'settings', title: 'Stock Alerts', desc: 'Automatic low stock notifications' },
      { icon: 'chart', title: 'Reorder Suggestions', desc: 'AI-powered reorder recommendations' },
    ],
    reports: [
      { icon: 'chart', title: t('features.items.reporting.title'), desc: t('features.items.reporting.desc'), highlight: true },
      { icon: 'loyalty', title: t('features.items.loyalty.title'), desc: t('features.items.loyalty.desc') },
      { icon: 'users', title: t('features.items.multiuser.title'), desc: t('features.items.multiuser.desc') },
      { icon: 'backup', title: t('features.items.backup.title'), desc: t('features.items.backup.desc') },
      { icon: 'shield', title: 'Security Reports', desc: 'Track user activity and access' },
      { icon: 'settings', title: 'Custom Dashboards', desc: 'Build your own report views' },
    ],
    integrations: [
      { icon: 'settings', title: 'API Access', desc: 'Connect with your existing systems', highlight: true },
      { icon: 'truck', title: 'Accounting Software', desc: 'Xero, QuickBooks, Sage integration' },
      { icon: 'store', title: 'E-commerce Ready', desc: 'Shopify, WooCommerce sync' },
      { icon: 'credit', title: 'Payment Gateways', desc: 'SnapScan, Zapper, PayShap' },
      { icon: 'smartphone', title: 'Mobile Apps', desc: 'Manager dashboard on your phone' },
      { icon: 'shield', title: 'Hardware Peripherals', desc: 'Printers, scanners, displays' },
    ],
  }

  const industries = Object.entries(t('industries.items', { returnObjects: true })).slice(0, 6)

  const comparison = [
    { feature: 'Offline Operation', denny: true, cloud: false },
    { feature: 'Local Data Storage', denny: true, cloud: false },
    { feature: 'No Monthly Fees', denny: true, cloud: false },
    { feature: 'Instant Setup', denny: true, cloud: false },
    { feature: '24/7 South African Support', denny: true, cloud: false },
    { feature: 'Fully Customizable', denny: true, cloud: false },
    { feature: 'One-time Purchase', denny: true, cloud: false },
  ]

  return (
    <main className="pt-24 pb-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-green-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
              {t('features.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              {t('features.title')}
            </h1>
            <p className="text-gray-400 text-lg">
              Everything you need to run your business efficiently, all in one powerful system.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-green-500 text-white shadow-glow'
                    : 'glass text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features[activeCategory]?.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`glass rounded-2xl p-6 glass-hover group cursor-pointer ${
                  feature.highlight ? 'border-green-500/50' : ''
                }`}
              >
                {feature.highlight && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full mb-4">
                    Popular
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <FeatureIcon icon={feature.icon} />
                  <div className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
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
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
              Industry Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Built for Your Business
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(([key, industry], i) => {
              const Icon = industryIcons[key] || Store
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 glass-hover group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-green-400/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.title}</h3>
                  <p className="text-gray-400 text-sm">{industry.desc}</p>
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
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
              Why DennyPOS?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Local vs Cloud Solutions
            </h2>
          </motion.div>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 p-6 border-b border-white/10">
              <div className="text-gray-400 font-medium">Feature</div>
              <div className="text-center">
                <span className="text-green-400 font-semibold">DennyPOS</span>
              </div>
              <div className="text-center">
                <span className="text-gray-400 font-semibold">Cloud POS</span>
              </div>
            </div>
            {comparison.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-3 p-6 border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <div className="text-gray-300">{row.feature}</div>
                <div className="text-center">
                  {row.denny ? (
                    <Check className="w-6 h-6 text-green-400 mx-auto" />
                  ) : (
                    <span className="text-gray-500">-</span>
                  )}
                </div>
                <div className="text-center">
                  {row.cloud ? (
                    <Check className="w-6 h-6 text-green-400 mx-auto" />
                  ) : (
                    <span className="text-gray-500">-</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://wa.me/27743551336?text=Hi, I'd like to learn more about DennyPOS features"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </a>
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
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-denny-green/20 text-denny-green text-sm font-semibold mb-4">
              Powered by Denny Express
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Complete POS Hardware Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              As a Denny Express sub-brand, DennyPOS software integrates seamlessly with premium POS hardware available through our parent company. Get everything you need from one trusted source.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dennyProducts.map((product, i) => {
              const Icon = product.icon
              return (
                <motion.a
                  key={product.name}
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 glass-hover group text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-denny-green/20 to-green-400/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-denny-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{product.desc}</p>
                  <p className="text-denny-green font-bold">{product.price}</p>
                </motion.a>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-10"
          >
            <a
              href="https://dennyexpress.co.za/shop-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              View All Hardware at Denny Express
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Upgrade Your Business?
              </h2>
              <p className="text-gray-400 mb-8">
                Get started with DennyPOS today and experience the difference of a system built for South African businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/27743551336?text=Hi, I'd like to book a demo for DennyPOS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  Book a Demo
                </a>
                <a
                  href="mailto:sales@dennypos.co.za"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
