import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
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
    toggleSection
  ] = useNavBar()
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
              <Link href="#Home">Home</Link>
            </span>
          </div>
          <div
            className={`header-option header-option-seperator  ${
              isAboutMeSelected ? 'selected-header-option' : ''
            }`}
          >
            <span onClick={() => toggleSection('about-me')}>
              <Link href="#AboutMe">AboutMe</Link>
            </span>
          </div>
          <div
            className={`header-option header-option-seperator  ${
              isResumeSelected ? 'selected-header-option' : ''
            }`}
          >
            <span onClick={() => toggleSection('resume')}>
              <Link href="#Resume">Resume</Link>
            </span>
          </div>
          <div
            className={`header-option header-option-seperator  ${
              isBadgesSelected ? 'selected-header-option' : ''
            }`}
          >
            <span onClick={() => toggleSection('badges')}>
              <Link href="#Badges">Badges</Link>
            </span>
          </div>
          <div
            className={`header-option  ${
              isContactMeSelected ? 'selected-header-option' : ''
            }`}
          >
            <span onClick={() => toggleSection('contact-me')}>
              <Link href="#ContactMe">ContactMe</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
