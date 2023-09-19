// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLPPyUacIvN28RTfDyas4574QyXiY-C-c",
  authDomain: "chat-cc920.firebaseapp.com",
  projectId: "chat-cc920",
  storageBucket: "chat-cc920.appspot.com",
  messagingSenderId: "302714302788",
  appId: "1:302714302788:web:d03552e0cbfc8d1d886711",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth;
