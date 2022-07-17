// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIUqBlw80eoBRo0XL4BtA-ETZnys7tcJc",
  authDomain: "ecommerce-reactapp-2f76d.firebaseapp.com",
  projectId: "ecommerce-reactapp-2f76d",
  storageBucket: "ecommerce-reactapp-2f76d.appspot.com",
  messagingSenderId: "152917661644",
  appId: "1:152917661644:web:d12c36c7ed630e0100af69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);