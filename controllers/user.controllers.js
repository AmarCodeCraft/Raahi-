import express from "express";
import User from "../models/User.models.js";

const registerUser = async (req, res) => {
  const { firstname, email, password } = req.body;
  if (!firstname || !email || !password)
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  if (firstname.length < 3)
    return res
      .status(400)
      .json({
        success: false,
        message: "First name must be at least 3 characters long",
      });
  if (password.length < 6)
    return res
      .status(400)
      .json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
  const user = await User.findOne({ email });
  if (user)
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  const newUser = await new User({ firstname, email, password });
}

export { registerUser };
