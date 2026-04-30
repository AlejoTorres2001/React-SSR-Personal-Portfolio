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
      className="flex w-full cursor-pointer items-center justify-center rounded px-1 py-2.5 font-poppins-semibold text-base font-semibold transition-all hover:bg-highlighted-background hover:text-uiWhite"
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
