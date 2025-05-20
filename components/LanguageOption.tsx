'use client'
import React, { useContext } from 'react'
import { ILanguageContextType } from '../@types/language.types'
import { LanguageContext } from '../context/LanguageContextProvider'
import Flag from 'react-world-flags'
type LanguageOptionProps = {
  isLanguagesSelected: boolean
  setIsLanguagesSelected: (isLanguagesSelected: boolean) => void
}
const LanguageOption = ({
  isLanguagesSelected,
  setIsLanguagesSelected
}: LanguageOptionProps) => {
  const { setLanguage } = useContext(LanguageContext) as ILanguageContextType
  return (
    <span
      className="language-option"
      onClick={() => {
        setLanguage({
          name: 'sp',
          flag: '724',
          height: '18'
        })
        setIsLanguagesSelected(!isLanguagesSelected)
      }}
    >
      <Flag code="724" height="18" alt='language flag' />
      &nbsp; Spanish
    </span>
  )
}

export default LanguageOption
