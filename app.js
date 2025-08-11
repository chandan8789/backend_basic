import express from "express";
import dotenv from "dotenv";
import path from "path";
import userRouter from "./routes/user-routes.js";
import authRouter from "./routes/auth-routes.js";
import { protect } from "./middleware/auth-middleware.js";
import bannerRouter from "./routes/banner-routes.js";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use("/uploads", protect, express.static(path.join(__dirname, "uploads")));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", protect, userRouter);
app.use("/api/banners", protect, bannerRouter);

export default app;
