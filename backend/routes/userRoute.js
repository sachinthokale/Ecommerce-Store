import express from "express";
import { loginUser, registerUser, sendUserInfo } from "../controllers/user.js";

export const userRoutes = express.Router();
userRoutes.route("/register").post(registerUser);
userRoutes.route("/login").post(loginUser);
userRoutes.route("/getuser").post(sendUserInfo);
