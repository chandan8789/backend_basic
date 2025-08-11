import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  image: {
    url: { type: String, required: true },
    size: { type: Number },
    format: { type: String },
  },
  user_id: { type: mongoose.Types.ObjectId, ref: "User" },
});

const Banner = mongoose.model("banners", bannerSchema);
export default Banner;
