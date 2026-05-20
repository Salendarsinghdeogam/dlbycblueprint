const express = require("express");
const { auth, adminAuth } = require("../middleware/auth");
const Music = require("../models/Music");
const Art = require("../models/Art");
const Script = require("../models/Script");
const Festival = require("../models/Festival");

const router = express.Router();

// Approve music
router.put("/music/:id/approve", auth, adminAuth, async (req, res) => {
  try {
    const music = await Music.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true },
    );
    res.json({ message: "Music approved", music });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Reject music
router.delete("/music/:id", auth, adminAuth, async (req, res) => {
  try {
    await Music.findByIdAndDelete(req.params.id);
    res.json({ message: "Music deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Approve art
router.put("/art/:id/approve", auth, adminAuth, async (req, res) => {
  try {
    const art = await Art.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true },
    );
    res.json({ message: "Art approved", art });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Reject art
router.delete("/art/:id", auth, adminAuth, async (req, res) => {
  try {
    await Art.findByIdAndDelete(req.params.id);
    res.json({ message: "Art deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Approve script
router.put("/script/:id/approve", auth, adminAuth, async (req, res) => {
  try {
    const script = await Script.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true },
    );
    res.json({ message: "Script approved", script });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Reject script
router.delete("/script/:id", auth, adminAuth, async (req, res) => {
  try {
    await Script.findByIdAndDelete(req.params.id);
    res.json({ message: "Script deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create festival
router.post("/festival", auth, adminAuth, async (req, res) => {
  try {
    const {
      name,
      month,
      description,
      significence,
      danceTypes,
      imageUrl,
      activities,
      foods,
      traditions,
    } = req.body;

    const festival = new Festival({
      name,
      month,
      description,
      significence,
      danceTypes,
      imageUrl,
      activities,
      foods,
      traditions,
    });

    await festival.save();
    res.status(201).json({ message: "Festival created", festival });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get pending approvals
router.get("/pending/items", auth, adminAuth, async (req, res) => {
  try {
    const pendingMusic = await Music.find({ approved: false });
    const pendingArt = await Art.find({ approved: false });
    const pendingScripts = await Script.find({ approved: false });

    res.json({
      music: pendingMusic,
      art: pendingArt,
      scripts: pendingScripts,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
