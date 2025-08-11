import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: Number, required: true },
  user_id: { type: mongoose.Types.ObjectId, ref: "User" },
  created_at: { type: Date, default: Date.now },
});

const UserProfile = mongoose.model("Profile", profileSchema);
export default UserProfile;
