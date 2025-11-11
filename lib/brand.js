// lib/brand.js
// 🔥 Flawless Brand Configuration

const brand = {
  name: "Flawless",
  tagline: "Worn without error",
  about:
    "Flawless (FLWS) is where high fashion meets zero compromise — a brand that blends confidence, elegance, and luxury for the modern individual.",
  logo: "/assets/logo/Flawless.jpg", // ✅ Corrected path
  colors: {
    primary: "#000000", // black
    secondary: "#FFFFFF", // white
    accent1: "#FF0000", // red
    accent2: "#0033CC", // blue
  },
  typography: {
    style: "Elegant and bold",
    headingFont: "'Playfair Display', serif",
    bodyFont: "'Inter', sans-serif",
  },
  design: {
    vibe: "luxury",
    layout: ["Home", "Shop", "About", "Contact"],
    showGallery: true,
  },
  contact: {
    phone: "+233200591693",
    email: "",
    social: {
      instagram: "@flws_gram",
      tiktok: "",
      facebook: "",
    },
  },
  delivery: {
    areas: "Nationwide",
    policy:
      "We deliver across all 16 regions of Ghana. Orders typically arrive within 1–3 business days.",
  },
  payment: [
    "Mobile Money",
    "Cash on Delivery",
    "Bank Transfer",
    "Other Options",
  ],
};

export default brand;
