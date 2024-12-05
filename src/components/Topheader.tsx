import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"






const Topheader = () => {
  return (
        

    <div className='w-full h-[48px] bg-[#000000] text-[#FAFAFA] flex flex-row items-center justify-center
     absolute gap-40 md:gap-20 sm:text-center ' >
        <h1 className='w-auto h-[24px] text-[14px] font-[poppins] font-normal leading-5
         ml-26 lg:ml-14 flex flex-row bg-red-200 '>
          Summer Sale For All Swim Suits And Free Express Delivery-OFF50%! <Link href={"#"} className='w-auto
           h-[18px] text-[14px] font-[poppins] font-medium leading-6 underline underline-offset-2 '>ShopNow</Link>
     </h1>
        
         <Select>
  <SelectTrigger className="w-[78px] h-[24px] text-sm px-2 border-none">
    <SelectValue placeholder="English" />
  </SelectTrigger>
  
    
</Select>

         

</div>
    
    
    
  )
}

export default Topheader