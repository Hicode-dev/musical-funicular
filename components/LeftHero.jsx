import React from 'react'

const LeftHero = () => {
  return (
    <div className='md:max-w-[30rem]'>
        <h3 className='font-bold text-[3rem]'>
        Get your Personal Loan Approved Instantly!
        </h3>
        <p className='md:my-[2rem] text-[1.2rem] text-zinc-900'>
        Launch your new startup with this simple, professional Bootstrap 5 template. Great for new businesses in the fintech space.
        </p>
        <div className='text-white'>

            <button className=' bg-[rgb(97,75,255)] font-bold mr-4 p-4 rounded-lg'>
                EXPLORE NOW
            </button>
            <button className='text-black font-bold border-[rgb(97,75,255)] p-4 rounded-lg  border  '>
                CHECK YOUR ELIGIBILTY
            </button>
        </div>
    </div>
  )
}

export default LeftHero