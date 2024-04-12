import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqMLTto8mpLB2ZslJOLJia6GURddjGkrM",
  authDomain: "task-sheet-b2b6a.firebaseapp.com",
  projectId: "task-sheet-b2b6a",
  storageBucket: "task-sheet-b2b6a.appspot.com",
  messagingSenderId: "883106713122",
  appId: "1:883106713122:web:04503139b195b6a926047b",
  measurementId: "G-7SQW7F4845"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)