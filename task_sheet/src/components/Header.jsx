import React from "react";
import { useState } from "react";

const isLoggedIn = true
// const isLoggedIn = false

const Header = () => {

    const [showHeaderItems, setShowHeaderItems] = useState(false)

    return (
        <div className="z-50 md:px-16 px-4 flex justify-between w-full h-12 shadow-md items-center sticky top-0 bg-gradient-to-b from-white to-gray-100">
            <div className="text-gray-800 flex items-center gap-2">
                <img src='./icons/logo.png' alt="icon" className="object-scale-down h-6 w-6"/>
                <p className="font-bold">TASK SHEET</p>
            </div>
            {isLoggedIn ? <img src='./icons/profile.svg' alt="profile" className="object-scale-down h-8 w-8 cursor-pointer" 
                onClick={() => {}}/>: <>
                <div className="md:flex gap-2 hidden text-sm">
                    <div className="flex items-center justify-items-center hover:text-base w-20">
                        <button className="border border-2 rounded-xl w-full">SIGN IN</button>
                    </div>
                    <button className="text-blue-500">Create account</button>
                </div>
                <div className="md:hidden block" onClick={() => setShowHeaderItems(!showHeaderItems)}>
                    <div className={`h-1 bg-gray-800 w-6 ${showHeaderItems ? 'rotate-45': 'my-1'}`}></div>
                    <div className={`h-1 bg-gray-800 ${showHeaderItems ? '!w-0': 'w-6'}`}></div>
                    <div className={`h-1 bg-gray-800 w-6 ${showHeaderItems ? '-rotate-45 -mt-2': 'my-1'}`}></div>
                </div>
            </>}
        </div>
    );
};
  
export default Header;