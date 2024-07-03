import React, {useState} from 'react';
import {IoIosNotificationsOutline } from "react-icons/io";
import { CiUser, CiSearch } from "react-icons/ci";
import SideBar from './sideBar';

const Footer = () => {
    const [open, setOpen] = useState(false);

  return (
    <div>
        <SideBar props={open} className=''/>
        <div className='pl-6 pr-6 pt-0'>
            <div className='bg-none h-16 w-full flex flex-row justify-between'>
                <div className='bg-none-500 h-full p-1 flex items-center justify-center gap-6'>
                    <div className='bg-none-500 h-6 w-6 hover:cursor-pointer' onClick={()=>{setOpen(!open)}}>
                        <div className='h-full w-full flex flex-col mt-0.5 relative'>
                            <div className='bg-chatwhite bg-opacity-90 h-1.5 w-full rounded-lg mb-1 mt-0.5'></div>
                            <div className='bg-chatwhite bg-opacity-90 h-1.5 w-full rounded-lg mb-1'></div>
                            <div className='bg-chatwhite bg-opacity-90 h-1.5 w-ful rounded-lg'></div>
                        </div>
                    </div>
                    <div className='bg-none-500 text-xl hover:cursor-pointer '>
                        substays
                    </div>
                </div>
                <div className='bg-none-500 h-full p-1 flex items-center justify-end gap-6'>
                    <div className='bg-none-500 h-6 w-6 hover: cursor-pointer'>
                        <CiSearch className='h-full w-full'/>
                    </div>
                    <div className='bg-none-500 h-6 w-6 hover: cursor-pointer'>
                        <CiUser className='h-full w-full'/>
                    </div>
                    <div className='bg-none-500 h-6 w-6 hover: cursor-pointer relative'>
                        <div className={`bg-red-500 rounded-full h-2 w-2 ml-2 absolute`}></div>
                        <IoIosNotificationsOutline className='h-full w-full'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;