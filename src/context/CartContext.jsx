import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const CART_KEY = "shophub_cart";
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem(CART_KEY);
    if (!stored || stored === "undefined" || stored === "null") return [];
    return JSON.parse(stored);
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product,pdpItemQty=1) => {
    console.log("product in context", product);
    setCartItems((prev) => {
      const existing = prev?.find((p) => p.id === product.id);
      if (existing) {
        return prev?.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + pdpItemQty } : item,
        );
      }
      if (prev) {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const handleMinusClick = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      console.log("existing", existing);
      if (!existing) return prev;

      if (existing.qty <= 1) {
        return prev.filter((f) => f.id !== existing.id);
      }

      return prev.map((item) =>
        item.id === existing.id ? { ...item, qty: item.qty - 1 } : item,
      );
    });
  };

  const removeItem = (product) => {
    setCartItems((prev) => prev.filter((f) => f.id !== product.id));
  };
  const value = useMemo(
    () => ({
      cartItems,
      setCartItems,
      addToCart,
      handleMinusClick,
      removeItem,
    }),
    [cartItems],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
