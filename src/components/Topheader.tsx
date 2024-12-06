import Link from 'next/link';
import React from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"






const Topheader = () => {
  return (
        

    <div className='w-full h-[48px] xsm:h-[66px] bg-[#000000] text-[#FAFAFA] flex flex-wrap items-center
     justify-between
     px-4 py-4' >
        <h1 className='h-[24px] text-[14px] font-[poppins] font-normal leading-5
         ml-2 md:ml-6 md:text-base text-center flex-1'>
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