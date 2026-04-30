'use client'
import React from 'react'
import Project from './Project'
import { useProjects } from '../hooks/useProjects'
import { Locale } from '../lib/i18n'

const SkeletonCard = () => (
  <div className="col-span-12 sm:col-span-6 xl:col-span-4 animate-pulse rounded-2xl overflow-hidden glass">
    <div className="aspect-video w-full bg-slate-700/40" />
    <div className="p-5 space-y-3">
      <div className="h-4 w-3/4 rounded bg-slate-700/50" />
      <div className="h-3 w-full rounded bg-slate-700/30" />
      <div className="h-3 w-5/6 rounded bg-slate-700/30" />
      <div className="mt-3 flex gap-2">
        <div className="h-5 w-14 rounded-full bg-slate-700/40" />
        <div className="h-5 w-16 rounded-full bg-slate-700/40" />
      </div>
    </div>
  </div>
)

const FeaturedSkeleton = () => (
  <div className="animate-pulse glass rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[320px]">
    <div className="w-full md:w-[45%] min-h-[220px] md:min-h-full bg-slate-700/40" />
    <div className="flex-1 p-8 space-y-4">
      <div className="h-6 w-2/3 rounded bg-slate-700/50" />
      <div className="h-4 w-full rounded bg-slate-700/30" />
      <div className="h-4 w-5/6 rounded bg-slate-700/30" />
      <div className="h-4 w-4/5 rounded bg-slate-700/30" />
      <div className="mt-4 flex gap-2">
        <div className="h-6 w-16 rounded-full bg-slate-700/40" />
        <div className="h-6 w-20 rounded-full bg-slate-700/40" />
        <div className="h-6 w-14 rounded-full bg-slate-700/40" />
      </div>
    </div>
  </div>
)

type ProjectsClientProps = {
  locale: Locale
}

const ProjectsClient = ({ locale }: ProjectsClientProps) => {
  const { data, loading, error } = useProjects()

  if (loading) {
    return (
      <>
        <div className="mb-6">
          <FeaturedSkeleton />
        </div>
        <div className="grid grid-cols-12 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </>
    )
  }

  if (error || !data) {
    return (
      <div className="glass rounded-2xl p-10 text-center">
        <p className="font-jakarta text-sm text-slate-400">
          {locale === 'en'
            ? 'Could not load projects. Please try again later.'
            : 'No se pudieron cargar los proyectos. Por favor intenta más tarde.'}
        </p>
      </div>
    )
  }

  const [featured, ...rest] = data

  return (
    <>
      {/* Featured project — full width horizontal card */}
      <div className="mb-6">
        <Project {...featured} featured={true} />
      </div>

      {/* Rest of projects — responsive grid */}
      <div className="grid grid-cols-12 gap-5">
        {rest.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </>
  )
}

export default ProjectsClient
