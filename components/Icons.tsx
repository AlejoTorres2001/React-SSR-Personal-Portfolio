import React from 'react'
import Link from 'next/link'
import {
  faFacebookSquare,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Icons = () => {
  return (
    <>
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
    </>
  )
}

export default Icons
