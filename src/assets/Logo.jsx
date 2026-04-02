import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  MapPin, Phone, Mail, Clock, 
  Facebook, Twitter, Linkedin, Instagram,
  ArrowRight, ShoppingCart, CreditCard, BarChart3, Users
} from 'lucide-react'

const Logo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22C55E" />
        <stop offset="100%" stopColor="#15803D" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <rect x="10" y="10" width="80" height="80" rx="12" fill="url(#logoGradient)" filter="url(#glow)"/>
    <g fill="white">
      <rect x="22" y="55" width="56" height="8" rx="2"/>
      <rect x="22" y="67" width="40" height="6" rx="2" opacity="0.7"/>
      <circle cx="35" cy="40" r="12" stroke="white" strokeWidth="4" fill="none"/>
      <path d="M35 33 L35 40 L42 40" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <circle cx="65" cy="35" r="4" fill="#22C55E"/>
      <circle cx="65" cy="48" r="3" fill="#22C55E" opacity="0.6"/>
    </g>
  </svg>
)

export default function LogoComponent(props) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="url(#logoGradient)" filter="url(#glow)"/>
      <g fill="white">
        <rect x="22" y="55" width="56" height="8" rx="2"/>
        <rect x="22" y="67" width="40" height="6" rx="2" opacity="0.7"/>
        <circle cx="35" cy="40" r="12" stroke="white" strokeWidth="4" fill="none"/>
        <path d="M35 33 L35 40 L42 40" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <circle cx="65" cy="35" r="4" fill="#22C55E"/>
        <circle cx="65" cy="48" r="3" fill="#22C55E" opacity="0.6"/>
      </g>
    </svg>
  )
}

export { Logo }
