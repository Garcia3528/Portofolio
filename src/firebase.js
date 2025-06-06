// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjZT-Zm1WcXyZPlTQXp7YqacI-DyEL1XU",
  authDomain: "portfolio-2eca8.firebaseapp.com",
  projectId: "portfolio-2eca8",
  storageBucket: "portfolio-2eca8.firebasestorage.app",
  messagingSenderId: "278938317933",
  appId: "1:278938317933:web:728e946bb9be138ac83b64",
  measurementId: "G-H3QN4R7FTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics, collection, addDoc, getDocs };