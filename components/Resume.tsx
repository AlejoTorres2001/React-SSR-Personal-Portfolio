'use client'
import React, { lazy, Suspense } from 'react'
import useButtons from '../hooks/useButtons'
import { useInView } from 'react-intersection-observer'
import LoadingBar from './LoadingBar'
import { Locale } from '../lib/i18n'

const Education = lazy(() => import('./ResumeComponents/Education'))
const Work = lazy(() => import('./ResumeComponents/Work'))
const Skills = lazy(() => import('./ResumeComponents/Skills'))
const Proyects = lazy(() => import('./ResumeComponents/Proyects'))
const Interests = lazy(() => import('./ResumeComponents/Interests'))

const LoadingComponent = () => (
  <div className="w-full py-8">
    <LoadingBar />
  </div>
)

const Resume = ({ locale }: { locale: Locale }) => {
  const { ref, inView } = useInView({ threshold: 0.15 })
  const [
    isSelectedEducation,
    isSelectedWork,
    isSelectedSkills,
    isSelectedProyects,
    isSelectedInterests,
    toggleSection
  ] = useButtons()

  const tabs = [
    { id: 'education', label: locale === 'en' ? 'Education' : 'Educación', active: isSelectedEducation },
    { id: 'work', label: locale === 'en' ? 'Work' : 'Experiencia', active: isSelectedWork },
    { id: 'skills', label: locale === 'en' ? 'Skills' : 'Habilidades', active: isSelectedSkills },
    { id: 'projects', label: locale === 'en' ? 'Projects' : 'Proyectos', active: isSelectedProyects },
    { id: 'interests', label: locale === 'en' ? 'Interests' : 'Intereses', active: isSelectedInterests }
  ]

  return (
    <section
      ref={ref}
      className="flex w-full flex-col items-center justify-center py-24"
      id="Resume"
    >
      <div className={`w-full max-w-[1100px] px-5 ${inView ? 'appear' : ''} fade-in`}>
        {/* Section heading */}
        <div className="mb-12 flex flex-col items-center">
          <h2 className="font-fraunces text-4xl text-slate-50">
            {locale === 'en' ? 'Resume' : 'Trayectoria'}
          </h2>
          <p className="mt-2 font-jakarta text-xs uppercase tracking-widest text-slate-400">
            {locale === 'en' ? 'My formal bio details' : 'Detalles de mi biografía'}
          </p>
          <div className="mt-4 h-px w-32 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
        </div>

        {/* Tab bar */}
        <div className="mb-6 flex items-center justify-center overflow-x-auto pb-1">
          <div className="flex gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1 backdrop-blur-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => toggleSection(tab.id)}
                className={`cursor-pointer rounded-full px-4 py-2 font-jakarta text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  tab.active
                    ? 'bg-emerald-400/15 text-emerald-400 ring-1 ring-emerald-400/25'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div className="glass rounded-3xl p-6 md:p-10 min-h-[320px]">
          <Suspense fallback={<LoadingComponent />}>
            {isSelectedEducation && <Education locale={locale} />}
            {isSelectedWork && <Work locale={locale} />}
            {isSelectedSkills && <Skills />}
            {isSelectedProyects && <Proyects locale={locale} />}
            {isSelectedInterests && <Interests locale={locale} />}
          </Suspense>
        </div>
      </div>
    </section>
  )
}

export default Resume
