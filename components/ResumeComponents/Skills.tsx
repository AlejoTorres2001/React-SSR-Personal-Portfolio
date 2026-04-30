'use client'
import React from 'react'
import { useCV } from '../../hooks/useCV'

const Skills = () => {
  const { data, loading, error } = useCV('skills', 'en')

  if (loading) {
    return (
      <div className="animate-[fadeInAnimation_0.4s_ease] grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex animate-pulse flex-col gap-1.5">
            <div className="h-3 w-3/4 rounded bg-slate-700/60" />
            <div className="h-1.5 w-full rounded-full bg-slate-700/40" />
          </div>
        ))}
      </div>
    )
  }

  if (error || !data) {
    return (
      <p className="py-4 text-center font-jakarta text-xs text-slate-500">
        Could not load skills.
      </p>
    )
  }

  return (
    <div className="animate-[fadeInAnimation_0.4s_ease]">
      <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
        {data.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="font-jakarta text-sm font-medium text-slate-200">
                {skill.name}
              </span>
              <span className="font-jakarta text-xs text-slate-500">
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-slate-700/60">
              <div
                className="h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(Skills)
