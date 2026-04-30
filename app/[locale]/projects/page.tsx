import { notFound } from 'next/navigation'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import ProjectsClient from '../../../components/ProjectsClient'
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

  return (
    <div className="home-container min-h-screen">
      <Header locale={locale} />

      <main className="mx-auto w-full max-w-[1200px] px-5 pb-20 pt-28 sm:px-8">
        {/* Page header */}
        <div className="mb-12 flex flex-col items-start gap-2">
          <div className="flex items-center gap-3">
            <h1 className="font-fraunces text-4xl text-slate-50">
              {locale === 'en' ? 'Projects' : 'Proyectos'}
            </h1>
          </div>
          <p className="font-jakarta text-sm text-slate-500">
            {locale === 'en'
              ? "A collection of things I've built over the years."
              : 'Una colección de cosas que construí a lo largo de los años.'}
          </p>
          <div className="mt-2 h-px w-24 bg-gradient-to-r from-emerald-400/50 to-transparent" />
        </div>

        {/* Projects — loaded from API with loading states */}
        <ProjectsClient locale={locale} />
      </main>

      <Footer />
    </div>
  )
}

