# DennyPOS Website Specification

## 1. Concept & Vision

DennyPOS is a premium, locally-installed Point of Sale system designed for South African businesses. The website embodies a futuristic, professional aesthetic that positions DennyPOS as a cutting-edge technology leader in the POS industry. The experience feels like stepping into a high-tech command center where business operations are seamlessly orchestrated—sophisticated yet accessible, powerful yet intuitive.

The site converts visitors through strategic CTAs (Book a Demo, WhatsApp, Email) with a clear journey from discovery to conversion.

## 2. Design Language

### Aesthetic Direction
Futuristic tech aesthetic with glass morphism, 3D perspective elements, and dynamic motion. Inspired by premium SaaS dashboards and fintech interfaces—clean, powerful, and trustworthy.

### Color Palette
- **Primary Dark Green**: `#1B4332` (green-900)
- **Primary Green**: `#22C55E` (green-500)
- **Accent Green Light**: `#4ADE80`
- **Background Dark**: `#0A0F0D`
- **Background Card**: `rgba(27, 67, 50, 0.1)`
- **Glass White**: `rgba(255, 255, 255, 0.05)`
- **Glass Border**: `rgba(255, 255, 255, 0.1)`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#94A3B8`
- **Text Muted**: `#64748B`

### Typography
- **Primary Font**: Manrope (headings, CTAs, navigation)
- **Fallback**: system-ui, -apple-system, sans-serif
- **Scale**: 
  - Hero: 72px/4.5rem
  - H1: 48px/3rem
  - H2: 36px/2.25rem
  - H3: 24px/1.5rem
  - Body: 16px/1rem
  - Small: 14px/0.875rem

### Spatial System
- Base unit: 4px
- Section padding: 96px vertical, 24px horizontal
- Card padding: 32px
- Component gaps: 16px, 24px, 32px
- Border radius: 12px (cards), 8px (buttons), 16px (large panels)

### Motion Philosophy
- **Page transitions**: Fade with subtle scale (300ms ease-out)
- **Scroll animations**: Parallax 3D transforms, staggered reveals
- **Hover states**: Scale 1.02-1.05, glow effects (200ms)
- **3D perspective**: Tilt on hover for cards, depth layers on scroll
- **Loading states**: Skeleton shimmer with green gradient
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)

### Visual Assets
- **Logo**: Existing DennyPOS logo with cart icon
- **Icons**: Lucide React icons
- **Decorative**: Gradient orbs, grid patterns, floating particles
- **Images**: Abstract tech imagery, mockup screens

## 3. Layout & Structure

### Site Architecture
```
├── Home (/)
├── Features (/features)
├── Pricing (/pricing)
├── Services (/services)
├── About (/about)
├── FAQ (/faq)
├── Contact (/contact)
└── Components (shared)
    ├── Navigation
    ├── Footer
    ├── AccessibilityPanel
    └── LanguageSelector
```

### Page Structure Pattern
1. **Navigation**: Fixed, glass morphism, transforms on scroll
2. **Hero**: Full viewport, 3D floating elements, primary CTA
3. **Content Sections**: Alternating layouts, parallax depth
4. **Social Proof**: Testimonials, stats, logos
5. **CTA Banner**: High contrast conversion section
6. **Footer**: Comprehensive links, contact info, legal

### Responsive Strategy
- Desktop: Full 3D effects, multi-column layouts
- Tablet (768px): Simplified 3D, 2-column grids
- Mobile (640px): Single column, reduced animations

## 4. Features & Interactions

### Navigation
- Fixed header with backdrop blur
- Logo left, nav links center, CTA right
- Mobile: Hamburger menu with slide-in drawer
- Active page indicator with underline animation
- Scroll progress indicator

### Hero Section (Home)
- Animated headline with gradient text
- 3D floating POS terminal mockup
- Primary CTA: "Book a Demo" → WhatsApp
- Secondary CTA: "View Features"
- Floating particles and gradient orbs

### Features Showcase
- Interactive 3D card carousel
- Category tabs (Retail, Food & Beverage, Services, etc.)
- Feature cards with icons and descriptions
- Hover: Card tilt effect with glow

### Pricing Section
- 3-tier pricing cards with 3D depth
- Monthly/Annual toggle
- Popular plan highlight
- CTA buttons link to WhatsApp
- Currency: South African Rand (ZAR)

### Services Section
- Installation, Training, Support cards
- Process timeline
- Customization options
- Integration partners

### About Section
- Company story with parallax imagery
- Mission/Vision/Values cards
- Team highlights
- Location info with map

### FAQ Section
- Accordion with smooth expand/collapse
- Search functionality
- Category filters
- Popular questions highlighted

### Contact Section
- Contact form with validation
- Direct contact info cards
- Office location with embedded map
- WhatsApp floating button

### Accessibility Features
- Font size adjustment (4 levels)
- High/Low/Standard contrast modes
- Color blind modes (Protanopia, Deuteranopia, Tritanopia)
- Dark/Light screen toggle
- Language selector (SA languages)

### Language Options
- English (default)
- Afrikaans
- isiZulu
- isiXhosa
- Sepedi
- Sesotho
- Setswana
- Xitsonga
- siVenda

## 5. Component Inventory

### Button
- Variants: Primary (green), Secondary (outline), Ghost
- Sizes: sm, md, lg
- States: default, hover (glow + scale), active, disabled
- Icons: left or right position

### Card (Glass)
- Glass morphism background
- Border gradient on hover
- 3D tilt effect on hover
- Shadow depth variation

### Navigation Link
- Underline animation on hover
- Active state indicator
- Smooth color transitions

### Accordion Item
- Smooth height animation
- Icon rotation
- Glass background

### Form Input
- Floating label animation
- Focus ring with glow
- Error state with shake animation
- Success check animation

### Pricing Card
- 3D perspective on hover
- Popular badge with pulse
- Feature list with checkmarks
- Sticky header option

### Testimonial Card
- Avatar, name, company
- Quote with decorative marks
- Star rating
- Glass background

### Stat Counter
- Number animation on scroll
- Suffix/prefix support
- Icon decoration

## 6. Technical Approach

### Frontend Stack
- **Framework**: React 18+ with Vite
- **Styling**: Tailwind CSS v3 with custom config
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **3D Effects**: CSS transforms + Intersection Observer
- **i18n**: react-i18next

### Backend (PHP)
- Contact form submission
- Email notifications via SMTP
- Basic analytics endpoint

### API Design
```
POST /api/contact
{
  "name": string,
  "email": string,
  "phone": string,
  "company": string,
  "message": string,
  "interest": string
}

Response: { "success": boolean, "message": string }
```

### Folder Structure
```
DennyPOS/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── sections/
│   ├── pages/
│   ├── hooks/
│   ├── context/
│   ├── utils/
│   ├── translations/
│   └── styles/
├── api/
│   └── contact.php
├── scripts/
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 7. Contact Information
- **Sales Email**: sales@dennypos.co.za
- **WhatsApp**: +27 74 355 1336
- **Office Lines**: +27 74 355 1336 | 012 023 3315
- **Address**: 187 Alexandra, Halfway House, Midrand, Gauteng, South Africa

## 8. CTA Strategy
All CTAs route to conversion:
- **Book a Demo**: WhatsApp link (wa.me/27743551336)
- **Get Started**: Email (sales@dennypos.co.za)
- **Contact Sales**: Email with pre-filled subject
- **Learn More**: Internal navigation

## 9. Industries Served
- Retail Stores
- Restaurants & Cafes
- Quick Service (QSR)
- Liquor Stores
- Pharmacies
- Hardware Stores
- Fashion & Apparel
- Electronics
- Spas & Salons
- Automotive
