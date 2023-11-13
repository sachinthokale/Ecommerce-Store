import { useEffect, useState } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductByCategory,
} from "../Redux/actions/productAction";
import ProductCard from "../components/ProductCard";
import { productCategory } from "../assets/category";

const Home = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data } = useSelector((state) => state.AllProduct);
  // const [activeCat, setActiveCat] = useState(false);

  useEffect(() => {
    if (selectedCategory == "all" || !selectedCategory) {
      dispatch(getAllProducts());
    } else {
      dispatch(getProductByCategory(selectedCategory));
    }
  }, [dispatch, selectedCategory]);
  // console.log(data);
  const handleCategory = (category) => {
    setSelectedCategory(category);
    // setActiveCat(true);
  };

  return (
    <div className="home-page">
      <div className="category">
        {productCategory.map((category, index) => (
          <h3 onClick={() => handleCategory(category)} key={index}>
            {category}
          </h3>
        ))}
      </div>
      <div className="products">
        {data.map((product, key) => (
          <ProductCard product={product} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Home;
