import React from 'react'

const TabsC = () => {
  return (
    <div className='md:flex justify-between block'>
          <div className='md:max-w-[30rem]'>
        <h3 className='font-bold md:text-[3rem]'>
        Mortgage
        </h3>
        <p className=' text-[1.2rem] text-zinc-900'>
        We’re offering competitive home mortgage options for you.
        </p>
        <div className="flex mt-6 gap-y-6  capitalize font-bold flex-col">
            <div className='flex gap-4 items-center'>
            <button className='bg-[rgb(233,231,251)] px-4 py-2 rounded-lg w-fit'>
            1
            </button> 
            <p> Buy now, save when you want pay.</p>
            </div>
            <div className='flex gap-4 items-center'>
            <button className='bg-[rgb(233,231,251)] px-4 py-2 rounded-lg w-fit'>
            2
            </button> 
            <p>Simple online application. One-on-one help.</p>
            </div>
            <div className='flex gap-4 items-center'>
            <button className='bg-[rgb(233,231,251)] px-4 py-2 rounded-lg w-fit'>
            3
            </button> 
            <p> Flexible loan options</p>
            </div>
            <div className='flex gap-4 items-center'>
            <button className='bg-[rgb(233,231,251)] px-4 py-2 rounded-lg w-fit'>
            4
            </button> 
            <p> Low down payment options</p>
            </div>
            
          
      
        </div>
        <div className='text-white my-10'>

            <button className=' bg-[rgb(97,75,255)] font-bold mr-4 p-4 rounded-lg'>
              View Your Rate
            </button>

        </div>
    </div>
    <div className='md:max-w-[40rem]'>
    <img src="https://img.freepik.com/premium-photo/young-couple-standing-hugging-together-looking-happy-front-their-new-house_73503-2441.jpg?w=826" alt="" />
  
    </div>
    </div>
  )
}

export default TabsC