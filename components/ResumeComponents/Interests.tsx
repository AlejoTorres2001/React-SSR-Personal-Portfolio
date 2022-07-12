import React from 'react'

const Interests:React.FunctionComponent<object> = () => {
  return (
    <div className="resume-screen-container">
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>Interest1</span>
          <div></div>
        </div>
        <div className="resume-sub-heading">
          <span></span>
        </div>
        <div className="resume-heading-description">
          <span>
            description
          </span>
        </div>
      </div>
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>Interest2</span>
          <div></div>
        </div>
        <div className="resume-sub-heading">
          <span></span>
        </div>
        <div className="resume-heading-description">
          <span>
            description
          </span>
        </div>
      </div>
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>Interest3</span>
          <div></div>
        </div>
        <div className="resume-sub-heading">
          <span></span>
        </div>
        <div className="resume-heading-description">
          <span>
           description
          </span>
        </div>
      </div>
    </div>
  )
}

export default Interests
