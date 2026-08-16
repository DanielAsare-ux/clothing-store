# clothing-store

Full-stack e-commerce app: product catalog, cart, checkout, and account auth, backed by Firebase.

## Features

Shop with category filtering, product detail pages, a persistent cart (React Context, backed by Firestore), checkout flow, and email/password auth (sign up, login, forgot password, account page).

## Tech Stack

Next.js 16, React 19, TypeScript, Tailwind CSS, Firebase (Auth + Firestore), Framer Motion.

## Getting Started

Requires Node.js 18+ and a Firebase project.

```bash
git clone https://github.com/DanielAsare-ux/clothing-store.git
cd clothing-store
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/            routes: shop, product/[id], cart, checkout, login, signup, account
components/     ProductCard, Hero, Footer, navbar
context/        AuthContext, CartContext
lib/            firebase.ts, brand.js
scripts/        uploadProducts.js — seeds Firestore from a product CSV
```

## Data

Product data lives in a Firestore `products` collection. `scripts/uploadProducts.js` imports it from a CSV.
