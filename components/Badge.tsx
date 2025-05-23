import Image from 'next/image'
import React from 'react'
type BadgeProps = {
  title: string
  img: string
  assertion: string
  verify: string
  date: string
  children?: React.ReactNode
  key: number
}
const Badge: React.FunctionComponent<BadgeProps> = ({
  title,
  date,
  assertion,
  img,
  verify
}) => {
  return (
    <blockquote className="badgr-badge">
      <a href={assertion}>
        <Image width={120} height={120} src={img} alt={`badge ${title}`}/>
      </a>
      <p className="badgr-badge-name">{title}</p>
      <p className="badgr-badge-date">
        <strong className="strong-text">Awarded: </strong>
        {date}
      </p>
      <p style={{ margin: '16px 0', padding: '0' }}>
        <a
          className="badgr-badge-verify"
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
