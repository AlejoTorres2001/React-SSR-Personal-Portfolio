import Image from 'next/image'
import React from 'react'

const Footer: React.FunctionComponent<object> = () => {
  return (
    <div className='footer-container'>
      <div className='footer-parent'>
        <Image
          className='footer-image'
          src='/assets/home/shape.png'
          width={1920}
          height={130}
          alt="division image"
          priority
          style={{
            height: '130px',
            width: 'auto',
            maxWidth: '100%'
          }}
        />
      </div>
    </div>
  )
}

export default Footer