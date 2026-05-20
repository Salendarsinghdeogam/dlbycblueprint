const express = require("express");
const Music = require("../models/Music");
const { auth } = require("../middleware/auth");

const router = express.Router();

// Get all approved music
router.get("/", async (req, res) => {
  try {
    const { category, festival } = req.query;
    let query = { approved: true };

    if (category) query.category = category;
    if (festival) query.festival = festival;

    const music = await Music.find(query).sort({ createdAt: -1 });
    res.json(music);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single music
router.get("/:id", async (req, res) => {
  try {
    const music = await Music.findById(req.params.id).populate(
      "uploadedBy",
      "name",
    );
    if (!music) {
      return res.status(404).json({ message: "Music not found" });
    }
    res.json(music);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Download music (requires login)
router.post("/:id/download", auth, async (req, res) => {
  try {
    const music = await Music.findByIdAndUpdate(
      req.params.id,
      { $inc: { downloads: 1 } },
      { new: true },
    );
    res.json({ message: "Download recorded", music });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create music (admin only) - will be implemented in admin route
router.post("/", auth, async (req, res) => {
  try {
    if (req.userRole !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }

    const {
      title,
      description,
      artist,
      category,
      audioUrl,
      thumbnailUrl,
      festival,
    } = req.body;

    const music = new Music({
      title,
      description,
      artist,
      category,
      audioUrl,
      thumbnailUrl,
      festival,
      uploadedBy: req.userId,
      approved: true,
    });

    await music.save();
    res.status(201).json({ message: "Music created", music });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
