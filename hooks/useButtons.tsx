import { useState } from 'react'

type useButtonsHook = () => [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  (sectionName: string) => void
]

const useButtons: useButtonsHook = () => {
  const [isSelectedEducation, setIsSelectedEducation] = useState(true)
  const [isSelectedWork, setIsSelectedWork] = useState(false)
  const [isSelectedSkills, setIsSelectedSkills] = useState(false)
  const [isSelectedProyects, setIsSelectedProyects] = useState(false)
  const [isSelectedInterests, setIsSelectedInterests] = useState(false)
  const toggleSection = (sectionName: string) => {
    switch (sectionName) {
      case 'education':
        if (isSelectedEducation) {
          break
        }
        setIsSelectedEducation(!isSelectedEducation)
        setIsSelectedWork(false)
        setIsSelectedSkills(false)
        setIsSelectedProyects(false)
        setIsSelectedInterests(false)
        break
      case 'work':
        if (isSelectedWork) {
          break
        }
        setIsSelectedEducation(false)
        setIsSelectedWork(!isSelectedWork)
        setIsSelectedSkills(false)
        setIsSelectedProyects(false)
        setIsSelectedInterests(false)
        break
      case 'skills':
        if (isSelectedSkills) {
          break
        }
        setIsSelectedEducation(false)
        setIsSelectedWork(false)
        setIsSelectedSkills(!isSelectedSkills)
        setIsSelectedProyects(false)
        setIsSelectedInterests(false)
        break
      case 'projects':
        if (isSelectedProyects) {
          break
        }
        setIsSelectedEducation(false)
        setIsSelectedWork(false)
        setIsSelectedSkills(false)
        setIsSelectedProyects(!isSelectedProyects)
        setIsSelectedInterests(false)
        break
      case 'interests':
        if (isSelectedInterests) {
          break
        }
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
