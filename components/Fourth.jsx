import React from 'react'

const Fourth = () => {
  return (
    <div className='bg-[rgb(248,249,250)]'>
      <div className='md:mt-[6rem] '>
                 <div className="text md:flex px-6 justify-center flex-col items-center mb-10">
                <h3 className='md:max-w-[30rem] font-bold md:text-[2rem] text-[1.8rem]'>Getting started is easy</h3>    
                <p className='font-bold text-zinc-800 capitalize '>When it comes to loan options, applying online   with Borrow is a breeze—and with low rates .</p>  
            </div>
            <div className="whole grid grid-cols-1 md:grid-cols-3 place-content-between place-items-center gap-y-5">
                <div className="c1">

                    <a href="#" className="block max-w-sm p-6   text-black  ">
                    <button className='bg-[rgb(233,231,251)] px-4 py-2 w-fit'>
            1
            </button>

                        <h5 className="mb-2 text-[1.3rem] font-bold tracking-tight text-black">Sign up for an account</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis neque sollicitudin nulla sit.</p>
                    </a>

                </div>
                <div className="c1">

                    <a href="#" className="block max-w-sm p-6   text-black ">
                    <button className='bg-[rgb(233,231,251)] px-4 py-2 w-fit'>
            2
            </button>

                        <h5 className="mb-2 text-[1.3rem] font-bold tracking-tight text-black">Choose a account or card</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis neque sollicitudin nulla sit.</p>
                    </a>

                </div>
                <div className="c1">

                    <a href="#" className="block max-w-sm p-6   text-black ">
                    <button className='bg-[rgb(233,231,251)] px-4 py-2 w-fit'>
            3
            </button>
                        <h5 className="mb-2 text-[1.3rem] font-bold tracking-tight text-black">Accomplish your goals.</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis neque sollicitudin nulla sit.</p>
                    </a>

                </div>


            </div>
            </div>
    </div>
  )
}

export default Fourth
