import { collection } from "firebase/firestore"
import { db } from "../firebase.config";

export const status = ["To Do", "In Progress", "Done"]
export const statusFilterOption = ["All", "To Do", "In Progress", "Done"]

export const REGEX = {
    "EMAIL" : /^[\w\.]+@(\w+\.)+\w{2,4}$/i
}

export const sortOptions = ["Created earliest", "Created recently"]
export const errorClass = 'text-red-800 text-sm' 
export const taskListCollectionRef = collection(db, 'tasklist')
