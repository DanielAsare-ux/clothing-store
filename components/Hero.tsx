"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600180758890-6e4d0efbe0f2?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <motion.div
        className="relative z-10 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-6xl font-playfair font-bold tracking-wide mb-6">
          The Essence of Style
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-200 mb-10">
          Redefine elegance with our timeless collection — crafted for the
          confident, modern individual.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100"
        >
          Explore Collection
        </motion.button>
      </motion.div>
    </section>
  );
}
