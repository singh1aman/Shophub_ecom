# ShopHub 🛍️

A premium e-commerce single-page application built with React, featuring a motion-heavy UI, dynamic product filtering, and persistent cart management.

🔗 **Live Demo:** [shophub-ecom-tawny.vercel.app](https://shophub-ecom-tawny.vercel.app)

---

## Tech Stack

- **React + Vite** — fast development and optimised builds
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations and page transitions
- **React Router v7** — client-side routing
- **Context API + localStorage** — global cart state with persistence
- **Lucide Icons** — icon library
- **shadcn/ui** — accessible UI components

---

## Features

- 🛒 **Persistent Cart** — add, remove, and update quantities, saved to localStorage
- 🔍 **Dynamic Filtering** — filter by category, price, rating, and tags
- 📋 **Grid / List View** — toggle between product card layouts
- 🎬 **Framer Motion UI** — animated hero banner, navbar, and page transitions
- 📱 **Responsive Design** — mobile and desktop layouts
- 🗂️ **4 Product Categories** — Audio, Wearables, Gaming, Photography

---

## Pages

| Page | Description |
|------|-------------|
| **Home** | Hero banner, shop by category, trending products, reviews, newsletter |
| **Product Listing** | Filter sidebar, grid/list toggle, category-aware dynamic header |
| **Product Detail** | Image gallery, product summary, specs, highlights |
| **Cart** | Cart items, order summary, empty cart state |

---

## Project Structure

```
src/
├── App.jsx              # Routes + layout (Header/Footer)
├── main.jsx             # Router + CartProvider setup
├── context/
│   └── CartContext.jsx  # Cart logic with localStorage persistence
├── data/
│   └── data.jsx         # Product data (Audio/Gaming/Wearable/Photography)
├── pages/
│   ├── HomePage.jsx
│   ├── ProductListingPage.jsx
│   ├── ProductDetailPage.jsx
│   └── CartPage.jsx
└── components/
    ├── Header/
    ├── Footer/
    ├── HeroBanner/
    ├── ProductCard/
    ├── FilterPLP/
    └── EmptyCartSection/
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/singh1aman/Shophub_ecom.git

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## Author

**Amandeep Singh**
[LinkedIn](https://linkedin.com/in/amandeep-singh-fe) · [GitHub](https://github.com/singh1aman)
