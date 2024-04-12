import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import InputDropDown from "../components/InputDropdown";
import { statusFilterOption } from "../utils/constants";
import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

const TaskSheet = () => {
    const [tasks, setTasks] = useState([])
    const [showData, setShowData] = useState(tasks)
    const [doAdd, setAdd] = useState(false)

    const taskListCollectionRef = collection(db, 'tasklist')

    useEffect(() => {
        const getTaskList = async() => {
            try {
                const res = await getDocs(taskListCollectionRef)
                const filterRes = res.docs.map((doc) => ({
                    ...doc.data()
                }))
                console.log(filterRes)
                setTasks(filterRes)
                setShowData(filterRes)

            } catch(err) {
                console.error(err);
            }
        };

        getTaskList()
    }, [])

    const filter = (filterBy) => {
        if (filterBy === 'All') setShowData(tasks)
        else setShowData(tasks.filter(x => x.status === filterBy))
    }

    const sort = (val) => {
        let sortedData = [...showData];
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
                <div className="flex justify-between w-full">
                    <InputDropDown options={statusFilterOption} selectedValue={'All'} label="Filter By Status" onSelect={filter} />
                    <button className="hidden md:block" onClick={() => setAdd(!doAdd)}>Create</button>
                    <InputDropDown options={["Created earliest", "Created recently"]} label="Sort by" onSelect={sort} />
                </div>
                <div className="flex justify-center mt-4">
                    <div className="md:w-3/5 w-full">
                        <Table data={showData} />
                    </div>
                </div>

            </div>
            {/* Additional Mobile items */}
            <button className={`md:hidden absolute right-10 max-h-[80%] z-10 bottom-10`}>
                <img src='./icons/Add.png' className={`h-12 w-12 transform duration-700 transition ease-in-out ${doAdd ? 'rotate-45' : ''}`} onClick={() => setAdd(!doAdd)} />
            </button>
        </>
    );
};

export default TaskSheet;