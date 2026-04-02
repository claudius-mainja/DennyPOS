import { createContext, useContext, useState, useEffect } from 'react'

const AccessibilityContext = createContext()

export function AccessibilityProvider({ children }) {
  const [fontSize, setFontSize] = useState('medium')
  const [contrast, setContrast] = useState('normal')
  const [colorBlindMode, setColorBlindMode] = useState('none')
  const [darkMode, setDarkMode] = useState(true)
  const [panelOpen, setPanelOpen] = useState(false)

  useEffect(() => {
    document.body.className = document.body.className
      .replace(/font-size-\w+/g, '')
      .replace(/contrast-\w+/g, '')
      .replace(/colorblind-\w+/g, '')
      .replace(/light-mode/g, '')
      .trim()

    if (fontSize !== 'medium') {
      document.body.classList.add(`font-size-${fontSize}`)
    }
    if (contrast !== 'normal') {
      document.body.classList.add(`contrast-${contrast}`)
    }
    if (colorBlindMode !== 'none') {
      document.body.classList.add(`colorblind-${colorBlindMode}`)
    }
    if (!darkMode) {
      document.body.classList.add('light-mode')
    }
  }, [fontSize, contrast, colorBlindMode, darkMode])

  const value = {
    fontSize,
    setFontSize,
    contrast,
    setContrast,
    colorBlindMode,
    setColorBlindMode,
    darkMode,
    setDarkMode,
    panelOpen,
    setPanelOpen
  }

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider')
  }
  return context
}
