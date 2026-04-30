'use client'

import { Dispatch, SetStateAction, useContext, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import AboutMe from '../components/AboutMe'
import Resume from '../components/Resume'
import Badges from '../components/Badges'
import ContactMe from '../components/ContactMe'
import useDelayUnmount from '../hooks/useDelayUnmount'
import { LanguageContext } from '../context/LanguageContextProvider'
import { ILanguageContextType } from '../@types/language.types'
import LanguagesContainer from '../components/LanguagesContainer'
import LanguageOption from '../components/LanguageOption'
import useMobileMenu from '../hooks/useMobileMenu'
import { Providers } from '../context/Providers'
function HomeContent() {
  const { setLanguage } = useContext(LanguageContext) as ILanguageContextType
  const [showMobileMenu, setShowMobileMenu] = useMobileMenu()
  const [isLanguagesSelected, setIsLanguagesSelected] = useState(false)
  const shouldRenderChild = useDelayUnmount(isLanguagesSelected, 300)
  const mountedStyle = { animation: 'inAnimation 300ms ease-in' }
  const unmountedStyle = { animation: 'outAnimation 300ms ease-in' }

  return (
    <div className="home-container">
      {!showMobileMenu && (
        <LanguagesContainer
          isLanguagesSelected={isLanguagesSelected}
          setIsLanguagesSelected={setIsLanguagesSelected}
        />
      )}
      {shouldRenderChild && !showMobileMenu && (
        <div
          style={isLanguagesSelected ? mountedStyle : unmountedStyle}
          className="absolute right-8 top-10 z-[999] flex min-w-[70px] max-w-[calc(100vw-64px)] -translate-x-1/2 transform flex-col items-stretch overflow-hidden rounded bg-[#2a2d46] shadow-lg lg:right-8"
        >
          <LanguageOption
            isLanguagesSelected={isLanguagesSelected}
            setIsLanguagesSelected={setIsLanguagesSelected}
          />
          <span
            className="flex w-full cursor-pointer items-center justify-center rounded px-1 py-2.5 font-poppins-semibold text-base font-semibold transition-all hover:bg-highlighted-background hover:text-uiWhite"
            onClick={() => {
              setLanguage({
                name: 'en',
                flag: '840',
                height: '15'
              })
              setIsLanguagesSelected(!isLanguagesSelected)
            }}
          >
            EN
          </span>
        </div>
      )}
      <Header
        showMobileMenu={showMobileMenu as boolean}
        setShowMobileMenu={
          setShowMobileMenu as Dispatch<SetStateAction<boolean>>
        }
      />
      <Profile />
      <Footer />
      <AboutMe />
      <Resume />
      <Badges />
      <ContactMe />
    </div>
  )
}

export default function Home() {
  return (
    <Providers>
      <HomeContent />
    </Providers>
  )
}
