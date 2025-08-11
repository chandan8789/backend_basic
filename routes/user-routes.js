import express from "express";
import {
  createUserProfile,
  getProfile,
} from "../controller/user-profile-controller.js";

const userRouter = express.Router();

userRouter.get("/profile", getProfile);
userRouter.post("/profile", createUserProfile);

export default userRouter;
