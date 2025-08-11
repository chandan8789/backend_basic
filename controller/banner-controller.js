import Banner from "../models/banner.js";

export const createBanner = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }
    const imagePath = req.file.path.replace(/\\/g, "/");

    const banner = await Banner.create({
      title,
      description,
      image: {
        url: imagePath,
      },
      user_id: req.user._id,
    });

    res.status(201).json({
      message: "Banner created successfully",
      data: banner,
    });
  } catch (error) {
    console.error("Error creating banner:", error);
    res.status(500).json({
      message: "Error creating banner",
      error: error.message,
    });
  }
};

export const getBannerData = async (req, res) => {
  try {
    const banners = await Banner.find();
    res.status(200).json(banners);
  } catch (error) {
    console.log("check the error banner", error);
  }
};
