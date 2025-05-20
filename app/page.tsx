'use client'

import Flag from 'react-world-flags'
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
import {Providers} from '../context/Providers'
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
          className="language-options"
        >
          <LanguageOption
            isLanguagesSelected={isLanguagesSelected}
            setIsLanguagesSelected={setIsLanguagesSelected}
          />
          <span
            className="language-option"
            onClick={() => {
              setLanguage({
                name: 'en',
                flag: '840',
                height: '15'
              })
              setIsLanguagesSelected(!isLanguagesSelected)
            }}
          >
            <Flag code="840" height="15" />
            &nbsp; English
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