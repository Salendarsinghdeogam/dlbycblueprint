const mongoose = require("mongoose");

const ScriptSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    enum: ["Ho", "Santali", "Mundari", "Other"],
    required: true,
  },
  description: String,
  content: {
    type: String,
    required: true,
  },
  documentUrl: String,
  category: {
    type: String,
    enum: ["Literature", "Grammar", "Dictionary", "Traditional Text"],
    required: true,
  },
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

module.exports = mongoose.model("Script", ScriptSchema);
