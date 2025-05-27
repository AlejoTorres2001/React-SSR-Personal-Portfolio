import React from 'react'

const Skills: React.FunctionComponent<object> = () => {
  return (
    <div className="resume-details-carousal">
      <div className="resume-screen-container programming-skills-container">
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>Javascript</span>
          <div className="skill-percentage">
            <div
              className="active-percentage-bar"
              style={{ width: '90%' }}
            ></div>
          </div>
        </div>
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>HTML5</span>
          <div className="skill-percentage">
            <div
              className="active-percentage-bar"
              style={{ width: '92%' }}
            ></div>
          </div>
        </div>
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>CSS3</span>
          <div className="skill-percentage">
            <div
              className="active-percentage-bar"
              style={{ width: '93%' }}
            ></div>
          </div>
        </div>
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>Git</span>
          <div className="skill-percentage">
            <div
              className="active-percentage-bar"
              style={{ width: '92%' }}
            ></div>
          </div>
        </div>
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>ReactJs</span>
          <div className="skill-percentage">
            <div
              className="active-percentage-bar"
              style={{ width: '89%' }}
            ></div>
          </div>
        </div>
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>NodeJs</span>
          <div className="skill-percentage">
            <div
              className="active-percentage-bar"
              style={{ width: '89%' }}
            ></div>
          </div>
        </div>
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>DB Management</span>
          <div className="skill-percentage">
            <div
              className="active-percentage-bar"
              style={{ width: '75%' }}
            ></div>
          </div>
        </div>
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>Python</span>
          <div className="skill-percentage">
            <div
              className="active-percentage-bar"
              style={{ width: '74%' }}
            ></div>
          </div>
        </div>
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>Tensorflow</span>
          <div className="skill-percentage">
            <div
              className="active-percentage-bar"
              style={{ width: '66%' }}
            ></div>
          </div>
        </div>
        <div className="skill-parent">
          <div className="heading-bullet"></div>
          <span>Cloud Infraestructure</span>
          <div className="skill-percentage">
            <div
              className="active-percentage-bar"
              style={{ width: '78%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Skills)
