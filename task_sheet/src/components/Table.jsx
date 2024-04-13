import React, { useEffect, useState } from "react";
import Item from "./Item";

const Table = ({data, loading, setRender}) => {

    const [isOpen, setOpen] = useState(-1)
    
    useEffect(() => {setOpen(-1)}, [data])

    return (
        <div className="border border-1">
            <div className="flex justify-between bg-[#04AA6D] font-bold text-white items-center lg:px-8 px-4">
                <div className="">TASK</div>
                <div className="">STATUS</div>
            </div>
            {data.map((element, index) => {
                return <Item isOpen={isOpen} taskData={element} setOpen={setOpen} index={index} setRender={setRender}/>
            })}
            {loading ? [1,2].map(index => {
                return (<div className={`opacity-${100-index*40} py-2 flex w-full justify-between lg:px-8 px-4 ${index%2 ?'bg-[#E7E9EB]':'bg-white'}`}>
                    <div className={`h-2 w-64 rounded-full ${index%2 ?'bg-white':'bg-[#E7E9EB]'} animate-pulse`}></div>
                    <div className={`h-2 w-32 rounded-full ${index%2 ?'bg-white':'bg-[#E7E9EB]'} animate-pulse`}></div>
                </div>)})
            : data ? <></> : <div className="flex w-full justify-center text-large">No data found</div>}
        </div>
    );
};
  
export default Table;