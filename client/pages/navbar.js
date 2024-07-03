import React from "react";
import { IoIosSearch, IoIosNotificationsOutline } from "react-icons/io";

export default function Navbar() {
  return (
    <div className='h-16 bg-none-500 flex justify-between'>
      <div className='w-full bg-none-500 flex items-center'>
        <div class='w-6 h-6 bg-none ml-6 flex flex-col justify-center hover:cursor-pointer'>
          <div className='h-1/6 bg-chatwhite rounded-lg mb-1'></div>
          <div className='h-1/6 bg-chatwhite rounded-lg mb-1'></div>
          <div className='w-1/2 h-1/6 bg-chatwhite rounded-lg'></div>
        </div>
      </div>
      <div className='w-full bg-none flex items-center justify-center'>
        <div class='bg-none text-chatwhite font-mono text-xl hover:cursor-pointer'>substays</div>
      </div>
      <div className='w-full bg-none-500 flex items-center justify-end'>
        <div class='w-6 h-6 bg-none-500 mr-4'>
          <IoIosSearch className='h-full w-full text-chatwhite hover:cursor-pointer'/>
        </div>
        <div class='w-6 h-6 bg-none-500 mr-6'>
          <IoIosNotificationsOutline className='h-full w-full text-chatwhite hover:cursor-pointer'/>
        </div>
      </div>
    </div>
  );
}
