import { notFound } from 'next/navigation'
import ProjectsPageClient from '../../../components/pages/ProjectsPageClient'
import { isLocale, locales } from '../../../lib/i18n'

type LocaleProjectsPageProps = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleProjectsPage({
  params
}: LocaleProjectsPageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return <ProjectsPageClient locale={locale} />
}
