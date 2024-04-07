// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-12070.firebaseapp.com",
  projectId: "mern-auth-12070",
  storageBucket: "mern-auth-12070.appspot.com",
  messagingSenderId: "890318053628",
  appId: "1:890318053628:web:4dbb1bd9c6b872b7eef779"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);