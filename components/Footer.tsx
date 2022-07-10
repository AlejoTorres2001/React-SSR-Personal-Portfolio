import React from 'react'
import Image from 'next/image'
const Footer:React.FunctionComponent<object> = () => {
  return (
    <div className='footer-container'>
      <div className='footer-parent'>
        <Image src='/../public/assets/home/shape.png' alt="division image" unsized/>
      </div>
    </div>
  )
}

export default Footer
