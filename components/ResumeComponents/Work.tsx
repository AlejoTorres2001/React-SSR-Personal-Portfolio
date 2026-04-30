'use client'
import React from 'react'
import { Locale } from '../../lib/i18n'
import { useCV } from '../../hooks/useCV'

const SkeletonEntry = () => (
  <div className="mb-8 animate-pulse">
    <div className="mb-2 h-4 w-2/3 rounded bg-slate-700/60" />
    <div className="mb-1 h-3 w-1/3 rounded bg-slate-700/40" />
    <div className="mt-3 space-y-1.5">
      <div className="h-2.5 w-full rounded bg-slate-700/30" />
      <div className="h-2.5 w-5/6 rounded bg-slate-700/30" />
      <div className="h-2.5 w-4/6 rounded bg-slate-700/30" />
    </div>
  </div>
)

const Work = ({ locale }: { locale: Locale }) => {
  const { data, loading, error } = useCV('work', locale)

  if (loading) {
    return (
      <div className="animate-[fadeInAnimation_0.4s_ease]">
        <SkeletonEntry />
        <SkeletonEntry />
        <SkeletonEntry />
      </div>
    )
  }

  if (error || !data) {
    return (
      <p className="py-4 text-center font-jakarta text-xs text-slate-500">
        {locale === 'en' ? 'Could not load experience.' : 'No se pudo cargar la experiencia.'}
      </p>
    )
  }

  return (
    <div className="animate-[fadeInAnimation_0.4s_ease]">
      {data.map((entry) => (
        <div key={entry.id} className="mb-8 flex w-full flex-col">
          <div className="mb-3.5 flex items-start gap-2 justify-between">
            <div className="mt-[5px] h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <span className="font-jakarta text-base font-semibold text-emerald-400">
              {entry.role}
            </span>
            <div className="flex h-[27px] shrink-0 items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-jakarta text-xs text-emerald-400 whitespace-nowrap">
              {entry.startDate === entry.endDate
                ? entry.startDate
                : `${entry.startDate} – ${entry.endDate}`}
            </div>
          </div>
          <div className="mb-2 mt-[-4px] ml-[10px] font-jakarta text-sm text-slate-300">
            {entry.company}
            <span className="text-slate-500"> · {entry.location}</span>
          </div>
          <div className="ml-[10px] mt-2 space-y-1.5">
            {entry.bullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/50" />
                <span className="font-jakarta text-xs leading-relaxed text-slate-400">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default React.memo(Work)
