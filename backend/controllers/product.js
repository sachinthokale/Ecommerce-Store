import axios from "axios";

export const getAllProduct = async (req, res) => {
  try {
    const { data } = await axios.get("https://dummyjson.com/products");
    if (!data || !data.products) {
      res.status(400).json({
        success: false,
        message: "Failed to load products",
      });
    }
    // console.log(data.products);

    res
      .status(200)
      .json({ data: data.products, message: "Products loaded Successfully" });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProductByCategory = async (req, res) => {
  try {
    const { category } = req.query;

    const { data } = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );

    if (!data || !data.products) {
      return res.status(400).json({
        success: false,
        message: "Faild to load products",
      });
    }
    // console.log(data.products);
    res.status(200).json({
      data: data.products,
      message: `Product loaded successfully for category ${category}`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
