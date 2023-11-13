import express from "express";
import { getAllProduct, getProductByCategory } from "../controllers/product.js";

export const productRoutes = express.Router();
productRoutes.route("/").get(getProductByCategory);
productRoutes.route("/all").get(getAllProduct);
