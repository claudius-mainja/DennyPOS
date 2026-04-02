import { Logo } from './Logo'

const POSIllustration = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1B4332" />
        <stop offset="100%" stopColor="#0A0F0D" />
      </linearGradient>
      <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#22C55E" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#4ADE80" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    <rect x="50" y="20" width="200" height="260" rx="12" fill="#111916" stroke="#22C55E" strokeWidth="2"/>
    <rect x="60" y="30" width="180" height="140" rx="8" fill="url(#screenGrad)"/>
    
    <rect x="70" y="40" width="160" height="30" rx="4" fill="#22C55E" opacity="0.2"/>
    <text x="150" y="60" fill="#22C55E" fontSize="14" textAnchor="middle" fontWeight="bold">DennyPOS</text>
    
    <rect x="70" y="80" width="70" height="30" rx="4" fill="#22C55E" opacity="0.3"/>
    <text x="105" y="100" fill="white" fontSize="10" textAnchor="middle">R 245.00</text>
    <rect x="145" y="80" width="85" height="30" rx="4" fill="#0A0F0D" stroke="#22C55E" strokeWidth="1"/>
    <text x="188" y="100" fill="#22C55E" fontSize="10" textAnchor="middle">CASH</text>
    
    <rect x="70" y="120" width="160" height="40" rx="4" fill="#0A0F0D"/>
    <rect x="75" y="125" width="40" height="30" rx="2" fill="#22C55E" opacity="0.2"/>
    <text x="95" y="145" fill="#22C55E" fontSize="8" textAnchor="middle">Item 1</text>
    <rect x="120" y="125" width="40" height="30" rx="2" fill="#22C55E" opacity="0.2"/>
    <text x="140" y="145" fill="#22C55E" fontSize="8" textAnchor="middle">Item 2</text>
    <rect x="165" y="125" width="40" height="30" rx="2" fill="#22C55E" opacity="0.2"/>
    <text x="185" y="145" fill="#22C55E" fontSize="8" textAnchor="middle">Item 3</text>
    
    <rect x="70" y="175" width="160" height="1" fill="url(#glowGrad)"/>
    
    <text x="80" y="200" fill="#94A3B8" fontSize="10">Subtotal</text>
    <text x="220" y="200" fill="white" fontSize="10" textAnchor="end">R 245.00</text>
    <text x="80" y="220" fill="#94A3B8" fontSize="10">Tax</text>
    <text x="220" y="220" fill="white" fontSize="10" textAnchor="end">R 24.50</text>
    <text x="80" y="245" fill="white" fontSize="12" fontWeight="bold">TOTAL</text>
    <text x="220" y="245" fill="#22C55E" fontSize="14" fontWeight="bold" textAnchor="end">R 269.50</text>
    
    <rect x="70" y="255" width="160" height="20" rx="4" fill="#22C55E"/>
    <text x="150" y="268" fill="white" fontSize="10" textAnchor="middle" fontWeight="bold">PAY NOW</text>
    
    <rect x="250" y="80" width="120" height="160" rx="8" fill="#111916" stroke="#22C55E" strokeWidth="1"/>
    <rect x="260" y="90" width="100" height="80" rx="4" fill="#0A0F0D"/>
    <rect x="265" y="95" width="90" height="70" fill="#111916"/>
    <circle cx="310" cy="130" r="25" stroke="#22C55E" strokeWidth="2" fill="none"/>
    <path d="M295 130 L305 140 L325 120" stroke="#22C55E" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <text x="310" y="190" fill="#22C55E" fontSize="10" textAnchor="middle">Scan to Pay</text>
    
    <rect x="260" y="200" width="45" height="30" rx="4" fill="#22C55E" opacity="0.2"/>
    <rect x="315" y="200" width="45" height="30" rx="4" fill="#22C55E" opacity="0.2"/>
    
    <ellipse cx="150" cy="290" rx="120" ry="10" fill="#22C55E" opacity="0.1"/>
  </svg>
)

const DashboardIllustration = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="chartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#22C55E" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#22C55E" stopOpacity="0.5" />
      </linearGradient>
    </defs>
    
    <rect x="20" y="20" width="360" height="260" rx="12" fill="#111916" stroke="#22C55E" strokeWidth="1"/>
    
    <rect x="30" y="30" width="110" height="70" rx="8" fill="#0A0F0D"/>
    <text x="85" y="55" fill="#94A3B8" fontSize="10" textAnchor="middle">Today's Sales</text>
    <text x="85" y="80" fill="#22C55E" fontSize="18" fontWeight="bold" textAnchor="middle">R 12,450</text>
    
    <rect x="150" y="30" width="110" height="70" rx="8" fill="#0A0F0D"/>
    <text x="205" y="55" fill="#94A3B8" fontSize="10" textAnchor="middle">Transactions</text>
    <text x="205" y="80" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle">247</text>
    
    <rect x="270" y="30" width="100" height="70" rx="8" fill="#0A0F0D"/>
    <text x="320" y="55" fill="#94A3B8" fontSize="10" textAnchor="middle">Avg. Order</text>
    <text x="320" y="80" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle">R 50.40</text>
    
    <rect x="30" y="110" width="230" height="120" rx="8" fill="#0A0F0D"/>
    <text x="40" y="130" fill="white" fontSize="12" fontWeight="bold">Sales Overview</text>
    <path d="M40 210 L60 190 L80 200 L100 170 L120 180 L150 150 L170 165 L190 140 L210 155 L230 130 L250 145 L260 130" 
          stroke="#22C55E" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M40 210 L60 190 L80 200 L100 170 L120 180 L150 150 L170 165 L190 140 L210 155 L230 130 L250 145 L260 130 L260 220 L40 220 Z" 
          fill="url(#chartGrad)"/>
    
    <rect x="270" y="110" width="100" height="55" rx="8" fill="#0A0F0D"/>
    <text x="320" y="130" fill="#94A3B8" fontSize="10" textAnchor="middle">Top Category</text>
    <text x="320" y="155" fill="#22C55E" fontSize="14" fontWeight="bold" textAnchor="middle">Retail</text>
    
    <rect x="270" y="175" width="100" height="55" rx="8" fill="#0A0F0D"/>
    <text x="320" y="195" fill="#94A3B8" fontSize="10" textAnchor="middle">Low Stock</text>
    <text x="320" y="220" fill="#EF4444" fontSize="14" fontWeight="bold" textAnchor="middle">12 Items</text>
    
    <ellipse cx="200" cy="290" rx="150" ry="10" fill="#22C55E" opacity="0.1"/>
  </svg>
)

const FeatureIcon = ({ icon }) => {
  const icons = {
    cart: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
    users: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    credit: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    inventory: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    settings: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    barcode: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 5v14M6 5v14M10 5v14M13 5v14M17 5v14M21 5v14"/>
      </svg>
    ),
    receipt: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/>
        <line x1="8" y1="10" x2="16" y2="10"/>
        <line x1="8" y1="14" x2="16" y2="14"/>
      </svg>
    ),
    store: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    restaurant: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    pharmacy: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/>
        <path d="m18 15-2-2"/>
        <path d="m15 18-2-2"/>
      </svg>
    ),
    truck: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    )
  }
  return icons[icon] || icons.cart
}

export { POSIllustration, DashboardIllustration, FeatureIcon }
