"use client";
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -30 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`absolute top-0 left-0 w-full bg-white shadow-md z-40 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <ul className="flex flex-col items-center py-8 gap-6 text-gray-700 font-medium">
        <li className="hover:text-black cursor-pointer" onClick={onClose}>
          Home
        </li>
        <li className="hover:text-black cursor-pointer" onClick={onClose}>
          Shop
        </li>
        <li className="hover:text-black cursor-pointer" onClick={onClose}>
          Contact
        </li>
      </ul>
    </motion.div>
  );
}
