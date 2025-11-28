"use client";

import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Order Placed! 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Your order has been sent to our WhatsApp. Please complete the
          conversation there to confirm your order and arrange payment.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-500">
            If WhatsApp didn&apos;t open automatically, please message us directly
            at:
          </p>
          <p className="font-semibold text-gray-900 mt-2">+233 200 591 693</p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/shop"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
