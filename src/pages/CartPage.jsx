import { useCart } from "../context/CartContext";
import { Trash2,Minus,Plus,IndianRupee } from "lucide-react";

const CartPage = () => {
  const { cartItems,addToCart,handleMinusClick,removeItem } = useCart();
  console.log("cartpage data", cartItems);
  const CartItemCard = ({ item }) => {
    console.log("CartItemCard", item);
    return (
      <div
        className="cartitemcard-wrapper flex gap-5 items-center justify-between border
       border-gray-200 bg-white p-4 rounded-lg transition-colors shadow-md"
      >
        <div className="left-part w-24 h-24 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
          <img className="w-full h-full object-cover" src={item.image}></img>
        </div>
        <div className="right-part flex flex-1 flex-col">
          <div className="top-right flex flex-1 justify-between">
            <div className="heading-section">
              <div className="heading">{item.name}</div>
              <div className="catgeory text-left">{item.category}</div>
              <div className="stock text-left">in-stock</div>
            </div>
            <button className="delete-button self-start"
             onClick={() => removeItem(item)}
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div class="right-bottom flex items-center justify-between">
            <div class="flex items-center gap-3 border border-gray-200 rounded-md p-1">
              <button className="p-1 hover:bg-gray-100 rounded transition-colors"
                 onClick={() => handleMinusClick(item)}
              >
                 <Minus />
              </button>
              <span className="w-8 text-center font-medium">{item.qty}</span>
              <button 
              onClick={() => addToCart(item)}
              className="p-1 hover:bg-gray-100 rounded transition-colors">
               <Plus />
              </button>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold flex items-center justify-center">
                <IndianRupee />{item.price * item.qty}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="cartpage-wrapper px-[2rem]">
      <h1>CartPage</h1>
      <div
        className="cart-item-card-container max-w-[70%] mx-auto flex flex-col justify-center gap-5
"
      >
        {cartItems?.map((item, index) => (
          <CartItemCard item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};
export default CartPage;
