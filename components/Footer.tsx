import Image from 'next/image'
import React from 'react'

const Footer: React.FunctionComponent<object> = () => {
  return (
    <div className='flex w-full justify-center overflow-hidden'>
      <div className='flex items-end'>
        <Image
          className='h-auto w-full max-w-[1920px]'
          src='/assets/home/shape.png'
          width={1920}
          height={130}
          alt="division image"
          priority
        />
      </div>
    </div>
  )
}

export default Footer
