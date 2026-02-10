import { useParams } from "react-router-dom";
import { Audio, Gaming, Wearable, Photography } from "../../data/data";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

const PdpSummary = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const productsData = [...Audio, ...Gaming, ...Wearable, ...Photography];
  const pdpProduct = productsData?.find((product) => product.id === +id);
  console.log("id", cartItems);
  const [pdpItemQty, setPdpItemQty] = useState(1);
  const clickMinus = () => {
    if (pdpItemQty > 1) {
      setPdpItemQty((prev) => prev - 1);
    }
  };
  const clickPlus = () => {
    setPdpItemQty((prev) => prev + 1);
  };

  const handleATC = () => {
      addToCart(pdpProduct,pdpItemQty);

  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-[11px] uppercase tracking-widest text-gray-600">
          Audio / Headphones
        </div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">
          {pdpProduct.name}
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
          <span>{pdpProduct.rating}</span>
          <span>•</span>
          <span>{pdpProduct.reviews} reviews</span>
          <span>•</span>
          <span className="text-gray-900">In stock</span>
        </div>
      </div>

      <div className="text-3xl font-semibold text-gray-900">
        ${pdpProduct.price}
      </div>

      <p className="text-sm leading-6 text-gray-600">
        {pdpProduct.description}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <button className="rounded-full border border-gray-300 px-4 py-1.5 text-sm hover:border-black transition-colors duration-200">
          Black
        </button>
        <button className="rounded-full border border-gray-300 px-4 py-1.5 text-sm hover:border-black transition-colors duration-200">
          White
        </button>
        <button className="rounded-full border border-gray-300 px-4 py-1.5 text-sm hover:border-black transition-colors duration-200">
          Silver
        </button>
      </div>

      <div className="mt-2 flex items-center gap-3">
        <button
          disabled={pdpItemQty <= 1}
          className="rounded-full border border-gray-300 px-3 py-2 text-sm hover:border-black transition-colors duration-200"
          onClick={() => clickMinus()}
        >
          -
        </button>
        <span className="w-8 text-center font-medium text-gray-900">
          {pdpItemQty}
        </span>
        <button
          className="rounded-full border border-gray-300 px-3 py-2 text-sm hover:border-black transition-colors duration-200"
          onClick={() => clickPlus()}
        >
          +
        </button>
      </div>

      <div className="mt-2 flex gap-3">
        <button
          className="w-full rounded-full bg-black px-5 py-3 text-sm font-medium
         text-white transition-all duration-200 ease-out
          hover:bg-gray-900 hover:shadow-lg hover:-translate-y-1
           hover:scale-[1.01] active:scale-[0.98]"
          onClick={() => handleATC()}
        >
          Add to Cart
        </button>
        <button className="rounded-full border border-gray-300 px-4 py-3 text-sm transition-all duration-200 ease-out hover:border-black hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.98]">
          Save
        </button>
      </div>

      <div className="mt-6 border-t border-gray-200 pt-4 text-sm text-gray-600">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <span>Free shipping</span>
            <span>2-4 business days</span>
          </div>
          <div className="flex items-center justify-between">
            <span>30-day returns</span>
            <span>Secure checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdpSummary;
