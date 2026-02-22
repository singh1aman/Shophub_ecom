import { Heart, Star } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
const ProductCard = ({ product, viewMode }) => {
  console.log("product", viewMode);
  const { addToCart } = useCart();
  const [isAdded,setIsAdded] = useState(false);
  if (viewMode === "list") {
    return (
      <div className="flex gap-3 rounded-xl border border-gray-200 bg-white p-3 transition-all hover:border-black hover:shadow-md sm:gap-4 sm:p-4">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50 sm:h-28 sm:w-28">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-gray-400">
                {product.subcategory}
              </div>
              <h3 className="mt-1 text-sm font-semibold text-gray-900 line-clamp-2 sm:text-base">
                {product.name}
              </h3>
              <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  {product.rating}
                </span>
                <span className="text-gray-300">•</span>
                <span>{product.reviews} reviews</span>
              </div>
            </div>
            {product.badge && (
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest ${
                  product.badge === "New"
                    ? "bg-blue-500 text-white"
                    : product.badge === "Sale"
                      ? "bg-red-500 text-white"
                      : product.badge === "Hot"
                        ? "bg-orange-500 text-white"
                        : "bg-black text-white"
                }`}
              >
                {product.badge}
              </span>
            )}
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-base font-semibold text-gray-900 sm:text-lg">
              ${product.price}
            </span>
            <button
            className={`
                  px-4 py-2
                  text-white text-sm
                  rounded-md
                  transition-all duration-200
                  ${
                    isAdded
                      ? "bg-emerald-500 hover:bg-emerald-600 hover:shadow-md"
                      : "bg-black hover:bg-gray-800"
                  }
                `}
                disabled={isAdded}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                 setIsAdded((prev) => !prev)
              setTimeout(() =>{setIsAdded((prev) => !prev)},1500)
                addToCart(product);
              }}
            >
             {!isAdded ? <span>Add to Cart</span> : <span>Added ✓</span>} 
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-black transition-all">
      {product.badge && (
        <span
          className={`absolute top-3 left-3 z-10 px-2 py-1 text-xs font-semibold rounded ${
            product.badge === "New"
              ? "bg-blue-500 text-white"
              : product.badge === "Sale"
                ? "bg-red-500 text-white"
                : product.badge === "Hot"
                  ? "bg-orange-500 text-white"
                  : "bg-black text-white"
          }`}
        >
          {product.badge}
        </span>
      )}
      <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100">
        <Heart className="h-4 w-4" />
      </button>
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{product.subcategory}</div>
        <h3 className="font-semibold mb-2 line-clamp-1">{product.name}</h3>
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs ml-1">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${product.price}</span>
          <button
           className={`
                  px-4 py-2
                  text-white text-sm
                  rounded-md
                  transition-all duration-200
                  ${
                    isAdded
                      ? "bg-emerald-500 hover:bg-emerald-600 hover:shadow-md"
                      : "bg-black hover:bg-gray-800"
                  }
                `}

            disabled = {isAdded}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsAdded((prev) => !prev)
              setTimeout(() =>{setIsAdded((prev) => !prev)},1500)
              addToCart(product);

            }}
          >
           {!isAdded ? <span>Add to Cart</span> : <span>Added ✓</span>} 
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
