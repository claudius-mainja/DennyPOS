import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  MapPin, Phone, Mail, Check, ArrowRight, 
  Target, Heart, Shield, Lightbulb
} from 'lucide-react'
import LogoImg from '../assets/logo.jpg'

export default function About() {
  const { t } = useTranslation()

  const values = [
    {
      icon: Shield,
      title: t('about.values.items.reliability.title'),
      desc: t('about.values.items.reliability.desc'),
      color: 'from-green-500/20 to-green-400/10',
    },
    {
      icon: Heart,
      title: t('about.values.items.support.title'),
      desc: t('about.values.items.support.desc'),
      color: 'from-blue-500/20 to-blue-400/10',
    },
    {
      icon: Lightbulb,
      title: t('about.values.items.innovation.title'),
      desc: t('about.values.items.innovation.desc'),
      color: 'from-purple-500/20 to-purple-400/10',
    },
    {
      icon: Target,
      title: t('about.values.items.value.title'),
      desc: t('about.values.items.value.desc'),
      color: 'from-orange-500/20 to-orange-400/10',
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
              {t('about.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              {t('about.title')}
            </h1>
            <p className="text-gray-400 text-lg">
              Empowering South African businesses with enterprise-grade POS technology since day one.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                {t('about.story.title')}
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                {t('about.story.desc')}
              </p>
              <p className="text-gray-400">
                We believe that every South African business deserves access to powerful, reliable technology. That's why we've built DennyPOS to be affordable, customizable, and backed by local support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 relative"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <img src={LogoImg} alt="DennyPOS Logo" className="w-20 h-20 mb-6 object-contain" />
                <h3 className="text-2xl font-bold text-white mb-4">DennyPOS</h3>
                <p className="text-gray-400 mb-4">
                  Premium Point of Sale Solutions for South African Businesses
                </p>
                <div className="flex flex-wrap gap-3">
                  {['POS System', 'Inventory Management', 'Reporting', 'Multi-Store'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {t('about.mission.title')}
            </h2>
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <Target className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <p className="text-xl text-gray-300 leading-relaxed">
                  {t('about.mission.desc')}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {t('about.values.title')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 text-center glass-hover"
                >
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                    <value.icon className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-400">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              {t('about.location.title')}
            </h2>
          </motion.div>

          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                      <p className="text-gray-400">{t('about.location.address')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <a href="tel:+27743551336" className="text-gray-400 hover:text-green-400 transition-colors">
                        {t('about.location.phone')}
                      </a>
                      <p className="text-gray-500 text-sm">Office: {t('about.location.landline')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <a href="mailto:sales@dennypos.co.za" className="text-gray-400 hover:text-green-400 transition-colors">
                        sales@dennypos.co.za
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-64 bg-dark-700 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5!2d28.1!3d-26.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDAwJzAwLjAiUyAyOMKwMDYnMDAuMCJF!5e0!3m2!1sen!2sza!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent" />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Partner with Us?
              </h2>
              <p className="text-gray-400 mb-8">
                Join hundreds of South African businesses that trust DennyPOS for their point of sale needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/27743551336?text=Hi, I'd like to learn more about DennyPOS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
