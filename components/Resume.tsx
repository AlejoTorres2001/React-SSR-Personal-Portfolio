import React from 'react'
import useButtons from '../hooks/useButtons'
// style="opacity: 5; transform: translateY(1px);"
const Resume = () => {
  const [
    isSelectedEducation,
    isSelectedWork,
    isSelectedSkills,
    isSelectedProyects,
    isSelectedInterests,
    toggleSection
  ] = useButtons()

  return (
    <div className="resume-container screen-container fade-in" id="Resume">
      <div className="resume-content">
        <div className="heading-container">
          <div className="screen-heading">
            <span>Resume</span>
          </div>
          <div className="screen-sub-heading">
            <span>My formal Bio Details</span>
          </div>
          <div className="heading-seperator">
            <div className="seperator-line"></div>
            <div className="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">
                <div
                  onClick={() => toggleSection('education')}
                  className={`bullet ${
                    isSelectedEducation && 'selected-bullet'
                  }`}
                >
                  <img
                    className="bullet-logo"
                    src="/assets/resume/icons/education.svg"
                    alt="B"
                  />
                  <span className="bullet-label">Education</span>
                </div>
                <div
                  onClick={() => toggleSection('work')}
                  className={`bullet ${isSelectedWork && 'selected-bullet'}`}
                >
                  <img
                    className="bullet-logo"
                    src="/assets/resume/icons/work-history.svg"
                    alt="B"
                  />
                  <span className="bullet-label">Work History</span>
                </div>
                <div
                  onClick={() => toggleSection('skills')}
                  className={`bullet ${isSelectedSkills && 'selected-bullet'}`}
                >
                  <img
                    className="bullet-logo"
                    src="/assets/resume/icons/programming-skills.svg"
                    alt="B"
                  />
                  <span className="bullet-label">Programming Skills</span>
                </div>
                <div
                  onClick={() => toggleSection('projects')}
                  className={`bullet ${
                    isSelectedProyects && 'selected-bullet'
                  }`}
                >
                  <img
                    className="bullet-logo"
                    src="/assets/resume/icons/projects.svg"
                    alt="B"
                  />
                  <span className="bullet-label">Projects</span>
                </div>
                <div
                  onClick={() => toggleSection('interests')}
                  className={`bullet ${
                    isSelectedInterests && 'selected-bullet'
                  }`}
                >
                  <img
                    className="bullet-logo"
                    src="/assets/resume/icons/interests.svg"
                    alt="B"
                  />
                  <span className="bullet-label">Interests</span>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-bullet-details">
            <div className="resume-details-carousal">
              {isSelectedEducation && (
                <div className="resume-screen-container">
                  <div className="resume-heading">
                    <div className="resume-main-heading">
                      <div className="heading-bullet"></div>
                      <span>WRITE SOMETHING</span>
                      <div className="heading-date">2014-2018</div>
                    </div>
                    <div className="resume-sub-heading">
                      <span>WRITE SOMETHING</span>
                    </div>
                    <div className="resume-heading-description">
                      <span>asdasd</span>
                    </div>
                  </div>
                  <div className="resume-heading">
                    <div className="resume-main-heading">
                      <div className="heading-bullet"></div>
                      <span>WRITE SOMETHING</span>
                      <div className="heading-date">2019-2020</div>
                    </div>
                    <div className="resume-sub-heading">
                      <span>WRITE SOMETHING</span>
                    </div>
                    <div className="resume-heading-description">
                      <span>asdas</span>
                    </div>
                  </div>
                  <div className="resume-heading">
                    <div className="resume-main-heading">
                      <div className="heading-bullet"></div>
                      <span>asda</span>
                      <div className="heading-date">2007-2012</div>
                    </div>
                    <div className="resume-sub-heading">
                      <span>WRITE SOMETHING</span>
                    </div>
                    <div className="resume-heading-description">
                      <span>asdasd</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
