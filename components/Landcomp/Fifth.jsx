import React from 'react'

const Fifth = () => {
  return (
    <div>
          <div className='md:flex justify-around px-6 items-center block'>
          <div className='md:max-w-[30rem]'>
        <h3 className='font-bold text-[2rem] md:text-[2.4rem] text-gray-900'>
        Whatever your goals are, we can help you.
        </h3>
        <p className=' text-[1rem] text-zinc-900'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dui urna sed tortor. Ut volutpat imperdiet quam malesuada nunc orci, at sollicitudin et.
        </p>

        <div className='text-white my-10 '>

            <button className=' bg-[rgb(97,75,255)] font-bold mr-4 p-4 rounded-lg'>
              our mission 
            </button>
            <button className=' border border-[rgb(97,75,255)] text-black font-bold mr-4 p-4 rounded-lg'>
              Meet The Team
            </button>

        </div>
    </div>
    <div className='md:max-w-[40rem] '>
    <img src="https://img.freepik.com/free-photo/medium-shot-business-woman-holding-laptop_23-2149457705.jpg?size=626&ext=jpg&uid=R83135877&ga=GA1.2.1814511041.1683935768&semt=ais" className='rounded-lg' alt="" />
    {/* <img src="" alt="" /> */}
    
    </div>
    </div>
    </div>
  )
}

export default Fifth
