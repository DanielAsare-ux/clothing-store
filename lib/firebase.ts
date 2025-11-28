// lib/firebase.ts
// Firebase initialization for Flawless clothing web app

import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

// Firebase config for the flawless project
const firebaseConfig = {
  apiKey: "AIzaSyD-bWVK80Dni8ICkM681yiaQ5e_E3WE8C8",
  authDomain: "flawless-42eca.firebaseapp.com",
  projectId: "flawless-42eca",
  storageBucket: "flawless-42eca.firebasestorage.app",
  messagingSenderId: "662259716706",
  appId: "1:662259716706:web:02b455a3bef6f3447cf73b",
  measurementId: "G-56CGZFZSRB",
};

// Initialize Firebase only if no apps exist (prevents duplicate initialization in Next.js)
let app: FirebaseApp;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Export common Firebase services for use in your app
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);

export default app;
