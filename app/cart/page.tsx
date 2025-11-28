"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import brand from "@/lib/brand";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // ✅ Fix: Delay setState slightly to prevent warning
  useEffect(() => {
    const timer = setTimeout(() => setIsClient(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!isClient) return null;

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">
          Your cart is empty.{" "}
          <Link href="/shop" className="underline text-blue-600">
            Shop now!
          </Link>
        </p>
      ) : (
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-500">
                      {brand.currency} {item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 text-right">
            <p className="text-xl font-semibold">
              Total: {brand.currency} {getTotalPrice().toFixed(2)}
            </p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={clearCart}
                className="px-5 py-2 border border-gray-400 rounded hover:bg-gray-100"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="px-5 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
