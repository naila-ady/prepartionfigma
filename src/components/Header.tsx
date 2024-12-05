import  Link  from 'next/link';
import React from 'react';
import { Search } from 'lucide-react';
import {Heart} from "lucide-react";
 import {ShoppingCart} from "lucide-react";


const Header = () => {
  return (
    <div className='w-full max-w-screen-xl h-[38px] flex flex-row items-center gap-[8px] absolute
      mt-[88px] ml-[90px] bg-slate-300 mx-auto md:flex-row'>
        
     <div className='w-[675px] h-[24px] flex flex-row flex-wrap items-center justify-between gap-190
       bg-[#FFFFFf] text-[#000000]'>
      <div className='w-[118px] h-[24px] font-[inter] font-bold leading-6 tracking-normal'>Exclusive</div>
       <div className='w-[367px] h-[24px] text-[16px] text-base gap-[48px] bg-red-50'>
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
    
     <div className='w-[347px] h-[37px] bg-yellow-50  flex flex-row flex-wrap items-center'>
    <div  className='w-[211px] h-[24px] font-[inter] text-[16px] gap-2 inline-flex'>What are you looking for?
     <Search />  </div>
    <div className='w-[80px] h-[24px] inline-flex gap-2 '>
    <Heart />
    <ShoppingCart />
    </div>
    
    </div>

    </div>
    
    

  )
}

export default Header