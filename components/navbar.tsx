"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

export default function Navbar() {
  const { cart } = useCart();
  const { user, userProfile } = useAuth();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="flex items-center justify-between bg-white px-8 py-4 shadow-md fixed top-0 w-full z-50">
      <div className="flex items-center gap-3">
        <Image
          src="/assets/logo/Flawless.jpg"
          alt="Flawless Logo"
          width={45}
          height={45}
          className="rounded-full"
        />
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Flawless
        </Link>
      </div>

      <div className="flex items-center gap-6 text-lg font-medium">
        <Link href="/shop" className="hover:text-blue-600 transition-colors">
          Shop
        </Link>
        <Link href="/cart" className="hover:text-blue-600 transition-colors">
          Cart
          {itemCount > 0 && (
            <span className="ml-2 bg-blue-600 text-white text-sm px-2 py-0.5 rounded-full">
              {itemCount}
            </span>
          )}
        </Link>
        {user ? (
          <Link
            href="/account"
            className="hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">
              {userProfile?.displayName?.charAt(0)?.toUpperCase() || "U"}
            </span>
          </Link>
        ) : (
          <Link
            href="/login"
            className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
