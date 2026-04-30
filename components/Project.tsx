'use client'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type props = {
  name: string
  description: string
  image: string
  knowMore: string
  date: string
}

const Project = ({ name, description, image, knowMore, date }: props) => {
  return (
    <article className="relative col-span-12 flex cursor-pointer flex-col bg-[#2c2e44] transition-all duration-300 hover:-translate-y-[7px] md:col-span-6 xl:col-span-4">
      <div className="relative w-full overflow-hidden pt-[56.25%]">
        <Image
          src={image}
          fill
          sizes="100%"
          alt={`Project ${name}`}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="p-5">
        <p className="mb-5 text-center font-poppins-semibold text-base font-normal leading-5 text-uiWhite">
          {name}
        </p>
        <div className="flex items-end">
          <p className="mt-2.5 rounded-[10px] bg-[#1f2235] px-[15px] py-[5px] text-sm font-normal text-uiWhite">
            {description}
          </p>
        </div>
      </div>

      <div className="absolute right-0 m-2.5 flex">
        <Link
          href={knowMore}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-darkOrange bg-[#1f2235] text-[#e6e3e3] transition hover:border-[#1f2235] hover:bg-darkOrange hover:text-uiBlack"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 mr-2.5 mt-2.5 flex">
        <p className="mb-auto pt-2.5 text-[11px] font-bold leading-5 text-uiWhite">{date}</p>
      </div>
    </article>
  )
}

export default Project
