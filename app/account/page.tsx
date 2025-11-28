"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AccountPage() {
  const { user, userProfile, logout, loading } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsClient(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (!isClient || loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">My Account</h1>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600">
                {userProfile?.displayName?.charAt(0)?.toUpperCase() || "U"}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                {userProfile?.displayName || "User"}
              </h2>
              <p className="text-gray-500">{userProfile?.email}</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="border-b pb-4">
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Full Name
              </label>
              <p className="text-gray-900">
                {userProfile?.displayName || "Not set"}
              </p>
            </div>
            <div className="border-b pb-4">
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Email Address
              </label>
              <p className="text-gray-900">{userProfile?.email || "Not set"}</p>
            </div>
            <div className="border-b pb-4">
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Phone Number
              </label>
              <p className="text-gray-900">
                {userProfile?.phoneNumber || "Not set"}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/shop"
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition text-center"
            >
              Continue Shopping
            </Link>
            <button
              onClick={handleLogout}
              className="w-full border border-red-500 text-red-500 py-3 rounded-lg font-medium hover:bg-red-50 transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
