const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  artist: String,
  category: {
    type: String,
    enum: ["Traditional", "Dance", "Festive", "Devotional"],
    required: true,
  },
  audioUrl: {
    type: String,
    required: true,
  },
  thumbnailUrl: String,
  festival: String,
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  approved: {
    type: Boolean,
    default: false,
  },
  downloads: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Music", MusicSchema);
