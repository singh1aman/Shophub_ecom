import CartIcon from "./CartIcon";
import Logo from "./Logo";
import MenuComp from "./MenuComp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="h-14 flex items-center justify-center sticky top-0 sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200"
      style={{
        padding: "0 20px",
      }}
    >
      <MenuComp />
      <Link to="/" style={{ marginLeft: "auto" }}>
        <Logo />
      </Link>
      <Link to="/cartpage" style={{ marginLeft: "auto" }}>
        <CartIcon />
      </Link>
    </div>
  );
};

export default Header;
