# 🛍️ E-Commerce Store with Next.js & Tailwind CSS

A modern, responsive e-commerce product listing page with search, filtering, and cart functionality.


## 🚀 Live Demo
https://ecommerce-store-zeta-jet.vercel.app/


## ✨ Features
- **Product Grid**: Display products with images, prices, and descriptions
- **Search & Filter**: Client-side search and category filtering
- **Product Modal**: Detailed view on click
- **Shopping Cart**: Add/remove items (Zustand state management)
- **Add Product Form**: Mock form with React Hook Form + Zod validation
- **100% Responsive**: Works on all devices

## 🛠 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: React Query
- **Form Handling**: React Hook Form + Zod validation
- **Deployment**: Vercel

## 🏗️ Project Structure
ecommerce-store/
├── src/
│ ├── app/ # Next.js 14 App Router
│ ├── components/ # React components
│ ├── lib/ # Utility functions
│ ├── store/ # Zustand stores
│ └── styles/ # Global CSS
├── public/ # Static assets
├── tailwind.config.js # Tailwind config
└── postcss.config.js # PostCSS config


## 🛠 Setup & Installation

```bash
git clone https://github.com/vvksngh100/ecommerce-store.git
cd ecommerce-store

npm install
# or
yarn install

npm run dev
# or
yarn dev

Open http://localhost:3000 in your browser.

#Build for Production
bash
npm run build
npm start
🌐 Deployment
Deploy on Vercel in one click:

https://vercel.com/button


📄 License
MIT © Vivek Singh
