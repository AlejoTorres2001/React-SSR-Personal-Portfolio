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
  featured?: boolean
}

const Project = ({ name, description, image, knowMore, date, featured }: props) => {
  if (featured) {
    return (
      <article className="glass glass-hover group col-span-12 flex cursor-pointer flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 md:flex-row">
        {/* Image — left 45% on desktop */}
        <div className="relative w-full overflow-hidden pt-[52%] md:w-[45%] md:pt-0">
          <Image
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            alt={`Project ${name}`}
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bgDeep/40 md:block hidden" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bgDeep/60 to-transparent md:hidden" />
        </div>

        {/* Content — right 55% on desktop */}
        <div className="flex flex-1 flex-col justify-between p-7 md:p-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-jakarta text-[10px] font-semibold uppercase tracking-widest text-emerald-400">
                Featured
              </span>
              <span className="font-jakarta text-[11px] text-slate-600">{date}</span>
            </div>
            <h3 className="font-fraunces text-2xl text-slate-50">{name}</h3>
            <p className="font-jakarta text-sm leading-relaxed text-slate-400">{description}</p>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Link
              href={knowMore}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${name} on GitHub`}
              className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 font-jakarta text-sm font-semibold text-emerald-400 transition-all hover:bg-emerald-400/20"
            >
              <FontAwesomeIcon icon={faGithub} className="text-sm" />
              View on GitHub
            </Link>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="glass glass-hover group col-span-12 flex cursor-pointer flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 sm:col-span-6 xl:col-span-4">
      {/* Image */}
      <div className="relative w-full overflow-hidden pt-[56.25%]">
        <Image
          src={image}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          alt={`Project ${name}`}
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bgDeep/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 px-5 pt-4">
        <h3 className="font-jakarta text-sm font-semibold text-slate-100">{name}</h3>
        <p className="line-clamp-3 font-jakarta text-xs leading-relaxed text-slate-500">{description}</p>
      </div>

      {/* Footer row */}
      <div className="flex items-center justify-between px-5 pb-4 pt-3">
        <span className="font-jakarta text-[11px] text-slate-700">{date}</span>
        <Link
          href={knowMore}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name} on GitHub`}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-500 transition-all hover:border-emerald-400/30 hover:text-emerald-400"
        >
          <FontAwesomeIcon icon={faGithub} className="text-sm" />
        </Link>
      </div>
    </article>
  )
}

export default Project
