# DennyPOS Website

**Version:** 1.0.0  
**Designed & Developed by:** Claudius Mainja  
**Company:** Blacklemur Innovations

## Overview

DennyPOS is a premium, locally-installed Point of Sale system website designed for South African businesses. The website showcases enterprise-grade POS solutions with a modern, futuristic design.

## Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **Internationalization:** react-i18next
- **Backend:** PHP

## Project Structure

```
DennyPOS/
├── public/                  # Static public assets
│   └── logo.jpg            # Website favicon/logo
├── src/
│   ├── assets/             # Images and graphics
│   │   └── logo.jpg        # Logo image
│   ├── components/         # React components
│   │   ├── common/        # Shared components
│   │   │   ├── AccessibilityPanel.jsx
│   │   │   ├── PageTransition.jsx
│   │   │   └── WhatsAppFloat.jsx
│   │   └── layout/        # Layout components
│   │       ├── Footer.jsx
│   │       └── Navbar.jsx
│   ├── context/            # React context providers
│   │   ├── AccessibilityContext.jsx
│   │   └── LanguageContext.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Features.jsx
│   │   ├── Pricing.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   ├── Returns.jsx
│   │   ├── Terms.jsx
│   │   └── Privacy.jsx
│   ├── i18n.js            # Internationalization
│   ├── index.css          # Global styles
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── api/                    # PHP backend
│   ├── contact.php        # Contact form API
│   └── .htaccess          # API configuration
├── public_html/            # Production deployment
│   └── .htaccess          # Production configuration
├── index.php              # PHP entry point
├── SPEC.md                # Project specification
└── README.md              # This file
```

## Getting Started

### Development
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```

### Production with PHP
```bash
npm run build
php -S localhost:8080
```

## Features

- Modern glass morphism design with 3D effects
- Multi-language support (English, Afrikaans, Zulu, Xhosa)
- Accessibility features (font size, contrast, color blind modes)
- WhatsApp integration for sales
- Responsive design
- Contact form with PHP backend

## Contact

- **Sales:** sales@dennypos.co.za
- **WhatsApp:** +27 74 355 1336
- **Phone:** 012 023 3315
- **Address:** 187 Alexandra, Halfway House, Midrand, Gauteng, SA

---

© 2026 DennyPOS. All rights reserved.  
Designed and developed by **Claudius Mainja** under **Blacklemur Innovations**.
