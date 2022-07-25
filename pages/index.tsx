/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'

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
  return (
    <div className="home-container">
      {!showMobileMenu && (
        <div className="language-container">
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => setIsLanguagesSelected(!isLanguagesSelected)}
          >
            Language
          </span>
        </div>
      )}
      {isLanguagesSelected && !showMobileMenu && (
        <div className="language-options">
          <span>English</span>
          <span>Spanish</span>
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
