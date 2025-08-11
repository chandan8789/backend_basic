import UserProfile from "../models/user-profile.js";
import { cache } from "../plugin/cache.js";

export const getProfile = async (req, res) => {
  try {
    const cachedData = cache.get(`USER:PROFILE:${req.user._id}`);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      console.log(`-------------CACHE HIT--------------`);
      return res.status(200).json(parsedData);
    }

    const userProfile = await UserProfile.findOne({
      user_id: req.user._id,
    }).populate("user_id");

    cache.set(
      `USER:PROFILE:${req.user._id}`,
      JSON.stringify({
        message: "Profile fetched successfully",
        user: req.user._id,
        profile: userProfile,
      })
    );

    console.log(`-----CACHE CREATED----------`);
    res.status(200).json({
      message: "Profile fetched successfully",
      user: req.user._id,
      profile: userProfile,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch profile", error: error.message });
  }
};

export const createUserProfile = async (req, res) => {
  try {
    const userProfile = await UserProfile.create({
      user_id: req.user._id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    });

    return res
      .status(201)
      .json({ userProfile, message: "User profile created...." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create user profile", error: error });
  }
};
