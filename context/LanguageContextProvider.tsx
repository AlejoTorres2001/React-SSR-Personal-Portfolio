"use client"
import React, { useState, createContext, useEffect } from 'react'
import { Language, ILanguageContextType } from '../@types/language.types'

export const LanguageContext = createContext<ILanguageContextType | null>(null)

export const LanguageContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>({
    name: 'en',
    flag: '840',
    height: '14'
  })

  useEffect(() => {
    try {
      const storedLanguage = localStorage.getItem('language')
      if (storedLanguage) {
        setLanguage(JSON.parse(storedLanguage))
      }
    } catch (error) {
      console.error('Error loading language from localStorage:', error)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('language', JSON.stringify(language))
    } catch (error) {
      console.error('Error saving language to localStorage:', error)
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider