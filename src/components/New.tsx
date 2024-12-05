import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const New = () => {
  return (
    
    <div className="h-48 w-full bg-black flex items-center justify-between px-8 text-white">
    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
    <span className="w-auto h-auto font-poppins text-lg cursor-pointer">Shop Now</span>
  

  
<Select>
<SelectTrigger className="w-[78px] h-[24px] text-sm px-2 border-none">
  <SelectValue placeholder="English" />
</SelectTrigger>
</Select>

</div>
);
};




export default New