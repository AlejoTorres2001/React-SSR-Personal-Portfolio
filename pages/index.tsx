/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Flag from 'react-world-flags'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import AboutMe from '../components/AboutMe'
import Resume from '../components/Resume'
import Badges from '../components/Badges'
import ContactMe from '../components/ContactMe'
import { useContext, useState } from 'react'
import useDelayUnmount from '../hooks/useDelayUnmount'
import { LanguageContext } from '../context/LanguageContextProvider'
const Home: NextPage = () => {
  const { language, setLanguage } = useContext(LanguageContext)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isLanguagesSelected, setIsLanguagesSelected] = useState(false)
  const shouldRenderChild = useDelayUnmount(isLanguagesSelected, 300)
  const mountedStyle = { animation: 'inAnimation 300ms ease-in' }
  const unmountedStyle = { animation: 'outAnimation 300ms ease-in' }
  return (
    <div className="home-container">
      {!showMobileMenu && (
        <div className="language-container">
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setIsLanguagesSelected(!isLanguagesSelected)
            }}
          >
            <Flag code={language.flag} height={language.height} />
          </span>
        </div>
      )}
      {shouldRenderChild && !showMobileMenu && (
        <div
          style={isLanguagesSelected ? mountedStyle : unmountedStyle}
          className="language-options"
        >
          <span
            className="language-option"
            onClick={() => {
              setLanguage({
                name: 'sp',
                flag: '724',
                height: '18'
              })
              setIsLanguagesSelected(!isLanguagesSelected)
            }}
          >
            <Flag code="724" height="18" />
            &nbsp; Spanish
          </span>
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
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <Profile />
      <Footer />
      <AboutMe />
      <Resume />
      <Badges />
      <Footer />
      <ContactMe />
      <script async src="https://badgr.com/assets/widgets.bundle.js"></script>
    </div>
  )
}

export default Home
