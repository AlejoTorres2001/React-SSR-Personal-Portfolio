import React from 'react'
// use intersection observer to detect when the element is in viewport
// style="opacity: 5; transform: translateY(1px);"
const AboutMe = () => {
  return (
    <div className="about-me-container screen-container fade-in" id="AboutMe">
      <div className="about-me-parent">
        <div className="heading-container">
          <div className="screen-heading">
            <span>About Me</span>
          </div>
          <div className="screen-sub-heading">
            <span>Why Choose Me?</span>
          </div>
          <div className="heading-seperator">
            <div className="seperator-line"></div>
            <div className="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              think in a brief description of yourself.
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>Here are a Few Highlights:</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Highlights1</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Highlights2</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Highlights3</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Highlights3</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Highlights4</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Highlights4 </span>
              </div>
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"> Hire Me </button>
              <a href="#">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
