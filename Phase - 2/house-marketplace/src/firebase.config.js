// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-B7lfuOxWuMf3ZHFQe1wrd7U4ocpfntE",
  authDomain: "house-marketplace-f2fb6.firebaseapp.com",
  projectId: "house-marketplace-f2fb6",
  storageBucket: "house-marketplace-f2fb6.appspot.com",
  messagingSenderId: "9784680688",
  appId: "1:9784680688:web:907a3c7624c22797dc2235",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
