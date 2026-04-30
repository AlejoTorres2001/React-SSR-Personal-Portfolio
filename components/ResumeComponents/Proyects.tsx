'use client'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { localePath, Locale } from '../../lib/i18n'
import { useProjects } from '../../hooks/useProjects'

const SkeletonEntry = () => (
  <div className="mb-7 animate-pulse">
    <div className="mb-2 h-4 w-2/3 rounded bg-slate-700/60" />
    <div className="mb-1 h-3 w-1/2 rounded bg-slate-700/40" />
    <div className="mt-2 h-2.5 w-full rounded bg-slate-700/30" />
  </div>
)

const PREVIEW_COUNT = 4

const Proyects = ({ locale }: { locale: Locale }) => {
  const { data, loading, error } = useProjects()

  if (loading) {
    return (
      <div className="animate-[fadeInAnimation_0.4s_ease]">
        {Array.from({ length: PREVIEW_COUNT }).map((_, i) => (
          <SkeletonEntry key={i} />
        ))}
      </div>
    )
  }

  if (error || !data) {
    return (
      <p className="py-4 text-center font-jakarta text-xs text-slate-500">
        {locale === 'en' ? 'Could not load projects.' : 'No se pudieron cargar los proyectos.'}
      </p>
    )
  }

  const preview = data.slice(0, PREVIEW_COUNT)

  return (
    <div className="animate-[fadeInAnimation_0.4s_ease]">
      {preview.map((project) => (
        <div key={project.id} className="mb-7 flex w-full flex-col">
          <div className="mb-2 flex items-start gap-2 justify-between">
            <div className="mt-[5px] h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <a
              href={project.knowMore}
              target="_blank"
              rel="noopener noreferrer"
              className="font-jakarta text-base font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
            >
              {project.name}
            </a>
            <a
              href={project.knowMore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-colors hover:border-emerald-400/40 hover:text-emerald-400"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="text-[11px]" />
            </a>
          </div>
          <div className="mb-1.5 ml-[10px] flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-jakarta text-[10px] text-slate-500"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="ml-[10px] font-jakarta text-xs leading-relaxed text-slate-400">
            {project.description.length > 120
              ? project.description.slice(0, 120) + '…'
              : project.description}
          </div>
        </div>
      ))}

      {/* More projects link */}
      <div className="mt-4 flex justify-center">
        <Link
          href={localePath(locale, '/projects')}
          className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 font-jakarta text-xs font-semibold text-emerald-400 transition-colors hover:bg-emerald-400/15 hover:text-emerald-300"
        >
          {locale === 'en' ? `See all ${data.length} projects →` : `Ver todos los ${data.length} proyectos →`}
        </Link>
      </div>
    </div>
  )
}

export default React.memo(Proyects)
