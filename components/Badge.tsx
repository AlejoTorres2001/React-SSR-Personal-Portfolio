import Image from 'next/image'
import React from 'react'

type BadgeProps = {
  title: string
  img: string
  assertion: string
  verify: string
  date: string
  children?: React.ReactNode
}

const Badge: React.FunctionComponent<BadgeProps> = ({
  title,
  date,
  assertion,
  img,
  verify
}) => {
  return (
    <div className="glass glass-hover flex w-[280px] flex-col items-center gap-3 rounded-2xl p-5 transition-all duration-300">
      <a
        href={assertion}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-200 hover:scale-105"
      >
        <Image
          width={100}
          height={100}
          src={img}
          alt={`badge ${title}`}
          className="rounded-xl"
        />
      </a>

      <p className="text-center font-jakarta text-sm font-semibold leading-tight text-slate-100">
        {title}
      </p>

      <p className="font-jakarta text-xs text-slate-500">
        <span className="text-slate-400">Awarded: </span>
        {date}
      </p>

      <a
        className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 font-jakarta text-xs font-semibold text-emerald-400 transition-all hover:bg-emerald-400/20"
        target="_blank"
        rel="noopener noreferrer"
        href={verify}
      >
        VERIFY
      </a>
    </div>
  )
}

export default Badge
