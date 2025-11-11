"use client";
import Image from "next/image";
import brand from "@/lib/brand";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <Image
        src={brand.logo}
        alt={`${brand.name} logo`}
        className="w-40 mb-6 rounded-lg shadow-lg"
        width={160}
        height={160}
      />
      <h1 className="text-5xl font-bold text-blue-600">{brand.name}</h1>
      <p className="mt-2 text-lg text-gray-700 italic">
        &quot;{brand.tagline}&quot;
      </p>
    </main>
  );
}
