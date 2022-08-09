import React from 'react'
type props = {
  indexCss: number
}
const Project = ({ indexCss }:props) => {
  return (
    <div className="item" tabIndex={indexCss}>
    <div className="box">
      <div className="diamond"><span>{indexCss}</span></div>
    </div>
  </div>
  )
}

export default Project
