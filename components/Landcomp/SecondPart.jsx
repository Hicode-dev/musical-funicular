import React from 'react'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { BsHeadset,BsHandThumbsUp } from 'react-icons/bs'
const SecondPart = () => {
    return (
        <div>
            <div className="text w-full px-6 mt-[8rem] mb-10">
                <h3 className='md:max-w-[30rem] font-bold text-[2.5rem]'>Top Reasons why you should choose us</h3>      
            </div>

            <div className="whole grid grid-cols-1 md:grid-cols-2 gap-y-5">
                <div className="c1">

                    <a href="#" class="block max-w-sm p-6   text-black  ">
                        <div className='bg-[rgb(233,231,251)] p-4 w-fit rounded-[100%]'>
                            <BsHeadset />
                        </div>

                        <h5 class="mb-2 text-[1.3rem] font-bold tracking-tight text-black">Great customer service</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis neque sollicitudin nulla sit.</p>
                    </a>

                </div>
                <div className="c1">

                    <a href="#" class="block max-w-sm p-6   text-black ">
                        <div className='bg-[rgb(233,231,251)] p-4 w-fit rounded-[100%]'>
                            <AiOutlineCreditCard />
                        </div>

                        <h5 class="mb-2 text-[1.3rem] font-bold tracking-tight text-black">Free weekly report monitoring.</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis neque sollicitudin nulla sit.</p>
                    </a>

                </div>
                <div className="c1">

                    <a href="#" class="block max-w-sm p-6   text-black ">
                        <div className='bg-[rgb(233,231,251)] p-4 w-fit rounded-[100%] text-blue-600'>
                            <BsHandThumbsUp />
                        </div>

                        <h5 class="mb-2 text-[1.3rem] font-bold tracking-tight text-black">Free credit improvement tips.</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis neque sollicitudin nulla sit.</p>
                    </a>

                </div>
                <div className="c1">

                    <a href="#" class="block max-w-sm p-6   text-black  ">
                        <div className='bg-[rgb(233,231,251)] p-4 w-fit rounded-[100%]'>
                            <AiOutlineCreditCard />
                        </div>

                        <h5 class="mb-2 text-[1.3rem] font-bold tracking-tight text-black">Security with 256-bit encryption..</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis neque sollicitudin nulla sit.</p>
                    </a>

                </div>

            </div>
        </div>
    )
}

export default SecondPart