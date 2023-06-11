import React from 'react'
import {FaFacebookSquare,FaWhatsapp, FaGithub ,
   
   FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div>
            <div className=' px-6 py-16 bg-black mx-auto    text-white gap-6 grid md:grid-cols-3'>
        <div className=' mx-auto'>
        <h1 className='py-4 '>
  <img src="https://easetemplate.com/borrow/assets/images/brand/logo/logo.svg" alt="" />
 </h1>
            <p className='font-medium '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate architecto iusto cumque totam vero in tempora ex obcaec. Cupiditate, ipsa eum.</p>
           <div className='flex gap-4 my-6'>
           < FaFacebookSquare size={30} />
            <  FaWhatsapp size={30} />
            < FaGithub size={30} />
            <FaTwitter size={30} />
           </div>
        </div>

        <div className='lg:col-span-2 flex justify-between '>
        <div>
            <h6 className='font-medium text-gray-400'>solutions</h6>
        <ul>
                <li className='font-bold text-sm py-2 capitalize'>analytics</li>
                <li className='font-bold text-sm py-2 capitalize'>marketing</li>
                <li className='font-bold text-sm py-2 capitalize'>commerce</li>
                <li className='font-bold text-sm py-2 capitalize'>insights</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>surpport</h6>
        <ul>
                <li className='font-bold text-sm py-2 capitalize'>pricing</li>
                <li className='font-bold text-sm py-2 capitalize'>documentations</li>
                <li className='font-bold text-sm py-2 capitalize'>guides</li>
                <li className='font-bold text-sm py-2 capitalize'>api status</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>company</h6>
        <ul>
                <li className='font-bold text-sm py-2 capitalize'>about</li>
                <li className='font-bold text-sm py-2 capitalize'>blog</li>
                <li className='font-bold text-sm py-2 capitalize'>jobs </li>
                <li className='font-bold text-sm py-2 capitalize'>press</li>
                <li className='font-bold text-sm py-2 capitalize'>carrears</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>legal</h6>
        <ul>
                <li className='font-bold text-sm py-2 capitalize'>claim</li>
                <li className='font-bold text-sm py-2 capitalize'>policy</li>
                <li className='font-bold text-sm py-2 capitalize'>terms </li>
                
            </ul>
        </div>
        
        </div>
    
      </div>
    </div>
  )
}

export default Footer
