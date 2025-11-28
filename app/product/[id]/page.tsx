"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Image from "next/image";
import Link from "next/link";
import brand from "@/lib/brand";
import { useCart } from "@/context/CartContext";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id as string);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as Product;
          setProduct({ ...data, id: docSnap.id });
        } else {
          console.warn("⚠️ No such product!");
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <p>Loading product details...</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-gray-500">Product not found.</p>
        <Link href="/shop" className="text-blue-600 underline ml-2">
          Back to Shop
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 h-[500px]">
          <Image
            src={product.image || "/assets/logo/Flawless.jpg"}
            alt={product.name}
            fill
            className="object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center md:w-1/2">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: brand.colors.primary }}
          >
            {product.name}
          </h1>
          <p className="text-gray-600 text-lg mb-4">{product.description}</p>
          <p
            className="text-2xl font-semibold mb-6"
            style={{ color: brand.colors.secondary }}
          >
            {brand.currency} {product.price?.toFixed(2)}
          </p>

          {/* ✅ Add to Cart Button */}
          <button
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image || "/assets/logo/Flawless.jpg",
                quantity: 1,
              })
            }
            className="bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition active:scale-95"
          >
            Add to Cart
          </button>

          <Link
            href="/shop"
            className="text-sm text-gray-500 mt-6 underline hover:text-gray-700"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>
    </main>
  );
}
