'use client'
import React, { lazy, Suspense } from 'react'
import useButtons from '../hooks/useButtons'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import LoadingBar from './LoadingBar'
import { Locale } from '../lib/i18n'

// Importación dinámica de componentes
const Education = lazy(() => import('./ResumeComponents/Education'))
const Work = lazy(() => import('./ResumeComponents/Work'))
const Skills = lazy(() => import('./ResumeComponents/Skills'))
const Proyects = lazy(() => import('./ResumeComponents/Proyects'))
const Interests = lazy(() => import('./ResumeComponents/Interests'))

const LoadingComponent = () => (
  <div className="w-full">
    <LoadingBar />
  </div>
)

const Resume = ({ locale }: { locale: Locale }) => {
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

  const bulletBaseClass =
    'my-[15px] flex h-10 cursor-pointer items-center rounded-[20px] bg-[#1f2235] px-2 text-uiWhite transition-all duration-500'
  const bulletSelectedClass = 'w-full'
  const bulletCollapsedClass = 'w-4 overflow-hidden'

  return (
    <section
      ref={ref}
      className="-my-12 flex min-h-fit w-full flex-col items-center justify-center bg-uiWhite"
      id="Resume"
    >
      <div className={`mt-[200px] w-full ${inView ? 'appear' : ''} fade-in`}>
        <div className="heading-container">
          <div className="screen-heading">
            <span>{locale === 'en' ? 'Resume' : 'Trayectoria'}</span>
          </div>
          <div className="screen-sub-heading">
            <span>
              {locale === 'en'
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

        <div className="mx-auto mb-20 flex h-auto w-[90%] max-w-[1000px] flex-col items-center lg:h-[360px] lg:flex-row lg:items-stretch">
          <div className="my-[30px] w-full shadow-[15px_0_9px_-15px_#1f2235] lg:my-0 lg:w-[320px]">
            <div className="relative flex h-full w-full items-center">
              <div className="absolute z-[1] h-full w-[34px] bg-[#1f2235]"></div>
              <div className="relative z-[2] w-[90%] lg:w-[86%]">
                <div
                  onClick={() => toggleSection('education')}
                  className={`${bulletBaseClass} ${
                    isSelectedEducation ? bulletSelectedClass : bulletCollapsedClass
                  }`}
                >
                  <Image
                    className="mr-[30px] shrink-0"
                    src="/assets/resume/icons/education.svg"
                    width={16}
                    height={16}
                    alt="Education icon"
                  />
                  <span className="whitespace-nowrap font-poppins-semibold text-sm">
                    {locale === 'en' ? 'Education' : 'Educación'}
                  </span>
                </div>
                <div
                  onClick={() => toggleSection('work')}
                  className={`${bulletBaseClass} ${
                    isSelectedWork ? bulletSelectedClass : bulletCollapsedClass
                  }`}
                >
                  <Image
                    className="mr-[30px] shrink-0"
                    src="/assets/resume/icons/work-history.svg"
                    width={16}
                    height={16}
                    alt="Work history icon"
                  />
                  <span className="whitespace-nowrap font-poppins-semibold text-sm">
                    {locale === 'en'
                      ? 'Work History'
                      : 'Historial de Trabajo'}
                  </span>
                </div>
                <div
                  onClick={() => toggleSection('skills')}
                  className={`${bulletBaseClass} ${
                    isSelectedSkills ? bulletSelectedClass : bulletCollapsedClass
                  }`}
                >
                  <Image
                    className="mr-[30px] shrink-0"
                    src="/assets/resume/icons/programming-skills.svg"
                    width={16}
                    height={16}
                    alt="Programming skills icon"
                  />
                  <span className="whitespace-nowrap font-poppins-semibold text-sm">
                    {locale === 'en'
                      ? 'Hard Skills'
                      : 'Habilidades Técnicas'}
                  </span>
                </div>
                <div
                  onClick={() => toggleSection('projects')}
                  className={`${bulletBaseClass} ${
                    isSelectedProyects ? bulletSelectedClass : bulletCollapsedClass
                  }`}
                >
                  <Image
                    className="mr-[30px] shrink-0"
                    src="/assets/resume/icons/projects.svg"
                    width={16}
                    height={16}
                    alt="Projects icon"
                  />
                  <span className="whitespace-nowrap font-poppins-semibold text-sm">
                    {locale === 'en'
                      ? 'Highlighted Projects'
                      : 'Proyectos Destacados'}
                  </span>
                </div>
                <div
                  onClick={() => toggleSection('interests')}
                  className={`${bulletBaseClass} ${
                    isSelectedInterests ? bulletSelectedClass : bulletCollapsedClass
                  }`}
                >
                  <Image
                    className="mr-[30px] shrink-0"
                    src="/assets/resume/icons/interests.svg"
                    width={16}
                    height={16}
                    alt="Interests icon"
                  />
                  <span className="whitespace-nowrap font-poppins-semibold text-sm">
                    {locale === 'en' ? 'Interests' : 'Intereses'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[360px] w-full overflow-y-auto pl-0 lg:w-[600px] lg:pl-20">
            <Suspense fallback={<LoadingComponent />}>
              {isSelectedEducation && <Education locale={locale} />}
              {isSelectedWork && <Work locale={locale} />}
              {isSelectedSkills && <Skills />}
              {isSelectedProyects && <Proyects locale={locale} />}
              {isSelectedInterests && <Interests locale={locale} />}
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
