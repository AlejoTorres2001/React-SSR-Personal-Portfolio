import React from 'react'
import { useInView } from 'react-intersection-observer'
const AboutMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.3
  })
  return (
    <div className="about-me-container screen-container" id="AboutMe">
      <div
        ref={ref}
        className={`about-me-parent ${inView ? 'appear' : ''} fade-in`}
      >
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
              <strong>FullStack developer</strong> with a passion for learning
              and problem solving. Almost Done with my{' '}
              <strong>Science in Computer Engineering </strong>
              degree. Looking for a job in the industry with new challenges
              where I can learn and grow. Won a scolarship at <a className='link' href='https://www.upm.es/'>UPM</a> (Madrid) to
              finish my career abroad.
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
                <span>Part of Movers And Shakers Program in <a className='link' href="https://www.datastax.com/dev">DataStax</a>
                  </span>
              </div>
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"> Hire Me </button>
              <a
                href="/assets/home/AlejoTorres.pdf"
                download="AlejoTorresCV.pdf"
              >
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
