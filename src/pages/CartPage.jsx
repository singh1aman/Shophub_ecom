import CartItemCard from "@/components/cartpagecomps/CartItemCard";
import { useCart } from "../context/CartContext";
import { ShieldCheck, Truck, BadgePercent, CreditCard } from "lucide-react";

const CartPage = () => {
  const { cartItems } = useCart();
  console.log("cartpage data", cartItems);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const shipping = subtotal > 499 ? 0 : 49;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;
 
  return (
    <div className="cartpage-wrapper px-[2rem]">
      <h1>CartPage</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_20%] gap-8">
        <div className="grid grid-cols-[25%_1fr] gap-6">
          <div className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-900">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Cart Status
                </p>
                <h2 className="text-lg font-semibold text-gray-900">
                  Ready to Checkout
                </h2>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-gray-200 bg-[#1ffab6] p-4">
              <p className="text-sm font-medium">
                {cartItems.length} item{cartItems.length === 1 ? "" : "s"} in
                your cart
              </p>
              <p className="mt-1 text-xs">
                Estimated delivery: 3–5 business days
              </p>
            </div>

            <div className="mt-5 grid gap-3">
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-3">
                <Truck className="h-5 w-5 text-gray-900" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Free shipping
                  </p>
                  <p className="text-xs text-gray-600">
                    On orders above ₹499
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-3">
                <BadgePercent className="h-5 w-5 text-gray-900" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Member perks
                  </p>
                  <p className="text-xs text-gray-600">
                    Extra 5% off with points
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-3">
                <CreditCard className="h-5 w-5 text-gray-900" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Secure payments
                  </p>
                  <p className="text-xs text-gray-600">
                    All major cards accepted
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-gray-900 bg-gray-900 p-4 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-300">
                Today’s Highlight
              </p>
              <p className="mt-2 text-sm font-semibold">
                Add any accessory and get free express shipping.
              </p>
            </div>
          </div>
          <div className="cart-item-card-container flex flex-col justify-center gap-5">
            {cartItems?.map((item, index) => (
              <CartItemCard item={item} index={index} key={index} />
            ))}
          </div>
        </div>
        <aside className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">₹{subtotal}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">
                {shipping === 0 ? "Free" : `₹${shipping}`}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Tax (5%)</span>
              <span className="font-medium">₹{tax}</span>
            </div>
            <div className="h-px w-full bg-gray-200" />
            <div className="flex items-center justify-between text-base">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">₹{total}</span>
            </div>
          </div>
          <button className="mt-6 w-full rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-gray-900">
            Proceed to Checkout
          </button>
          <p className="mt-3 text-xs text-gray-500">
            Free shipping on orders above ₹499.
          </p>
        </aside>
      </div>
    </div>
  );
};
export default CartPage;
