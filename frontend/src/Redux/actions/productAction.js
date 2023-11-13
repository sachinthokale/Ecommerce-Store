import { cartFailure, cartRequest, cartSuccess } from "../Slice/cartSlice";
import { productError, setMessage, setProducts } from "../Slice/productSlice";
import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  try {
    const products = await axios.get("/api/product/all");

    dispatch(setProducts(products.data.data));
    dispatch(setMessage(products.data.message));
  } catch (error) {
    dispatch(productError(error.response.data.message));
  }
};

export const getProductByCategory = (selectedCategory) => async (dispatch) => {
  try {
    console.log(selectedCategory);
    const products = await axios.get(
      `/api/product?category=${selectedCategory}`
    );
    dispatch(setProducts(products.data.data));
    dispatch(setMessage(products.data.message));
  } catch (error) {
    dispatch(productError(error.response.data.message));
  }
};

export const addToCart = (product) => async (dispatch) => {
  try {
    dispatch(cartRequest());
    const productWithQuantity = {
      ...product,
      quantity: 1,
      total: product.price,
    };

    const cartItem = {
      message: "product added to cart",
      item: productWithQuantity,
      error: null,
    };

    dispatch(cartSuccess(cartItem));
  } catch (error) {
    dispatch(cartFailure(error.message));
  }
};
