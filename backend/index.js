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

if (process.env.NODE_ENV === "production") {
  console.log("if running");
  app.use(express.static(path.join(__dirname1, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  console.log("not running");
}

// --------Deployment---------

app.listen(5000, () => {
  console.log(`APP RUNNING ON PORT ${process.env.PORT}`);
});
