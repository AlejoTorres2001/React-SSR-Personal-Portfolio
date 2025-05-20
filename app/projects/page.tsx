'use client'

import React, { Dispatch, SetStateAction } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Project from '../../components/Project'
import useMobileMenu from '../../hooks/useMobileMenu'
import { projectsData } from '../../projects.json'
import {Providers} from '../../context/Providers'
 function ProjectsContent() {
  const [showMobileMenu, setShowMobileMenu] = useMobileMenu()
  
  return (
    <div className="home-container">
      <Header
        showMobileMenu={showMobileMenu as boolean}
        setShowMobileMenu={
          setShowMobileMenu as Dispatch<SetStateAction<boolean>>
        }
      />
      <main className='container'>
        <section className="cards">
          {projectsData.map((project, index) => <Project key={index} {...project}/>)}
        </section>
      </main>
      <Footer />
    </div>
  )
}
export default function Projects() {
  return (
    <Providers>
      <ProjectsContent />
    </Providers>
  )
}