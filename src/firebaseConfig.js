// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABftgf7BC1kqsH8RxHMFYuCsBcFuUQM1c",
  authDomain: "myproj-crud-9522.firebaseapp.com",
  projectId: "myproj-crud-9522",
  storageBucket: "myproj-crud-9522.appspot.com",
  messagingSenderId: "819684953373",
  appId: "1:819684953373:web:86d5c1b677031c8dafe5f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore() ;