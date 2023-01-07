import React, { useContext } from 'react'
import useButtons from '../hooks/useButtons'
import Education from './ResumeComponents/Education'
import Interests from './ResumeComponents/Interests'
import Proyects from './ResumeComponents/Proyects'
import Skills from './ResumeComponents/Skills'
import Work from './ResumeComponents/Work'
import { useInView } from 'react-intersection-observer'
import { LanguageContext } from '../context/LanguageContextProvider'
import { ILanguageContextType } from '../@types/language.d.types'

const Resume = () => {
  const { language } = useContext(LanguageContext) as ILanguageContextType

  const { ref, inView } = useInView({
    threshold: 0.3
  })
  const [
    isSelectedEducation,
    isSelectedWork,
    isSelectedSkills,
    isSelectedProyects,
    isSelectedInterests,
    toggleSection
  ] = useButtons()

  return (
    <div ref={ref} className="resume-container screen-container " id="Resume">
      <div className={`resume-content ${inView ? 'appear' : ''} fade-in`}>
        <div className="heading-container">
          <div className="screen-heading">
            <span>{language.name === 'en' ? 'Resume' : 'Trayectoria'}</span>
          </div>
          <div className="screen-sub-heading">
            <span>
              {language.name === 'en'
                ? 'My formal Bio Details'
                : 'Detalles de mi Biografia'}
            </span>
          </div>
          <div className="heading-seperator">
            <div className="seperator-line"></div>
            <div className="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">
                <div
                  onClick={() => toggleSection('education')}
                  className={`bullet ${
                    isSelectedEducation && 'selected-bullet'
                  }`}
                >
                  <img
                    className="bullet-logo"
                    src="/assets/resume/icons/education.svg"
                    alt="B"
                  />
                  <span className="bullet-label">
                    {language.name === 'en' ? 'Education' : 'Educación'}
                  </span>
                </div>
                <div
                  onClick={() => toggleSection('work')}
                  className={`bullet ${isSelectedWork && 'selected-bullet'}`}
                >
                  <img
                    className="bullet-logo"
                    src="/assets/resume/icons/work-history.svg"
                    alt="B"
                  />
                  <span className="bullet-label">
                    {language.name === 'en'
                      ? 'Work History'
                      : 'Historial de Trabajo'}
                  </span>
                </div>
                <div
                  onClick={() => toggleSection('skills')}
                  className={`bullet ${isSelectedSkills && 'selected-bullet'}`}
                >
                  <img
                    className="bullet-logo"
                    src="/assets/resume/icons/programming-skills.svg"
                    alt="B"
                  />
                  <span className="bullet-label">
                    {language.name === 'en'
                      ? 'Hard Skills'
                      : 'Habilidades Técnicas'}
                  </span>
                </div>
                <div
                  onClick={() => toggleSection('projects')}
                  className={`bullet ${
                    isSelectedProyects && 'selected-bullet'
                  }`}
                >
                  <img
                    className="bullet-logo"
                    src="/assets/resume/icons/projects.svg"
                    alt="B"
                  />
                  <span className="bullet-label">
                    {language.name === 'en'
                      ? 'Highlighted Projects'
                      : 'Proyectos Destacados'}
                  </span>
                </div>
                <div
                  onClick={() => toggleSection('interests')}
                  className={`bullet ${
                    isSelectedInterests && 'selected-bullet'
                  }`}
                >
                  <img
                    className="bullet-logo"
                    src="/assets/resume/icons/interests.svg"
                    alt="B"
                  />
                  <span className="bullet-label">
                    {language.name === 'en' ? 'Interests' : 'Intereses'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-bullet-details">
            {isSelectedEducation && <Education />}
            {isSelectedWork && <Work />}
            {isSelectedSkills && <Skills />}
            {isSelectedProyects && <Proyects />}
            {isSelectedInterests && <Interests />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
