import React from "react";

const Item = ({isOpen, taskData, setOpen, index}) => {

    return (
        <>
            <div className={`flex justify-between items-center lg:px-8 px-4 ${index%2 ?'bg-white':'bg-[#E7E9EB]'}`}
                onClick={() => setOpen(isOpen === taskData?.id ? -1 : taskData?.id)}>
                <div className="">{taskData?.name}</div>
                <div className="">{taskData?.status}</div>
            </div>
            {isOpen === taskData?.id && <div className=" border-y px-2 pb-2">
                {taskData?.description}
                <div className="flex flex-row-reverse gap-4 justify-between md:justify-start">
                    <button className="bg-[#CA0B00] text-white py-1 px-4 rounded-full transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">Delete</button>
                    <button className="bg-[#04AA6D] text-white py-1 px-4 rounded-full transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">Update</button>
                </div>
            </div>}
        </>
    );
};
  
export default Item;