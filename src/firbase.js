// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

//
import { getStorage } from "firebase/storage";

//
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIeJGX27fEPfa02EdcO81CMZTVc_bJIuk",
  authDomain: "chats-32eb1.firebaseapp.com",
  projectId: "chats-32eb1",
  storageBucket: "chats-32eb1.appspot.com",
  messagingSenderId: "511933579876",
  appId: "1:511933579876:web:51b1b24fa3e90d14da5571",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
