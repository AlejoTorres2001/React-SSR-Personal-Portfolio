import { NextPage } from 'next'
import React, { Dispatch, SetStateAction } from 'react'
import Header from '../components/Header'
import Project from '../components/Project'
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
<div className="grid ">
  <Project indexCss={1}/>
  <Project indexCss={2}/>
  <Project indexCss={3}/>
  <Project indexCss={4}/>
  <Project indexCss={5}/>
  <Project indexCss={6}/>
  <Project indexCss={7}/>
  <Project indexCss={8}/>
  <Project indexCss={9}/>
  <Project indexCss={10}/>
  <Project indexCss={11}/>
  <Project indexCss={12}/>
  <Project indexCss={13}/>
  <Project indexCss={14}/>
</div>
    </div>
  )
}

export default projects
