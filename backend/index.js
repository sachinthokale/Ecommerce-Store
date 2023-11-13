import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import { userRoutes } from "./routes/userRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { productRoutes } from "./routes/productRoute.js";
import path from "path";

const app = express();

dotenv.config({ path: "./config/.env" });
connectDB();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);

// --------Deployment---------

const __dirname1 = path.resolve();

console.log("if running");
// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname1, "dist")));

// Handle other routes by serving the 'index.html' file
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname1, "dist", "index.html"));
});

// --------Deployment---------

app.listen(process.env.PORT, () => {
  console.log(`APP RUNNING ON PORT ${process.env.PORT}`);
});
