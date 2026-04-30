'use client'
import React, { lazy, Suspense } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap,
  faBriefcase,
  faCode,
  faFolder,
  faHeart
} from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
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
  <div className="w-full py-12">
    <LoadingBar />
  </div>
)

type Tab = {
  id: string
  label: string
  icon: IconDefinition
  active: boolean
}

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

  const tabs: Tab[] = [
    {
      id: 'education',
      label: locale === 'en' ? 'Education' : 'Educación',
      icon: faGraduationCap,
      active: isSelectedEducation
    },
    {
      id: 'work',
      label: locale === 'en' ? 'Experience' : 'Experiencia',
      icon: faBriefcase,
      active: isSelectedWork
    },
    {
      id: 'skills',
      label: locale === 'en' ? 'Skills' : 'Habilidades',
      icon: faCode,
      active: isSelectedSkills
    },
    {
      id: 'projects',
      label: locale === 'en' ? 'Projects' : 'Proyectos',
      icon: faFolder,
      active: isSelectedProyects
    },
    {
      id: 'interests',
      label: locale === 'en' ? 'Interests' : 'Intereses',
      icon: faHeart,
      active: isSelectedInterests
    }
  ]

  const activeTab = tabs.find((t) => t.active)

  return (
    <section
      ref={ref}
      className="flex w-full flex-col items-center justify-center py-24"
      id="Resume"
    >
      <div
        className={`w-full max-w-[1100px] px-5 ${inView ? 'appear' : ''} fade-in`}
      >
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

        {/* ── Mobile: horizontal pill strip ── */}
        <div className="mb-4 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => toggleSection(tab.id)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 font-jakarta text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                tab.active
                  ? 'bg-emerald-400/15 text-emerald-400 ring-1 ring-emerald-400/25'
                  : 'border border-white/[0.06] bg-white/[0.03] text-slate-400'
              }`}
            >
              <FontAwesomeIcon icon={tab.icon} className="text-xs" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Desktop: sidebar + scrollable panel ── */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-5">
          {/* Sidebar nav */}
          <div className="hidden md:flex md:w-[196px] md:shrink-0 md:flex-col glass rounded-2xl p-2">
            <p className="px-4 pb-2 pt-2 font-jakarta text-[10px] uppercase tracking-widest text-slate-600">
              {locale === 'en' ? 'Section' : 'Sección'}
            </p>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => toggleSection(tab.id)}
                className={`group relative flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-jakarta text-sm font-medium transition-all duration-200 ${
                  tab.active
                    ? 'bg-emerald-400/10 text-emerald-400'
                    : 'text-slate-500 hover:bg-white/[0.04] hover:text-slate-300'
                }`}
              >
                {/* Left accent pill */}
                <span
                  className={`absolute left-[3px] top-1/2 -translate-y-1/2 h-[22px] w-[3px] rounded-full transition-all duration-200 ${
                    tab.active ? 'bg-emerald-400' : 'bg-transparent'
                  }`}
                />
                {/* Icon circle */}
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                    tab.active ? 'bg-emerald-400/15' : 'bg-white/[0.04]'
                  }`}
                >
                  <FontAwesomeIcon icon={tab.icon} className="text-[11px]" />
                </span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="glass flex-1 overflow-hidden rounded-3xl">
            {/* Panel header bar */}
            {activeTab && (
              <div className="flex items-center gap-3 border-b border-white/[0.07] px-6 py-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                  <FontAwesomeIcon icon={activeTab.icon} className="text-xs" />
                </span>
                <span className="font-fraunces text-base text-slate-200">
                  {activeTab.label}
                </span>
                <span className="ml-auto font-jakarta text-[11px] italic text-slate-600">
                  {locale === 'en' ? 'scroll to read ↓' : 'desplazá para leer ↓'}
                </span>
              </div>
            )}

            {/* Scrollable body */}
            <div className="resume-scroll max-h-[520px] overflow-y-auto p-6 md:p-8">
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
      </div>
    </section>
  )
}

export default Resume
