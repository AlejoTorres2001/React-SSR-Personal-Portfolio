// filepath: /home/atorres/projects/React-SSR-Personal-Portfolio/components/LanguageOption.tsx
import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContextProvider'
import { ILanguageContextType } from '../@types/language.types'

type LanguageOptionProps = {
  isLanguagesSelected: boolean
  setIsLanguagesSelected: (isLanguagesSelected: boolean) => void
}

const LanguageOption = ({ isLanguagesSelected, setIsLanguagesSelected }: LanguageOptionProps) => {
  const { setLanguage } = useContext(LanguageContext) as ILanguageContextType
  
  return (
    <span
      className="language-option"
      onClick={() => {
        setLanguage({
          name: 'es',
          flag: '724',
          height: '15'
        })
        setIsLanguagesSelected(!isLanguagesSelected)
      }}
    >
      ES
    </span>
  )
}

export default LanguageOption