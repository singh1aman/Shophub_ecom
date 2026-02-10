import { ShoppingCart, Search, Heart, Van } from "lucide-react";

const Logo = () => {
  return (
    <div
      className="logo-wrapper cursor-pointer flex justify-center items-center gap-2"
      style={{ marginLeft: "auto" }}
    >
      <div className="bg-black p-1 br-1 rounded-md w-8 h-8 flex items-center justify-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="text-white"
        >
          <path
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <span class="font-semibold text-lg">ShopHub</span>
    </div>
  );
};
export default Logo;
