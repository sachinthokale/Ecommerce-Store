import { getUser } from "../Middleware/getUser.js";
import { generatToken } from "../config/genrateToken.js";
import { User } from "../models/userSchema.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the Feilds",
      });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "User already Exist",
      });
    }
    const user = await User.create({ name, email, password });

    if (user) {
      res.status(200).json({
        success: true,
        message: "User Created Successfully",
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generatToken(user._id),
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Faild to create user",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email);
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the Feilds",
      });
    }

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.status(200).json({
        success: true,
        message: "Logged in successfully",
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generatToken(user._id),
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Faild to login",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const sendUserInfo = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Login First to access this resource",
      });
    }
    const userId = getUser(token);
    // console.log(`user id is : ${userId}`);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Faild to fetch user detail",
      });
    }
    res.status(200).json({
      success: true,
      user: user,
      message: "user get Successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
