import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import InputDropDown from "../components/InputDropdown";
import { sortOptions, statusFilterOption } from "../utils/constants";
import Create from "../components/Create";
import { getTaskList } from "../services/apiCalls";

const TaskSheet = () => {
    const [tasks, setTasks] = useState([])
    const [showData, setShowData] = useState(tasks)
    const [sortBy, setSortBy] = useState('')
    const [filterBy, setFilterBy] = useState('All')
    const [doAdd, setAdd] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [loading, setLoading] = useState(false)
    const [render, setRender] = useState(false)

    const callback = (res) => {
        setTasks(res)
    }

    useEffect(() => {
        filter(filterBy)
    }, [tasks])

    useEffect(() => {
        getTaskList(setLoading, callback)
    }, [render])

    const filter = (filterBy) => {
        setFilterBy(filterBy)
        if (filterBy === 'All') sort(sortBy, tasks)
        else sort(sortBy, tasks.filter(x => x.status === filterBy))
    }

    const sort = (val, data) => {
        setSortBy(val)
        let sortedData = [...data];
        if (val === "Created recently") {
            sortedData = sortedData.sort((a, b) => b.id - a.id);
        } else if (val === "Created earliest") {
            sortedData = sortedData.sort((a, b) => a.id - b.id);
        }
        setShowData(sortedData); 
    }


    return (
        <>
            <div className="lg:mt-8 mt-4 px-4 lg:px-16 relative">
                <div className="flex justify-between w-full md:hidden">
                    <InputDropDown options={statusFilterOption} selectedValue={'All'} label="Filter By Status" onSelect={filter} />
                    <InputDropDown options={sortOptions} label="Sort by" onSelect={(e) => sort(e, showData)} />
                </div>

                <div className="flex gap-8 mt-4">
                    <div className="hidden md:flex ml-16 flex-col gap-8 justify-center">
                        <div className="border border-2 mt-16">
                            <div className="font-bold">Filter</div>
                            {statusFilterOption.map(status => {
                                return <div className={`${status === filterBy ? 'border text-gray-50 bg-black' : 'bg-gray-50'} transition ease-out delay-150 hover:scale-110 duration-300`}
                                    onClick={() => filter(status)}>
                                        {status}
                                    </div>
                            })}
                        </div>
                        <div className="border border-2">
                            <div className="font-bold">Sort By</div>
                            {sortOptions.map(option => {
                                return <div className={`${option === sortBy ? 'border text-gray-50 bg-black' : 'bg-gray-50'} transition ease-out delay-150 hover:scale-110 duration-300`}
                                    onClick={() => sort(option, showData)}>
                                        {option} 
                                    </div>
                            })}
                        </div>
                    </div>

                    <div className="md:max-w-[600px] w-full">
                        <div className="w-full hidden md:flex items-center justify-center mb-4">
                            <input className="px-1 h-8 w-96 test-sm border border-4" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
                            <button className="border border-4 flex bg-[#FB5592] px-2 flex items-center justify-center h-8 transition ease-out delay-150 hover:scale-110 duration-300" onClick={() => setAdd(true)}>
                                <img  className="h-4 fill-white" src='./icons/pencil.svg' />Create
                            </button>
                        </div>
                        <Table data={showData} loading={loading} setRender={setRender}/>
                    </div>
                </div>

            </div>
            <Create title={newTitle} closeFunc={() => {setAdd(false); setNewTitle('')}} isOpen={doAdd} setRender={setRender}/>
            {/* Additional Mobile items */}
            <button className={`md:hidden absolute right-10 max-h-[80%] z-10 bottom-10`}>
                <img src='./icons/Add.png' className={`h-12 w-12 transform duration-700 transition ease-in-out ${doAdd ? 'rotate-45' : ''}`} onClick={() => setAdd(true)} />
            </button>
        </>
    );
};

export default TaskSheet;