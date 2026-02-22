import { Link } from "react-router-dom";
import ProductCard2 from "../productCard/ProductCard2";

const products = [
  {
    id: 1001,
    qty: 1,
    name: "Noise Cancelling Headphones",
    price: 129,
    category: "Audio",
    subcategory: "Headphones",
    description: "Premium over-ear headphones with deep bass and ANC.",
    rating: 4.8,
    reviews: 318,
    stock: 24,
    badge: "Hot",
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 1002,
    qty: 1,
    name: "Smart Watch Pro",
    price: 199,
    category: "Wearable",
    subcategory: "Watches",
    description: "Advanced fitness tracking with premium build and GPS.",
    rating: 4.7,
    reviews: 256,
    stock: 19,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 1003,
    qty: 1,
    name: "DSLR Camera Kit",
    price: 799,
    category: "Photography",
    subcategory: "Cameras",
    description: "High‑resolution DSLR kit with versatile lens options.",
    rating: 4.9,
    reviews: 142,
    stock: 8,
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=80",
  },
  {

   id: 1004,
    qty: 1,
    name: "VisionLite Smart Glasses",
    price: 249.99,
    category: "Wearable",
    subcategory: "Accessories",
    description: "Open-ear smart glasses with touch controls and voice assistant.",
    rating: 4.3,
    reviews: 214,
    stock: 18,
    badge: "New",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=900&auto=format&fit=crop"
  },


];

const TrendingProducts = () => {
  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Trending Products </h2>
          <Link to={'/allPlp'}
            className="text-sm font-semibold text-gray-600 hover:text-black"
          >
            Explore →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {products.map((p) => (
            <Link to={`/product/${p.id}`} key={p.id}>
            <ProductCard2 p={p} key={p.id}/>
            </Link>
    
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
