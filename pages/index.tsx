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
        </div>
      </div>
    </div>
  )
}

export default Profile
