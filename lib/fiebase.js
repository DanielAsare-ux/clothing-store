// Import required Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN0IE8jfejYkeZT4HGf6gm31RdTfTSIPE",
  authDomain: "clothing-store-e312f.firebaseapp.com",
  projectId: "clothing-store-e312f",
  storageBucket: "clothing-store-e312f.firebasestorage.app",
  messagingSenderId: "558009004863",
  appId: "1:558009004863:web:5de79c3fb06007d8c7598a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
