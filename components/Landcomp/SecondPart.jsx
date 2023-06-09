import React from 'react'
import { AiOutlineCreditCard } from 'react-icons/ai'
const SecondPart = () => {
  return (
    <div>
        <div className="text w-full">
        <h3 className='md:max-w-[30rem] font-bold text-[2.5rem]'>Top Reasons why you should choose us</h3>
        </div>

            <div className="whole grid grid-cols-1 md:grid-cols-2 gap-y-5">
                <div className="c1">
                   <div className='bg-[rgb(233,231,251)] p-'>
                   <AiOutlineCreditCard />
                   </div>
                    
<a href="#" class="block max-w-sm p-6 bg-white  text-black border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
    <h5 class="mb-2 text-[1.3rem] font-bold tracking-tight text-black">Free weekly report monitoring.</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis neque sollicitudin nulla sit.</p>
</a>

                </div>
                <div className="c2">
                    {/* <BsHeadset/> */}
                    
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>

                </div>
                <div className="c3">
                    {/* <BsHandThumbsUp /> */}
                    
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>

                </div>
                <div className="c3">
                    {/* <BsHandThumbsUp /> */}
                    
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>

                </div>
            </div>
    </div>
  )
}

export default SecondPart