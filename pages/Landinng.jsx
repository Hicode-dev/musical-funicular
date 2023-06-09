import React from 'react'
import PurpleNav from '../components/PurpleNav'
import MainNav from '../components/MainNav'
import LeftHero from '../components/LeftHero'
import RightHero from '../components/RightHero'
import SecondPart from '../components/Landcomp/SecondPart'

const Landinng = () => {
  return (
    <div className=' bg-white'>
       <PurpleNav />
       <MainNav />
   <div className=' md:px-[3rem]'>
   <div className='grid grid-cols-1 md:grid-cols-2 md:my-[6rem]  place-content-between place-items-center'>
          <LeftHero />
       <RightHero />
          </div>
          <div className='pt-[6rem]'>
            <SecondPart />
          </div>
   </div>
    </div>
  )
}

export default Landinng