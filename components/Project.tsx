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
    <article className="glass glass-hover group relative col-span-12 flex cursor-pointer flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1.5 md:col-span-6 xl:col-span-4">
      {/* Image */}
      <div className="relative w-full overflow-hidden pt-[56.25%]">
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          alt={`Project ${name}`}
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bgDeep/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-jakarta text-sm font-semibold text-slate-50">{name}</h3>
        <p className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2 font-jakarta text-xs text-slate-400">
          {description}
        </p>
      </div>

      {/* Footer row */}
      <div className="flex items-center justify-between px-5 pb-5">
        <span className="font-jakarta text-[11px] text-slate-600">{date}</span>
        <Link
          href={knowMore}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name} on GitHub`}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all hover:border-emerald-400/30 hover:text-emerald-400"
        >
          <FontAwesomeIcon icon={faGithub} className="text-sm" />
        </Link>
      </div>
    </article>
  )
}

export default Project
