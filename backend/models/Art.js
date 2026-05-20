const mongoose = require("mongoose");

const ArtSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  category: {
    type: String,
    enum: ["Paintings", "Sculptures", "Crafts", "Traditional Art"],
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  artist: String,
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

module.exports = mongoose.model("Art", ArtSchema);
