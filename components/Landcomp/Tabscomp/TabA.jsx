import React from 'react'

const TabA = () => {
  return (
    <div className='md:flex justify-between block'>
          <div className='md:max-w-[30rem]'>
        <h3 className='font-bold md:text-[3rem]'>
        Personal Loan
        </h3>
        <p className=' text-[1.2rem] text-zinc-900'>
        Low rates. No fees. Personal loans made easy online.
        </p>
        <div className="flex mt-6 gap-y-6  font-bold flex-col">
            <p> Low monthly payments</p>
            <p> Get $5K to $100K</p>
            <p> Unemployment protection</p>
            <p> See rates in 60 seconds</p>
        </div>
        <div className='text-white my-10'>

            <button className=' bg-[rgb(97,75,255)] font-bold mr-4 p-4 rounded-lg'>
              View Your Rate
            </button>

        </div>
    </div>
    <div className='md:max-w-[40rem]'>
    <img src="https://img.freepik.com/free-photo/portrait-confident-young-african-man-holding-credit-card-with-laptop-paying-via-internet_231208-712.jpg?w=826&t=st=1686342305~exp=1686342905~hmac=c1f111bb9b4a2511f03c1bf8bf5388aa8c05941bd0dc3ce45976da51daa54917" width='600px' height='700px' alt="" />
    </div>
    </div>
  )
}

export default TabA
