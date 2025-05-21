'use client'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import React, { Dispatch, SetStateAction, useContext } from 'react'
import { ILanguageContextType } from '../@types/language.types'
import { LanguageContext } from '../context/LanguageContextProvider'
import useNavBar from '../hooks/useNavBar'
const Header: React.FunctionComponent<{
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>
  showMobileMenu: boolean
}> = ({ showMobileMenu, setShowMobileMenu }) => {
  const [
    isHomeSelected,
    isAboutMeSelected,
    isResumeSelected,
    isContactMeSelected,
    isBadgesSelected,
    isProjectsSelected,
    toggleSection
  ] = useNavBar()
  const router = useRouter()
  const pathname = usePathname()
  const { language } = useContext(LanguageContext) as ILanguageContextType

  return (
    <div className="header-container">
      <div className="header-parent">
        <div className="header-hamburger">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="svg-inline--fa fa-bars fa-w-14 header-hamburger-bars"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu)
            }}
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </div>
        <div className="header-logo">
          <span>Alejo Torres</span>
        </div>
        <div
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className={`header-options ${
            showMobileMenu ? 'show-hamburger-options' : ''
          }`}
        >
          <div
            className={`header-option header-option-seperator  ${
              isHomeSelected ? 'selected-header-option' : ''
            }`}
          >
            <span onClick={() => toggleSection('home')}>
              <Link href={pathname === '/projects' ? '/' : '#Home'}>
                {language.name === 'en' ? 'Home' : 'Inicio'}
              </Link>
            </span>
          </div>
          {pathname !== '/projects'
            ? (
            <>
              <div
                className={`header-option header-option-seperator  ${
                  isAboutMeSelected ? 'selected-header-option' : ''
                }`}
              >
                <span onClick={() => toggleSection('about-me')}>
                  <Link href="#AboutMe">
                    {language.name === 'en' ? 'AboutMe' : 'Sobre mi'}
                  </Link>
                </span>
              </div>
              <div
                className={`header-option header-option-seperator  ${
                  isResumeSelected ? 'selected-header-option' : ''
                }`}
              >
                <span onClick={() => toggleSection('resume')}>
                  <Link href="#Resume">
                    {language.name === 'en' ? 'Resume' : 'Trayectoria'}
                  </Link>
                </span>
              </div>
              <div
                className={`header-option header-option-seperator  ${
                  isBadgesSelected ? 'selected-header-option' : ''
                }`}
              >
                <span onClick={() => toggleSection('badges')}>
                  <Link href="#Badges">
                    {language.name === 'en' ? 'Badges' : 'Premios'}
                  </Link>
                </span>
              </div>
              <div
                className={`header-option  ${
                  isContactMeSelected ? 'selected-header-option' : ''
                }`}
              >
                <span onClick={() => toggleSection('contact-me')}>
                  <Link href="#ContactMe">
                    {language.name === 'en' ? 'ContactMe' : 'Contactame'}
                  </Link>
                </span>
              </div>
            </>
              )
            : (
            <div
              className={`header-option  ${
                isProjectsSelected ? 'selected-header-option' : ''
              }`}
            >
              <span onClick={() => toggleSection('projects')}>
                <Link href="/projects">
                  {language.name === 'en' ? 'Projects' : 'Proyectos'}
                </Link>
              </span>
            </div>
              )}
        </div>
      </div>
    </div>
  )
}

export default Header
