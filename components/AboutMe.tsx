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
            <span>A Brief Description</span>
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
              FullStack developer with a passion for learning and problem
              solving. Almost Done with my Science in Computer Engineering degree. Looking for a job in the industry with new challenges where I can learn and grow. Won a scolarship at UPM (Madrid) to finish my career abroad.
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>Here are a Few Highlights:</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Full Stack web and mobile development</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>background knowledge of MERN stack</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Interactive Front End as per the design</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Building REST API</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Managing databases</span>
              </div>
              <div className="highlight">
                <div className="highlight-blob"></div>
                <span>Part of Movers And Shakers Program in DataStax</span>
              </div>
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"> Hire Me </button>
              <a href='/assets/home/AlejoTorres.pdf' download='AlejoTorresCV.pdf'>
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
