'use client'

import React, { Dispatch, SetStateAction } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Project from '../../components/Project'
import useMobileMenu from '../../hooks/useMobileMenu'
import projects from '../../projects.json'
import { Providers } from '../../context/Providers'

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

      <main className="mx-auto mt-5 grid w-full max-w-[1400px] grid-cols-1 gap-10 px-5 sm:px-8">
        <section className="grid grid-cols-12 gap-5 sm:gap-10">
          {projects.projectsData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
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
