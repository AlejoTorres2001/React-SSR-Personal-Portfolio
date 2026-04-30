import { notFound } from 'next/navigation'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Project from '../../../components/Project'
import projects from '../../../projects.json'
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

  const data = projects.projectsData
  const [featured, ...rest] = data

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
            <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-jakarta text-xs font-semibold text-emerald-400">
              {data.length}
            </span>
          </div>
          <p className="font-jakarta text-sm text-slate-500">
            {locale === 'en'
              ? "A collection of things I've built over the years."
              : 'Una colección de cosas que construí a lo largo de los años.'}
          </p>
          <div className="mt-2 h-px w-24 bg-gradient-to-r from-emerald-400/50 to-transparent" />
        </div>

        {/* Featured project — full width horizontal card */}
        <div className="mb-6">
          <Project {...featured} featured={true} />
        </div>

        {/* Rest of projects — responsive grid */}
        <div className="grid grid-cols-12 gap-5">
          {rest.map((project, index) => (
            <Project key={index + 1} {...project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
