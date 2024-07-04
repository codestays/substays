import React, {useState} from "react";

export default function SideBar({props}){
    return (
        <div className={`${props ? 'translate-x-0 ' : '-translate-x-full '}bg-darkgrey h-full w-80 fixed flex ease-in-out duration-300`}>
        </div>
    );
}