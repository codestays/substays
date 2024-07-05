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
                    <div className='bg-none-500 mb-1 h-6 w-6 hover:cursor-pointer' onClick={sideBarState}>
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
                <div className='bg-none-500 h-full w-full -mr-10 flex items-center justify-end relative'>
                    {/* <div className={`${searchOpen ? 'w-80 mr-1' : 'w-0 mr-4'} bg-darkgrey h-9 mt-0.5 rounded-3xl absolute flex items-center duration-500`}>
                        <div className={`${searchOpen ? 'animate-pulse': 'hidden'} ml-3 h-3.5 w-px bg-chatwhite ease-in-out`}></div>
                        <input type="search" id="default-search" class={`${searchOpen ? 'w-80 mr-1 visible' : 'w-0 mr-4 hidden'} bg-darkgrey w-72 h-1 p-4 ps-0 text-sm visible border-darkgrey`} placeholder="Search For Club" required />
                    </div> */}
                    <div className='bg-none-500 h-8 w-full absolute rounded-2xl flex justify-end'>
                        <div className={`${searchOpen ? 'w-full' : 'w-0'} bg-none-500 h-full mt-0 rounded-2xl duration-0`}>
                            <div className={`${searchOpen ? '-mr-1' : ''} mr-3.5 bg-darkgrey h-full bg-none-500 flex rounded-2xl items-center relative`}>
                                <div className={`${searchOpen ? '' : 'hidden'} h-5 w-1 ml-3 bg-chatwhite `}></div>
                                <div className='bg-none-500 h-full w-72 -ml-1 relative flex items-center'>
                                    <input type="search" placeholder="Search For Club" className={`${searchOpen ? 'ml-px w-72' : 'hidden'} w-1 -ml-5 bg-darkgrey absolute`} required></input>
                                </div>
                            </div>
                        </div>
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