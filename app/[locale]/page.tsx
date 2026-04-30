import { notFound } from 'next/navigation'
import HomePageClient from '../../components/pages/HomePageClient'
import { isLocale, locales } from '../../lib/i18n'

type LocalePageProps = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return <HomePageClient locale={locale} />
}
