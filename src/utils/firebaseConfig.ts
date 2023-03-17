import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {collection, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAwZ6gKXwYzyQ6M4cKKi805UKXC2f7Qyns",
  authDomain: "pokemon-app-db1df.firebaseapp.com",
  projectId: "pokemon-app-db1df",
  storageBucket: "pokemon-app-db1df.appspot.com",
  messagingSenderId: "73133850727",
  appId: "1:73133850727:web:fabdf7f1e9c020291494c2",
  measurementId: "G-RB6H3KJC57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
export const firebaseDB = getFirestore(app)

export const usersRef = collection(firebaseDB, "users")
export const pokemonListRef = collection(firebaseDB, "pokemonList")
