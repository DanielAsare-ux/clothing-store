"use client";
import { db } from "../lib/firebase";

console.log("Firebase connected:", db);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600">
        Clothing Store Web App
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Your modern online fashion shop starts here 👕✨
      </p>
    </main>
  );
}
