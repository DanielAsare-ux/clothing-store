// scripts/uploadProducts.js
// 🔥 Upload product data from CSV to Firestore

import fs from "fs";
import csv from "csv-parser";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase config (same as your firebase.js)
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
const db = getFirestore(app);

// Path to your CSV file
const csvFilePath = "./Clothing Website Information Form.csv";

// Upload logic
const uploadProducts = async () => {
  const productsRef = collection(db, "products");
  const products = [];

  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on("data", (row) => {
      // Customize these keys based on your CSV structure
      const product = {
        name: row["Product Name"] || "Unnamed Product",
        price: parseFloat(row["Price"]) || 0,
        description: row["Description"] || "",
        category: row["Category"] || "Uncategorized",
        image: row["Image URL"] || "",
        createdAt: new Date(),
      };
      products.push(product);
    })
    .on("end", async () => {
      console.log(`⏫ Uploading ${products.length} products to Firestore...`);
      for (const product of products) {
        await addDoc(productsRef, product);
      }
      console.log("✅ Upload complete!");
      process.exit(0);
    });
};

uploadProducts().catch((err) => console.error("❌ Error uploading:", err));
