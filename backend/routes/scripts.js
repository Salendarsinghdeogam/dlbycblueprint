const express = require("express");
const Script = require("../models/Script");
const { auth } = require("../middleware/auth");

const router = express.Router();

// Get all approved scripts
router.get("/", async (req, res) => {
  try {
    const { language, category } = req.query;
    let query = { approved: true };

    if (language) query.language = language;
    if (category) query.category = category;

    const scripts = await Script.find(query).sort({ createdAt: -1 });
    res.json(scripts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single script
router.get("/:id", async (req, res) => {
  try {
    const script = await Script.findById(req.params.id).populate(
      "uploadedBy",
      "name",
    );
    if (!script) {
      return res.status(404).json({ message: "Script not found" });
    }
    res.json(script);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Download script (requires login)
router.post("/:id/download", auth, async (req, res) => {
  try {
    const script = await Script.findByIdAndUpdate(
      req.params.id,
      { $inc: { downloads: 1 } },
      { new: true },
    );
    res.json({ message: "Download recorded", script });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create script (admin only)
router.post("/", auth, async (req, res) => {
  try {
    if (req.userRole !== "admin") {
      return res.status(403).json({ message: "Admin access required" });
    }

    const { title, language, description, content, documentUrl, category } =
      req.body;

    const script = new Script({
      title,
      language,
      description,
      content,
      documentUrl,
      category,
      uploadedBy: req.userId,
      approved: true,
    });

    await script.save();
    res.status(201).json({ message: "Script created", script });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
