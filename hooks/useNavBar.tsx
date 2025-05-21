import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
type useNavBarHook = () => [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  (sectionName: string) => void
]
const useNavBar: useNavBarHook = () => {
  const router = useRouter()
  const [isHomeSelected, setIsHomeSelected] = useState(false)
  const [isAboutMeSelected, setIsAboutMeSelected] = useState(false)
  const [isResumeSelected, setIsResumeSelected] = useState(false)
  const [isContactMeSelected, setIsContactMeSelected] = useState(false)
  const [isBadgesSelected, setIsBadgesSelected] = useState(false)
  const [isProjectsSelected, setIsProjectsSelected] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    if (pathname === '/projects') setIsProjectsSelected(true)
    else setIsHomeSelected(true)
  }, [pathname])
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
        setIsProjectsSelected(false)
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
        setIsProjectsSelected(false)
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
        setIsProjectsSelected(false)
        break
      case 'contact-me':
        if (isContactMeSelected) {
          break
        }
        setIsHomeSelected(false)
        setIsAboutMeSelected(false)
        setIsResumeSelected(false)
        setIsProjectsSelected(false)
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
        setIsProjectsSelected(false)
        setIsBadgesSelected(!isBadgesSelected)
        break
      case 'projects':
        if (isProjectsSelected) {
          break
        }
        setIsHomeSelected(false)
        setIsAboutMeSelected(false)
        setIsResumeSelected(false)
        setIsContactMeSelected(false)
        setIsBadgesSelected(false)
        setIsProjectsSelected(!isProjectsSelected)
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
    isProjectsSelected,
    toggleSection
  ]
}

export default useNavBar
