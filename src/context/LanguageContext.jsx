import { createContext, useContext, useState } from 'react'
import i18n from '../i18n'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const changeLanguage = (lang) => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'af', name: 'Afrikaans', native: 'Afrikaans' },
    { code: 'zu', name: 'Zulu', native: 'isiZulu' },
    { code: 'xh', name: 'Xhosa', native: 'isiXhosa' },
    { code: 'st', name: 'Southern Sotho', native: 'Sesotho' },
    { code: 'tn', name: 'Tswana', native: 'Setswana' },
    { code: 've', name: 'Venda', native: 'Xitsonga' },
    { code: 'ts', name: 'Tsonga', native: 'Xitsonga' },
    { code: 'nso', name: 'Northern Sotho', native: 'Sesotho sa Leboya' },
  ]

  const value = {
    language,
    changeLanguage,
    languages
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
