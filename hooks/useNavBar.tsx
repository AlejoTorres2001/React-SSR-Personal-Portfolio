import { useState } from 'react'
type useNavBarHook = () => [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  (sectionName: string) => void
]
const useNavBar: useNavBarHook = () => {
  const [isHomeSelected, setIsHomeSelected] = useState(true)
  const [isAboutMeSelected, setIsAboutMeSelected] = useState(false)
  const [isResumeSelected, setIsResumeSelected] = useState(false)
  const [isContactMeSelected, setIsContactMeSelected] = useState(false)
  const [isBadgesSelected, setIsBadgesSelected] = useState(false)
  const toggleSection = (sectionName: string) => {
    switch (sectionName) {
      case 'home':
        if (isHomeSelected) {
          break
        }
        setIsHomeSelected(!isHomeSelected)
        setIsAboutMeSelected(false)
        setIsResumeSelected(false)
        setIsContactMeSelected(false)
        setIsBadgesSelected(false)
        break
      case 'about-me':
        if (isAboutMeSelected) {
          break
        }
        setIsHomeSelected(false)
        setIsAboutMeSelected(!isAboutMeSelected)
        setIsResumeSelected(false)
        setIsContactMeSelected(false)
        setIsBadgesSelected(false)
        break
      case 'resume':
        if (isResumeSelected) {
          break
        }
        setIsHomeSelected(false)
        setIsAboutMeSelected(false)
        setIsResumeSelected(!isResumeSelected)
        setIsContactMeSelected(false)
        setIsBadgesSelected(false)
        break
      case 'contact-me':
        if (isContactMeSelected) {
          break
        }
        setIsHomeSelected(false)
        setIsAboutMeSelected(false)
        setIsResumeSelected(false)
        setIsContactMeSelected(!isContactMeSelected)
        setIsBadgesSelected(false)
        break
      case 'badges':
        if (isBadgesSelected) {
          break
        }
        setIsHomeSelected(false)
        setIsAboutMeSelected(false)
        setIsResumeSelected(false)
        setIsContactMeSelected(false)
        setIsBadgesSelected(!isBadgesSelected)
        break
      default:
        break
    }
  }
  return [
    isHomeSelected,
    isAboutMeSelected,
    isResumeSelected,
    isContactMeSelected,
    isBadgesSelected,
    toggleSection
  ]
}

export default useNavBar
