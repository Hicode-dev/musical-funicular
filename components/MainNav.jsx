import React,{useState,useEffect} from 'react'
import {AiOutlineClose,AiOutlineMenuFold} from 'react-icons/ai'
const MainNav = () => {
  const [nav ,setNav] = useState(false)

    const  handleClick = ()=>{
        setNav(!nav)
      }
  return (
    
    <main>
    <div className='bg-white shadow-lg'>
 <div className='max-w-[1240]  py-4 flex  justify-between items-center container  capitalize h-25 mx-auto px-5 sticky top-0'>
 <h1 className=' '>
  <img src="https://easetemplate.com/borrow/assets/images/brand/logo/logo.svg" alt="" />
 </h1>
      <ul className="hidden sm:flex  font-bold text-gray-400">
        <li className='p-3 cursor-pointer' >home</li>
        <li className='p-3 cursor-pointer'cur>company</li>
        <li className='p-3 cursor-pointer'> resources</li>
        <li className='p-3 cursor-pointer'> about</li>

        <li className='p-3 '> contact</li>
      </ul>

      <div onClick={handleClick} className="block sm:hidden">
        {!nav?  <AiOutlineMenuFold className='fixed right-0 mr-5 ease-in-out duration-700'  size={30} /> :   <AiOutlineClose className='fixed right-0 mr-5 ease-in-out duration-700' size={30} />}
      
     
      </div>
      <div className={nav? 'fixed top-0 bg-black px-4 left-0 w-[60%]  border-r h-full  border-r-gray-600 ease-out duration-700' :'fixed left-[-100%]   duration-1000' }>
      <h1 className=' text-3xl p-3 font-bold pt-3 text-[#3e873e] uppercase '> react</h1>

        <ul>
          <li className='p-3 border-gray-600 border-b' >home</li>
          .<li className='p-3 border-gray-600 border-b'>company</li>
          <li className='p-3 border-gray-600 border-b'> resources</li>
          <li className='p-3 border-gray-600 border-b'> about</li>

          <li className='p-3 '> contact</li>
        </ul>
      </div>

 </div>
    </div>

  </main>
  )
}

export default MainNav