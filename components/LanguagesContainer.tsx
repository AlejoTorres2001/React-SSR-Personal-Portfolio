'use client'
import React, { useContext } from 'react'
import { ILanguageContextType } from '../@types/language.types'
import { LanguageContext } from '../context/LanguageContextProvider'

type LanguagesContainerProps = {
  isLanguagesSelected: boolean
  setIsLanguagesSelected: (isLanguagesSelected: boolean) => void
}

const LanguagesContainer = ({
  setIsLanguagesSelected,
  isLanguagesSelected
}: LanguagesContainerProps) => {
  const { language } = useContext(LanguageContext) as ILanguageContextType
  
  return (
  <div className="language-container">
    <div 
      className="language-toggle"
      onClick={() => {
        setIsLanguagesSelected(!isLanguagesSelected)
      }}
    >
      {language.name.toUpperCase()}
    </div>
  </div>
)
}

export default LanguagesContainer