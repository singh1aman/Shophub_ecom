import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
const ProductCard2 = ({ p }) => {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
const {addToCart} = useCart();
  const handleAdd = (e) => {
    e.preventDefault();
    if (loading || added) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setAdded(true);
      addToCart(p);
      setTimeout(() => setAdded(false), 1500);
    }, 900);
  };

  return (
    <div
      className="
        group relative overflow-hidden rounded-3xl border border-white/40
        bg-gradient-to-b from-white via-white to-orange-50/60
        shadow-[0px_10px_30px_rgba(0,0,0,0.06)]
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-[0px_18px_45px_rgba(0,0,0,0.10)]
      "
    >
      {/* Premium Glow */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300
          bg-gradient-to-br from-orange-200/40 via-white to-orange-100/50
          group-hover:opacity-100
        "
      />

      {/* Image */}
      <div className="relative z-10 overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          className="
            h-56 w-full object-cover transition-transform duration-700 ease-out
            group-hover:scale-110
          "
        />

        {/* Glass Rating */}
        <div
          className="
            absolute right-4 top-4 rounded-2xl border border-white/40 
            bg-white/70 px-3 py-1 text-xs font-semibold text-gray-900 
            shadow-md backdrop-blur
          "
        >
          ⭐ {p.rating} <span className="text-gray-500">(1.2k)</span>
        </div>

        {/* Discount Badge */}
        <div
          className="
            absolute left-4 top-4 rounded-2xl bg-black/80 px-3 py-1 text-xs 
            font-semibold text-white shadow-md backdrop-blur
          "
        >
          25% OFF
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-5">
        <p className="text-sm font-semibold text-gray-900 line-clamp-2">
          {p.name}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-lg font-extrabold tracking-tight text-gray-900">
              ${p.price}
            </p>
            <p className="text-xs text-gray-500 line-through">$179</p>
          </div>

          <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-orange-700 shadow-sm backdrop-blur">
            Free Delivery
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={handleAdd}
          className={`
            group/btn relative mt-5 flex w-full items-center justify-center gap-2
            overflow-hidden rounded-2xl py-3 text-sm font-bold
            transition-all duration-300 ease-out active:scale-[0.97]
            ${
              added
                ? "bg-green-600 text-white shadow-lg"
                : "bg-[linear-gradient(181deg,_#5E5E5E_18.12%,_#000_99.57%)] text-white shadow-md hover:shadow-xl hover:shadow-orange-200"
            }
          `}
        >
          {/* Hover Gradient Slide */}
          {!added && (
            <div
              className="
                absolute inset-0 translate-x-[-100%] bg-gradient-to-r
                from-orange-500 via-orange-400 to-orange-500
                opacity-0 transition-all duration-500
                group-hover/btn:translate-x-0 group-hover/btn:opacity-100
              "
            />
          )}

          <span className="relative z-10 flex items-center gap-2">
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Adding...
              </>
            ) : added ? (
              <>✓ Added</>
            ) : (
              <>Add to Cart</>
            )}
          </span>
        </button>
      </div>

      {/* Glow Blob */}
      <div
        className="
          pointer-events-none absolute -bottom-16 -right-16 h-52 w-52 rounded-full
          bg-orange-300/40 opacity-0 blur-3xl transition-opacity duration-300
          group-hover:opacity-60
        "
      />
    </div>
  );
}
export default ProductCard2;
