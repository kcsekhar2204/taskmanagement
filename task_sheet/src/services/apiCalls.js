import { addDoc, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { taskListCollectionRef } from "../utils/constants";
import { db } from "../firebase.config";

export const getTaskList = async(setLoading, callback) => {
    setLoading(true)
    try {
        const res = await getDocs(taskListCollectionRef)
        const filterRes = res.docs.map((doc) => ({
            ...doc.data(), firebase_id: doc.id
        }))
        console.log(filterRes)
        callback(filterRes)
        setLoading(false)
    } catch(err) {
        console.error(err);
        alert("API failed, try again sometime")
        setLoading(false)
    }
};

export const postTaskList = async(data, callback, setRender) => {
    try{
        await addDoc(taskListCollectionRef, data)
        callback()
        setRender(Date.now())
    } catch(err) {
        alert('API failed, create task again')
        console.log(err)
        callback()
    }
    console.log('data',data)
}

export const deleteItem = async(firebase_id) => {
    const taskDoc = doc(db, "tasklist", firebase_id);
    await deleteDoc(taskDoc)
}

export const updateItem = async(firebase_id, updatedValues) => {
    const taskDoc = doc(db, "tasklist", firebase_id);
    await updateDoc(taskDoc, {...updatedValues});
}
