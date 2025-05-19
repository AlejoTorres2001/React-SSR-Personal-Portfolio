import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
type props = {
  name: string
  description: string
  image: string
  knowMore: string
  date: string
}
const Project = ({ name, description, image, knowMore, date }: props) => {
  const router = useRouter()
  return (
    <div className="card">
      <div className="card-image-container">
        <Image src={image} fill sizes='100%' alt='image  description' style={{ objectFit: 'cover' }}  />
      </div>
      <div className="card-content">
        <p className="card-title">{name}</p>
        <div className="card-info">
          <p className="card-description">{description}</p>
        </div>
      </div>
      <div className="button-container">
        <button name='LearnMore'
          onClick={() => router.push(knowMore)}
          className="learn-more-button"
        >
          <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
      <div className="date-container">
        <p className="date">{date}</p>
      </div>
    </div>
  )
}

export default Project
