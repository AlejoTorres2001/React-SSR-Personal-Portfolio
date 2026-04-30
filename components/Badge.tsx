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
    <blockquote className="mx-2.5 flex h-[350px] w-[300px] flex-col items-center justify-center rounded-[20px] bg-uiWhite p-2.5">
      <a href={assertion} target="_blank" rel="noopener noreferrer">
        <Image width={120} height={120} src={img} alt={`badge ${title}`} />
      </a>

      <p className="mx-2.5 mb-2.5 hyphens-auto text-center text-base font-semibold leading-tight text-[#05012c]">
        {title}
      </p>

      <p className="m-0 text-xs leading-[1.67] text-[#555555]">
        <strong className="text-xs font-bold leading-[1.67] text-uiBlack">Awarded: </strong>
        {date}
      </p>

      <p className="m-0 my-4 p-0">
        <a
          className="box-content flex h-4 w-12 items-center justify-center rounded border border-uiBlack px-4 py-1.5 text-sm font-bold text-uiBlack transition hover:border-darkOrange hover:bg-[#1f2235] hover:text-[#f0f8ff]"
          target="_blank"
          rel="noopener noreferrer"
          href={verify}
        >
          VERIFY
        </a>
      </p>
    </blockquote>
  )
}

export default Badge
