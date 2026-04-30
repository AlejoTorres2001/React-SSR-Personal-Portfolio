'use client'
import { useEffect, useState } from 'react'

export type Project = {
  id: string
  name: string
  description: string
  image: string
  bgColor?: string
  stack: string[]
  knowMore: string
  date: string
  featured?: boolean
}

type UseProjectsResult = {
  data: Project[] | null
  loading: boolean
  error: string | null
}

export function useProjects(): UseProjectsResult {
  const [data, setData] = useState<Project[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetch('/api/projects')
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        return res.json() as Promise<{ data: Project[] }>
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
  }, [])

  return { data, loading, error }
}
