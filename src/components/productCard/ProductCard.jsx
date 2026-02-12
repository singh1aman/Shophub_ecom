import { Heart, Star } from "lucide-react";
import { useCart } from "../../context/CartContext";
const ProductCard = ({ product, viewMode }) => {
  console.log("product", viewMode);
  const { addToCart } = useCart();

  if (viewMode === "list") {
    return (
      <div className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:border-black hover:shadow-lg transition-all bg-white">
        <div className="w-32 h-32 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="text-xs text-gray-500">
                  {product.subcategory}
                </span>
                <h3 className="font-semibold text-lg">{product.name}</h3>
              </div>
              {product.badge && (
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded ${
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
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-sm ml-1">{product.rating}</span>
              </div>
              <span className="text-xs text-gray-400">
                ({product.reviews} reviews)
              </span>
              <span className="text-xs text-gray-500">
                {product.stock} in stock
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">${product.price}</span>
            <div className="flex gap-2">
              <button className="p-2 border border-gray-200 rounded-md hover:bg-gray-50">
                <Heart className="h-4 w-4" />
              </button>
              <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                 onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
              >
                Add to Cart
              </button>
            </div>
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
            className="px-4 py-2 bg-black text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-800"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
