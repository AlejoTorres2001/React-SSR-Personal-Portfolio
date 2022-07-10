import React from 'react'
import Typical from 'react-typical'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import HeadTag from '../components/HeadTag'
const Profile:React.FunctionComponent<object> = () => {
  return (
    <div className="profile-container">
      <HeadTag />
      <div className="profile-parent">
        <div className="profile-details">
          <div className="cols">
            <div className="cols-icons">
              <Link href="#">
                <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
              </Link>
              <Link href="#">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </Link>
              <Link href="#">
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </Link>
              <Link href="#">
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
              </Link>
              <Link href="#">
                <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
              </Link>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {''}
              Hello, I'm <span className="highlighted-text">Alejo</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {''}
              <h1>
                {''}
                <Typical loop={Infinity} steps={['hola', 1000, 'chau', 1000]} />
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
            <a href="#">
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
