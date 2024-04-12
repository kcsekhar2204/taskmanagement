import React, { useEffect, useState } from "react";
import Item from "./Item";

const Table = ({data}) => {

    const [isOpen, setOpen] = useState(-1)
    
    useEffect(() => {setOpen(-1)}, [data])

    return (
        <div className="border border-1">
            <div className="flex justify-between bg-[#04AA6D] font-bold text-white items-center lg:px-8 px-4">
                <div className="">TASK</div>
                <div className="">STATUS</div>
            </div>
            {data.map((element, index) => {
                return <Item isOpen={isOpen} taskData={element} setOpen={setOpen} index={index}/>
            })}
        </div>
    );
};
  
export default Table;