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
  <div className="relative z-[1000] mr-8 flex h-[30px] items-center justify-end text-uiWhite lg:mr-20">
    <div
      className="flex cursor-pointer items-center justify-center rounded bg-white/10 px-3 py-1.5 font-poppins-semibold text-base font-semibold transition-colors hover:bg-white/20"
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
