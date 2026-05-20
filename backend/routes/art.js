const express = require("express");
const Art = require("../models/Art");
const { auth } = require("../middleware/auth");

const router = express.Router();

// Get all approved art
router.get("/", async (req, res) => {
  try {
    const { category, festival } = req.query;
    let query = { approved: true };

    if (category) query.category = category;
    if (festival) query.festival = festival;

    const art = await Art.find(query).sort({ createdAt: -1 });
    res.json(art);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single art
router.get("/:id", async (req, res) => {
  try {
    const art = await Art.findById(req.params.id).populate(
      "uploadedBy",
      "name",
    );
    if (!art) {
      return res.status(404).json({ message: "Art not found" });
    }
    res.json(art);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Download art (requires login)
router.post("/:id/download", auth, async (req, res) => {
  try {
    const art = await Art.findByIdAndUpdate(
      req.params.id,
      { $inc: { downloads: 1 } },
      { new: true },
    );
    res.json({ message: "Download recorded", art });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create art (admin only)
router.post("/", auth, async (req, res) => {
  try {
    if (req.userRole !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }

    const { title, description, category, imageUrl, artist, festival } =
      req.body;

    const art = new Art({
      title,
      description,
      category,
      imageUrl,
      artist,
      festival,
      uploadedBy: req.userId,
      approved: true,
    });

    await art.save();
    res.status(201).json({ message: "Art created", art });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
