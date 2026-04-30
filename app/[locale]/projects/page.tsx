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

  return (
    <div className="home-container">
      <Header locale={locale} />
      <main className="mx-auto mt-5 grid w-full max-w-[1400px] grid-cols-1 gap-10 px-5 sm:px-8">
        <section className="grid grid-cols-12 gap-5 sm:gap-10">
          {projects.projectsData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
