'use client'
import { useEffect, useState } from 'react'
import { Locale } from '../lib/i18n'

export type WorkEntry = {
  id: string
  role: string
  company: string
  location: string
  startDate: string
  endDate: string
  summary: string
  bullets: string[]
}

export type EducationEntry = {
  id: string
  degree: string
  institution: string
  location: string
  startDate: string | null
  endDate: string
  details: string[]
}

export type SkillEntry = {
  name: string
  level: number
}

export type InterestEntry = {
  id: string
  title: string
  subtitle: string | null
  description: string
}

export type CVSection = 'work' | 'education' | 'skills' | 'interests'

type CVSectionData = {
  work: WorkEntry[]
  education: EducationEntry[]
  skills: SkillEntry[]
  interests: InterestEntry[]
}

type UseCVResult<S extends CVSection> = {
  data: CVSectionData[S] | null
  loading: boolean
  error: string | null
}

export function useCV<S extends CVSection>(
  section: S,
  locale: Locale
): UseCVResult<S> {
  const [data, setData] = useState<CVSectionData[S] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetch(`/api/cv?section=${section}&locale=${locale}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        return res.json() as Promise<{ data: CVSectionData[S] }>
      })
      .then(({ data }) => {
        if (!cancelled) setData(data)
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [section, locale])

  return { data, loading, error }
}
