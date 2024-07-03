import React, {useState} from "react";

export default function SideBar({props}){
    const [close, setClose] = useState(!false);
    return (
        <div className={`${props ? 'hidden' : ''}bg-black h-full w-80 fixed flex justify-between`}>
        </div>
    );
}