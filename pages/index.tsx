/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import AboutMe from '../components/AboutMe'
const Home: NextPage = () => {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
      <AboutMe/>
    </div>
  )
}

export default Home
