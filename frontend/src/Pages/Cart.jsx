import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantitySlice,
  deleteFromCart,
  increaseQuantitySlice,
  selectSubtotal,
} from "../Redux/Slice/cartSlice";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const subtotal = useSelector(selectSubtotal);

  console.log(items);
  const handledeleteFromCart = (itemId) => {
    dispatch(deleteFromCart(itemId));
  };

  return (
    <div className="cart">
      <div className="cart-table-head">
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <div className="cart-table-body">
        {items.map((item, key) => (
          <div className="cart-card" key={key}>
            <img src={item.thumbnail} alt="" />
            <div className="card-desc">
              <p>{item.brand}</p>
              <h3>{item.title}</h3>
              <p>{item.category}</p>
              <p>{item.discountPercentage} OFF </p>
            </div>
            <div className="cart-price">
              <h2>Rs. {item.price}</h2>
            </div>
            <div className="quantity">
              <h2
                onClick={() => {
                  dispatch(decreaseQuantitySlice({ itemId: item.id }));
                }}
              >
                -
              </h2>
              <h3>{item.quantity || 1}</h3>{" "}
              {/* Initialize quantity to 1 if it doesn't exist */}
              <h2
                onClick={() => {
                  dispatch(increaseQuantitySlice({ itemId: item.id }));
                }}
              >
                +
              </h2>
            </div>
            <div className="cart-total">Rs. {item.total}</div>
            <div
              className="remove-cart"
              onClick={() => handledeleteFromCart(item.id)}
            >
              <RemoveShoppingCartIcon />
            </div>
          </div>
        ))}
      </div>

      <div className="sub-total">
        <h4>SUB TOTAL: Rs. {subtotal}</h4>
        <button>CHECK OUT</button>
      </div>
    </div>
  );
};

export default Cart;
