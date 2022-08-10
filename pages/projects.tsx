import { NextPage } from 'next'
import React, { Dispatch, SetStateAction } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Project from '../components/Project'
import useMobileMenu from '../hooks/useMobileMenu'
import { projectsData } from '../projects.json'
const projects: NextPage = () => {
  const [showMobileMenu, setShowMobileMenu] = useMobileMenu()
  return (
    <div className="home-container">
      <Header
        showMobileMenu={showMobileMenu as boolean}
        setShowMobileMenu={
          setShowMobileMenu as Dispatch<SetStateAction<boolean>>
        }
      />
      <div className="grid">
        {projectsData.map((project, index) => (<Project indexCss={index + 1} key={index} {...project} />)
        )}
      </div>
      <Footer />
    </div>
  )
}

export default projects
