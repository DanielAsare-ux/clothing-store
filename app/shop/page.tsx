"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import brand from "@/lib/brand";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const items: Product[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data() as Product;
          items.push({ ...data, id: doc.id }); // ✅ no duplicate id issue
        });
        setProducts(items);
        console.log("🔥 Products fetched:", items);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100 text-gray-600">
        <p>Loading products...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      {/* Header Section */}
      <section className="text-center mb-10">
        <div className="flex flex-col items-center">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={100}
            height={100}
            className="mx-auto w-24 mb-4 rounded-lg shadow object-contain"
          />
          <h1
            className="text-4xl font-bold tracking-wide"
            style={{ color: brand.colors.primary }}
          >
            {brand.name} Shop
          </h1>
          <p className="text-gray-600 mt-2 italic text-lg">“{brand.tagline}”</p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.length > 0 ? (
          products.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer block"
            >
              <div>
                <div className="relative w-full h-56 mb-4">
                  <Image
                    src={product.image || "/assets/logo/Flawless.jpg"}
                    alt={product.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {product.name}
                </h2>
                <p className="text-gray-500 text-sm mt-1">{product.category}</p>
                <p
                  className="text-lg font-bold mt-2"
                  style={{ color: brand.colors.secondary }}
                >
                  GH₵ {product.price?.toFixed(2) || "—"}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found. Try uploading again.
          </p>
        )}
      </section>
    </main>
  );
}
