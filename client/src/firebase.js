// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-page-f547d.firebaseapp.com",
  projectId: "blog-page-f547d",
  storageBucket: "blog-page-f547d.appspot.com",
  messagingSenderId: "1092772005103",
  appId: "1:1092772005103:web:4c88cf677e09729c00471a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);