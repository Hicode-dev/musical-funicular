import React from 'react'
import Image from 'next/image'
const RightHero = () => {
  return (
    <div className='relative top-0 left-0 right-0'>

<div>
<img src="https://easetemplate.com/borrow/assets/images/background/hero-modern-img.jpg" alt="" className='rounded-lg md:w-[35rem]' />
</div>
      <div className='absolute top-[90%] left-[-20%] right-0'>
    <img src="https://easetemplate.com/borrow/assets/images/background/hero-graphic-2.png" alt="" />
      </div>
      <div className='absolute top-[0%] left-[-10%] -z-10 right-0'>
    <img src="https://easetemplate.com/borrow/assets/images/background/dots-2.png" alt="" />
      </div>
      <div className='absolute top-[90%] left-[70%] -z-10 right-0'>
    <img src="https://easetemplate.com/borrow/assets/images/background/dots.png" alt="" />
      </div>
    
    </div>
  )
}

export default RightHero