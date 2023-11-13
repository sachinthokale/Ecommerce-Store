import jwt from "jsonwebtoken";

export const generatToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "2d" });
};
