import CartItemCard from "@/components/cartpagecomps/CartItemCard";
import EmptyCartSection from "@/components/cartpagecomps/EmptyCartSection";
import { useCart } from "../context/CartContext";
import { ShieldCheck, Truck, BadgePercent, CreditCard } from "lucide-react";

const CartPage = () => {
  const { cartItems } = useCart();
   const totalItemsInCart = cartItems?.reduce(
      (sum, item) => sum + (item.qty || 0),
      0
    );
  console.log("cartpage data", cartItems);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const shipping = subtotal > 499 ? 0 : 49;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;
 
  return (
    <div className="cartpage-wrapper px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[260px_1fr]">
          <div className="hidden h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:block">
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
                {totalItemsInCart} item{totalItemsInCart === 1 ? "" : "s"} in
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
          <div className="cart-item-card-container flex flex-col gap-5">
            {totalItemsInCart ? (
              cartItems?.map((item, index) => (
                <CartItemCard item={item} index={index} key={index} />
              ))
            ) : (
              <EmptyCartSection />
            )}
          </div>
        </div>
        <aside className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">
                {shipping === 0 ? "Free" : `$${shipping}`}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Tax (5%)</span>
              <span className="font-medium">${tax}</span>
            </div>
            <div className="h-px w-full bg-gray-200" />
            <div className="flex items-center justify-between text-base">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="mt-6 w-full rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-gray-900">
            Proceed to Checkout
          </button>
          <p className="mt-3 text-xs text-gray-500">
            Free shipping on orders above $499.
          </p>
        </aside>
      </div>
    </div>
  );
};
export default CartPage;
