import React, { useContext } from 'react'
import Flag from 'react-world-flags'
import { ILanguageContextType } from '../@types/language.d.types'
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
      <span
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setIsLanguagesSelected(!isLanguagesSelected)
        }}
      >
        <Flag code={language.flag} height={language.height} />
      </span>
    </div>
  )
}

export default LanguagesContainer
