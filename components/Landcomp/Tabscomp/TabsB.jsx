import React from 'react'

const TabsB = () => {
  return (
    <div className='md:flex justify-between block'>
          <div className='md:max-w-[30rem]'>
        <h3 className='font-bold md:text-[3rem]'>
        Credit Cards
        </h3>
        <p className=' text-[1.2rem] text-zinc-900'>
        Designed to help you save, invest, and pay down Borrow debt.
        </p>
        <div className="flex mt-6 gap-y-6  capitalize font-bold flex-col">
            <div className='flex gap-4 items-center'>
            <button className='bg-[rgb(233,231,251)] px-4 py-2 w-fit'>
            1
            </button> 
            <p> Apply online</p>
            </div>
            <div className='flex gap-4 items-center'>
            <button className='bg-[rgb(233,231,251)] px-4 py-2 w-fit'>
            2
            </button> 
            <p> Submit application</p>
            </div>
            <div className='flex gap-4 items-center'>
            <button className='bg-[rgb(233,231,251)] px-4 py-2 w-fit'>
            3
            </button> 
            <p>   <p> Get a decision</p></p>
            </div>
            <div className='flex gap-4 items-center'>
            <button className='bg-[rgb(233,231,251)] px-4 py-2 w-fit'>
            4
            </button> 
            <p> See rates in 60 seconds</p>
            </div>
            
          
      
        </div>

        <div className='text-white my-10'>

            <button className=' bg-[rgb(97,75,255)] font-bold mr-4 p-4 rounded-lg'>
              View Your Rate
            </button>

        </div>
    </div>
    <div className='md:max-w-[40rem]'>
    <img src="" alt="" />
    
    </div>
    </div>
  )
}

export default TabsB