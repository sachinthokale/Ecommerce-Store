/* eslint-disable react/prop-types */
import "./ProductCard.css";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/actions/productAction";
// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddtoCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card" key={product.id}>
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </Link>
      <button onClick={handleAddtoCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
