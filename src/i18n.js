import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        features: 'Features',
        pricing: 'Pricing',
        services: 'Services',
        about: 'About',
        faq: 'FAQ',
        contact: 'Contact',
        bookDemo: 'Book Demo'
      },
      hero: {
        badge: 'Trusted by 500+ South African Businesses',
        title: 'Power Your Business with DennyPOS',
        subtitle: 'The most advanced, locally-installed Point of Sale system designed exclusively for South African enterprises. Take control of your operations with enterprise-grade features, customizable to your unique needs.',
        cta: 'Book a Demo',
        secondary: 'Explore Features',
        stats: {
          businesses: 'Active Businesses',
          transactions: 'Transactions Processed',
          uptime: 'System Uptime',
          support: '24/7 Support'
        }
      },
      whatIs: {
        title: 'What is DennyPOS?',
        subtitle: 'Your Complete Point of Sale Solution',
        description: 'DennyPOS is a powerful, locally-installed Point of Sale system that puts you in complete control of your business operations. Unlike cloud-based solutions, your data stays on your premises, ensuring maximum security, reliability, and performance.',
        features: {
          offline: 'Works Offline',
          offlineDesc: 'Continue operations even without internet',
          secure: 'Local Data Storage',
          secureDesc: 'Your data never leaves your premises',
          customizable: 'Fully Customizable',
          customizableDesc: 'Tailored to your specific industry needs',
          scalable: 'Scalable Solutions',
          scalableDesc: 'Grow your business without limits'
        }
      },
      howItWorks: {
        title: 'How to Get DennyPOS',
        steps: {
          step1: { title: 'Book a Demo', desc: 'Start your free 30-day trial with personalized setup' },
          step2: { title: 'Consultation', desc: "We'll assess your business needs and recommend the best package" },
          step3: { title: 'Installation', desc: 'Our team installs and configures the system on-site' },
          step4: { title: 'Training', desc: 'Comprehensive training for you and your staff' },
          step5: { title: 'Ongoing Support', desc: 'Continuous support and updates to keep you running smoothly' }
        }
      },
      industries: {
        title: 'Industries We Serve',
        subtitle: 'Tailored solutions for every business type',
        items: {
          retail: { title: 'Retail Stores', desc: 'Complete inventory management, barcode scanning, and customer loyalty programs.' },
          restaurant: { title: 'Restaurants & Cafes', desc: 'Table management, kitchen display systems, and split bill options.' },
          qsr: { title: 'Quick Service', desc: 'Fast-order terminals, self-service kiosks, and drive-thru integration.' },
          liquor: { title: 'Liquor Stores', desc: 'Age verification, stock control, and regulatory compliance features.' },
          pharmacy: { title: 'Pharmacies', desc: 'Prescription tracking, supplier management, and health regulations.' },
          hardware: { title: 'Hardware Stores', desc: 'Bulk item handling, supplier portals, and project quoting.' },
          fashion: { title: 'Fashion & Apparel', desc: 'Size/color matrix, style variants, and visual inventory.' },
          electronics: { title: 'Electronics', desc: 'Serial number tracking, warranty management, and service bookings.' },
          salon: { title: 'Spas & Salons', desc: 'Appointment booking, service packages, and client management.' },
          automotive: { title: 'Automotive', desc: 'Parts inventory, job cards, and customer vehicle history.' }
        }
      },
      features: {
        title: 'Powerful Features',
        subtitle: 'Everything you need to run your business efficiently',
        categories: {
          core: 'Core POS',
          inventory: 'Inventory',
          reports: 'Reports',
          integrations: 'Integrations'
        },
        items: {
          sales: { title: 'Sales Processing', desc: 'Fast, intuitive sales with multiple payment methods' },
          inventory: { title: 'Inventory Management', desc: 'Real-time stock tracking and auto-reorder alerts' },
          reporting: { title: 'Advanced Reporting', desc: 'Comprehensive analytics and custom reports' },
          loyalty: { title: 'Customer Loyalty', desc: 'Built-in loyalty program with points and rewards' },
          multiuser: { title: 'Multi-User Access', desc: 'Role-based permissions for your team' },
          backup: { title: 'Automatic Backup', desc: 'Daily backups to keep your data safe' },
          barcode: { title: 'Barcode Scanning', desc: 'Quick product lookup and checkout' },
          discounts: { title: 'Flexible Discounts', desc: 'Percentage, fixed, and promotional discounts' },
          receipts: { title: 'Digital Receipts', desc: 'Email and SMS receipt options' },
          suppliers: { title: 'Supplier Management', desc: 'Track suppliers, orders, and deliveries' },
          touch: { title: 'Touch Screen', desc: 'Optimized for touch screen terminals' },
          multi: { title: 'Multi-Store', desc: 'Manage multiple locations from one dashboard' }
        }
      },
      pricing: {
        title: 'Simple, Transparent Pricing',
        subtitle: 'Choose the package that fits your business',
        monthly: '/month',
        annual: 'Annual',
        popular: 'Most Popular',
        packages: {
          starter: {
            name: 'Starter',
            price: 'ZAR 1,499',
            period: '/month',
            desc: 'Perfect for single-location small businesses',
            features: ['Single Terminal', 'Basic Inventory', 'Standard Reports', 'Email Support', 'Cash Management']
          },
          professional: {
            name: 'Professional',
            price: 'ZAR 2,999',
            period: '/month',
            desc: 'Ideal for growing businesses with multiple users',
            features: ['Up to 5 Terminals', 'Advanced Inventory', 'Full Reporting Suite', 'Priority Support', 'Multi-User Access', 'Customer Loyalty', 'Supplier Management', 'Barcode Scanning']
          },
          enterprise: {
            name: 'Enterprise',
            price: 'ZAR 5,999',
            period: '/month',
            desc: 'Complete solution for large operations',
            features: ['Unlimited Terminals', 'Multi-Store Management', 'Custom Reports', '24/7 Dedicated Support', 'API Access', 'Custom Integrations', 'Advanced Security', 'On-Site Training', 'White-Label Options']
          }
        },
        cta: 'Get Started'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive support for your DennyPOS journey',
        items: {
          installation: { title: 'Professional Installation', desc: 'Expert on-site installation and configuration of your POS system', icon: 'Wrench' },
          training: { title: 'Staff Training', desc: 'Comprehensive training programs for your team', icon: 'GraduationCap' },
          support: { title: 'Technical Support', desc: '24/7 technical support to keep your business running', icon: 'Headphones' },
          customization: { title: 'Customization', desc: 'Tailored solutions to meet your specific business needs', icon: 'Settings' },
          updates: { title: 'Software Updates', desc: 'Regular updates with new features and security patches', icon: 'RefreshCw' },
          consulting: { title: 'Business Consulting', desc: 'Expert advice on optimizing your operations', icon: 'Briefcase' }
        },
        process: {
          title: 'Our Process',
          subtitle: 'From consultation to ongoing support',
          steps: ['Discovery & Assessment', 'Solution Design', 'Implementation', 'Training & Go-Live', 'Ongoing Support']
        }
      },
      about: {
        title: 'About DennyPOS',
        subtitle: 'Powering South African Businesses Since Day One',
        story: {
          title: 'Our Story',
          desc: 'DennyPOS was founded with a clear mission: to provide South African businesses with a powerful, reliable, and affordable Point of Sale system that puts them in complete control. We understand the unique challenges faced by local enterprises, from unreliable internet connectivity to specific regulatory requirements.'
        },
        mission: {
          title: 'Our Mission',
          desc: 'To empower every South African business with enterprise-grade POS technology, regardless of size or industry. We believe technology should simplify operations, not complicate them.'
        },
        values: {
          title: 'Our Values',
          items: {
            reliability: { title: 'Reliability', desc: '99.9% uptime guaranteed' },
            support: { title: 'Local Support', desc: 'South African-based team' },
            innovation: { title: 'Innovation', desc: 'Continuous improvement' },
            value: { title: 'Value', desc: 'Affordable pricing' }
          }
        },
        location: {
          title: 'Our Location',
          address: '187 Alexandra, Halfway House, Midrand, Gauteng, South Africa',
          phone: '+27 74 355 1336',
          landline: '012 023 3315'
        }
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Find answers to common questions about DennyPOS',
        categories: {
          general: 'General',
          technical: 'Technical',
          pricing: 'Pricing',
          support: 'Support'
        },
        questions: [
          { q: 'What is DennyPOS?', a: 'DennyPOS is a locally-installed Point of Sale system designed for South African businesses. Unlike cloud-based solutions, your data stays on your premises, ensuring maximum security and reliability.' },
          { q: 'Do I need internet for DennyPOS to work?', a: 'No, DennyPOS is designed to work offline. While internet is required for some features like email receipts, your core POS operations continue uninterrupted even without connectivity.' },
          { q: 'What industries does DennyPOS support?', a: 'DennyPOS supports a wide range of industries including retail, restaurants, cafes, liquor stores, pharmacies, hardware stores, fashion, electronics, spas, and automotive businesses.' },
          { q: 'Can I try DennyPOS before buying?', a: 'Yes! We offer a free 30-day demo period for all interested businesses. This gives you ample time to test DennyPOS thoroughly in your actual business environment. Contact us to schedule your personalized demo and start your free trial.' },
          { q: 'How long does installation take?', a: 'Installation typically takes 1-2 days depending on your business size and complexity. Our team handles everything from setup to training.' },
          { q: 'What kind of support do you offer?', a: 'We offer comprehensive support including phone, email, and WhatsApp. Professional and Enterprise packages include priority and dedicated support.' },
          { q: 'Can DennyPOS integrate with my existing systems?', a: 'Yes, DennyPOS offers API access and integrations with popular accounting software, e-commerce platforms, and other business tools.' },
          { q: 'Is my data secure?', a: 'Absolutely. Your data is stored locally on your premises, giving you complete control. We also offer automatic daily backups and advanced security features.' },
          { q: 'What payment methods are supported?', a: 'DennyPOS supports cash, card (debit/credit), mobile payments (Snapscan, Zapper, PayShap), and contactless payments.' },
          { q: 'Can I use my existing hardware?', a: 'In most cases, yes. We support a wide range of receipt printers, barcode scanners, card machines, and cash drawers. We can advise on compatibility during consultation.' }
        ]
      },
      contact: {
        title: 'Get in Touch',
        subtitle: 'Ready to transform your business operations?',
        form: {
          name: 'Full Name',
          email: 'Email Address',
          phone: 'Phone Number',
          company: 'Company Name',
          interest: 'What are you interested in?',
          message: 'Your Message',
          submit: 'Send Message',
          sending: 'Sending...'
        },
        info: {
          email: 'Email Us',
          phone: 'Call Us',
          whatsapp: 'WhatsApp Us',
          address: 'Visit Us',
          salesEmail: 'sales@dennypos.co.za'
        }
      },
      footer: {
        tagline: 'Powering South African businesses with enterprise-grade POS solutions.',
        quickLinks: 'Quick Links',
        company: 'Company',
        legal: 'Legal',
        contact: 'Contact Us',
        copyright: '© 2024 DennyPOS. All rights reserved.',
        returns: 'Returns & Exchanges',
        terms: 'Terms and Conditions',
        privacy: 'Privacy Policy'
      },
      cta: {
        title: 'Ready to Transform Your Business?',
        subtitle: 'Book a demo today and discover how DennyPOS can streamline your operations.',
        primary: 'Book a Demo',
        secondary: 'Contact Sales'
      }
    }
  },
  af: {
    translation: {
      nav: {
        home: 'Tuis',
        features: 'Funksies',
        pricing: 'Pryse',
        services: 'Dienste',
        about: 'Oor Ons',
        faq: 'Vrae',
        contact: 'Kontak',
        bookDemo: 'Bespreking'
      },
      hero: {
        badge: 'Vertrou deur 500+ Suid-Afrikaanse Besighede',
        title: 'Dryf Jou Besigheid met DennyPOS',
        subtitle: 'Die mees gevorderde, plaaslik-geïnstalleerde Punt van Verkoop-stelsel, uitsluitlik ontwerp vir Suid-Afrikaanse ondernemings.',
        cta: 'Bespreking Maak',
        secondary: 'Verken Funksies',
        stats: {
          businesses: 'Aktiewe Besighede',
          transactions: 'Transaksies Verwerk',
          uptime: 'Stelsel Uptime',
          support: '24/7 Ondersteuning'
        }
      },
      whatIs: {
        title: 'Wat is DennyPOS?',
        subtitle: 'Jou Volledige Punt van Verkoop Oplossing',
        description: 'DennyPOS is \'n kragtige, plaaslik-geïnstalleerde Punt van Verkoop-stelsel wat jou in volledige beheer van jou besigheidsbedrywighede plaas.',
        features: {
          offline: 'Werk Aanlyn',
          offlineDesc: 'Gaan voort met bedrywighede selfs sonder internet',
          secure: 'Plaaslike Datastoor',
          secureDesc: 'Jou data verlaat nooit jou perseel nie',
          customizable: 'Ten Volle Aanpasbaar',
          customizableDesc: 'Aangepas by jou unieke industriebehoeftes',
          scalable: 'Skaalbare Oplossings',
          scalableDesc: 'Groei jou besigheid sonder perke'
        }
      },
      howItWorks: {
        title: 'Hoe om DennyPOS te Kry',
        steps: {
          step1: { title: 'Bespreking Maak', desc: 'Skeduleer \'n gratis gepersonaliseerde demonstrasie' },
          step2: { title: ' Konsultasie', desc: 'Ons sal jou besigheidsbehoeftes assesseer' },
          step3: { title: 'Installasie', desc: 'Ons span installeer die stelsel ter plaatse' },
          step4: { title: 'Opleiding', desc: 'Omvattende opleiding vir jou en jou personeel' },
          step5: { title: 'Deurlopende Ondersteuning', desc: 'Aanhoudende ondersteuning en opdaterings' }
        }
      },
      industries: {
        title: 'Nywerhede Wat Ons Bedien',
        subtitle: 'Aangepaste oplossings vir elke besigheidstipe',
        items: {
          retail: { title: 'Kleinhandel', desc: 'Volledige voorraadbestuur en getrouheidsprogramme.' },
          restaurant: { title: 'Restourante & Kafees', desc: 'Tafelbestuur en kombuisvertoningstelsels.' },
          qsr: { title: 'Vinnige Diens', desc: 'Vinnige bestellingsterminale en selfbedieningskiosks.' },
          liquor: { title: 'Drankwinkels', desc: 'Ouderdomsverifikasie en voorraadbeheer.' },
          pharmacy: { title: 'Apteke', desc: 'Voorskrifopsporing en wetlike nakoming.' },
          hardware: { title: 'Hardewarewinkels', desc: 'Groothandel items en verskaffersportale.' },
          fashion: { title: 'Mode & Klere', desc: 'Grootte/kleur matriks en visuele voorraad.' },
          electronics: { title: 'Elektronika', desc: 'Serienommer-opsporing en waarborgbestuur.' },
          salon: { title: 'Spa\'s & Salonne', desc: 'Afsprakebestuur en kliëntemanagement.' },
          automotive: { title: 'Motorvoertuie', desc: 'Onderdele-voorraad en voertuiggeskiedenis.' }
        }
      },
      features: {
        title: 'Kragtige Funksies',
        subtitle: 'Alles wat jy nodig het om jou besigheid doeltreffend te laat loop',
        categories: {
          core: 'Kern POS',
          inventory: 'Voorraad',
          reports: 'Verslae',
          integrations: 'Integrasies'
        },
        items: {
          sales: { title: 'Verkoopverwerking', desc: 'Vinnige, intuitiewe verkope met veelvuldige betaalmetodes' },
          inventory: { title: 'Voorraadbestuur', desc: 'Intydse voorraadopsporing en outomatiese herbestelling' },
          reporting: { title: 'Gevorderde Verslaggewing', desc: 'Omvattende ontledings en pasgemaakte verslae' },
          loyalty: { title: 'Kliënttrou', desc: 'Ingeboude trouprogram met punte en belonings' },
          multiuser: { title: 'Multi-gebruiker Toegang', desc: 'Rolgebaseerde toestemmings vir jou span' },
          backup: { title: 'Outomatiese Sekuriteitskopie', desc: 'Daaglikse rugsteun om jou data veilig te hou' },
          barcode: { title: 'Strookkode Skandering', desc: 'Vinnige produksoektog en kassabehandeling' },
          discounts: { title: 'Buigsame Afslag', desc: 'Persentasie, vasgestelde en promosie-afslag' },
          receipts: { title: 'Digitale Kwitansies', desc: 'E-pos en SMS kwitansie-opsies' },
          suppliers: { title: 'Verskafferbestuur', desc: 'Volg verskaffers, bestellings en aflewerings' },
          touch: { title: 'Aanraking Skerm', desc: 'Geoptimaliseer vir aanraking-skerm terminaals' },
          multi: { title: 'Multi-winkel', desc: 'Bestuur veelvuldige liggings vanaf een dashboard' }
        }
      },
      pricing: {
        title: 'Eenvoudige, Deursigtige Pryse',
        subtitle: 'Kies die pakket wat by jou besigheid pas',
        monthly: '/maand',
        annual: 'Jaarliks',
        popular: 'Mees Gewild',
        packages: {
          starter: {
            name: 'Beginner',
            price: 'ZAR 1,499',
            period: '/maand',
            desc: 'Perfek vir enkel-ligging klein besighede',
            features: ['Enkele Terminool', 'Basiese Voorraad', 'Standaard Verslae', 'E-pos Ondersteuning', 'Kontantbestuur']
          },
          professional: {
            name: 'Professioneel',
            price: 'ZAR 2,999',
            period: '/maand',
            desc: 'Ideaal vir groeiende besighede met veelvuldige gebruikers',
            features: ['Tot 5 Terminale', 'Gevorderde Voorraad', 'Volledige Verslag Suite', 'Prioriteit Ondersteuning', 'Multi-gebruiker Toegang', 'Kliënttrou', 'Verskafferbestuur', 'Strookkode Skandering']
          },
          enterprise: {
            name: 'Onderneming',
            price: 'ZAR 5,999',
            period: '/maand',
            desc: 'Volledige oplossing vir groot bedrywighede',
            features: ['Onbeperkte Terminale', 'Multi-winkel Bestuur', 'Pasgemaakte Verslae', '24/7 Toegewyde Ondersteuning', 'API Toegang', 'Pasgemaakte Integrasies', 'Gevorderde Sekuriteit', 'Plaaslike Opleiding', 'Wit-etiket Opsies']
          }
        },
        cta: 'Kry Begin'
      },
      services: {
        title: 'Ons Dienste',
        subtitle: 'Omvattende ondersteuning vir jou DennyPOS-reis',
        items: {
          installation: { title: 'Professionele Installasie', desc: 'Deskundige ter plaatse installasie en konfigurasie van jou POS-stelsel', icon: 'Wrench' },
          training: { title: 'Personeel Opleiding', desc: 'Omvattende opleidingsprogramme vir jou span', icon: 'GraduationCap' },
          support: { title: 'Tegniese Ondersteuning', desc: '24/7 tegniese ondersteuning om jou besigheid aan die loop te hou', icon: 'Headphones' },
          customization: { title: 'Aanpassing', desc: 'Aangepaste oplossings om aan jou spesifieke besigheidsbehoeftes te voldoen', icon: 'Settings' },
          updates: { title: 'Sagteware Opdaterings', desc: ' gereelde opdaterings met nuwe funksies en sekuriteitsweergawes', icon: 'RefreshCw' },
          consulting: { title: 'Besigheidskonsultasie', desc: 'Deskundige advies oor die optimalisering van jou bedrywighede', icon: 'Briefcase' }
        },
        process: {
          title: 'Ons Proses',
          subtitle: 'Van konsultasie tot deurlopende ondersteuning',
          steps: ['Ontdekking & Assessering', 'Oplossing Ontwerp', 'Implementering', 'Opleiding & Inwerkingtreding', 'Deurlopende Ondersteuning']
        }
      },
      about: {
        title: 'Oor DennyPOS',
        subtitle: 'Dryf Suid-Afrikaanse Besighede Sedert Dag Een',
        story: {
          title: 'Ons Storie',
          desc: 'DennyPOS is gestig met \'n duidelike missie: om Suid-Afrikaanse besighede van kragtige, betroubare en bekostigbare Punt van Verkoop-tegnologie te voorsien.'
        },
        mission: {
          title: 'Ons Missie',
          desc: 'Om elke Suid-Afrikaanse besigheid te bevoordani met ondernemingsvlak POS-tegnologie, ongeag grootte of industrie.'
        },
        values: {
          title: 'Ons Waardes',
          items: {
            reliability: { title: 'Betroubaarheid', desc: '99.9% uptime gewaarborg' },
            support: { title: 'Plaaslike Ondersteuning', desc: 'Suid-Afrikaanse-gebaseerde span' },
            innovation: { title: 'Innovasie', desc: 'Deurlopende verbetering' },
            value: { title: 'Waarde', desc: 'Bekostigbare pryse' }
          }
        },
        location: {
          title: 'Ons Ligging',
          address: '187 Alexandra, Halfway House, Midrand, Gauteng, Suid-Afrika',
          phone: '+27 74 355 1336',
          landline: '012 023 3315'
        }
      },
      faq: {
        title: 'Gereelde Vrae',
        subtitle: 'Vind antwoorde op algemene vrae oor DennyPOS',
        categories: {
          general: 'Algemeen',
          technical: 'Tegnies',
          pricing: 'Pryse',
          support: 'Ondersteuning'
        },
        questions: [
          { q: 'Wat is DennyPOS?', a: 'DennyPOS is \'n plaaslik-geïnstalleerde Punt van Verkoop-stelsel vir Suid-Afrikaanse besighede. Anders as wolk-gebaseerde oplossings, bly jou data op jou perseel.' },
          { q: 'Benodig ek internet vir DennyPOS?', a: 'Nee, DennyPOS is ontwerp om aanlyn te werk. Terwyl internet benodig word vir sommige funksies, gaan jou kern POS-bedrywighede voort.' },
          { q: 'Watter nywerhede ondersteun DennyPOS?', a: 'DennyPOS ondersteun \'n wye reeks nywerhede insluitend kleinhandel, restourante, kafees, drankwinkels, apteke, hardewarewinkels, en meer.' },
          { q: 'Kan ek DennyPOS probeer voordat ek koop?', a: 'Ja! Ons bied gratis demonstrasies aan vir alle belangstellende besighede. Kontak ons om jou gepersonaliseerde demonstrasie te skeduleer.' },
          { q: 'Hoe lank neem installasie?', a: 'Installasie neem tipies 1-2 dae afhangende van jou besigheidsgrootte en kompleksiteit. Ons span hanteer alles van opstelling tot opleiding.' },
          { q: 'Watter ondersteuning bied julle?', a: 'Ons bied omvattende ondersteuning insluitend foon, e-pos en WhatsApp. Professionele en Ondernemings-pakkette sluit prioriteit en toegewyde ondersteuning in.' },
          { q: 'Kan DennyPOS met my bestaande stelsels integreer?', a: 'Ja, DennyPOS bied API-toegang en integrasies met gewilde boekhoudersagteware, e-handelsplatforms en ander besigheidsinstrumente.' },
          { q: 'Is my data veilig?', a: 'Absoluut. Jou data word plaaslik op jou perseel gestoor, wat jou volledige beheer gee. Ons bied ook outomatiese daaglikse rugsteun en gevorderde sekuriteitsfunksies.' },
          { q: 'Watter betaalmetodes word ondersteun?', a: 'DennyPOS ondersteun kontant, kaart (debiet/krediet), selfoonbetalings (Snapscan, Zapper, PayShap) en kontaklose betalings.' },
          { q: 'Kan ek my bestaande hardeware gebruik?', a: 'In die meeste gevalle, ja. Ons ondersteun \'n wye verskeidenheid kwitansiedrukkers, strookkode-skanners, kaartmasjiene en kontantlaai. Ons kan adviseer tydens konsultasie.' }
        ]
      },
      contact: {
        title: 'Kontak Ons',
        subtitle: 'Gereed om jou besigheidsbedrywighede te transformeer?',
        form: {
          name: 'Volle Naam',
          email: 'E-pos Adres',
          phone: 'Foon Nommer',
          company: 'Besigheid Naam',
          interest: 'Waarin is jy geïnteresseerd?',
          message: 'Jou Boodskap',
          submit: 'Stuur Boodskap',
          sending: 'Stuur...'
        },
        info: {
          email: 'E-pos Ons',
          phone: 'Bel Ons',
          whatsapp: 'WhatsApp Ons',
          address: 'Besoek Ons',
          salesEmail: 'sales@dennypos.co.za'
        }
      },
      footer: {
        tagline: 'Dryf Suid-Afrikaanse besighede met ondernemingsvlak POS-oplossings.',
        quickLinks: 'Vinnige Skakels',
        company: 'Maatskappy',
        legal: 'Regs',
        contact: 'Kontak Ons',
        copyright: '© 2024 DennyPOS. Alle regte voorbehou.',
        returns: 'Terugkerings & Ruilings',
        terms: 'Beperkings en Voorwaardes',
        privacy: 'Privaatheidbeleid'
      },
      cta: {
        title: 'Gereed om Jou Besigheid te Transformeer?',
        subtitle: 'Boek \'n demonstrasie vandag en ontdek hoe DennyPOS jou bedrywighede kan stroomlyne.',
        primary: 'Boek \'n Demo',
        secondary: 'Kontak Verkope'
      }
    }
  },
  zu: {
    translation: {
      nav: {
        home: 'Ikhaya',
        features: 'Izici',
        pricing: 'Amagcobo',
        services: 'Amasevisi',
        about: 'Mayelana',
        faq: 'Imibuzo',
        contact: 'Xhumana',
        bookDemo: 'Bheka Demo'
      },
      hero: {
        badge: 'Ithembwe yi-500+ Amabhizinisi ase-South Africa',
        title: 'Power Your Business with DennyPOS',
        subtitle: 'Inkqubo ye-Point of Sale ekhiqizwe ngokukhethekayo for amabhizinisi ase-South Africa.',
        cta: 'Bheka i-Demo',
        secondary: 'Hlola Izici',
        stats: {
          businesses: 'Amabhizinisi Asebenzayo',
          transactions: 'Izinkambiso Ezenziwe',
          uptime: 'I-Uptime Yesistimu',
          support: 'I-24/7 Support'
        }
      },
      whatIs: {
        title: 'Yini iDennyPOS?',
        subtitle: 'Isixazululo Sakho Se-Point of Sale',
        description: 'I-DennyPOS yinkqubo enamandla, efakwe endaweni ezinze kakhulu eyenza ukuba ube nakho ngokuphelele kwezobuchwepheshe beqhaza lakho.',
        features: {
          offline: 'Isebenza Ngaphandle Kwe-Internet',
          offlineDesc: 'Qhubeka nemisebenzi ngisho noma ungenalusizo lwenethiwekhi',
          secure: 'Ukugcinwa Kwedatha Endaweni',
          secureDesc: 'Idatha yakho ayilahli indawo yakho',
          customizable: 'I-Customizable Ngokuphelele',
          customizableDesc: 'Iqhutshekiswe nezidingo zakho ezithile',
          scalable: 'Izixazululo Ezixhumekayo',
          scalableDesc: 'Khulisa ibhizinisi lakho ngaphandle kwezigqindo'
        }
      },
      howItWorks: {
        title: 'Ungayithola kanjani iDennyPOS',
        steps: {
          step1: { title: 'Bheka i-Demo', desc: 'Cwangcisela i-demo yamahhala' },
          step2: { title: 'I-Consultation', desc: 'Sizovalele izidingo zebhizinisi lakho' },
          step3: { title: 'Ukufakwa', desc: 'Iqembu lethu lifaka isistimu endaweni' },
          step4: { title: 'I-Training', desc: 'Ikhosi eliphelele yakho nabasebenzi bakho' },
          step5: { title: 'I-Ongoing Support', desc: 'Ukusekwa okuqhubekayo nokuhlaziywa' }
        }
      },
      industries: {
        title: 'Amaindustiri Esiwasebenzela',
        subtitle: 'Izixazululo ezenzelwe uhlobo ngalunye lwebhizinisi',
        items: {
          retail: { title: 'Izitolo Zokunquma', desc: 'Ukulawulwa kokuhlambela, izikena, namaprogramu okunikezela ngemiklomelo.' },
          restaurant: { title: 'Izindlu Zokudla', desc: 'Ukulawulwa kwetafula, amaphasi wekikhishini, namajelo okuhilelekayo.' },
          qsr: { title: 'Isevisi Ekhulu', desc: 'Amaterminali okuordera ngokushesha, amakhioski ezisebenzi, ne-drive-thru.' },
          liquor: { title: 'Izitolo Zeziphuzo', desc: 'Ukuhlolwa kwebulunga, ukulawulwa kwesitokisi, namapharamenda.' },
          pharmacy: { title: 'I-Pharmacies', desc: 'Ukulandelwa kwemibhalo, ukulawulwa kwabayini, nemithetho yezempilo.' },
          hardware: { title: 'Izitolo Ze-Hardware', desc: 'Ukuphathwa kwezinto ezinkulu, amaposatha abahlinzeki, namaxwebhu.' },
          fashion: { title: 'I-Fashion & Clothing', desc: 'I-matrix yobukhulu/imibala, izinhlobo zezitayela, ne-inventri ebonakalayo.' },
          electronics: { title: 'I-Electronics', desc: 'Ukulandelwa kwenombolo yokulandelwa, ukulawulwa kwewarranti, namabhingingizo.' },
          salon: { title: 'I-Spas & Salons', desc: 'Ukubekwa kwezinga, amaphakheji esevisi, nokulawulwa kwabaxhasi.' },
          automotive: { title: 'I-Automotive', desc: 'I-inventri yezigxenyana, amakhadi omsebenzi, nokulandelwa kwezimoto zabaxhasi.' }
        }
      },
      features: {
        title: 'Izici Ezinamandla',
        subtitle: 'Konke okudingayo ukuqhuba ibhizinisi lakho ngempumelelo',
        categories: {
          core: 'I-Core POS',
          inventory: 'I-Inventri',
          reports: 'Imibiko',
          integrations: 'Ukuhlakanipha'
        },
        items: {
          sales: { title: 'I-Sales Processing', desc: 'Ukudayiswa ngokushesha nangokucophelela' },
          inventory: { title: 'I-Inventory Management', desc: 'Ukulandelwa kwesitokisi ngesikhathi esiqonde nokulanda ngokuzenzakalelayo' },
          reporting: { title: 'Imibiko Ehamba Phambili', desc: 'I-Analytics ehlanzekileyo nemibiko ecustomize' },
          loyalty: { title: 'I-Customer Loyalty', desc: 'Iprogramu yokunikezela ngemiklomelo' },
          multiuser: { title: 'I-Multi-User Access', desc: 'Amalungelo ngokusekelwe kwindima' },
          backup: { title: 'I-Automatic Backup', desc: 'Amathegi nsuku zonke okuvikela idatha yakho' },
          barcode: { title: 'I-Barcoding Scanning', desc: 'Ukusesha ngokushesha komkhiqizo nokukhokha' },
          discounts: { title: 'I-Flexible Discounts', desc: 'Amaphesenti, amafixi, namapromo' },
          receipts: { title: 'I-Digital Receipts', desc: 'I-email ne-SMS receipt options' },
          suppliers: { title: 'I-Supplier Management', desc: 'Landela abahlinzeki, imigomo, namaketango' },
          touch: { title: 'I-Touch Screen', desc: 'I-Optimized for touch screen' },
          multi: { title: 'I-Multi-Store', desc: 'Landa izitolo eziningi kusuka kwidashboard eyodwa' }
        }
      },
      pricing: {
        title: 'Amagcobo Alula, Asobala',
        subtitle: 'Khetha iphakethe elifanelekile kwebhizinisi lakho',
        monthly: 'Nyanga zonke',
        annual: 'Nonyaka',
        popular: 'Okunempumelelo kakhulu',
        packages: {
          starter: {
            name: 'I-Starter',
            price: 'ZAR 1,499',
            period: '/nyanga',
            desc: 'Kufanele amashonisa asemakhaya',
            features: ['I-Single Terminal', 'I-Basic Inventory', 'I-Standard Reports', 'I-Email Support', 'I-Cash Management']
          },
          professional: {
            name: 'I-Professional',
            price: 'ZAR 2,999',
            period: '/nyanga',
            desc: 'Kufanele amabhizinisi akhulayo',
            features: ['Amaterminali ama-5', 'I-Advanced Inventory', 'I-Full Reporting Suite', 'I-Priority Support', 'I-Multi-User Access', 'I-Customer Loyalty', 'I-Supplier Management', 'I-Barcoding Scanning']
          },
          enterprise: {
            name: 'I-Enterprise',
            price: 'ZAR 5,999',
            period: '/nyanga',
            desc: 'Isixazululo esiphelele sezinkambiso ezinkulu',
            features: ['Amaterminali angapheli', 'I-Multi-Store Management', 'I-Custom Reports', 'I-24/7 Dedicated Support', 'I-API Access', 'I-Custom Integrations', 'I-Advanced Security', 'I-On-Site Training', 'I-White-Label Options']
          }
        },
        cta: 'Qala'
      },
      services: {
        title: 'Amasevisi Wethu',
        subtitle: 'Ukusekwa okuphelele kwendlela yakho yeDennyPOS',
        items: {
          installation: { title: 'I-Professional Installation', desc: 'Ukufakwa ngqo nokucwangciswa komshini wePOS', icon: 'Wrench' },
          training: { title: 'I-Staff Training', desc: 'Amaprogramu okuqeqesha ngokujulileyo', icon: 'GraduationCap' },
          support: { title: 'I-Technical Support', desc: 'I-24/7 technical support', icon: 'Headphones' },
          customization: { title: 'I-Customization', desc: 'Izixazululo ezenzelwe izidingo zakho ezithile', icon: 'Settings' },
          updates: { title: 'I-Software Updates', desc: 'Ukuhlaziywa ngokuvamile ngezici ezintsha', icon: 'RefreshCw' },
          consulting: { title: 'I-Business Consulting', desc: 'I-advice mayelana nokusebenza kwebhizinisi lakho', icon: 'Briefcase' }
        },
        process: {
          title: 'Indlela Yethu',
          subtitle: 'Ukusuka e-consultation ukuya ekusekweni',
          steps: ['I-Discovery & Assessment', 'I-Solution Design', 'I-Implementation', 'I-Training & Go-Live', 'I-Ongoing Support']
        }
      },
      about: {
        title: 'Mayelana neDennyPOS',
        subtitle: 'Ukunquma Amabhizinisi e-South Africa Kusukela Osukwini Lokuqala',
        story: {
          title: 'Indaba Yethu',
          desc: 'I-DennyPOS iqale ngenjongo ecacile: ukuhlinzeka amabhizinisi ase-South Africa ngamandla, athembekile, nezinsiza zebhizinisi.'
        },
        mission: {
          title: 'Injongo Yethu',
          desc: 'Ukunikezela wonke umuntu webhizinisi wase-South Africa ngobuchwepheshe be-POS.'
        },
        values: {
          title: 'Izinto Ezibonakalayo Zethu',
          items: {
            reliability: { title: 'Ukuthembeka', desc: 'I-99.9% uptime guaranteed' },
            support: { title: 'I-Local Support', desc: 'I-South African-based team' },
            innovation: { title: 'I-Innovation', desc: 'I-Continuous improvement' },
            value: { title: 'I-Value', desc: 'I-Affordable pricing' }
          }
        },
        location: {
          title: 'Indawo Yethu',
          address: '187 Alexandra, Halfway House, Midrand, Gauteng, South Africa',
          phone: '+27 74 355 1336',
          landline: '012 023 3315'
        }
      },
      faq: {
        title: 'Imibuzo Evame Ukubuzwa',
        subtitle: 'Thola impendulo kumabuzo amashaqilayo',
        categories: {
          general: 'Ngokuvamile',
          technical: 'Ngokobuchwepheshe',
          pricing: 'Ngokugcobo',
          support: 'Ngokusekwa'
        },
        questions: [
          { q: 'Yini iDennyPOS?', a: 'I-DennyPOS yinkqubo yePOS efakwe endaweni eyenzelwe amabhizinisi ase-South Africa.' },
          { q: 'Ingabe ngidinga i-internet?', a: 'Cha, iDennyPOS idizayiniwe ukusebenza ngaphandle kwe-internet.' },
          { q: 'Kusebenza yiziphi industry?', a: 'I-DennyPOS isekela amazinga amaningi afana nale: retail, izindlu zokudla, izitolo zeziphuzo, amapharamende, nezinye.' },
          { q: 'Ngingazama iDennyPOS?', a: 'Yebo! Sinikezela nge-demo mahhala. Xhumana nathi ukuhlela.' },
          { q: 'Kuthatha isikhathi esingakanani ukufaka?', a: 'Ukufakwa kuvamile ukuthatha amahhala ama-1-2 nsuku.' },
          { q: 'Niyasekela banjani?', a: 'Sinikezelwa ngokusekwa okuhlanganisa ifoni, i-email, ne-WhatsApp.' },
          { q: 'I-DennyPOS ingahlanganyela nezinye izistimu?', a: 'Yebo, i-DennyPOS inikezela ngokufinyelela kwe-API nokuhlakaniphwa.' },
          { q: 'Idatha yami ivikelwe?', a: 'Ngempela. Idatha yakho igcinwe endaweni yakho.' },
          { q: 'Kusebenza yiziphi izindlela zokukhokha?', a: 'I-DennyPOS isekela imali, amakhadi, namadayiswa eselula.' },
          { q: 'Ngingasebenzisa i-hardaware yami?', a: 'Kuyenzeka. Sinikezela ngokusekelwa kwezinto eziningi.' }
        ]
      },
      contact: {
        title: 'Xhumana NATHI',
        subtitle: 'Usuhlelelwe ukuguqula ibhizinisi lakho?',
        form: {
          name: 'Igama Eliphelele',
          email: 'I-Email Address',
          phone: 'Inombolo Yefoni',
          company: 'Igama Lebhizinisi',
          interest: 'Yini okunikezelwe kuyo?',
          message: 'Umlayezo Wakho',
          submit: 'Thumela Umlayezo',
          sending: 'Iyathumela...'
        },
        info: {
          email: 'Sithumele i-Email',
          phone: 'Sibize',
          whatsapp: 'Sithumele i-WhatsApp',
          address: 'Sivakashele',
          salesEmail: 'sales@dennypos.co.za'
        }
      },
      footer: {
        tagline: 'Ukunquma amabhizinisi ase-South Africa ngezisombululo ze-POS ezingenhla.',
        quickLinks: 'Izixhumanisi Ezisheshayo',
        company: 'Inkampani',
        legal: 'Legal',
        contact: 'Xhumana NATHI',
        copyright: '© 2024 DennyPOS. Conkeamalungelo agodliwe.',
        returns: 'Okubuyayo & Okushintshana',
        terms: 'Imibandela Nemibandela',
        privacy: 'Inqubomgomo Yobumfihlo'
      },
      cta: {
        title: 'Usuhlelelwe Ukuguqula Ibhizinisi Lakho?',
        subtitle: 'Bheka i-demo namuhla uze ufake i-DennyPOS.',
        primary: 'Bheka i-Demo',
        secondary: 'Xhumana Nazo'
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
