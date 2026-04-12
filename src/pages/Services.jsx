import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  Wrench, GraduationCap, Headphones, Settings, 
  RefreshCw, Briefcase, Check, ArrowRight, Phone, Mail
} from 'lucide-react'

const serviceIcons = {
  installation: Wrench,
  training: GraduationCap,
  support: Headphones,
  customization: Settings,
  updates: RefreshCw,
  consulting: Briefcase,
}

const processSteps = [
  'Discovery & Assessment',
  'Solution Design',
  'Implementation',
  'Training & Go-Live',
  'Ongoing Support',
]

export default function Services() {
  const { t } = useTranslation()

  const services = [
    {
      key: 'installation',
      icon: Wrench,
      color: 'from-green-500/20 to-green-400/10',
    },
    {
      key: 'training',
      icon: GraduationCap,
      color: 'from-blue-500/20 to-blue-400/10',
    },
    {
      key: 'support',
      icon: Headphones,
      color: 'from-purple-500/20 to-purple-400/10',
    },
    {
      key: 'customization',
      icon: Settings,
      color: 'from-orange-500/20 to-orange-400/10',
    },
    {
      key: 'updates',
      icon: RefreshCw,
      color: 'from-cyan-500/20 to-cyan-400/10',
    },
    {
      key: 'consulting',
      icon: Briefcase,
      color: 'from-pink-500/20 to-pink-400/10',
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
              {t('services.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              {t('services.title')}
            </h1>
            <p className="text-gray-400 text-lg">
              From installation to ongoing support, we're with you every step of the way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon
              const serviceData = t(`services.items.${service.key}`, { returnObjects: true })
              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-8 glass-hover group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{serviceData.title}</h3>
                  <p className="text-gray-400">{serviceData.desc}</p>
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
              {t('services.process.subtitle')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              {t('services.process.title')}
            </h2>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-green-500/20 -translate-y-1/2" />
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white font-bold flex items-center justify-center mx-auto mb-4 relative z-10">
                    {i + 1}
                  </div>
                  <h3 className="text-sm font-semibold text-white">{step}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                South African Support, Local Expertise
              </h2>
              <p className="text-gray-400 mb-8">
                We're not just a software provider—we're your local partner. Our team understands the unique challenges of South African businesses and is ready to help you succeed.
              </p>

              <div className="space-y-4">
                {[
                  'Based in Midrand, Gauteng',
                  '24/7 technical support available',
                  'On-site installation and training',
                  'Fast response times',
                  'Custom solutions for your industry',
                  'No overseas call centers',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-400 mb-6">
                Ready to transform your business operations? Contact us for a free consultation.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="https://wa.me/27743551336?text=Hi, I'd like to learn about DennyPOS services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp Sales
                </a>
                <a
                  href="mailto:sales@dennypos.co.za"
                  className="w-full btn-secondary flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-gray-400 mb-2">Or call us directly:</p>
                <a href="tel:+27743551336" className="text-xl font-bold text-green-400 hover:text-green-300 transition-colors">
                  +27 74 355 1336
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  Office: 012 023 3315
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent" />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Custom Development Available
              </h2>
              <p className="text-gray-400 mb-8">
                Need something specific? We offer custom development services to tailor DennyPOS to your unique business requirements.
              </p>
              <a
                href="mailto:sales@dennypos.co.za?subject=Custom Development Inquiry"
                className="btn-primary inline-flex items-center gap-2"
              >
                Contact Us for Custom Solutions
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="glass rounded-3xl p-8 md:p-12 bg-gradient-to-br from-denny-green/10 to-transparent border border-denny-green/20">
            <div className="text-center mb-8">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                Complete POS Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                Hardware & Software, One Package
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                DennyPOS provides world-class software solutions, while our sister company Denny Express offers premium POS hardware. Together, we deliver complete turnkey solutions for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">DennyPOS Software</h3>
                    <p className="text-gray-400 text-sm">Powerful, cloud-based point of sale software designed for South African businesses.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Denny Express Hardware</h3>
                    <p className="text-gray-400 text-sm">Premium POS terminals, receipt printers, barcode scanners, and more from Denny Express.</p>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <a
                  href="https://dennyexpress.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Visit Denny Express Store
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-sm text-gray-500 mt-3">
                  Explore complete POS hardware solutions at dennyexpress.co.za
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
