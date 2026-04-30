'use client'

import React, { Dispatch, SetStateAction } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Project from '../Project'
import useMobileMenu from '../../hooks/useMobileMenu'
import projects from '../../projects.json'
import { Locale } from '../../lib/i18n'

const ProjectsPageClient = ({ locale }: { locale: Locale }) => {
  const [showMobileMenu, setShowMobileMenu] = useMobileMenu()

  return (
    <div className="home-container">
      <Header
        locale={locale}
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

export default ProjectsPageClient
