const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Database Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/music", require("./routes/music"));
app.use("/api/art", require("./routes/art"));
app.use("/api/scripts", require("./routes/scripts"));
app.use("/api/festivals", require("./routes/festivals"));
app.use("/api/admin", require("./routes/admin"));

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ message: "Server is running", status: "healthy" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
