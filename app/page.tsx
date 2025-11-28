"use client";
import Image from "next/image";
import Link from "next/link";
import brand from "@/lib/brand";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const q = query(collection(db, "products"), limit(4));
        const querySnapshot = await getDocs(q);
        const items: Product[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data() as Product;
          items.push({ ...data, id: doc.id });
        });
        setFeaturedProducts(items);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Brand Info Section */}
      <section className="py-16 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            className="mx-auto mb-6 rounded-lg shadow-lg"
            width={120}
            height={120}
          />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to {brand.name}
          </h2>
          <p className="text-lg text-gray-600 italic mb-4">
            &quot;{brand.tagline}&quot;
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">{brand.about}</p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Featured Products
          </h2>
          {loading ? (
            <p className="text-center text-gray-500">Loading products...</p>
          ) : featuredProducts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {featuredProducts.map((product) => (
                <Link
                  href={`/product/${product.id}`}
                  key={product.id}
                  className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer block"
                >
                  <div className="relative w-full h-56 mb-4">
                    <Image
                      src={product.image || brand.logo}
                      alt={product.name}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {product.category}
                  </p>
                  <p
                    className="text-lg font-bold mt-2"
                    style={{ color: brand.colors.primary }}
                  >
                    {brand.currency} {product.price?.toFixed(2) || "—"}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No featured products available.
            </p>
          )}
          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-block px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-600">
            <div>
              <p className="font-semibold">Phone</p>
              <p>{brand.contact.phone}</p>
            </div>
            <div>
              <p className="font-semibold">Instagram</p>
              <p>{brand.contact.social.instagram}</p>
            </div>
            <div>
              <p className="font-semibold">Delivery</p>
              <p>{brand.delivery.areas}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
