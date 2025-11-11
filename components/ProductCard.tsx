"use client";
import { motion } from "framer-motion";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img src={image} alt={name} className="w-full h-80 object-cover" />
      <div className="p-5 text-center">
        <h3 className="text-lg font-playfair text-gray-900">{name}</h3>
        <p className="text-gray-600 font-medium mt-2">{price}</p>
      </div>
    </motion.div>
  );
}
