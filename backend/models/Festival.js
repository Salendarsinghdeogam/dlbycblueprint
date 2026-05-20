const mongoose = require("mongoose");

const FestivalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ["Mage Parab", "Baha Parab", "Chuti Para"],
  },
  month: {
    type: String,
    required: true,
  },
  description: String,
  significence: String,
  danceTypes: [String],
  imageUrl: String,
  activities: [String],
  foods: [String],
  traditions: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Festival", FestivalSchema);
