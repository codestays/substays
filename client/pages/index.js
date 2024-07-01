import React from "react";
import { IoSettingsOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className='h-16 bg-darkgrey flex justify-between'>
      <div className='w-full bg-darkgrey-500 flex items-center'>
        <div class='w-6 h-6 bg-darkgrey ml-6 flex flex-col justify-center gap-1 hover:cursor-pointer'>
          <div className='w-full h-1 bg-chatwhite rounded-lg'></div>
          <div className='w-4 h-1 bg-chatwhite rounded-lg'></div>
          <div className='w-2 h-1 bg-chatwhite rounded-lg'></div>
        </div>
      </div>
      <div className='w-full bg-darkgrey flex items-center justify-center'>
        <div class='bg-none text-chatwhite font-mono text-xl hover:cursor-pointer'>substays</div>
      </div>
      <div className='w-full bg-darkgrey-500 flex items-center justify-end'>
        <div class='w-6 h-6 bg-darkgrey-500 mr-6'>
          <IoSettingsOutline className='h-full w-full text-chatwhite hover:cursor-pointer'/>
        </div>
      </div>
    </div>
  );
}
