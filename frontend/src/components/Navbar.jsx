import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);
  return (
    <div className="nav-bar">
      <h1 onClick={() => navigate("/")}>Ecommerce Store</h1>
      <div className="search">
        <input type="search" />
        <SearchIcon />
      </div>
      <div className="menu">
        <Link to="/account">
          {" "}
          <AccountCircleIcon />
        </Link>
        <Link to="/cart">
          {" "}
          <ShoppingCartIcon />
          <p>{items.length}</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
