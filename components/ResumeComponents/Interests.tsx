'use client'
import React from 'react'
import { Locale } from '../../lib/i18n'
import { useCV } from '../../hooks/useCV'

const SkeletonEntry = () => (
  <div className="mb-8 animate-pulse">
    <div className="mb-2 h-4 w-2/3 rounded bg-slate-700/60" />
    <div className="mt-3 space-y-1.5">
      <div className="h-2.5 w-full rounded bg-slate-700/30" />
      <div className="h-2.5 w-4/5 rounded bg-slate-700/30" />
    </div>
  </div>
)

const Interests = ({ locale }: { locale: Locale }) => {
  const { data, loading, error } = useCV('interests', locale)

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
        {locale === 'en' ? 'Could not load interests.' : 'No se pudieron cargar los intereses.'}
      </p>
    )
  }

  return (
    <div className="animate-[fadeInAnimation_0.4s_ease]">
      {data.map((entry) => (
        <div key={entry.id} className="mb-7 flex w-full flex-col">
          <div className="mb-3 flex items-start gap-2">
            <div className="mt-[5px] h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <div className="flex flex-col">
              <span className="font-jakarta text-base font-semibold text-emerald-400">
                {entry.title}
              </span>
              {entry.subtitle && (
                <span className="mt-0.5 font-jakarta text-xs text-slate-500">
                  {entry.subtitle}
                </span>
              )}
            </div>
          </div>
          <div className="ml-[10px] font-jakarta text-xs leading-relaxed text-slate-400">
            {entry.description}
          </div>
        </div>
      ))}
    </div>
  )
}

export default React.memo(Interests)
