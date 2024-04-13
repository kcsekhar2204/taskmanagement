import React, {  useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Popup = ({ isOpen, children, closeFunc }) => {
    const ref = useRef(null)

    useOnClickOutside(ref, closeFunc)
    return (
        <>
            {isOpen && <div className="fixed inset-0 z-[100]">
                <div className="relative flex justify-center items-center h-screen w-screen bg-gray-600/25">
                    <div className="absolute md:static bottom-0 border border-2 rounded-xl bg-white max-h-3/4 w-full md:max-w-xl overflow-auto" ref={ref}>
                        {children}
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Popup;