import React from 'react'

const Proyects:React.FunctionComponent<object> = () => {
  return (
    <div className="resume-screen-container">
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>Project1</span>
          <div className="heading-date">2020-2021</div>
        </div>
        <div className="resume-sub-heading">
          <span>built with</span>
        </div>
        <div className="resume-heading-description">
          <span>description</span>
        </div>
      </div>
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>Project2 </span>
          <div className="heading-date">2020-2021</div>
        </div>
        <div className="resume-sub-heading">
          <span>built with</span>
        </div>
        <div className="resume-heading-description">
          <span>description</span>
        </div>
      </div>
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>proyect3 </span>
          <div className="heading-date">2020-2021</div>
        </div>
        <div className="resume-sub-heading">
          <span>built with</span>
        </div>
        <div className="resume-heading-description">
          <span>description</span>
        </div>
      </div>
    </div>
  )
}
export default Proyects
