import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, HelpCircle, ShoppingCart, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FAQ() {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openIndex, setOpenIndex] = useState(null)

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'general', label: t('faq.categories.general') },
    { id: 'technical', label: t('faq.categories.technical') },
    { id: 'pricing', label: t('faq.categories.pricing') },
    { id: 'support', label: t('faq.categories.support') },
  ]

  const questions = [
    {
      q: 'What is DennyPOS?',
      a: 'DennyPOS is a sub-brand of Denny Express, specializing exclusively in Point of Sale software solutions for South African businesses. While Denny Express offers both hardware and software solutions, DennyPOS focuses purely on providing powerful, customizable POS software that helps you manage sales, inventory, and accounting efficiently.'
    },
    ...t('faq.questions', { returnObjects: true }).filter(q => !q.q.includes('What is DennyPOS'))
  ]

  const filteredQuestions = questions.filter((q) => {
    const matchesSearch =
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <main className="pt-24 pb-20">
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-green-500/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
              {t('faq.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              {t('faq.title')}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 mb-8 border border-green-500/20"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <ShoppingCart className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">About DennyPOS & Denny Express</h3>
                <p className="text-gray-400 text-sm mb-4">
                  DennyPOS is a sub-brand of <strong className="text-green-400">Denny Express</strong>. While Denny Express offers comprehensive POS solutions including hardware, DennyPOS specializes exclusively in <strong className="text-white">software solutions</strong>. 
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  Need POS hardware? Visit our parent company's store for touch terminals, barcode scanners, receipt printers, cash drawers, and more!
                </p>
                <a
                  href="https://dennyexpress.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-semibold transition-colors"
                >
                  Visit Denny Express Store
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all"
              />
            </div>
          </motion.div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-green-500 text-white'
                    : 'glass text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <AnimatePresence>
              {filteredQuestions.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-lg font-medium text-white">{q.q}</span>
                    <div className={`w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown className="w-5 h-5 text-green-400" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-gray-400 leading-relaxed">{q.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No questions found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 md:px-6 relative">
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent" />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-400 mb-8">
                Our team is ready to help you with any questions about DennyPOS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/27743551336?text=Hi, I have a question about DennyPOS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  WhatsApp Us
                </a>
                <a
                  href="mailto:sales@dennypos.co.za?subject=FAQ Question"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
