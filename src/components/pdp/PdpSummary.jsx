

import { useParams } from "react-router-dom";
import { Audio, Gaming, Wearable, Photography } from "../../data/data";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import PdpShippingInfo from "./PdpShippingInfo";


const PdpSummary = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [itemAddedToCart,setItemAddedToCart] = useState(null)

  const productsData = [...Audio, ...Gaming, ...Wearable, ...Photography];
  const pdpProduct = productsData?.find((product) => product.id === +id);
  console.log('pdpProduct',pdpProduct);
  

  const [pdpItemQty, setPdpItemQty] = useState(1);

  const clickMinus = () => {
    if (pdpItemQty > 1) setPdpItemQty((prev) => prev - 1);
  };
  const clickPlus = () => setPdpItemQty((prev) => prev + 1);

  const handleATC = () => {
    addToCart(pdpProduct, pdpItemQty);
    setItemAddedToCart('added');
    setTimeout(() => {
      setItemAddedToCart(null);
    }, 3000);
  };


  if (!pdpProduct) return null;

  return (
    <div className="flex flex-col gap-6 py-2">

      {/* Category + Title + Meta */}
      <div className="flex flex-col gap-2">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gray-100 py-1  text-[10px] font-semibold uppercase tracking-widest text-gray-500">
          {pdpProduct.category} / {pdpProduct.subcategory}
        </span>

        <h1 className="text-[1.75rem] font-bold leading-tight tracking-tight text-gray-900 text-left">
          {pdpProduct.name}
        </h1>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="flex items-center gap-1 font-medium text-amber-500">
            ★ {pdpProduct.rating}
          </span>
          <span className="text-gray-300">|</span>
          <span>{pdpProduct.reviews} reviews</span>
          <span className="text-gray-300">|</span>
          <span className="font-medium text-emerald-600">In stock</span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold tracking-tight text-gray-900">
          ${pdpProduct.price}
        </span>
        <span className="text-sm text-gray-400 line-through">
          ${(pdpProduct.price * 1.15).toFixed(2)}
        </span>
        <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">
          15% OFF
        </span>
      </div>

      {/* Description */}
      <p className="text-[0.9rem] leading-7 text-gray-500 text-left">
        {pdpProduct.description}
      </p>


      {/* Quantity + ATC */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 text-left">
          Quantity
        </p>

        <div className="flex items-center gap-4">
          {/* Quantity Stepper */}
          <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 px-1 py-1 gap-1">
            <button
              disabled={pdpItemQty <= 1}
              onClick={clickMinus}
              className="h-8 w-8 rounded-full text-lg font-light text-gray-500 transition-all duration-150
                hover:bg-white hover:text-gray-900 hover:shadow-sm
                disabled:cursor-not-allowed disabled:opacity-30"
            >
              −
            </button>
            <span className="w-8 text-center text-sm font-semibold text-gray-900">
              {pdpItemQty}
            </span>
            <button
              onClick={clickPlus}
              className="h-8 w-8 rounded-full text-lg font-light text-gray-500 transition-all duration-150
                hover:bg-white hover:text-gray-900 hover:shadow-sm"
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleATC}
            disabled={itemAddedToCart === 'added'}
            className={`flex-1 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white
              shadow-sm transition-all duration-200 ease-out
              hover:bg-black hover:shadow-md hover:-translate-y-0.5
              active:scale-[0.98] active:shadow-none"
              ${itemAddedToCart === 'added'
                ? 'bg-emerald-500 hover:bg-emerald-600 hover:shadow-md'
                : 'bg-gray-900 hover:bg-black hover:shadow-md'
              }`}
                        >
                {itemAddedToCart === 'added' ? 'Added ✓' : 'Add to Cart'}
                        </button>

          {/* Save / Wishlist */}
          <button
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-gray-200
              text-gray-400 transition-all duration-200
              hover:border-gray-400 hover:text-red-400 hover:bg-red-50
              active:scale-95"
            title="Save to wishlist"
          >
            ♡
          </button>
        </div>
      </div>

      <PdpShippingInfo />

    </div>
  );
};

export default PdpSummary;