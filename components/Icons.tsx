'use client'
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
        <FontAwesomeIcon
          className="cursor-pointer px-2 pr-0 text-uiWhite transition duration-300 ease-out hover:scale-110"
          icon={faFacebookSquare}
        />
      </Link>
      <Link href="https://github.com/AlejoTorres2001">
        <FontAwesomeIcon
          className="cursor-pointer px-2 pr-0 text-uiWhite transition duration-300 ease-out hover:scale-110"
          icon={faGithub}
        />
      </Link>
      <Link href="https://www.instagram.com/alejootorres/">
        <FontAwesomeIcon
          className="cursor-pointer px-2 pr-0 text-uiWhite transition duration-300 ease-out hover:scale-110"
          icon={faInstagram}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/alejo-torres-919b9921b/">
        <FontAwesomeIcon
          className="cursor-pointer px-2 pr-0 text-uiWhite transition duration-300 ease-out hover:scale-110"
          icon={faLinkedin}
        />
      </Link>
      <Link href="https://twitter.com/alejotorres2001">
        <FontAwesomeIcon
          className="cursor-pointer px-2 pr-0 text-uiWhite transition duration-300 ease-out hover:scale-110"
          icon={faTwitterSquare}
        />
      </Link>
    </>
  )
}

export default Icons
