import { useState } from 'react'

type toggleSectionInterface = (sectionName: string) => void
const useButtons = () => {
  const [isSelectedEducation, setIsSelectedEducation] = useState(true)
  const [isSelectedWork, setIsSelectedWork] = useState(false)
  const [isSelectedSkills, setIsSelectedSkills] = useState(false)
  const [isSelectedProyects, setIsSelectedProyects] = useState(false)
  const [isSelectedInterests, setIsSelectedInterests] = useState(false)
  const toggleSection:toggleSectionInterface = (sectionName: string) => {
    switch (sectionName) {
      case 'education':
        setIsSelectedEducation(!isSelectedEducation)
        setIsSelectedWork(false)
        setIsSelectedSkills(false)
        setIsSelectedProyects(false)
        setIsSelectedInterests(false)
        break
      case 'work':
        setIsSelectedEducation(false)
        setIsSelectedWork(!isSelectedWork)
        setIsSelectedSkills(false)
        setIsSelectedProyects(false)
        setIsSelectedInterests(false)
        break
      case 'skills':
        setIsSelectedEducation(false)
        setIsSelectedWork(false)
        setIsSelectedSkills(!isSelectedSkills)
        setIsSelectedProyects(false)
        setIsSelectedInterests(false)
        break
      case 'projects':
        setIsSelectedEducation(false)
        setIsSelectedWork(false)
        setIsSelectedSkills(false)
        setIsSelectedProyects(!isSelectedProyects)
        setIsSelectedInterests(false)
        break
      case 'interests':
        setIsSelectedEducation(false)
        setIsSelectedWork(false)
        setIsSelectedSkills(false)
        setIsSelectedProyects(false)
        setIsSelectedInterests(!isSelectedInterests)
        break
      default:
        break
    }
  }
  return [
    isSelectedEducation,
    isSelectedWork,
    isSelectedSkills,
    isSelectedProyects,
    isSelectedInterests,
    toggleSection
  ]
}

export default useButtons
