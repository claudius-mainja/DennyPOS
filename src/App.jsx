import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/common/WhatsAppFloat'
import AccessibilityPanel from './components/common/AccessibilityPanel'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Services from './pages/Services'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Returns from './pages/Returns'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import PageTransition from './components/common/PageTransition'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-dark-900 relative">
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-50" />
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-dark-900/50 pointer-events-none" />
      
      <Navbar />
      <AccessibilityPanel />
      <WhatsAppFloat />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/features" element={<PageTransition><Features /></PageTransition>} />
          <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/returns" element={<PageTransition><Returns /></PageTransition>} />
          <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
          <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      
      <Footer />
    </div>
  )
}

export default App
