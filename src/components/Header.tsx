import  Link  from 'next/link';
import React from 'react';
import { Search } from 'lucide-react';
import {Heart} from "lucide-react";
 import {ShoppingCart} from "lucide-react";
//  import { Separator } from "@/components/ui/separator";



const Header = () => {
  return (
    <div className='max-w-full h-[38px] flex items-center justify-evenly py-10
     bg-[#FFFFFf] text-[#000000] gap-8 xsm:flex flex-row border-b-2 '>
        
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
    
     <div className='h-[37px] flex-col flex-wrap items-center gap-3 inline-flex'>
      <div className='relative'>
        <input  type="text"  placeholder='What are you looking for?' className='bg-[rgba(245,245,245,1)] rounded-[4px]
       pt-[7px] pr-3 pb-[7px] pl-5 gap-[10px] font-[inter] text-[16px] inline-flex text-[#808080]'/>
         <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#000000]" />
         </div>

     
    <div className=' inline-flex gap-3 mt-2 '>
    <Heart />
    <ShoppingCart />
    </div>
    {/* <Separator className="my-4 text-grey-600" /> */}
    </div>
  

   


    </div>
    
    

  )
}

export default Header