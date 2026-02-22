import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyCartSection = () => {
  return (
    <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center shadow-sm">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-900">
        <ShoppingBag className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        Your cart is empty
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Browse our latest drops and add your favorites to get started.
      </p>
      <Link
        to="/audioplp"
        className="mt-6 inline-flex rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-900"
      >
        Start Shopping
      </Link>
    </div>
  );
};

export default EmptyCartSection;
