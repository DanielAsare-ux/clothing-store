// lib/firebase.js
// Firebase initialization for Flawless clothing web app

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase config for the new flawless project
const firebaseConfig = {
  apiKey: "AIzaSyD-bWVK80Dni8ICkM681yiaQ5e_E3WE8C8",
  authDomain: "flawless-42eca.firebaseapp.com",
  projectId: "flawless-42eca",
  storageBucket: "flawless-42eca.firebasestorage.app",
  messagingSenderId: "662259716706",
  appId: "1:662259716706:web:02b455a3bef6f3447cf73b",
  measurementId: "G-56CGZFZSRB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export common Firebase services for use in your app
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
