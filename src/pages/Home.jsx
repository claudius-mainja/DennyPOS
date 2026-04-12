import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { 
  ArrowRight, Play, Check, Phone, Mail, MapPin, 
  Clock, TrendingUp, Users, ShoppingBag, Zap, ShoppingCart
} from 'lucide-react'
import { POSIllustration, DashboardIllustration, FeatureIcon } from '../assets/Illustrations'

import Product1 from '../assets/Products/cash-drawer.png'
import Product2 from '../assets/Products/barcode-scanner.png'
import Product3 from '../assets/Products/thermal-printer.png'
import Product4 from '../assets/Products/pos-terminal.png'
import Product5 from '../assets/Products/scanner.png'

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTime
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const FloatingOrb = ({ delay = 0, size = 100, x = 0, y = 0 }) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-r from-green-500/30 to-green-400/10 blur-3xl"
    style={{ width: size, height: size, left: x, top: y }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
  />
)

const GlassCard = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={`glass rounded-2xl p-6 glass-hover ${className}`}
    >
      {children}
    </motion.div>
  )
}

const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative"
    >
      <motion.div
        className="glass rounded-2xl overflow-hidden cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative aspect-square bg-dark-700 p-6 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name}
            className="max-h-40 object-contain mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-300"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">{product.name}</h3>
          <p className="text-green-400 font-bold">{product.price}</p>
        </div>
        
        <motion.div 
          className="absolute inset-0 flex items-center justify-center bg-dark-900/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
        >
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 hover:bg-green-400 text-white rounded-lg font-semibold flex items-center gap-2 transform group-hover:scale-100 scale-90 transition-transform"
          >
            View in Store
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Home() {
  const { t } = useTranslation()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  
  const stats = [
    { value: 500, suffix: '+', label: t('hero.stats.businesses'), icon: ShoppingBag },
    { value: 1000000, suffix: '+', label: t('hero.stats.transactions'), icon: TrendingUp },
    { value: 99.9, suffix: '%', label: t('hero.stats.uptime'), icon: Zap },
    { value: 24, suffix: '/7', label: t('hero.stats.support'), icon: Clock },
  ]

  const features = [
    { icon: 'cart', title: t('features.items.sales.title'), desc: t('features.items.sales.desc') },
    { icon: 'inventory', title: t('features.items.inventory.title'), desc: t('features.items.inventory.desc') },
    { icon: 'chart', title: t('features.items.reporting.title'), desc: t('features.items.reporting.desc') },
    { icon: 'credit', title: 'Multiple Payments', desc: 'Cash, card, mobile & contactless' },
    { icon: 'barcode', title: t('features.items.barcode.title'), desc: t('features.items.barcode.desc') },
    { icon: 'shield', title: t('features.items.backup.title'), desc: t('features.items.backup.desc') },
  ]

  const industries = [
    { icon: 'store', title: t('industries.items.retail.title'), desc: t('industries.items.retail.desc') },
    { icon: 'restaurant', title: t('industries.items.restaurant.title'), desc: t('industries.items.restaurant.desc') },
    { icon: 'pharmacy', title: t('industries.items.pharmacy.title'), desc: t('industries.items.pharmacy.desc') },
    { icon: 'truck', title: t('industries.items.hardware.title'), desc: t('industries.items.hardware.desc') },
  ]

  const products = [
    { name: 'Cash Drawer - Black', image: Product1, price: 'From R899', link: 'https://dennyexpress.co.za/shop-2/' },
    { name: 'Handheld USB Barcode Scanner', image: Product2, price: 'From R449', link: 'https://dennyexpress.co.za/shop-2/' },
    { name: 'Thermal Receipt Printer', image: Product3, price: 'From R1,299', link: 'https://dennyexpress.co.za/shop-2/' },
    { name: 'POS Touch Terminal Combo', image: Product4, price: 'From R4,999', link: 'https://dennyexpress.co.za/shop-2/' },
    { name: 'Barcode Scanner', image: Product5, price: 'From R299', link: 'https://dennyexpress.co.za/shop-2/' },
  ]

  return (
    <main className="relative overflow-hidden">
      <section className="relative min-h-screen flex items-center pt-20">
        <FloatingOrb delay={0} size={400} x="10%" y="20%" />
        <FloatingOrb delay={2} size={300} x="70%" y="60%" />
        <FloatingOrb delay={4} size={250} x="40%" y="70%" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 border border-green-500/10 rounded-full"
            style={{ y, rotate: useTransform(scrollYProgress, [0, 1], [0, 45]) }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-green-500/5 rounded-full"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]), rotate: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              style={{ opacity }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">A Sub-brand of Denny Express</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">{t('hero.title')}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl">
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="https://wa.me/27743551336?text=Hi, I'd like to book a demo for DennyPOS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4"
                >
                  <Phone className="w-5 h-5" />
                  {t('hero.cta')}
                </a>
                <a
                  href="https://dennyexpress.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Visit Our Store
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Mail, text: 'sales@dennypos.co.za' },
                  { icon: Phone, text: '+27 74 355 1336' },
                  { icon: MapPin, text: 'Midrand, Gauteng' },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.icon === Mail ? `mailto:${item.text}` : item.icon === Phone ? `tel:${item.text.replace(/\s/g, '')}` : '#'}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.text}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative perspective-1000"
              initial={{ opacity: 0, rotateY: -30 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/10 blur-3xl rounded-full" />
                <div className="relative glass rounded-3xl p-4 transform hover:scale-[1.02] transition-transform duration-500">
                  <POSIllustration />
                </div>
                <motion.div
                  className="absolute -top-4 -right-4 glass rounded-xl p-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 glass rounded-xl p-4"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <Users className="w-8 h-8 text-green-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <GlassCard key={i} delay={i * 0.1} className="text-center">
                <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-green-400 font-semibold text-sm uppercase tracking-wider"
            >
              {t('whatIs.subtitle')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mt-2"
            >
              {t('whatIs.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mt-4 max-w-2xl mx-auto"
            >
              {t('whatIs.description')}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { key: 'offline', color: 'from-green-500/20 to-green-400/5' },
              { key: 'secure', color: 'from-blue-500/20 to-blue-400/5' },
              { key: 'customizable', color: 'from-purple-500/20 to-purple-400/5' },
              { key: 'scalable', color: 'from-orange-500/20 to-orange-400/5' },
            ].map((item, i) => (
              <GlassCard key={item.key} delay={i * 0.1} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(`whatIs.features.${item.key}`)}
                </h3>
                <p className="text-sm text-gray-400">
                  {t(`whatIs.features.${item.key}Desc`)}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass rounded-3xl p-6">
                <DashboardIllustration />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Dashboard & Analytics
              </h2>
              <p className="text-gray-400 mb-8">
                Get real-time insights into your business performance with our comprehensive dashboard. Track sales, monitor inventory, and make data-driven decisions.
              </p>

              <div className="space-y-4">
                {[
                  'Real-time sales tracking',
                  'Inventory management alerts',
                  'Customer behavior analytics',
                  'Multi-store performance comparison',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/features"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mt-6 font-semibold transition-colors"
              >
                Explore all features
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-green-400 font-semibold text-sm uppercase tracking-wider"
            >
              {t('industries.subtitle')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mt-2"
            >
              {t('industries.title')}
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <GlassCard key={i} delay={i * 0.1} className="text-center group cursor-pointer">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <FeatureIcon icon={industry.icon} />
                  <div className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.title}</h3>
                <p className="text-sm text-gray-400">{industry.desc}</p>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/features"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View all industries
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-green-400 font-semibold text-sm uppercase tracking-wider"
            >
              Hardware & Accessories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4"
            >
              Complete POS Hardware Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto mb-8"
            >
              As part of Denny Express, we offer a complete range of POS hardware including touch terminals, barcode scanners, receipt printers, and cash drawers. Everything you need to get started!
            </motion.p>
            <motion.a
              href="https://dennyexpress.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Visit Denny Express Store
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-900 to-transparent z-10" />
            
            <motion.div 
              className="flex gap-6 pb-4"
              animate={{ x: [0, -200, 0] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: 'linear' 
              }}
            >
              {[...products, ...products].map((product, i) => (
                <div key={i} className="flex-shrink-0 w-64">
                  <ProductCard product={product} index={i % products.length} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://dennyexpress.co.za/shop-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 font-semibold inline-flex items-center gap-2 transition-colors"
            >
              View All Products in Store
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-green-400 font-semibold text-sm uppercase tracking-wider"
            >
              {t('howItWorks.title')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mt-2"
            >
              How to Get Started
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: 1, ...t('howItWorks.steps.step1', { returnObjects: true }) },
              { step: 2, ...t('howItWorks.steps.step2', { returnObjects: true }) },
              { step: 3, ...t('howItWorks.steps.step3', { returnObjects: true }) },
              { step: 4, ...t('howItWorks.steps.step4', { returnObjects: true }) },
              { step: 5, ...t('howItWorks.steps.step5', { returnObjects: true }) },
            ].map((item, i) => (
              <GlassCard key={i} delay={i * 0.1} className="relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
                {i < 4 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-green-400">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                {t('cta.title')}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 mb-8"
              >
                {t('cta.subtitle')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="https://wa.me/27743551336?text=Hi, I'd like to book a demo for DennyPOS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4"
                >
                  <Phone className="w-5 h-5" />
                  {t('cta.primary')}
                </a>
                <a
                  href="mailto:sales@dennypos.co.za?subject=DennyPOS Sales Inquiry"
                  className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4"
                >
                  <Mail className="w-5 h-5" />
                  {t('cta.secondary')}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
