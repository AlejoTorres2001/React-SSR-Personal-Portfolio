import React from 'react'
type props = {
  indexCss: number
  name: string
  description: string
  image: string
  knowMore?: string
  bgColor?: string
}
const Project = ({
  indexCss,
  name,
  description,
  image,
  knowMore,
  bgColor
}: props) => {
  console.log(image)
  return (
    <div className="item" tabIndex={indexCss}>
      <div className="box">
        <div className="img-container">
        <img className='image' src={image}/>
        </div>
        <div className="title-container">
          <h3 className="title">{name}</h3>
        </div>
        <div className="description-container">
          <p className="description">{description}</p>
          </div>
      </div>
    </div>
  )
}

export default Project
