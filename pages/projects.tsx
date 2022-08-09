import { NextPage } from 'next'
import React, { Dispatch, SetStateAction } from 'react'
import Header from '../components/Header'
import useMobileMenu from '../hooks/useMobileMenu'

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
    </div>
  )
}

export default projects
