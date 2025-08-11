import User from "../models/user.js";

export const register = async (data) => {
  try {
    const isExistingUse = await User.findOne({ email: data.email });

    if (isExistingUse) {
      return {
        status: 409,
        message: "Email already exists",
        isExistingUse: true,
      };
    }
    const newUser = await User.create({
      name: data.name,
      address: data.address,
      pincode: data.pincode,
      email: data.email,
      password: data.password,
    });
    return newUser;
  } catch (error) {
    throw new Error("Registration failed: " + error.message);
  }
};
