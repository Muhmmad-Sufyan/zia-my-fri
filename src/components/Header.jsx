import React, { useState } from 'react'
import TopNavbar from './TopNavbar'

const Header = () => {
    const [toogle,setToogle] = useState(false)

  return (
    <div>
        <header>
   
   <TopNavbar />
 <div>
 <div className="text-white bg-black flex justify-between  gap-x-3 p-5">
   <div className="h-[49px] flex justify-center gap-x-2 items-center">
    <div className="border relative px-2 flex items-center hover:bg-red-600">
    <img className="h-[47px]" src="/eg.png" alt="" />
    <h1 className="font-bold">Ehsas Lab</h1>
    {toogle ?
   <ul className="flex-col z-50 border-t-2 border-gray-400 px-11  absolute top-[63px] w-full left-[-1.5rem] bg-black items-center md:hidden  md:font-bold">
                 <a href=""><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Home</li></a>
         <a href="/about"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">About</li></a>
        <a href="/course"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Course</li></a>
         <a href="/pages"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Pages</li></a>
       <a href="/feature"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Features</li></a>
          <a href="/blog"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Blog</li></a>
        <a href="/forums"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Forums</li></a>
       <a href="/contact"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Contact</li></a>
     </ul>:''
  }
    </div>
   
   
     <ul className="md:flex z-auto md:items-center hidden md:gap-x-4 md:font-bold">
       <a href="/"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Home</li></a>
       <a href="/about"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">About</li></a>
       <a href="/course"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Course</li></a>
       <a href="/pages"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Pages</li></a>
       <a href="/feature"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Features</li></a>
       <a href="/blog"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Blog</li></a>
       <a href="/forums"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Forums</li></a>
       <a href="/contact"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Contact</li></a>
     </ul>
     </div>

   
   <div className="md:flex md:items-center md:gap-x-4 hidden">
   <i className='bx bxs-shopping-bag text-xl' ></i>
   <i className='bx bx-search text-xl' ></i>
   </div>
   <div onClick={()=>setToogle(!toogle)} className="md:hidden flex group items-center ">
   <i class='bx bx-menu bg-gray-500 text-4xl' ></i>
  
   

   </div>
 </div>
 
 </div>
 
 </header>
    </div>
  )
}

export default Header
