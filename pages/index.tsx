/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import AboutMe from '../components/AboutMe'
import Resume from '../components/Resume'
import Badges from '../components/Badges'
const Home: NextPage = () => {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
      <AboutMe/>
      <Resume/>
      <Badges/>
      <Footer />
      <script async src="https://badgr.com/assets/widgets.bundle.js"></script>
    </div>
  )
}

export default Home
