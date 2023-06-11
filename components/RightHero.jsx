import React from 'react'
import Image from 'next/image'
const RightHero = () => {
  return (
    <div className='relative top-0 left-0 right-0'>

<div>
<img src="https://images.pexels.com/photos/7114420/pexels-photo-7114420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded-lg' width='600px' height='600px' alt="kjnhgytfdrx" />

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