'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { copy } from '../content/i18n'
import { Locale, localePath, locales } from '../lib/i18n'
import useNavBar from '../hooks/useNavBar'

const Header = ({ locale }: { locale: Locale }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [
    isHomeSelected,
    isAboutMeSelected,
    isResumeSelected,
    isContactMeSelected,
    isBadgesSelected,
    isProjectsSelected,
    toggleSection
  ] = useNavBar()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSectionClick = (sectionName: string) => {
    toggleSection(sectionName)
    if (showMobileMenu) setShowMobileMenu(false)
  }

  const navItemClass = (active: boolean) =>
    `relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 font-jakarta ${
      active ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-200'
    }`

  const navItems = pathname.endsWith('/projects')
    ? [
        {
          label: copy.nav.home[locale],
          href: localePath(locale),
          section: 'home',
          active: isHomeSelected
        },
        {
          label: copy.nav.projects[locale],
          href: localePath(locale, '/projects'),
          section: 'projects',
          active: isProjectsSelected
        }
      ]
    : [
        {
          label: copy.nav.home[locale],
          href: localePath(locale, '#Home'),
          section: 'home',
          active: isHomeSelected
        },
        {
          label: copy.nav.about[locale],
          href: localePath(locale, '#AboutMe'),
          section: 'about-me',
          active: isAboutMeSelected
        },
        {
          label: copy.nav.resume[locale],
          href: localePath(locale, '#Resume'),
          section: 'resume',
          active: isResumeSelected
        },
        {
          label: copy.nav.badges[locale],
          href: localePath(locale, '#Badges'),
          section: 'badges',
          active: isBadgesSelected
        },
        {
          label: copy.nav.projects[locale],
          href: localePath(locale, '/projects'),
          section: 'projects',
          active: isProjectsSelected
        },
        {
          label: copy.nav.contact[locale],
          href: localePath(locale, '#ContactMe'),
          section: 'contact-me',
          active: isContactMeSelected
        }
      ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex h-[72px] w-full items-center justify-between px-5 transition-all duration-300 md:px-10 ${
        scrolled
          ? 'glass border-b border-white/[0.07] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <Link
        href={localePath(locale)}
        className="font-fraunces text-2xl italic text-slate-50 transition-opacity hover:opacity-80"
        onClick={() => handleSectionClick('home')}
      >
        AT
        <span className="ml-1.5 text-emerald-400">.</span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 backdrop-blur-md lg:flex">
        {navItems.map((item) => (
          <Link
            key={item.section}
            href={item.href}
            onClick={() => handleSectionClick(item.section)}
            className={navItemClass(item.active)}
          >
            {item.label}
            {item.active && (
              <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-emerald-400" />
            )}
          </Link>
        ))}
      </nav>

      {/* Desktop locale switcher */}
      <div className="hidden items-center gap-1 lg:flex">
        {locales.map((loc) => (
          <Link
            key={loc}
            href={localePath(loc)}
            className={`rounded-full px-3 py-1 font-jakarta text-xs font-semibold transition-all ${
              loc === locale
                ? 'bg-emerald-400/15 text-emerald-400 ring-1 ring-emerald-400/30'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {loc.toUpperCase()}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label="Toggle navigation menu"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-emerald-400/30 hover:text-emerald-400 lg:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          {showMobileMenu ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      <div
        className={`absolute left-0 top-[72px] z-[999] w-full overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          showMobileMenu ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass border-t border-white/[0.06] px-6 py-6">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.section}
                href={item.href}
                onClick={() => handleSectionClick(item.section)}
                className={`rounded-lg px-4 py-3 text-base font-medium font-jakarta transition-colors ${
                  item.active
                    ? 'bg-emerald-400/10 text-emerald-400'
                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex gap-2 border-t border-white/[0.06] pt-4">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={localePath(loc)}
                className={`rounded-full px-4 py-1.5 font-jakarta text-sm font-semibold transition-all ${
                  loc === locale
                    ? 'bg-emerald-400/15 text-emerald-400 ring-1 ring-emerald-400/30'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {loc.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


const Header = ({ locale }: { locale: Locale }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [
    isHomeSelected,
    isAboutMeSelected,
    isResumeSelected,
    isContactMeSelected,
    isBadgesSelected,
    isProjectsSelected,
    toggleSection
  ] = useNavBar()
  const pathname = usePathname()

  const baseOptionClass =
    'rounded-full px-3 py-1.5 text-xl font-extrabold transition-all hover:bg-white/10 hover:text-darkOrange lg:text-base'
  const selectedOptionClass = 'text-darkOrange'

  const handleSectionClick = (sectionName: string) => {
    toggleSection(sectionName)
    if (showMobileMenu) {
      setShowMobileMenu(false)
    }
  }

  return (
    <header className="flex h-[110px] w-full justify-center text-uiWhite">
      <div className="relative flex h-full w-full items-center justify-between px-5 md:px-10 lg:w-[70%] lg:justify-around lg:px-0">
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="text-uiWhite lg:hidden"
          onClick={() => {
            setShowMobileMenu(!showMobileMenu)
          }}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="mx-2 cursor-pointer text-4xl"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>

        <div className="font-poppins-extrabold text-4xl text-uiWhite lg:text-5xl">
          <span className="bg-gradient-to-r from-[#fff] via-[#ffe5d9] to-[#ff6a4f] bg-clip-text text-transparent">Alejo Torres</span>
        </div>

        <div
          className={`absolute left-0 top-[110px] z-[1000] flex h-[calc(100vh-110px)] w-full flex-col justify-around bg-[#151b2f]/95 px-10 text-base font-semibold backdrop-blur-md transition-transform duration-500 lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row lg:items-center lg:gap-8 lg:rounded-full lg:border lg:border-white/15 lg:bg-[#1b2139]/55 lg:px-6 lg:py-2 lg:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.8)] ${
            showMobileMenu
              ? 'translate-x-0 opacity-100'
              : '-translate-x-[120%] opacity-0 lg:opacity-100'
          }`}
        >
          <div
            className={`${baseOptionClass} ${isHomeSelected ? selectedOptionClass : 'text-uiWhite'}`}
          >
            <span onClick={() => handleSectionClick('home')}>
              <Link
                href={
                  pathname.endsWith('/projects')
                    ? localePath(locale)
                    : localePath(locale, '#Home')
                }
              >
                {copy.nav.home[locale]}
              </Link>
            </span>
          </div>

          {pathname.endsWith('/projects')
            ? (
              <div
                className={`${baseOptionClass} ${isProjectsSelected ? selectedOptionClass : 'text-uiWhite'}`}
              >
                <span onClick={() => handleSectionClick('projects')}>
                  <Link href={localePath(locale, '/projects')}>
                    {copy.nav.projects[locale]}
                  </Link>
                </span>
              </div>
              )
            : (
              <>
                <div
                  className={`${baseOptionClass} ${isAboutMeSelected ? selectedOptionClass : 'text-uiWhite'}`}
                >
                  <span onClick={() => handleSectionClick('about-me')}>
                    <Link href={localePath(locale, '#AboutMe')}>
                      {copy.nav.about[locale]}
                    </Link>
                  </span>
                </div>
                <div
                  className={`${baseOptionClass} ${isResumeSelected ? selectedOptionClass : 'text-uiWhite'}`}
                >
                  <span onClick={() => handleSectionClick('resume')}>
                    <Link href={localePath(locale, '#Resume')}>
                      {copy.nav.resume[locale]}
                    </Link>
                  </span>
                </div>
                <div
                  className={`${baseOptionClass} ${isBadgesSelected ? selectedOptionClass : 'text-uiWhite'}`}
                >
                  <span onClick={() => handleSectionClick('badges')}>
                    <Link href={localePath(locale, '#Badges')}>
                      {copy.nav.badges[locale]}
                    </Link>
                  </span>
                </div>
                <div
                  className={`${baseOptionClass} ${isProjectsSelected ? selectedOptionClass : 'text-uiWhite'}`}
                >
                  <span onClick={() => handleSectionClick('projects')}>
                    <Link href={localePath(locale, '/projects')}>
                      {copy.nav.projects[locale]}
                    </Link>
                  </span>
                </div>
                <div
                  className={`${baseOptionClass} ${isContactMeSelected ? selectedOptionClass : 'text-uiWhite'}`}
                >
                  <span onClick={() => handleSectionClick('contact-me')}>
                    <Link href={localePath(locale, '#ContactMe')}>
                      {copy.nav.contact[locale]}
                    </Link>
                  </span>
                </div>
              </>
              )}
        </div>
      </div>
    </header>
  )
}

export default Header
