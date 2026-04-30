'use client'

import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import Header from '../Header'
import Footer from '../Footer'
import Profile from '../Profile'
import AboutMe from '../AboutMe'
import Resume from '../Resume'
import Badges from '../Badges'
import ContactMe from '../ContactMe'
import useMobileMenu from '../../hooks/useMobileMenu'
import { Locale, localePath, locales } from '../../lib/i18n'

const HomePageClient = ({ locale }: { locale: Locale }) => {
  const [showMobileMenu, setShowMobileMenu] = useMobileMenu()

  return (
    <div className="home-container">
      {!showMobileMenu && (
        <div className="relative z-[1000] mr-8 flex h-[30px] items-center justify-end gap-2 text-uiWhite lg:mr-20">
          {locales.map((localeOption) => {
            const isActive = localeOption === locale

            return (
              <Link
                key={localeOption}
                href={localePath(localeOption)}
                className={`rounded px-3 py-1.5 font-poppins-semibold text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-darkOrange text-uiWhite'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {localeOption.toUpperCase()}
              </Link>
            )
          })}
        </div>
      )}
      <Header
        locale={locale}
        showMobileMenu={showMobileMenu as boolean}
        setShowMobileMenu={
          setShowMobileMenu as Dispatch<SetStateAction<boolean>>
        }
      />
      <Profile locale={locale} />
      <Footer />
      <AboutMe locale={locale} />
      <Resume locale={locale} />
      <Badges locale={locale} />
      <ContactMe locale={locale} />
    </div>
  )
}

export default HomePageClient
