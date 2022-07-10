/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare,faGithub,faInstagram,faLinkedin,faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
const Profile: NextPage = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <Link href="#">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </Link>
            <Link href="#">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="#">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </Link>
          </div>
          <div className="profile-details-name">
            <span className='primary-text'>
              {""}
              Hello, I'm <span className='highlighted-text'>Alejo</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className='primary-text'>
              {""}
              <h1></h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
