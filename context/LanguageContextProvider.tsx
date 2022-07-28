import React, { useState, createContext } from 'react'
import { Language, ILanguageContextType } from '../@types/language.d.types'

export const LanguageContext = createContext<ILanguageContextType | null>(null)

export const LanguageContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>({
    name: 'en',
    flag: '840',
    height: '14'
  })
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
export default LanguageContextProvider
