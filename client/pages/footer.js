import React, {useState} from 'react';
import {IoIosNotificationsOutline } from "react-icons/io";
import { CiUser, CiSearch } from "react-icons/ci";
import SideBar from './sideBar';

const Footer = () => {
    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const searchState = ()=>{
        setSearchOpen(!searchOpen);
    }
    const sideBarState = ()=>{
        setOpen(!open);
        setSearchOpen(false);
    }
  return (
    <div>
        <SideBar props={open} className=''/>
        <div className='pl-6 pr-6 pt-0' onClick={open ? sideBarState : null}>
            <div className='bg-none h-16 w-full flex flex-row justify-between'>
                <div className='bg-none-500 h-full p-1 flex items-center justify-center gap-6'>
                    <div className='bg-none-500 h-6 w-6 hover:cursor-pointer' onClick={sideBarState}>
                        <div className={`${searchOpen ? '' : ''} h-full w-full flex flex-col mt-0.5 relative`}>
                            <div className={`${open ? '' : ''} bg-chatwhite bg-opacity-90 h-1.5 w-full rounded-lg mb-1 mt-0.5`}></div>
                            <div className={`${open ? 'bg-none' : 'bg-chatwhite'} bg-opacity-90 h-1.5 w-full rounded-lg mb-1 ease-in-out duration-500`}></div>
                            <div className={`${open ? '' : ''} bg-chatwhite bg-opacity-90 h-1.5 w-ful rounded-lg`}></div>
                        </div>
                    </div>
                    <div className={`${searchOpen ? 'hidden' : ''} ${open ? 'relative ml-36' : 'relative'} bg-none-500 text-xl hover:cursor-pointer ease-in-out duration-500`}>
                        substays
                    </div>
                </div>
                <div className='bg-none-500 h-full w-full -mr-10 flex items-center justify-end'>
                    <div className={`${searchOpen ? 'w-80 mr-1.' : 'w-0 mr-4'} bg-darkgrey h-9 mt-0.5 rounded-3xl absolute ease-in-out duration-500 flex items-center`}>
                        <div className={`${searchOpen ? '': 'hidden'} ml-3`}>|</div>
                        <div className={`${searchOpen ? 'text-chatwhite text-opacity-40 -ml-1': 'hidden'} text-sm`}>Search For Club</div>
                    </div>
                </div>
                <div className='bg-none-500 h-full p-1 flex items-center justify-end gap-6'>
                    <div className='bg--500 h-6 w-6 hover: cursor-pointer relative'>
                        <CiSearch className='h-full w-full' onClick={searchState}/>
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