// ProductOverview.js
import "./ProductOverview.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/actions/productAction";

const ProductOverview = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        setProductData(response.data);
      } catch (error) {
        // Handle errors
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, [productId]);
  const handleAddtoCart = () => {
    dispatch(addToCart(productData));
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-overview">
      <div className="overview-left">
        <div className="overview-left-poster">
          <img
            className="xc"
            src={productData.thumbnail}
            alt={productData.title}
          />
          <div className="alternateImages">
            {productData.images.map((image, index) => (
              <img src={image} alt="" key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="overview-right">
        <div className="overview-header">
          <div className="title">
            <p>{productData.brand}</p>

            <h2>{productData.title}</h2>
            <Rating
              value={productData.rating}
              name="size-small"
              defaultValue={2}
              size="small"
            />
          </div>
          <div className="price">
            <p> Rs.{productData.price}</p>
            <p>{productData.discountPercentage}% OFF</p>
          </div>
        </div>
        <div className="desc">
          <p>{productData.description}</p>
        </div>

        <p>
          Category: <span>{productData.category}</span>
        </p>
        <button onClick={handleAddtoCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductOverview;
