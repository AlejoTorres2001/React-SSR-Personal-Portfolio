import { notFound } from 'next/navigation'
import AboutMe from '../../components/AboutMe'
import Badges from '../../components/Badges'
import ContactMe from '../../components/ContactMe'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import LocaleSwitcher from '../../components/LocaleSwitcher'
import Profile from '../../components/Profile'
import Resume from '../../components/Resume'
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

  return (
    <div className="home-container">
      <LocaleSwitcher locale={locale} />
      <Header locale={locale} />
      <Profile locale={locale} />
      <Footer />
      <AboutMe locale={locale} />
      <Resume locale={locale} />
      <Badges locale={locale} />
      <ContactMe locale={locale} />
    </div>
  )
}
