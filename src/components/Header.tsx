import  Link  from 'next/link';
import React from 'react';
import { Search } from 'lucide-react';
import {Heart} from "lucide-react";
 import {ShoppingCart} from "lucide-react";


const Header = () => {
  return (
    <div className='w-full h-[38px] flex flex-row items-center justify-evenly  py-10
     bg-[#FFFFFf] text-[#000000] gap-8 xsm:flex flex-col'>
        
     <div className='w-auto h-[24px] flex flex-col flex-wrap items-center space-x-11'>
      <div className='w-auto h-[24px] font-[inter] leading-6 tracking-normal font-bold text-[24px] mr-12'>Exclusive</div>
       <div className='w-auto h-[24px] text-[16px] text-base'>
        <Link href={"/"} className="mr-5 text-1xl hover:text-[#003152]">
        Home</Link>
        <Link href={"./contact"} className="mr-5 text-1xl hover:text-[#003152]">
        Contact</Link>
        <Link href={"./about"} className="mr-5  text-1xl hover:text-[#003152]">
        About</Link>
        <Link href={"./signup"} className="mr-5  text-1xl hover:text-[#003152]">
        SignUp</Link>
           </div>
           </div>
    
     <div className='h-[37px] flex flex-col flex-wrap items-center gap-3'>
    <div  className=' h-[24px] font-[inter] text-[16px] inline-flex text-[#808080]'>What are you looking for? </div>
    <div className=' inline-flex gap-2 '>
    <Search />
    <Heart />
    <ShoppingCart />
    </div>
    
    </div>

    </div>
    
    

  )
}

export default Header