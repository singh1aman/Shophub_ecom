import { ShoppingCart, Search, Heart, Van } from "lucide-react";
import { useCart } from "../../context/CartContext";
const CartIcon = () => {
  const {cartItems} = useCart();
  const totalItemsInCart = cartItems?.reduce((sum,item) => sum + (item.qty || 0),0);
  return (
    <div className="cursor-pointer relative" style={{ marginLeft: "auto" }}>
      <ShoppingCart />
      <span className="absolute -top-2.5 -right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white text-xs font-medium">
        {totalItemsInCart}
        </span>
    </div>
  );
};
export default CartIcon;
