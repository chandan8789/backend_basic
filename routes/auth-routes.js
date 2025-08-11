import express from "express";
import {
  forgotPassword,
  generateOtp,
  login,
  signup,
} from "../controller/auth-controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/generate-otp", generateOtp);
authRouter.post("/forgot-password", forgotPassword);

export default authRouter;
