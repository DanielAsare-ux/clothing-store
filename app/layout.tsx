import "./globals.css";
import Navbar from "@/components/navbar";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "Flawless - Clothing Store",
  description: "Modern online fashion shop built with Next.js & Firebase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <CartProvider>
          <Navbar />
          <div className="pt-20">{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
