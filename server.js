import { connectDB } from "./config/dbconnection.js";

import app from "./app.js";
const PORT = process.env.PORT || 6000;

// Connect to MongoDB
connectDB();
app.get("/", (req, res) => {
  res.send("🚀 Server and DB are up and running!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
