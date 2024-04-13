import React, { useEffect, useRef, useState } from "react";
import { deleteItem, updateItem } from "../services/apiCalls";
import InputDropDown from "./InputDropdown";
import { status } from "../utils/constants";

const Item = ({isOpen, taskData, setOpen, index, setRender}) => {

    const [edit, setEdit] = useState(false)
    const [newValues, setNewValues] = useState({})
    const ref = useRef(null)

    useEffect(() => {setEdit(false)}, [isOpen])
    useEffect(() => {setNewValues({})}, [edit])

    const editFunc = () => {
        if(edit) {
            let payload = newValues
            if(payload["description"] === '') delete payload.description
            updateItem(taskData?.firebase_id, payload)
            setRender(Date.now())
        }
        setEdit(!edit)
    }

    return (
        <>
            <div className={`flex justify-between items-center lg:px-8 px-4 ${index%2 ?'bg-white':'bg-[#E7E9EB]'}`}
                onClick={() => setOpen(isOpen === taskData?.id ? -1 : taskData?.id)}>
                <div className="">{taskData?.name}</div>
                <div className="" ref={ref} onClick={(event) => event.stopPropagation()}>
                    {edit ? <InputDropDown selectedValue={taskData?.status} options={status} onSelect={(e) => setNewValues({...newValues, status:e})}/>: taskData?.status}
                </div>
            </div>
            {isOpen === taskData?.id && <div className=" border-y px-2 pb-2">
                
                {edit ? <textarea  className="border w-full" placeholder={taskData?.description} value={newValues['description']} onChange={(e) => setNewValues({...newValues, description:e.target.value})} /> : <div className="">{taskData?.description}</div>} 

                <div className="flex flex-row-reverse gap-4 justify-between md:justify-start">
                    <button className={`bg-[#CA0B00] text-white py-1 px-4 rounded-full transition ease-out delay-150 hover:scale-110 duration-300 ${edit ? "hidden" : "inline"} `} onClick={() => {deleteItem(taskData?.firebase_id); setRender(Date.now())}}>Delete</button>
                    <button className="bg-[#04AA6D] text-white py-1 px-4 rounded-full transition ease-out delay-150 hover:scale-110 duration-300 " onClick={editFunc}>{edit ? 'Update' : 'Edit'}</button>
                </div>
            </div>}

            
        </>
    );
};
  
export default Item;