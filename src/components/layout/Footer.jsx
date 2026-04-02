import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  MapPin, Phone, Mail, 
  Facebook, Twitter, Linkedin, Instagram,
  ArrowRight, ChevronRight, Send
} from 'lucide-react'
import LogoImg from '../../assets/logo.jpg'

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  const { t } = useTranslation()

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/features', label: t('nav.features') },
    { path: '/pricing', label: t('nav.pricing') },
    { path: '/services', label: t('nav.services') },
  ]

  const companyLinks = [
    { path: '/about', label: t('nav.about') },
    { path: '/faq', label: t('nav.faq') },
    { path: '/contact', label: t('nav.contact') },
  ]

  const legalLinks = [
    { path: '/returns', label: t('footer.returns') },
    { path: '/terms', label: t('footer.terms') },
    { path: '/privacy', label: t('footer.privacy') },
  ]

  return (
    <footer className="relative bg-dark-800 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <img src={LogoImg} alt="DennyPOS Logo" className="h-14 w-auto object-contain" />
                <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
            
            <div className="space-y-4">
              <a href="mailto:sales@dennypos.co.za" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
                <Mail className="w-5 h-5" />
                sales@dennypos.co.za
              </a>
              <a href="tel:+27743551336" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
                <Phone className="w-5 h-5" />
                +27 74 355 1336
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>187 Alexandra, Halfway House, Midrand, Gauteng, South Africa</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500/50 flex items-center justify-center text-gray-400 hover:text-green-400 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm mb-2">
                © 2026 DennyPOS. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs">
                Designed and developed by{' '}
                <a 
                  href="https://www.blacklemur.co.za" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400 transition-colors"
                >
                  Blacklemur Innovations
                </a>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://wa.me/27743551336" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                <Send className="w-4 h-4" />
                WhatsApp Sales
              </a>
              <a 
                href="mailto:sales@dennypos.co.za" 
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Sales
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
    </footer>
  )
}
