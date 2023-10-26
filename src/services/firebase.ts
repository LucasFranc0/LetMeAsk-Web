import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore';


import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCblmPQzel7r4u70ZxdCrFmDmeGXBK3J64",
  authDomain: "letmeask-26ec4.firebaseapp.com",
  databaseURL: "https://letmeask-26ec4-default-rtdb.firebaseio.com",
  projectId: "letmeask-26ec4",
  storageBucket: "letmeask-26ec4.appspot.com",
  messagingSenderId: "686340601527",
  appId: "1:686340601527:web:7822b3ca4bdd1ace373f32",
}
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)