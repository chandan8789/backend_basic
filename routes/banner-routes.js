import express from "express";
import {
  createBanner,
  getBannerData,
} from "../controller/banner-controller.js";
import upload from "../plugin/multer.js";
import { protect } from "../middleware/auth-middleware.js";

const bannerRouter = express.Router();

bannerRouter.post("/", upload.single("image"), createBanner);
bannerRouter.get("/", getBannerData);

export default bannerRouter;
