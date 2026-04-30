'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Dispatch, SetStateAction } from 'react'
import { copy } from '../content/i18n'
import { Locale, localePath } from '../lib/i18n'
import useNavBar from '../hooks/useNavBar'

const Header: React.FunctionComponent<{
  locale: Locale
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>
  showMobileMenu: boolean
}> = ({ locale, showMobileMenu, setShowMobileMenu }) => {
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
    'text-xl font-extrabold transition-colors hover:text-darkOrange lg:text-base'
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
          <span>Alejo Torres</span>
        </div>

        <div
          className={`absolute left-0 top-[110px] z-[1000] flex h-[calc(100vh-110px)] w-full flex-col justify-around bg-[#1f2235] px-10 text-base font-semibold transition-transform duration-500 lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row lg:items-center lg:gap-12 lg:bg-transparent lg:px-0 ${
            showMobileMenu ? 'translate-x-0 opacity-100' : '-translate-x-[120%] opacity-0 lg:opacity-100'
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
