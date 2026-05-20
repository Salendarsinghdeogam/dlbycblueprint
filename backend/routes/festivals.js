const express = require("express");
const Festival = require("../models/Festival");

const router = express.Router();

// Get all festivals
router.get("/", async (req, res) => {
  try {
    const festivals = await Festival.find().sort({ createdAt: -1 });
    res.json(festivals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single festival
router.get("/:id", async (req, res) => {
  try {
    const festival = await Festival.findById(req.params.id);
    if (!festival) {
      return res.status(404).json({ message: "Festival not found" });
    }
    res.json(festival);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get festival by name
router.get("/name/:name", async (req, res) => {
  try {
    const festival = await Festival.findOne({ name: req.params.name });
    if (!festival) {
      return res.status(404).json({ message: "Festival not found" });
    }
    res.json(festival);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
