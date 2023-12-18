// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIRE_BASE,
  authDomain: "next-blog-abe74.firebaseapp.com",
  projectId: "next-blog-abe74",
  storageBucket: "next-blog-abe74.appspot.com",
  messagingSenderId: "1003672704621",
  appId: "1:1003672704621:web:5943ab422a20d098ecd164",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
