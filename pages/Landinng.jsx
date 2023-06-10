import React from 'react'
import PurpleNav from '../components/PurpleNav'
import MainNav from '../components/MainNav'
import LeftHero from '../components/LeftHero'
import RightHero from '../components/RightHero'
import SecondPart from '../components/Landcomp/SecondPart'
import Third from '../components/Landcomp/Third'
import Fourth from '../components/Fourth'
import Fifth from '../components/Landcomp/Fifth'
import Sixth from '../components/Landcomp/Sixth'
import Testimonial from '../components/Landcomp/Testimonial'
import Seventh from '../components/Seventh'
import Footer from '../components/Footer'

const Landinng = () => {
  return (
    <div className=' bg-white '>
      <PurpleNav />
      <MainNav />
      <div className=' '>
        <div className=''>


          <div className='grid grid-cols-1 md:grid-cols-2 px-6 md:my-[6rem] bg-white place-content-between place-items-center'>
            <LeftHero />
            <RightHero />
          </div>
          <div className=''>
            <div className=' bg-[rgb(248,249,250)] md:px-[3rem]'>
              <div className='pt-[6rem]'>
                <SecondPart />

              </div>
            </div>
            <div className='md:px-[3rem]'>
              <Third />
            </div>
            <div className='bg-[rgb(248,249,250)] py-10 mt-10'>
              <div className='md:px-[3rem]'>
                <Fourth />
              </div>
            </div>
            <div className='bg-white py-10 mt-10'>
              <div className='md:px-[3rem]'>
                <Fifth />
              </div>
            </div>
            <div className='bg-[rgb(248,249,250)] py-10 mt-10'>
              <div className='md:px-[3rem]'>
                <Sixth />
              </div>
            </div>
            <div className='bg-white py-10 mt-10'>
              <div className='md:px-[3rem]'>
                <Testimonial />
              </div>
            </div>
            <div className='bg-white  mt-10'>
              <div className=''>
                <Seventh />
              </div>
            </div>
            <div className='bg-white  '>
              <div className=''>
                <Footer />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Landinng