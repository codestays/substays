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
                    <div className='bg-none-500 h-9 w-full mr-2 mt-1 rounded-2xl flex justify-end'>
                        <input type="search" id="search-club-text" aria-describedby="helper-text-explanation" class={`${searchOpen ? 'h-8' : 'w-0 -pr-2 duration-300'} duration-300 h-8 border text-sm rounded-2xl focus:ring-darkgrey w-full dark:bg-darkgrey dark:border-darkgrey dark:placeholder-chatwhite dark:text-chatwhite`} placeholder="search for club"></input>
                    </div>
                    {/* <div className={`${searchOpen ? 'duration' : 'w-0 duration-300'} w-full h-7 bg-darkgrey relative flex rounded-2xl mr-1 items-center gap-0.5`}>
                        <div className={`${searchOpen ? '' : 'hidden'} w-px ml-3.5 h-4 relative bg-chatwhite`}></div>
                        <input className={`${searchOpen ? '' : 'hidden'} bg-darkgrey -ml-0.5 -mt-0 w-72 h-5 relative flex items-center text-opacity-10`} placeholder='search for club'></input>
                    </div> */}
                   
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