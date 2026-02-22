import React, { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="relative px-4 md:px-8">
      <div className="relative mx-auto my-2 flex max-w-7xl flex-col items-center justify-center overflow-hidden rounded-b-3xl bg-gradient-to-t from-orange-500 via-orange-50 to-white pt-28 md:my-20 md:pt-32">
        {/* Background circles */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="absolute h-[1400px] w-[1400px] rounded-full border border-white/30" />

          <motion.div
            className="absolute h-[1100px] w-[1100px] rounded-full border border-white"
            animate={{ scale: [1, 1.03, 1], y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0) 60%)",
            }}
          />

          <motion.div
            className="absolute h-[800px] w-[800px] rounded-full border border-white/10 bg-white/5 shadow-[0_0_200px_80px_rgba(255,255,255,0.15)]"
            animate={{ scale: [1, 1.05, 1], y: [0, -12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-20 mx-auto mb-4 max-w-5xl text-center text-4xl font-semibold tracking-tight text-gray-800 md:text-7xl"
        >
          <h2 className="inline-block bg-gradient-to-b from-gray-600 to-black bg-clip-text text-transparent">
            Premium Tech
            <span className="bg-gradient-to-b from-orange-300 to-orange-600 bg-clip-text text-transparent">
              {" "}
              Delivered
            </span>
          </h2>

          <h2 className="mt-2 inline-block bg-gradient-to-b from-gray-600 to-black bg-clip-text text-transparent">
            Faster{" "}
            <span className="bg-gradient-to-b from-orange-300 to-orange-600 bg-clip-text text-transparent">
              Than Ever
            </span>
          </h2>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative z-20 mx-auto mt-4 max-w-2xl px-4 text-center text-base text-gray-700 sm:text-lg"
        >
          Explore trending products, compare prices, and checkout instantly — with
          fast delivery, secure payments, and premium quality.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative z-20 mb-10 mt-8 flex w-full flex-col items-center justify-center gap-4 px-4 sm:flex-row md:mb-20"
        >
          <Link to={'/allPlp'}
          
            className="
              flex h-12 w-full items-center justify-center rounded-xl 
              bg-[linear-gradient(181deg,_#5E5E5E_18.12%,_#000_99.57%)]
              px-6 text-sm font-bold text-white shadow-[0px_4px_8px_0px_rgba(3,_7,_18,_0.06),_0px_2px_4px_0px_rgba(3,_7,_18,_0.06),_0px_0px_0px_1px_rgba(3,_7,_18,_0.08),_0px_1px_1px_2px_rgba(255,_255,_255,_0.40)_inset,_0px_-1px_5px_2px_rgba(255,_255,_255,_0.40)_inset]
              transition duration-200 hover:-translate-y-0.5 sm:w-44
            "
          >
            Shop Now
          </Link>

          <Link to={'/gamingplp'}
            className="
              flex h-12 w-full items-center justify-center rounded-xl 
              border border-gray-300 bg-white px-6 text-sm font-bold text-gray-900
              shadow-sm transition duration-200 hover:-translate-y-0.5 sm:w-44
            "
          >
            Gaming
          </Link>
        </motion.div>

        {/* Phone Section */}
        <div className="relative z-10 w-full min-h-[24rem] pt-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
            className="absolute left-0 right-0 top-0 z-10"
          >
            <PhoneMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// import { motion, AnimatePresence } from "framer-motion";

function PhoneMock() {

    const { cartItems,addToCart } = useCart();
    const totalItemsInCart = cartItems?.reduce(
      (sum, item) => sum + (item.qty || 0),
      0
    );
  const [cartCount, setCartCount] = useState(2);
  const [total, setTotal] = useState(328);

  const [addedItem, setAddedItem] = useState(null); // track which product was added
  const [loadingItem, setLoadingItem] = useState(null);

  const handleAddToCart = (product) => {
    if (loadingItem) return;

    setLoadingItem(product.title);

    setTimeout(() => {
      setCartCount((prev) => prev + 1);
      setTotal((prev) => prev + product.priceValue);
      addToCart(product)
      setLoadingItem(null);
      setAddedItem(product.title);

      setTimeout(() => setAddedItem(null), 1400);
    }, 700);
  };

  return (
    <motion.div
      className="relative mx-auto h-[620px] w-[310px] md:h-[690px] md:w-[350px]"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[55px] border-[14px] border-black bg-black shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-[0.6rem] z-20 h-[1.8rem] w-[7rem] -translate-x-1/2 rounded-full bg-black" />

        {/* Side buttons */}
        <div className="absolute -left-[2px] top-[120px] h-12 w-[3px] rounded-r-lg bg-black" />
        <div className="absolute -left-[2px] top-[170px] h-14 w-[3px] rounded-r-lg bg-black" />
        <div className="absolute -right-[2px] top-[170px] h-12 w-[3px] rounded-l-lg bg-black" />

        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-white">
          {/* Status bar */}
          <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-6 pt-3 text-xs font-semibold text-gray-900">
            <span className="text-sm font-bold">
              
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}

            </span>
            <div className="flex items-center gap-2 text-[10px] text-gray-700">
              <span>📶</span>
              <span>📡</span>
              <span>🔋</span>
            </div>
          </div>

          {/* App UI */}
          <div className="absolute inset-0 top-[2.4rem] z-10 px-4 pb-6 pt-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-500">Welcome</p>
                <p className="text-lg font-bold text-gray-900">ShopHub</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="rounded-xl bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-800">
                  🔍 Search
                </div>

                {/* Cart count updates */}
                <motion.div
                  key={cartCount}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-xl bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-800"
                >
                  🛒 {totalItemsInCart}
                </motion.div>
              </div>
            </div>

            {/* Banner */}
            <div className="mt-4 rounded-2xl bg-gradient-to-r from-orange-100 to-orange-50 p-4">
              <p className="text-sm font-bold text-gray-900">Weekend Sale 🔥</p>
              <p className="mt-1 text-xs text-gray-600">
                Up to 40% off on trending tech.
              </p>
            </div>

            {/* Products */}
            <div className="mt-4 space-y-3">
              <MiniProductCard
                title="Wireless Headphones"
                price="$129"
                tag="Audio"
                bg="bg-orange-50"
                loading={loadingItem === "Wireless Headphones"}
                added={addedItem === "Wireless Headphones"}
                onAdd={() =>
                  handleAddToCart({
                    title: "Wireless Headphones",
                    priceValue: 129,
                  })
                }
              />

              <MiniProductCard
                title="Smart Watch Pro"
                price="$199"
                tag="Wearable"
                bg="bg-blue-50"
                loading={loadingItem === "Smart Watch Pro"}
                added={addedItem === "Smart Watch Pro"}
                onAdd={() =>
                  handleAddToCart({
                    title: "Smart Watch Pro",
                    priceValue: 199,
                  })
                }
              />

              <MiniProductCard
                title="Gaming Controller X"
                price="$59"
                tag="Gaming"
                bg="bg-green-50"
                loading={loadingItem === "Gaming Controller X"}
                added={addedItem === "Gaming Controller X"}
                onAdd={() =>
                  handleAddToCart({
                    title: "Gaming Controller X",
                    priceValue: 59,
                  })
                }
              />
            </div>

            {/* Cart */}
            <motion.div
              className="mt-5 rounded-3xl border bg-white p-4 shadow-md"
              animate={{ scale: addedItem ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-gray-900">Your Cart</p>

                <motion.span
                  key={cartCount}
                  initial={{ y: -6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700"
                >
                  {cartCount} Items
                </motion.span>
              </div>

              <div className="mt-3 space-y-2 text-xs text-gray-700">
                <div className="flex justify-between">
                  <span>Headphones</span>
                  <span className="font-semibold">$129</span>
                </div>
                <div className="flex justify-between">
                  <span>Smart Watch</span>
                  <span className="font-semibold">$199</span>
                </div>

                {/* Animate newly added item */}
                <AnimatePresence>
                  {addedItem && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-between text-gray-900"
                    >
                      <span className="font-semibold">{addedItem}</span>
                      <span className="font-semibold text-green-600">+ Added</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-4 flex items-center justify-between">
                {/* Total updates */}
                <motion.p
                  key={total}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm font-extrabold text-gray-900"
                >
                  ${total}
                </motion.p>

                <button className="rounded-2xl bg-black px-4 py-2 text-xs font-semibold text-white transition hover:bg-gray-900 active:scale-[0.98]">
                  Checkout →
                </button>
              </div>
            </motion.div>

            {/* Bottom nav */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border bg-white px-4 py-3 shadow-lg">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-600">
                <span className="text-orange-600">🏠 Home</span>
                <span>📦 Orders</span>
                <span>❤️ Wishlist</span>
                <span>👤 Profile</span>
              </div>
            </div>
          </div>

          {/* Soft shadow overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- MINI PRODUCT CARD ---------------- */

function MiniProductCard({ title, price, tag, bg, onAdd, loading, added }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl p-3 ${bg}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-bold text-gray-900">{title}</p>
          <p className="mt-1 text-xs text-gray-600">⭐ 4.8 (1.2k)</p>
        </div>

        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
          {tag}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-sm font-extrabold text-gray-900">{price}</p>

        <button
          onClick={onAdd}
          className={`
            flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-xs font-bold
            transition-all duration-300 active:scale-[0.95]
            ${
              added
                ? "bg-green-600 text-white shadow-md"
                : "bg-black text-white hover:bg-gray-900"
            }
          `}
        >
          {loading ? (
            <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : added ? (
            "✓ Added"
          ) : (
            "+ Add"
          )}
        </button>
      </div>
    </motion.div>
  );
}


