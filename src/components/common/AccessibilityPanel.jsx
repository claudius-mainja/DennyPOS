import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Accessibility, Languages, Sun, Moon, Eye, Type, Contrast } from 'lucide-react'
import { useAccessibility } from '../../context/AccessibilityContext'
import { useLanguage } from '../../context/LanguageContext'

export default function AccessibilityPanel() {
  const { 
    fontSize, setFontSize, 
    contrast, setContrast, 
    colorBlindMode, setColorBlindMode,
    darkMode, setDarkMode,
    panelOpen, setPanelOpen
  } = useAccessibility()

  const { language, changeLanguage, languages } = useLanguage()

  const fontSizes = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'xlarge', label: 'Extra Large' },
  ]

  const contrastModes = [
    { value: 'normal', label: 'Standard' },
    { value: 'high', label: 'High Contrast' },
    { value: 'low', label: 'Low Contrast' },
  ]

  const colorBlindModes = [
    { value: 'none', label: 'Normal' },
    { value: 'protanopia', label: 'Protanopia (Red-blind)' },
    { value: 'deuteranopia', label: 'Deuteranopia (Green-blind)' },
    { value: 'tritanopia', label: 'Tritanopia (Blue-blind)' },
  ]

  return (
    <>
      <button
        onClick={() => setPanelOpen(true)}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-green-500 hover:bg-green-400 rounded-full shadow-glow flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Accessibility Options"
      >
        <Accessibility className="w-6 h-6 text-white" />
      </button>

      {panelOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm" onClick={() => setPanelOpen(false)} />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-dark-800 border-l border-white/10 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <Accessibility className="w-6 h-6 text-green-400" />
                  Accessibility Options
                </h2>
                <button
                  onClick={() => setPanelOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <div className="space-y-8">
                <section>
                  <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Type className="w-4 h-4" />
                    Text Size
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {fontSizes.map((size) => (
                      <button
                        key={size.value}
                        onClick={() => setFontSize(size.value)}
                        className={`p-3 rounded-lg border transition-all duration-300 ${
                          fontSize === size.value
                            ? 'bg-green-500/20 border-green-500 text-green-400'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        {size.label}
                      </button>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Contrast className="w-4 h-4" />
                    Contrast Mode
                  </h3>
                  <div className="space-y-2">
                    {contrastModes.map((mode) => (
                      <button
                        key={mode.value}
                        onClick={() => setContrast(mode.value)}
                        className={`w-full p-3 rounded-lg border text-left transition-all duration-300 ${
                          contrast === mode.value
                            ? 'bg-green-500/20 border-green-500 text-green-400'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Color Blind Mode
                  </h3>
                  <div className="space-y-2">
                    {colorBlindModes.map((mode) => (
                      <button
                        key={mode.value}
                        onClick={() => setColorBlindMode(mode.value)}
                        className={`w-full p-3 rounded-lg border text-left transition-all duration-300 ${
                          colorBlindMode === mode.value
                            ? 'bg-green-500/20 border-green-500 text-green-400'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                    Display Mode
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setDarkMode(true)}
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        darkMode
                          ? 'bg-green-500/20 border-green-500'
                          : 'bg-white/5 border-white/10'
                      }`}
                    >
                      <Moon className={`w-6 h-6 mx-auto mb-2 ${darkMode ? 'text-green-400' : 'text-gray-500'}`} />
                      <span className={`text-sm ${darkMode ? 'text-green-400' : 'text-gray-500'}`}>Dark</span>
                    </button>
                    <button
                      onClick={() => setDarkMode(false)}
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        !darkMode
                          ? 'bg-green-500/20 border-green-500'
                          : 'bg-white/5 border-white/10'
                      }`}
                    >
                      <Sun className={`w-6 h-6 mx-auto mb-2 ${!darkMode ? 'text-green-400' : 'text-gray-500'}`} />
                      <span className={`text-sm ${!darkMode ? 'text-green-400' : 'text-gray-500'}`}>Light</span>
                    </button>
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Languages className="w-4 h-4" />
                    Language
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`p-3 rounded-lg border transition-all duration-300 ${
                          language === lang.code
                            ? 'bg-green-500/20 border-green-500 text-green-400'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        <span className="block text-sm font-medium">{lang.native}</span>
                        <span className="block text-xs opacity-60">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
