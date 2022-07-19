import React from 'react'
import Typical from 'react-typical'
import Icons from './Icons'

const steps = [
  'Cross Platform Dev 🔴',
  1000,
  'React/React Native 🌐',
  1000,
  'FullStack Developer 💻',
  1000,
  '#DataStaxDevelopers ⌨️',
  1000
]
const Profile: React.FunctionComponent<object> = () => {
  return (
    <div className="profile-container" id="Home">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="cols">
            <div className="cols-icons">
              <Icons />
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {''}
              {"Hello, I'm"} <span className="highlighted-text">Alejo</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {''}
              <h1>
                {''}
                <Typical loop={Infinity} steps={steps} />
              </h1>
              <span className="profile-role-tagline">
                knack of building applications with front and back-end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {''}
              Hire Me
            </button>
            <a href="/assets/home/AlejoTorres.pdf" download="AlejoTorresCV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
