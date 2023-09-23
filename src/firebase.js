// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOfbC2g7lef4yy64cfyqIlx-BuVvzk3Q4",
  authDomain: "chats-55bc0.firebaseapp.com",
  projectId: "chats-55bc0",
  storageBucket: "chats-55bc0.appspot.com",
  messagingSenderId: "817011532930",
  appId: "1:817011532930:web:b654d5058de8a04897809b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
