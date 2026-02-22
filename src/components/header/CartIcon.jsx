import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
const CartIcon = () => {
  const { cartItems } = useCart();
  const totalItemsInCart = cartItems?.reduce(
    (sum, item) => sum + (item.qty || 0),
    0
  );
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (totalItemsInCart > 0) {
      setAnimKey((current) => current + 1);
    }
  }, [totalItemsInCart]);
  return (
    <div className="relative   cursor-pointer">
      {animKey > 0 && (
        <motion.span
          key={`dot-${animKey}`}
          aria-hidden="true"
          className="absolute -left-2 top-2 h-1.5 w-1.5 rounded-full bg-gray-900"
          initial={{ x: 0, y: 0, scale: 1, opacity: 0.9 }}
          animate={{ x: 20, y: -16, scale: 0.4, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      )}
      <motion.span
        key={`icon-${animKey}`}
        className="inline-flex"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{
          duration: 1,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        <ShoppingCart />
      </motion.span>
      <motion.span
        key={`badge-${animKey}`}
        className={`${totalItemsInCart ? 'absolute -top-2.5 -right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs font-medium text-white' : ''}`}
        animate={{ scale: [0.6, 1.15, 1], opacity: [0.7, 1, 1] }}
        transition={{
          duration: 0.36,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        {totalItemsInCart ? totalItemsInCart : ''}
      </motion.span>
    </div>
  );
};
export default CartIcon;
