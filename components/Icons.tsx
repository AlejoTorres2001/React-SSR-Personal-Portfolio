'use client'
import React from 'react'
import Link from 'next/link'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icons = () => {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="https://github.com/AlejoTorres2001"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-200 hover:border-emerald-400/30 hover:text-emerald-400"
      >
        <FontAwesomeIcon icon={faGithub} className="text-base" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/alejo-torres-919b9921b/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-200 hover:border-emerald-400/30 hover:text-emerald-400"
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-base" />
      </Link>
    </div>
  )
}

export default Icons
