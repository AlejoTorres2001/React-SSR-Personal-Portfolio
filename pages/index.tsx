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
import { useState } from 'react'
const Home: NextPage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isLanguagesSelected, setIsLanguagesSelected] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState({
    language: 'en',
    flag: '840',
    height: '14'
  })
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
            <Flag
              code={selectedLanguage.flag}
              height={selectedLanguage.height}
            />
          </span>
        </div>
      )}
      {isLanguagesSelected && !showMobileMenu && (
        <div className="language-options">
          <span
            className="language-option"
            onClick={() => {
              setSelectedLanguage({
                language: 'sp',
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
              setSelectedLanguage({
                language: 'en',
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
