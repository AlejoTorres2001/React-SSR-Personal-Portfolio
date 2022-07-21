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
      <Link href="https://www.facebook.com/alejo.torres.100">
        <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
      </Link>
      <Link href="https://github.com/AlejoTorres2001">
        <FontAwesomeIcon className="icon" icon={faGithub} />
      </Link>
      <Link href="https://www.instagram.com/alejootorres/">
        <FontAwesomeIcon className="icon" icon={faInstagram} />
      </Link>
      <Link href="https://www.linkedin.com/in/alejo-torres-919b9921b/">
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
      </Link>
      <Link href="https://twitter.com/alejotorres2001">
        <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
      </Link>
    </>
  )
}

export default Icons
