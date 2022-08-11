import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React from 'react'
type props = {
  name: string
  description: string
  image: string
  knowMore: string
  bgColor?: string
}
const Project = ({ name, description, image, knowMore, bgColor }: props) => {
  const router = useRouter()
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={image} />
      </div>
      <div className="card-content">
        <p className="card-title">{name}</p>
        <div className="card-info">
          <p className="card-description">{description}</p>
        </div>
      </div>
      <div className="button-container">
        <button
          onClick={() => router.push(knowMore)}
          className="learn-more-button"
        >
          <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>
      <div className="date-container">
        <p className="date">08/10/22</p>
      </div>
    </div>
  )
}

export default Project