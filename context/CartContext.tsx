"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// 🧩 Cart item structure
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// 🎯 The data + functions we’ll share across the app
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

// ⚙️ Create the actual context
const CartContext = createContext<CartContextType | undefined>(undefined);

// 🧠 Provider wraps the whole app and makes cart state available anywhere
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // ✅ Load cart from localStorage immediately (no React warning)
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // 💾 Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ➕ Add item to cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // ❌ Remove item from cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== id));
  };

  // 🧹 Clear all items
  const clearCart = () => setCart([]);

  // 💰 Calculate total
  const getTotalPrice = () =>
    cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 🎯 Custom hook for using the cart anywhere in the app
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
